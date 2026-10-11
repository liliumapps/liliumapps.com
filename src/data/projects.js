// Projects shown on the website. Set `listed: false` to keep a project off the
// public page. `url` is the app's own website (websites/<domain> in the
// LiliumApps root); cards without one aren't linked.
const projects = [
  {
    name: "Lumen",
    folder: "LumenFileManager",
    url: "https://lumen.liliumapps.com",
    platforms: ["Android"],
    status: "In development",
    summary:
      "A privacy-first file manager with a polished interface, fast search, and storage insights.",
    listed: true,
  },
  {
    name: "QuietPass",
    folder: "quietpass",
    platforms: ["Android"],
    status: "In development",
    summary:
      "An offline-first, zero-knowledge vault for passwords, 2FA codes, cards, and secure notes. No internet permission at all.",
    listed: true,
  },
  {
    name: "FatFire",
    folder: "fatfire",
    platforms: ["Android"],
    status: "In development",
    summary:
      "A long-term wealth planner that answers the question that matters: when can you stop working?",
    listed: true,
  },
  {
    name: "VLC Stream and Remote",
    folder: "VLCRemote",
    url: "https://vlc.liliumapps.com",
    platforms: ["Android"],
    status: "On Google Play",
    summary: "Control VLC on your computer from your phone over its HTTP interface.",
    listed: true,
  },
  {
    name: "Caret",
    folder: "caret",
    platforms: ["Windows", "Mac", "Linux"],
    status: "In development",
    summary:
      "Conversational code review over a whole folder, with an AI reviewer that replies to your threads.",
    listed: true,
  },
  {
    name: "Commando",
    folder: "commando",
    platforms: ["Windows", "Mac", "Linux"],
    status: "Homebrew",
    summary:
      "A context-aware command launcher that unifies cheat sheets, project commands, bookmarks, and history.",
    listed: true,
  },
  {
    name: "Dexter",
    folder: "dexter",
    platforms: ["Windows", "Mac", "Linux"],
    status: "In development",
    summary: "A developer productivity app and extension platform for everyday engineering work.",
    listed: true,
  },
  {
    name: "Helm",
    folder: "helm",
    platforms: ["Web"],
    status: "In development",
    summary:
      "A calm, chat-based home for AI coding agents that you can reach from your phone.",
    listed: true,
  },
]

module.exports = projects
