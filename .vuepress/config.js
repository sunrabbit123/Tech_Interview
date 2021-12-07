const sidebar = require("./sidebar");
module.exports = {
  title: "Tech_Interview",
  description: "기술 인터뷰 모음",
  dest: "build",
  base: "/Tech/",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    sidebar,
    logo: "/logo.png",
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
