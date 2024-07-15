# Banner 轮播图

## 参数

| 参数                 | 说明         | 类型   | 可选值      | 默认值       |
| -------------------- | ------------ | ------ | ----------- | ------------ |
| modelValue / v-model | 当前选择下标 | number |             | 0            |
| list                 | 列表         | array  |             | []           |
| type                 | 类型         | string | card, chain |              |
| arrow                | 切换箭头     | number |             | 0            |
| margin               | 外间距       | array  |             | [0, 0, 0, 0] |
| height               | 高           | string |             | 300rpx       |
| radius               | 圆角         | string |             | 10rpx        |
| dotType              | 指示点类型   | string |             | #e9e9e9      |

## 示例

## 基本用法

```html
<cl-banner :list="list"></cl-banner>
```

## 卡片

```html
<cl-banner :list="list" type="card"></cl-banner>
```

## 衔接

```html
<cl-banner :list="list" type="chain"></cl-banner>
```

## 插槽

-   `item` 为当前选中值
-   `index` 选中的序号

```html
<cl-swiper v-model="active">
	<template #default="{ item, index }"> {{ index }} </template>
</cl-swiper>
```
