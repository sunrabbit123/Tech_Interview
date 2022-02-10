const BE = ["DB", "Spring", "Stack", "MISC"];
const Common = ["CS", "Language", "Network"];
module.exports = [
  "/",
  {
    title: "Common",
    description: "일반적인.",
    children: Common.map((v) => [`/common/${v}`, v]),
    sidebarDepth: 2,
  },
  {
    title: "BE",
    description: "BackEnd",
    children: BE.map((v) => [`/BE/${v}`, v]),
    sidebarDepth: 2,
  },
];
