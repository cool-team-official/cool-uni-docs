import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cool Uni",
  description: "基于 uniapp 的项目脚手架",
  lastUpdated: true,

  themeConfig: {
    logo: "/logo.png",
    search: {
      provider: "local",
    },
    footer: {
      message: "COOL为开发者而生",
      copyright:
        '<a href="https://beian.miit.gov.cn">Copyright © COOL | 闽ICP备2024042701号</a>',
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    editLink: {
      text: "在GitHub上编辑",
      pattern:
        "https://github.com/cool-team-official/cool-uni-docs/blob/main/:path",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "介绍", link: "/src/introduce/index.md", noIcon: false },
      { text: "教程", link: "/src/guide/quick.md" },
      { text: "🔥插件市场", link: "https://cool-js.com/plugin/list.html" },
      { text: "交流合作", link: "/src/about/index.md" },
      {
        text: "v7.3.0",
        items: [
          {
            text: "更新日志",
            link: "/src/todo/update.md",
          },
          {
            text: "版本计划",
            link: "/src/todo/plan.md",
          },
        ],
      },
      {
        text: "更多",
        items: [
          {
            text: "Cool Admin(Vue版)",
            link: "https://vue.cool-admin.com",
          },
          {
            text: "Cool Admin(Nodejs版)",
            link: "https://cool-js.com",
          },
          {
            text: "Cool Admin(Java版)",
            link: "https://java.cool-admin.com",
          },
        ],
      },
    ],
    sidebar: [
      {
        text: "介绍",
        items: [
          {
            text: "简介",
            link: "/src/introduce/index.md",
          },
          {
            text: "演示",
            link: "/src/introduce/show.md",
          },
          {
            text: "源码",
            link: "/src/introduce/src.md",
          },
        ],
      },
      {
        text: "教程",
        items: [
          { text: "快速开始", link: "/src/guide/quick.md" },
          {
            text: "核心",
            items: [],
          },
        ],
      },
      {
        text: "计划&更新",
        items: [
          {
            text: "更新",
            link: "/src/todo/update.md",
          },
          {
            text: "计划",
            link: "/src/todo/plan.md",
          },
        ],
      },
      {
        text: "交流合作",
        link: "/src/about/index.md",
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/cool-team-official/cool-uni",
      },
    ],
  },
});
