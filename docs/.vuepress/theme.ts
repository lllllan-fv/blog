import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://blog.lllllan.cn",

  author: {
    name: "lllllan",
    url: "https://lllllan.cn",
  },

  iconPrefix: "iconfont icon-",

  logo: "/logo.png",

  repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "docs",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "默认页脚",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "一个前端开发者",
    intro: "/intro.html",
    medias: {
      // Dingding: "https://example.com",
      // Email: "https://example.com",,
      Gitee: "https://gitee.com/lllllan-fv",
      GitHub: "https://github.com/lllllan-fv",
      // Gitlab: "https://example.com",
      // QQ: "https://example.com",",
      // Wechat: "https://example.com"
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
