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

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
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
