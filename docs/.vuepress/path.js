const BE = ["CS", "DB", "Language", "Server", "Stack", "MISC"];
module.exports = [
  { title: "Home", path: "/" },
  { title: "BE", children: BE.map((f) => `BE/${f}/`), sidebarDepth: 2 },
];
