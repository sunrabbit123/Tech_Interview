const BE = ["db", "spring", "stack", "misc"];
const Common = ["cs", "language", "network"];
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
    children: BE.map((v) => [`/be/${v}`, v]),
    sidebarDepth: 2,
  },
];
