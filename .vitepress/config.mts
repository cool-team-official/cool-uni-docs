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
      level: [2, 3],
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
      { text: "组件", link: "/src/guide/components/basic/button.md" },
      { text: "🔥插件市场", link: "https://cool-js.com/plugin" },
      { text: "交流合作", link: "/src/about/index.md" },
      {
        text: "v8.0.0",
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
          {
            text: "多语言",
            link: "/src/introduce/i18n.md",
          },
        ],
      },
      {
        text: "教程",
        items: [
          { text: "快速开始", link: "/src/guide/quick.md" },
          {
            text: "目录结构",
            items: [
              { text: "build", link: "/src/guide/build.md" },
              { text: "components", link: "/src/guide/components.md" },
              { text: "config", link: "/src/guide/config.md" },
              {
                text: "cool",
                items: [
                  { text: "hooks", link: "/src/guide/cool/hooks.md" },
                  { text: "router", link: "/src/guide/cool/router.md" },
                  { text: "service", link: "/src/guide/cool/service.md" },
                  { text: "store", link: "/src/guide/cool/store.md" },
                ],
              },
              { text: "pages", link: "/src/guide/pages.md" },
              { text: "router", link: "/src/guide/router.md" },
              { text: "service", link: "/src/guide/service.md" },
              { text: "static", link: "/src/guide/static.md" },
              { text: "types", link: "/src/guide/types.md" },
              {
                text: "uni_modules",
                link: "/src/guide/uni_modules.md",
              },
              { text: "App.vue", link: "/src/guide/App.vue.md" },
              { text: "main.ts", link: "/src/guide/main.ts.md" },
              { text: "pages.json", link: "/src/guide/pages.json.md" },
              { text: "vite.config.ts", link: "/src/guide/vite.config.ts.md" },
            ],
          },
        ],
      },
      {
        text: "组件",
        items: [
          {
            text: "基础组件",
            items: [
              {
                text: "Button",
                link: "/src/guide/components/basic/button.md",
              },
              {
                text: "Text",
                link: "/src/guide/components/basic/text.md",
              },
              {
                text: "Icon",
                link: "/src/guide/components/basic/icon.md",
              },
              {
                text: "Image",
                link: "/src/guide/components/basic/image.md",
              },
              {
                text: "Loading",
                link: "/src/guide/components/basic/loading.md",
              },
              {
                text: "Tag",
                link: "/src/guide/components/basic/tag.md",
              },
              {
                text: "Toast",
                link: "/src/guide/components/basic/toast.md",
              },
            ],
          },
          {
            text: "表单组件",
            items: [
              {
                text: "Form",
                link: "/src/guide/components/form/form.md",
              },
              {
                text: "Input",
                link: "/src/guide/components/form/input.md",
              },
              {
                text: "InputNumber",
                link: "/src/guide/components/form/input-number.md",
              },
              {
                text: "Radio",
                link: "/src/guide/components/form/radio.md",
              },
              {
                text: "Checkbox",
                link: "/src/guide/components/form/checkbox.md",
              },
              {
                text: "Select",
                link: "/src/guide/components/form/select.md",
              },
              {
                text: "SelectCity",
                link: "/src/guide/components/form/select-city.md",
              },
              {
                text: "SelectDate",
                link: "/src/guide/components/form/select-date.md",
              },
              {
                text: "SelectPopup",
                link: "/src/guide/components/form/select-popup.md",
              },
              {
                text: "Switch",
                link: "/src/guide/components/form/switch.md",
              },
              {
                text: "Textarea",
                link: "/src/guide/components/form/textarea.md",
              },
            ],
          },
          {
            text: "视图组件",
            items: [
              {
                text: "Avatar",
                link: "/src/guide/components/view/avatar.md",
              },
              {
                text: "Badge",
                link: "/src/guide/components/view/badge.md",
              },
              {
                text: "Banner",
                link: "/src/guide/components/view/banner.md",
              },
              {
                text: "Card",
                link: "/src/guide/components/view/card.md",
              },
              {
                text: "Divider",
                link: "/src/guide/components/view/divider.md",
              },
              {
                text: "Flex",
                link: "/src/guide/components/view/flex.md",
              },
              {
                text: "List",
                link: "/src/guide/components/view/list.md",
              },
              {
                text: "ListIndex",
                link: "/src/guide/components/view/list-index.md",
              },
              {
                text: "Loadmore",
                link: "/src/guide/components/view/loadmore.md",
              },
              {
                text: "Noticebar",
                link: "/src/guide/components/view/noticebar.md",
              },
              {
                text: "Popup",
                link: "/src/guide/components/view/popup.md",
              },
              {
                text: "Progress",
                link: "/src/guide/components/view/progress.md",
              },
              {
                text: "Scroller",
                link: "/src/guide/components/view/scroller.md",
              },
              {
                text: "Search",
                link: "/src/guide/components/view/search.md",
              },
              {
                text: "Slider",
                link: "/src/guide/components/view/slider.md",
              },
              {
                text: "Tabs",
                link: "/src/guide/components/view/tabs.md",
              },
              {
                text: "Topbar",
                link: "/src/guide/components/view/topbar.md",
              },
              {
                text: "Waterfall",
                link: "/src/guide/components/view/waterfall.md",
              },
              {
                text: "Skeleton",
                link: "/src/guide/components/view/skeleton.md",
              },
            ],
          },
          {
            text: "扩展组件",
            items: [
              {
                text: "ActionSheet",
                link: "/src/guide/components/extend/action-sheet.md",
              },
              {
                text: "Captcha",
                link: "/src/guide/components/extend/captcha.md",
              },
              {
                text: "Confirm",
                link: "/src/guide/components/extend/confirm.md",
              },
              {
                text: "Dialog",
                link: "/src/guide/components/extend/dialog.md",
              },
              {
                text: "FilterBar",
                link: "/src/guide/components/extend/filter-bar.md",
              },
              {
                text: "Page",
                link: "/src/guide/components/extend/page.md",
              },
              {
                text: "SliderVerify",
                link: "/src/guide/components/extend/slider-verify.md",
              },
            ],
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
