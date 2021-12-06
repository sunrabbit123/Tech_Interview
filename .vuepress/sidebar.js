const BE = ["CS", "DB", "Language", "Server", "Stack", "MISC"];
module.exports = [
  "/",
  {
    title: "BE",
    description: "BackEnd",
    children: BE.map((v) => [`/BE/${v}`, v]),
  },
];
