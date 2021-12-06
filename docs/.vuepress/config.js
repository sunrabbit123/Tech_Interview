const sidebar = require("./path");
module.exports = {
  title: "Tech_Interview",
  description: "기술 인터뷰 모음",
  sidebar,
  themeConfig: {
    logo: "#",
    sidebar,
    nav: [
      {
        text: "About",
        link: "/",
      },
      {
        text: "Contribute",
        link: "#",
      },
      {
        text: "GitHub",
        link: "https://github.com/sunrabbit123/Tech_Interview",
      },
    ],
    smoothScroll: true,
    lastUpdated: "Last Updated",
  },
};
