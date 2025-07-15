# pages.json

进行全局配置，决定页面文件的路径、窗口样式、原生的导航栏、底部的原生 tabbar 等。

所有页面，均需在 pages.json 中注册，否则不会被打包到应用中。

## 部分配置

```json
{
  "globalStyle": {
    "navigationBarTitleText": "cool-unix",
    "navigationBarTextStyle": "@navTextStyle",
    "backgroundColorContent": "@bgContentColor",
    "backgroundColor": "@bgColor",
    "navigationBarBackgroundColor": "@navBgColor"
  },
  "tabBar": {
    "color": "@tabColor",
    "selectedColor": "@tabSelectedColor",
    "backgroundColor": "@tabBgColor",
    "borderStyle": "@tabBorderStyle",
    "height": "60px",
    "list": [
      {
        "pagePath": "pages/index/home",
        "iconPath": "/static/icon/tabbar/home.png",
        "selectedIconPath": "/static/icon/tabbar/home2.png",
        "text": "%首页%"
      },
      {
        "pagePath": "pages/index/my",
        "iconPath": "/static/icon/tabbar/my.png",
        "selectedIconPath": "/static/icon/tabbar/my2.png",
        "text": "%我的%"
      }
    ]
  }
}
```

使用 `%xxx%` 格式的文本会被系统自动检测并替换为对应语言的翻译内容。例如 `%首页%` 会根据当前语言环境自动替换为 "Home"、"首页" 等对应的翻译文本。这种方式可以方便地实现应用的多语言支持。

## 🔗 相关资源

- [官方文档](https://doc.dcloud.net.cn/uni-app-x/collocation/pagesjson.html)
