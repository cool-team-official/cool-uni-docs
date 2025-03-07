---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Cool Uni"
  tagline: 开源免费、uni-app脚手架、ui组件库、扩展插件、模块化
  actions:
    - theme: brand
      text: 快速开始
      link: /src/guide/quick.md
    - theme: alt
      text: 源码下载
      link: /src/introduce/src

features:
  - title: 更快速
    icon: { src: "/images/shandian.png" }
    details: 通过集成 cool-admin 的用户登录、版本管理、消息通知以及订单管理等基础模块。有效降低了开发成本，进而增强了市场竞争力。

  - title: 更智能
    icon: { src: "/images/combine.png" }
    details: 能够自动化生成 Service 请求和 Entity 类型描述，极大地减轻了 TypeScript（Ts）开发的负担，使开发过程更加智能化和高效。
  - title:
---

<demo is-home />

<script setup>
import Demo from './components/demo.vue'
</script>
