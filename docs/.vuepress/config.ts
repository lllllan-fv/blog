import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "lllllan",
  description: "盛意以江河，江河不及你",

  base: "/",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
    [
      "link",
      {
        // 图标仓库
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_3381669_7oio28r0y3f.css",
      },
    ],    
  ], 

  theme,
});
