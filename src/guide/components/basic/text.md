# Text 文本

`cl-button` 文本组件，包含 `手机号` `金额` `内容超出省略` 等等

## 参数

| 参数           | 说明               | 类型           | 可选值                 | 默认值 |
| -------------- | ------------------ | -------------- | ---------------------- | ------ |
| value          | 文本内容           | string         |                        |
| type           | 类型               | string         | text / price / phone / | text   |
| bold           | 是否粗体           | boolean        |                        | false  |
| margin         | 外间距             | array          |                        |        |
| block          | 是否块状           | boolean        |                        | false  |
| align          | 文字对齐           | string         |                        | left   |
| ellipsis       | 文本超出省略       | number         |                        |        |
| size           | 字体大小           | string, number |                        | 24     |
| precision      | 小数点：price 有效 | boolean        |                        | true   |
| line-through   | 穿过文本下的一条线 | boolean        |                        | false  |
| letter-spacing | 文本水平间隔       | number         |                        | 0      |
| color          | 字体颜色           | string         |                        | #444   |
| prefix-icon    | 前缀图标           | string         |                        |        |
| suffix-icon    | 后缀图标           | string         |                        |        |
| copy           | 是否能复制         | boolean        |                        |        |

## 示例

### 基本用法

```html
<cl-text value="云想衣裳花想容，春风拂槛露华浓。"></cl-text>
```

### 不同颜色

```html
<cl-text value="主色" color="primary"></cl-text>
<cl-text value="成功" color="success"></cl-text>
<cl-text value="错误" color="error"></cl-text>
<cl-text value="警告" color="warning"></cl-text>
<cl-text value="信息" color="info"></cl-text>
```

### 手机号

```html
<cl-text type="phone" value="13255022022"></cl-text>
```

### 金额

```html
<cl-text type="price" :size="40" value="19450"></cl-text>
```

### 超出隐藏

```html
<cl-text
	:ellipsis="2"
	block
	value="锦瑟无端五十弦，一弦一柱思华年。庄生晓梦迷蝴蝶，望帝春心托杜鹃。沧海月明珠有泪，蓝田日暖玉生烟。此情可待成追忆，只是当时已惘然。"
></cl-text>
```
