import { cp, mkdir, mkdtemp, readFile, rename, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const projectRoot = process.cwd();
const outputArgument = process.argv[2];

if (!outputArgument) {
  throw new Error("Pass a new output directory: npm run export:static -- /path/to/output");
}

const outputDirectory = path.resolve(outputArgument);
const siteOutputDirectory = path.join(projectRoot, "out");
const clientDirectory = path.join(projectRoot, "dist", "client");
const routesDirectory = clientDirectory;
const isSiteOutput = outputDirectory === siteOutputDirectory;

if (
  outputDirectory === path.parse(outputDirectory).root ||
  outputDirectory === projectRoot ||
  (outputDirectory.startsWith(`${projectRoot}${path.sep}`) &&
    outputDirectory !== siteOutputDirectory)
) {
  throw new Error("The static export must use a new directory outside the project or out/.");
}

if (isSiteOutput) {
  // Vinext writes the latest prerendered pages into dist/client on every build.
  const rawIndex = await readFile(path.join(clientDirectory, "index.html"), "utf8");
  if (!rawIndex.includes("/_next/static/chunks/")) {
    throw new Error("dist/client is not a raw Vinext export; run the build first.");
  }
} else {
  try {
    await stat(outputDirectory);
    throw new Error(`Output directory already exists: ${outputDirectory}`);
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
}

const stagingDirectory = isSiteOutput
  ? await mkdtemp(path.join(projectRoot, ".portfolio-static-"))
  : outputDirectory;

await mkdir(stagingDirectory, { recursive: true });

await cp(clientDirectory, stagingDirectory, {
  recursive: true,
  filter(source) {
    const relative = path.relative(clientDirectory, source);
    if (!relative) return true;

    const firstSegment = relative.split(path.sep)[0];
    if (firstSegment !== "_next") {
      return ![
        ".DS_Store",
        ".assetsignore",
        ".vite",
        "_headers",
        "vinext-client-entry-manifest.json",
      ].includes(firstSegment);
    }

    return (
      relative === "_next" ||
      relative === path.join("_next", "static") ||
      relative.startsWith(path.join("_next", "static", "css")) ||
      relative.startsWith(path.join("_next", "static", "_vinext_fonts"))
    );
  },
});

const routes = new Map([
  ["index.html", "index.html"],
  ["404.html", "404.html"],
  ["blog.html", path.join("blog", "index.html")],
  ["contact.html", path.join("contact", "index.html")],
  ["podcasts.html", path.join("podcasts", "index.html")],
]);

function removeReactRuntime(source) {
  const preservedScripts = [];
  let html = source.replace(
    /<script\b(?=[^>]*\bdata-static-runtime\b)[^>]*>[\s\S]*?<\/script>/gi,
    (script) => {
      const index = preservedScripts.push(script) - 1;
      return `STATIC_RUNTIME_SCRIPT_${index}`;
    },
  );

  html = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b(?=[^>]*\brel=["']modulepreload["'])[^>]*\/?\s*>/gi, "")
    .replace(/\sdata-rsc-css-href=["'][^"']*["']/gi, "");

  html = html.replace(/STATIC_RUNTIME_SCRIPT_(\d+)/g, (_, index) => {
    return preservedScripts[Number(index)];
  });

  if (/<script\b(?![^>]*\bdata-static-runtime\b)/i.test(html)) {
    throw new Error("Unexpected script remained in static HTML.");
  }
  if (/modulepreload|\/_next\/[^"']+\.js/i.test(html)) {
    throw new Error("A framework preload or JavaScript reference remained in static HTML.");
  }

  return html;
}

for (const [sourceName, outputName] of routes) {
  const sourcePath = path.join(routesDirectory, sourceName);
  const outputPath = path.join(stagingDirectory, outputName);
  const html = removeReactRuntime(await readFile(sourcePath, "utf8"));

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html);
}

if (isSiteOutput) {
  await rm(siteOutputDirectory, { recursive: true, force: true });
  await rename(stagingDirectory, siteOutputDirectory);
}

console.log(`Static site exported to ${outputDirectory}`);
