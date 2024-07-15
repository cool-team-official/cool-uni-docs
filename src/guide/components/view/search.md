# Search 搜索栏

## 参数

| 参数                 | 说明             | 类型    | 可选值 | 默认值         |
| -------------------- | ---------------- | ------- | ------ | -------------- |
| modelValue / v-model | 绑定值           | string  |
| search-icon          | 前缀图标         | string  |        | cl-icon-search |
| show-search-button   | 是否显示搜索按钮 | boolean |        | true           |
| search-button-text   | 搜索按钮文本     | stirng  |        | 搜索           |

## 事件

| 事件名称 | 说明                       |
| -------- | -------------------------- |
| search   | 搜索按钮点击或者按下完成健 |

## 插槽

| 插槽名称 | 说明                 |
| -------- | -------------------- |
| prepend  | 在元素的开始插入内容 |
| append   | 在元素的结尾插入内容 |

## 示例

### 基本用法

```html
<cl-search placeholder="搜索图片、文章、链接"></cl-search>
```

### 不显示按钮

```html
<cl-search placeholder="搜索图片、文章、链接" :show-search-button="false"></cl-search>
```

### 追加内容

```html
<cl-search placeholder="搜索图片、文章、链接">
	<template #append>
		<cl-avatar :size="60" src=""></cl-avatar>
	</template>
</cl-search>
```
