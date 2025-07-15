# Button 按钮

该组件基于官方的 `button` 组件

## 参数

| 参数             | 说明         | 类型                  | 可选值                                            | 默认值 |
| ---------------- | ------------ | --------------------- | ------------------------------------------------- | ------ |
| size             | 尺寸         | string                | default / small / mini                            |        |
| type             | 类型         | string                | primary / success / error / warning / info / text |        |
| plain            | 是否朴素按钮 | boolean               |                                                   | false  |
| round            | 是否圆角按钮 | boolean               |                                                   | false  |
| loading          | 是否加载中   | boolean               |                                                   | false  |
| loading-theme    | 加载图标主题 | string                |                                                   |        |
| loading-color    | 加载图标颜色 | string                |                                                   |        |
| disabled         | 是否禁用状态 | boolean               |                                                   | false  |
| round            | 是否圆角     | boolean               |                                                   |        |
| border           | 是否需要边框 | boolean               |                                                   | true   |
| border-radius    | 边框圆角     | number                |                                                   | 10     |
| fill             | 是否宽度填充 | boolean               |                                                   | false  |
| icon             | 图标类名     | boolean               |                                                   |        |
| height           | 高           | number                |                                                   | 64     |
| width            | 宽           | number                |                                                   | auto   |
| margin           | 外间距       | string, number, Array |                                                   |        |
| fontSize         | 字体大小     | number                |                                                   | 26     |
| color            | 字体颜色     | string                |                                                   |        |
| background-color | 背景颜色     | string                |                                                   |        |

[更多参数查阅](https://uniapp.dcloud.io/component/button)

## 示例

### 基本用法

```html
<cl-button>默认按钮</cl-button>
```

### 不同类型

```html
<cl-button type="primary">主要</cl-button>
<cl-button type="success">成功</cl-button>
<cl-button type="error">错误</cl-button>
<cl-button type="warning">警告</cl-button>
<cl-button type="info">信息</cl-button>
<cl-button type="text">文本</cl-button>
```

### 不同状态

```html
<cl-button type="primary" plain>朴素</cl-button>
<cl-button round>圆角</cl-button>
<cl-button loading>加载中</cl-button>
<cl-button type="primary" shadow fill>阴影</cl-button>
<cl-button type="warning" fill>填充</cl-button>
```

### 带图标

```html
<cl-button icon="cl-icon-search">默认</cl-button>
<cl-button icon="cl-icon-good-fill">点赞</cl-button>
```
