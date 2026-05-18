import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-8 py-6 bg-black/20 backdrop-blur-md">
      <div className="text-white text-xl font-semibold tracking-wide">
        
      </div>

      <div className="flex gap-8 text-white text-sm md:text-base">
        <Link
          href="/"
          className="transition-opacity hover:opacity-60"
        >
          Home
        </Link>

        <Link
          href="/podcasts"
          className="transition-opacity hover:opacity-60"
        >
          My Podcasts!
        </Link>
        <Link
  href="/blog"
  className="transition-opacity hover:opacity-60"
>
  Blog
</Link>

        <Link
          href="/contact"
          className="transition-opacity hover:opacity-60"
        >
          Let’s Chat!
        </Link>
        
      </div>
    </nav>
  );
}