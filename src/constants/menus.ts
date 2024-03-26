import LINKS from "./links";

const MENUS = {
  header: [
    {
      text: "Home",
      to: LINKS.home,
    },
    {
      text: "About us",
      to: LINKS.about,
    },
    {
      text: "Flowers",
      to: LINKS.flowers,
    },
    {
      text: "Help & Support",
      to: LINKS.faq,
    },
  ],
  resources: [
    {
      text: "Docs",
      to: "",
    },
    {
      text: "Release notes",
      to: "",
    },
    {
      text: "Security",
      to: "",
    },
  ],
  community: [
    {
      icon: "twitter",
      text: "Twitter",
      to: "",
    },
    {
      icon: "linkedin",
      text: "LinkedIn",
      to: "",
    },
    {
      icon: "github",
      text: "GitHub",
      to: "",
    },
    {
      icon: "discourse",
      text: "Discourse",
      to: "",
    },
  ],
  legal: [
    { text: "Privacy policy", to: "" },
    { text: "Terms of service", to: "" },
  ],
};

export default MENUS;
