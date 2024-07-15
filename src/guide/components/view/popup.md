# Popup 弹出框

## 参数

| 参数                 | 说明               | 类型           | 可选值                      | 默认值             |
| -------------------- | ------------------ | -------------- | --------------------------- | ------------------ |
| modelValue / v-model | 是否可见           | boolean        |                             | false              |
| direction            | 方向               | string         | top / right / bottom / left | center             |
| close-on-click-modal | 点击遮罩层是否关闭 | boolean        |                             | false              |
| modal                | 是否显示遮罩层     | boolean        |                             | true               |
| modal-background     | 遮罩层背景色       | string         |                             | rgba(0, 0, 0, 0.4) |
| size                 | 弹出框宽度         | string         |                             | auto               |
| background-color     | 背景色             | string         |                             | #fff               |
| padding              | 内间距             | number, string |                             | 20rpx              |
| border-radius        | 圆角               | number, string |                             | 20rpx              |
| zIndex               | 层级               | number         |                             | 200                |

## 事件

| 事件名称 | 说明     | 回调参数       |
| -------- | -------- | -------------- |
| close    | 关闭回调 | function(done) |

## 示例

### 基础用法

```html
<cl-popup v-model="visible">
	<cl-text value="云想衣裳花想容，春风拂槛露华浓。"></cl-text>
</cl-popup>
```

### 不显示遮罩层

```html
<cl-popup v-model="visible" :modal="false">
	<cl-button @tap="visible = false">点我关闭</cl-button>
</cl-popup>
```

### 添加样式

```html
<cl-popup v-model="visible" background-color="red" border-radius="20rpx">
	<cl-text color="#fff" value="云想衣裳花想容，春风拂槛露华浓。"></cl-text>
</cl-popup>
```
