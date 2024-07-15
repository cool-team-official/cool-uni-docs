# Topbar 顶部导航

自定义顶部导航，弥补原生的不足

## 参数

| 参数             | 说明                           | 类型    | 可选值 | 默认值 |
| ---------------- | ------------------------------ | ------- | ------ | ------ |
| title            | 标题                           | string  |
| description      | 描述                           | string  |
| show-back        | 是否需要返回键                 | boolean |        | true   |
| back-path        | 当页面栈只有一条时，返回的路径 | boolean |        | true   |
| border           | 是否需要下边框                 | boolean |        | true   |
| background-color | 背景颜色                       | string  |        | #fff   |
| color            | 字体颜色                       | string  |        | #000   |
| fixed            | 是否固定定位                   | boolean |        | false  |

## 插槽

| 插槽名称 | 说明         |
| -------- | ------------ |
| default  | 中间文本区域 |
| prepend  | 左侧插入内容 |
| append   | 右侧插入内容 |

::: tip
H5 页面刷新或者分享页时，页面栈长度只有 1
:::

## 示例

### 基本用法

```html
<cl-topbar title="标题"></cl-topbar>
```

### 带描述

```html
<cl-topbar title="标题" description="描述"></cl-topbar>
```

### 右侧图标

```html
<cl-topbar title="标题">
	<template #append>
		<view class="cl-topbar__icon">
			<text class="cl-icon-warning-border"></text>
		</view>
	</template>
</cl-topbar>
```

### 不需要返回键

```html
<cl-topbar title="标题" :show-back="false"></cl-topbar>
```

### 其他颜色

```html
<cl-topbar title="标题" color="#fff" background-color="#000"></cl-topbar>
```
