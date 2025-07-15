# Button 按钮

基于官方 `button` 组件封装的增强按钮组件，提供丰富的样式和交互功能。

## 参数

| 参数     | 说明         | 类型            | 可选值                                                                     | 默认值    |
| -------- | ------------ | --------------- | -------------------------------------------------------------------------- | --------- |
| pt       | 样式穿透     | [PassThrough]() |                                                                            |           |
| size     | 尺寸         | string          | "normal" \| "small" \| "large"                                             |           |
| type     | 类型         | string          | "primary" \| "success" \| "error" \| "warn" \| "info" \| "light" \| "dark" | "primary" |
| plain    | 是否朴素按钮 | boolean         |                                                                            | false     |
| rounded  | 是否圆角按钮 | boolean         |                                                                            | false     |
| loading  | 是否加载中   | boolean         |                                                                            | false     |
| disabled | 是否禁用状态 | boolean         |                                                                            | false     |
| icon     | 图标         | string          |                                                                            |           |
| color    | 字体颜色     | string          |                                                                            |           |

[更多参数查阅](https://uniapp.dcloud.io/component/button)

## 示例

### 基础用法

```html
<cl-button>普通</cl-button>
```

### 不同类型

```html
<cl-button type="primary">主要</cl-button>
<cl-button type="success">成功</cl-button>
<cl-button type="error">危险</cl-button>
<cl-button type="warn">警告</cl-button>
<cl-button type="info">信息</cl-button>
<cl-button type="light">浅色</cl-button>
<cl-button type="dark">深色</cl-button>
```

### 只显示图标

```html
<cl-button type="primary" icon="send-plane-fill"></cl-button>
<cl-button type="error" icon="verified-badge-fill"></cl-button>
<cl-button type="info" icon="edit-fill"></cl-button>
```

### 带图标

```html
<cl-button icon="cl-icon-search">默认</cl-button>
<cl-button icon="cl-icon-good-fill">点赞</cl-button>
```
