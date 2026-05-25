export const siteContent = {
  name: "Ambrissh S. Raghav",
  quote: "So to speak, we did it!",
  intro: "Hey there! I’m Ambrissh!",
  tagline:
    "Physics Student • AI Builder • Podcast Host • Curious About the Future",
  bio: [
    "I'm Ambrissh S. Raghav — stepping into my fourth year of BS-MS Physics at IISER Berhampur. Technically a physicist, but mostly found building things with AI.",
    "AI is moving fast and honestly it's kind of insane to watch. My take? It's all about building well-architected solutions to real problems — not just vibing with the hype. I'm somewhere in the middle of figuring that out, one project at a time.",
    "I've bounced around a bit — cryptography, embedded systems, cybersecurity — but the through line has always been the same: I like building things that actually do something.",
    "I also host Metaverse Entangled, a podcast where I get to have conversations with founders, scientists, and researchers who are genuinely doing interesting things. It started as curiosity. Still is, honestly.",
    "If you want to build something together, talk ideas, or just say hi — hit the contact page. I don't bite.",
  ],
  projects: [
    {
      title: "Loopthru",
      description:
        "AI-powered Chrome extension that filters Discord noise and notifies you only when a message matches your intent.",
      github: "https://github.com/Ambrissh/loopthru.git",
    },
    {
      title: "Clowde",
      description:
        "Chrome extension that monitors Claude.ai context window usage and generates continuity handoffs for seamless chat transitions.",
      github: "https://github.com/Ambrissh/Clowde.git",
    },
    {
      title: "Cognitive Drift",
      description:
        "Real-time observability for LLM uncertainty and reasoning instability.",
      github: "https://github.com/Ambrissh/cognitive-drift.git",
    },
  ],
  podcast: {
    name: "Metaverse Entangled",
    subheading: "Changing the world for better and for always",
    logo: "/assets/metaverselogo.png",
    bio: [
      "Metaverse Entangled began as an extension of my curiosity and love for meaningful conversations with people building ambitious things.",
      "I often made conscious efforts to connect with founders, scientists, and researchers working on frontier problems simply to understand how they think, build, and navigate challenges.",
      "Over time, we realized these conversations could benefit a much larger audience, which led to the idea of recording and sharing them.",
      "Since then, our goal has remained the same — to ask unconventional, relevant, and thought-provoking questions that go beyond surface-level discussions and bring out authentic insights from the people shaping the future.",
    ],
    featured: [
      {
        title:
          "AIR 1? | Leaving IIT? | Life in Research and More! | Ft Dr Chitraang Murdia!",
        youtube: "https://youtu.be/-D1unPd46Ks?si=UEH32PZxqXA66awB",
        videoId: "-D1unPd46Ks",
      },
      {
        title:
          "9 Minutes with an IIT Director! | Ft Prof B.S Murty, Director IIT Hyderabad",
        youtube: "https://youtu.be/x5XyQ-asd6Q?si=EkZDTcqkdN5kbb-q",
        videoId: "x5XyQ-asd6Q",
      },
      {
        title:
          "Black Holes Explained by a Theoretical Physicist! | Ft Dr Suvrat Raju | ICTS-TIFR",
        youtube: "https://youtu.be/fFIbhT_AptM?si=EiEkhnNYZ537YS4p",
        videoId: "fFIbhT_AptM",
      },
    ],
    other: [
      {
        title: "Metaverse Entangled episode",
        youtube: "https://youtu.be/9Rx6xjjVgDQ?si=dFcOGDaq6rbGhsyU",
        videoId: "9Rx6xjjVgDQ",
      },
      {
        title: "Metaverse Entangled episode",
        youtube: "https://youtu.be/GKVjxPe0IM8?si=HIFOMdpim_gp0PNv",
        videoId: "GKVjxPe0IM8",
      },
    ],
  },
  skills: [
    {
      title: "Programming",
      items: ["Python (NumPy, Pandas, Matplotlib)", "C++", "Bash", "LaTeX", "MATLAB"],
    },
    {
      title: "ML / RL",
      items: ["PyTorch", "JAX", "Scikit-Learn", "CleanRL", "Gymnasium", "Stable Baselines3"],
    },
    {
      title: "Embedded",
      items: ["STM32"],
    },
    {
      title: "Tools",
      items: ["Git", "Linux OS"],
    },
    {
      title: "Competitive Programming",
      items: ["Codeforces Div. 2 (daily)"],
    },
  ],
} as const;
