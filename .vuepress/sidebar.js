const BE = ["DB", "Spring", "Stack", "MISC"];
const Common = ["CS", "Language", "Network"];
module.exports = [
  "/",
  {
    title: "MISC",
    description: "잡다한",
    children: Common.map((v) => [`/${v}`, v]),
    sidebarDepth: 2,
  },
  {
    title: "BE",
    description: "BackEnd",
    children: BE.map((v) => [`/BE/${v}`, v]),
    sidebarDepth: 2,
  },
];
