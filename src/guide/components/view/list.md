# List 列表

## 参数

| 参数     | 说明         | 类型    | 可选值                                     | 默认值 |
| -------- | ------------ | ------- | ------------------------------------------ | ------ |
| label    | 标题         | string  |                                            |
| disabled | 是否禁用     | boolean |                                            | false  |
| border   | 是否带边框   | boolean |                                            | true   |
| type     | 类型         | string  | primary / success / error / warning / info |        |
| justify  | 水平排序方式 | string  | start / end / center                       | start  |
| swipe    | 是否可滑动   | string  | none / left / right                        | none   |

## 插槽

| 插槽   | 说明                 |
| ------ | -------------------- |
| icon   | 左侧图标             |
| append | 在元素的结尾插入内容 |
| menu   | 滑动菜单             |

## 示例

### 基本用法

```html
<cl-list-item label="账单"></cl-list-item>
```

### 带图标

```html
<cl-list-item label="神仙">
	<template #icon>
		<image src="../static/avatar.png" />
	</template>
</cl-list-item>
```

### 带描述

```html
<cl-list-item label="余额">
	<cl-text type="price" :size="30" :value="159.2"></cl-text>
</cl-list-item>
```

### 禁用

```html
<cl-list-item label="银行卡" disabled>
	<text>兴业银行(***1113)</text>
</cl-list-item>
```

### 滑动

```html
<cl-list-item label="向右滑动" swipe="left">
	<template #menu>
		<cl-button type="primary">置顶</cl-button>
		<cl-button type="error">删除</cl-button>
	</template>
</cl-list-item>

<cl-list-item label="向左滑动" swipe="right">
	<template #menu>
		<cl-button type="primary">置顶</cl-button>
		<cl-button type="error">删除</cl-button>
	</template>
</cl-list-item>
```

### 自定义

```html
<cl-list-item justify="start">
	<cl-row type="flex" align="middle">
		<cl-avatar></cl-avatar>
		<cl-text value="神仙都没用" :margin="[0, 0, 0, 10]"></cl-text>
	</cl-row>

	<template #append>
		<cl-button>修改头像</cl-button>
	</template>
</cl-list-item>
```

### 按钮组

```html
<cl-card label="按钮组">
	<cl-list>
		<cl-list-item label="A"></cl-list-item>
		<cl-list-item label="B"></cl-list-item>
		<cl-list-item label="C"></cl-list-item>
	</cl-list>
</cl-card>
```
