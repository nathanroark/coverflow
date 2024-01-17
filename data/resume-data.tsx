import {
  GitHubIcon,
  LinkedInIcon,
  DiscordIcon,
  XIcon,
} from "@/components/icons"

export const RESUME_DATA = {
  name: "Nathan Roark",
  initials: "NR",
  location: "Huntsville, AL",
  locationLink: "https://www.google.com/maps/place/Huntsville",
  about:
    "Full Stack Engineer passionate about building and learning new things.",
  summary:
    "As a Full Stack Engineer, I have successfully built many projects from start to finish for engineers internally and for customers. Currently, I work mostly with TypeScript, React, Python, and Rust. I have over 3 years of experience in working professionally on various teams.",
  avatarUrl: "it-me.png",
  personalWebsiteUrl: "https://nathanroark.dev",
  contact: {
    email: "nathanroark@protonmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/NathanRoark",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nathan-roark/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/nathanroark",
        icon: XIcon,
      },
      {
        name: "Discord",
        url: "https://discordapp.com/users/nroark",
        icon: DiscordIcon,
      },
    ],
  },
  education: [
    {
      school: "The University of Alabama in Huntsville",
      degree: "Master's Degree in Computer Science",
      year: "2024",
      extra: "4.0 GPA",
    },
    {
      school: "The University of Alabama in Huntsville",
      degree: "Bachelor's Degree in Computer Engineering",
      year: "2020",
      extra: "Dean's List",
    },
  ],
  work: [
    {
      company: "Trideum",
      link: "https://www.trideum.com/",
      badges: ["Remote"],
      title: "Full Stack Engineer",
      start: "2023",
      end: "2024",
      description:
        "Created and owned the frontend of many of our applications across multiple teams. Technologies: React, TypeScript, Tailwind, D3",
    },
    {
      company: "Trideum",
      link: "https://www.trideum.com/",
      badges: [],
      title: "Software Engineer",
      start: "2021",
      end: "2023",
      description:
        "Built and maintained several applications for internal and external customers. Technologies: C++, Qt",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Rust",
    "C++",
    "Qt",
  ],
  projects: [
    {
      title: "Blog",
      description:
        "Static Blog for showing and talking about media that I like.",
      techStack: ["Astro", "TypeScript", "Tailwind", "Markdown"],
      link: {
        label: "nathanroark.com",
        href: "https://nathanroark.com",
      },
    },
    {
      title: "CV",
      description:
        "This website! My developer website to show my software engineering self.",
      techStack: ["NextJS", "TypeScript", "Tailwind"],
      link: {
        label: "nathanroark.dev",
        href: "https://nathanroark.dev",
      },
    },
    // {
    //   title: "Consultly",
    //   techStack: [
    //     "Side Project",
    //     "TypeScript",
    //     "Next.js",
    //     "Vite",
    //     "GraphQL",
    //     "WebRTC",
    //   ],
    //   description: "A platform to build and grow your online business",
    //   logo: ConsultlyLogo,
    //   link: {
    //     label: "consultly.com",
    //     href: "https://consultly.com/",
    //   },
    // },
    // {
    //   title: "Monito",
    //   techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
    //   description:
    //     "Browser extension that records everything happening in a web application",
    //   logo: MonitoLogo,
    //   link: {
    //     label: "monito.dev",
    //     href: "https://monito.dev/",
    //   },
    // },
    // {
    //   title: "Jarocki.me",
    //   techStack: ["Side Project", "Next.js", "MDX"],
    //   description:
    //     "My personal website and blog. Built with Next.js and Notion API",
    //   logo: JarockiMeLogo,
    //   link: {
    //     label: "github.com",
    //     href: "https://jarocki.me/",
    //   },
    // },
    // {
    //   title: "Minimal",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Minimalist calendars, habit trackers and planners generator",
    //   logo: Minimal,
    //   link: {
    //     label: "useminimal.com",
    //     href: "https://useminimal.com/",
    //   },
    // },
    // {
    //   title: "Barepapers",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Generates beautiful wallpapers using random shapes and gradients",
    //   logo: BarepapersLogo,
    //   link: {
    //     label: "barepapers.com",
    //     href: "https://barepapers.com/",
    //   },
    // },
    // {
    //   title: "Year progress",
    //   techStack: ["Side Project", "TypeScript", "Next.js"],
    //   description: "Tracks current year progress and displays a countdown",
    //   logo: YearProgressLogo,
    //   link: {
    //     label: "getyearprogress.com",
    //     href: "https://getyearprogress.com/",
    //   },
    // },
    // {
    //   title: "Parabol",
    //   techStack: [
    //     "Full Stack Developer",
    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "The Agile meeting co-pilot that delivers better meetings with less effort",
    //   logo: ParabolLogo,
    //   link: {
    //     label: "github.com",
    //     href: "https://parabol.co/",
    //   },
    // },
    // {
    //   title: "Evercast",
    //   techStack: [
    //     "Lead Frontend Developer",
    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "Creative collaboration platform that combines video conferencing and HD media streaming",
    //   logo: EvercastLogo,
    //   link: {
    //     label: "evercast.us",
    //     href: "https://www.evercast.us/",
    //   },
    // },
    // {
    //   title: "Mobile Vikings",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for leading virtual mobile operator in Poland",
    //   logo: MobileVikingsLogo,
    //   link: {
    //     label: "mobilevikings.pl",
    //     href: "https://mobilevikings.pl/",
    //   },
    // },
    // {
    //   title: "Howdy",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Howdy is a place for you to join communities you care about",
    //   logo: Howdy,
    //   link: {
    //     label: "play.google.com",
    //     href: "https://howdy.co/",
    //   },
    // },
    // {
    //   title: "Tastycloud",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for managing and displaying restaurant menus in kiosk mode",
    //   logo: TastyCloudLogo,
    //   link: {
    //     label: "tastycloud.fr",
    //     href: "https://www.tastycloud.fr/",
    //   },
    // },
    // {
    //   title: "Ambit",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with sharing your contact details",
    //   logo: AmbitLogo,
    // },
    // {
    //   title: "Bim",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with booking a table in a restaurants",
    //   logo: BimLogo,
    // },
    // {
    //   title: "Canal Digital GO",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Video streaming mobile application for Canal Digital subscribers",
    //   logo: CDGOLogo,
    // },
  ],
} as const
