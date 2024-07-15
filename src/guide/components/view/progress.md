# Progress 进度条

## 参数

| 参数                 | 说明             | 类型           | 可选值 | 默认值 |
| -------------------- | ---------------- | -------------- | ------ | ------ |
| modelValue / v-model | 绑定值 ｜ number |                |        | 0      |
| type                 | 类型             | string         | line   | line   |
| sroke-width          | 宽度             | number         |        | 12     |
| show-text            | 是否显示文本     | boolean        |        | false  |
| color                | 颜色，支持多色   | string / array |
| status               | 状态             | boolean        |        | false  |
| icon                 | 尾部图标         | string         |

## 插槽

| 插槽名称 | 说明     |
| -------- | -------- |
| text     | 文本内容 |

## 示例

### 基本用法

```html
<cl-progress :value="40"></cl-progress>
```

### 不同颜色

```html
<cl-progress color="#67C23A" :value="40"></cl-progress>
```

### 可调节颜色

```html
<cl-progress :value="60" :color="['#F56C6C', '#E6A23C', '#67C23A']"></cl-progress>
```

### 自定义

通过插槽 `text` 实现

```html
<cl-progress :value="val">
	<template #text>
		<text v-if="val >= 90">优</text>
		<text v-else-if="val >= 80">良</text>
		<text v-else-if="val >= 60">及格</text>
		<text v-else>{{ val }}</text>
	</template>
</cl-progress>
```
