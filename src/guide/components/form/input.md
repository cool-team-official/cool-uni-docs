# Input 输入框

`cl-input` 组件基于 uni-app 的 `input` 组件:

## 参数

| 参数                 | 说明               | 类型            | 可选值                       | 默认值 |
| -------------------- | ------------------ | --------------- | ---------------------------- | ------ |
| modelValue / v-model | 绑定值             | string / number |                              |        |
| type                 | 类型               | string          | text 及原生 input 的 type 值 | text   |
| password             | 是否密码类型       | boolean         |                              | false  |
| placeholder          | 输入框为空时占位符 | boolean         |                              | false  |
| clearable            | 是否可清空         | boolean         |                              | false  |
| disabled             | 是否禁用状态       | boolean         |                              | false  |
| fill                 | 是否宽度填充       | boolean         |                              | false  |
| round                | 是否圆角           | boolean         |                              | false  |
| border               | 是否带有边框       | boolean         |                              | false  |
| focus                | 是否聚焦           | boolean         |                              | false  |
| background-color     | 背景颜色           | string          |                              |        |

## 插槽

| 插槽    | 说明                 |
| ------- | -------------------- |
| prepend | 在元素的开始插入内容 |
| append  | 在元素的结尾插入内容 |

## 示例

### 基本用法

```html
<cl-input />
```

### 可清空

```html
<cl-input clearable />
```

### 禁用状态

```html
<cl-input disabled />
```

### 插槽

```html
<cl-input>
	<template #prepend>
		<text>https://</text>
	</template>
</cl-input>

<cl-input>
	<template #append>
		<text>.com</text>
	</template>
</cl-input>
```
