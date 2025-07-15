# App.vue

`App.uvue` 是 `uni-app-x` 应用的根组件和入口文件。

## 概述

`App.uvue` 作为应用的主组件，承载着所有页面的切换逻辑。需要注意的是，`App.uvue` 本身并不是一个页面，因此不能在其中编写 `<template>` 视图元素。

## 主要功能

该文件主要承担以下职责：

- **生命周期管理**：监听应用的启动、显示、隐藏和退出等生命周期事件
- **全局数据配置**：设置应用级别的全局变量 `globalData`
- **通用方法定义**：编写全局可用的 `method` 方法
- **样式统一管理**：配置应用的全局样式

::: tip 重要提示
应用生命周期只能在 `App.uvue` 中监听，在其他页面中监听将无效。
:::

## 配置说明

::: warning 注意事项

- 根据项目实际需求决定是否注释 `dict.refresh` 和 `user.get` 方法调用
- 目前全局样式只能在当前页面中编写，后续版本可能会有所调整
  :::

## 代码示例

```html
<script lang="ts">
  import { useStore } from "@/cool";

  export default {
    // 应用启动时触发
    onLaunch: function () {
      console.log("App Launch");
    },

    // 应用显示时触发（从后台切换到前台）
    onShow: function () {
      console.log("App Show");

      const { dict, user } = useStore();

      // 获取用户信息（仅在用户已登录状态下执行）
      user.get();

      // 刷新数据字典缓存
      dict.refresh(null);
    },

    // 应用隐藏时触发（切换到后台）
    onHide: function () {
      console.log("App Hide");
    },

    // 应用退出时触发
    onExit: function () {
      console.log("App Exit");
    },
  };
</script>

<style lang="scss">
  @import url("static/index.scss");
  @import url("uni_modules/cool-ui/index.scss");

  .safe-area-top {
    margin-top: env(safe-area-inset-top);
  }

  .uni-tabbar {
    // #ifdef H5
    display: none;
    // #endif

    .uni-tabbar__icon {
      margin-top: 0;
    }
  }
</style>
```
