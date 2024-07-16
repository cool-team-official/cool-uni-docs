# 模块/插件开发

基于 uni_modules 的扩展，原文：[https://uniapp.dcloud.net.cn/plugin/uni_modules.html](https://uniapp.dcloud.net.cn/plugin/uni_modules.html)

## 目录结构

```js
uni_modules/xx/
    ├──pages // 页面配置
    ├──components // 常用组件
    ├──static // 静态文件目录
    ├──... // 其他
    ├──config.ts // 配置文件
    └──index.ts // 入口文件
```

::: warning
约定的目录名称不可修改，但可自行添加或者删除。
:::

## 目录说明

### pages

页面配置 [https://uniapp.dcloud.net.cn/collocation/pages.html#pages](https://uniapp.dcloud.net.cn/collocation/pages.html#pages)

添加文件：`uni_modules/cool-xx/pages_init.json`。

```json
{
  "pages": [
    {
      "path": "pages/xx/list",
      "style": {
        "navigationBarTitleText": "xxx"
      }
    }
  ],
  "subPackages": [
    {
      "root": "uni_modules/cool-xx/pages",
      "pages": [
        {
          "path": "list",
          "style": {
            "navigationBarTitleText": "xxx"
          }
        }
      ]
    }
  ]
}
```

::: warning
程序运行时会自动加载到 `pages.json` 中。移除模块的同时也会一起删除配置。
:::

小于 `cool-uni@7.3.0`，请手动复制 `pages_init.json` 到 `pages.json` 中。

### components

components 目录同样支持 easycom 规范，如下格式会被自动引入

```js
uni_modules/xx/
    ├──components
    │   ├── demo-a
    │   │   └── demo-a.vue
    │   └── demo-b
    │       └── demo-b.vue
```

### config.ts

模块配置

输入 `module-config` 关键字，`vscode` 中会自动生成：

```ts
import type { ModuleConfig } from "/@/cool";

export default (): ModuleConfig => {
  return {
    // 描述
    description: "插件描述",

    // 排序
    order: 0,

    // 配置参数
    options: {
      name: "神仙",
    },

    // demo 页配置示例页面入口
    demo: {
      label: "基础用法",
      path: "/uni_modules/xxx/pages/list",
    },

    // 事件
    onLoad(options) {},
  };
};
```

- order 模块加载顺序，值越大越先

- options 提供给外部使用的参数配置：

获取方式：

```ts
import { module } from "/@/cool";

const config = module.config("模块名");
```

### index.ts

该模块需要对外开放的变量及方法，方便于别人直接使用：

```ts
export function useTest() {
  return {
    // 自定义方法
    test() {},

    // 自定义变量
    data: {
      description: "数据描述",
    },
  };
}
```

使用：

```ts
import { useTest } from "/$/test";

const { data, test } = useTest();
```
