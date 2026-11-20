// Projects shown on the website. Set `listed: false` to keep a project off the
// public page. `url` is the app's own website (<project>/<domain> in the
// LiliumApps root); cards without one aren't linked. `store` is the app's store
// page: projects with one are listed under Apps, the rest under Upcoming.
// `banner` is the app's store banner in static/apps/ (1024 × 500, the Play feature graphic),
// shown on its card under Apps. Developer tools set `install` (their install
// guide) and `source` (their repository) instead of `store`; they are listed
// under Developer tools, with `banner` showing a terminal recording.
const projects = [
  {
    name: "Lumen",
    folder: "LumenFileManager",
    url: "https://lumen.liliumapps.com",
    banner: "/apps/lumen.webp",
    store: "https://play.google.com/store/apps/details?id=com.liliumapps.lumenfiles",
    platforms: ["Android"],
    status: "On Google Play",
    summary:
      "A privacy-first file manager with a polished interface, fast search, and storage insights.",
    listed: true,
  },
  {
    name: "Tessel Pass",
    folder: "tesselpass",
    url: "https://tesselpass.liliumapps.com",
    platforms: ["Android"],
    status: "Coming soon",
    summary:
      "An offline, zero-knowledge vault for passwords, 2FA codes, cards, and secure notes. No internet permission at all.",
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
    banner: "/apps/vlc.webp",
    store: "https://play.google.com/store/apps/details?id=tuple.me.vlcremote",
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
    url: "https://commando.liliumapps.com",
    banner: "/apps/commando.gif",
    install: "https://commando.liliumapps.com/getting-started/installation/",
    source: "https://github.com/liliumapps/commando",
    platforms: ["Windows", "Mac", "Linux"],
    status: "Free & open source",
    summary:
      "A context-aware command launcher for your terminal: cheat sheets, project commands, bookmarks, and history in one search, with argument memory and shareable cheat repos.",
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
