import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "http://blog.lllllan.cn",

  author: {
    name: "lllllan",
    url: "http://lllllan.cn",
  },

  iconPrefix: "iconfont icon-",

  logo: "/logo.png",

  repo: "https://github.com/lllllan-fv/blog",

  docsDir: "docs",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  // 返回顶部按钮
  backToTop: true,
  // 全屏按钮
  fullscreen: false,

  footer: '<a href="http://beian.miit.gov.cn/" target="_blank">粤ICP备2021095794号 </a><br><a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33011002015830"style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><imgsrc="personal_data/img/beian.png" style="float:left;" />浙公网安备 33011002015830号</a>',

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "",
    intro: "",
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

  themeColor: {
    1: "#2196f3",
    2: "#3eaf7c",
    3: "#46c3db",
    4: "#f3558e",
    // 4: "#85203b"
  }
});
