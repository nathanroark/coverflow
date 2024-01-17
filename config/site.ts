export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "React Coverflow",
  url: "https://coverflow.nathanroark.dev",
  ogImage: "https://coverflow.nathanroark.dev/og.png", // png is the original format, jpg is there because discord keeps linking to jpg
  description: "A beautiful coverflow using React + SASS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/nathanroark",
    github: "https://github.com/nathanroark",
  },
}
