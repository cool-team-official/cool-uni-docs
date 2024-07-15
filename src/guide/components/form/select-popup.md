# SelectPopup 下拉弹窗

## 参数

| 参数                 | 说明           | 类型    | 可选值 | 默认值 |
| -------------------- | -------------- | ------- | ------ | ------ |
| modelValue / v-model | 绑定值         | boolean |        |        |
| title                | 标题           | string  |        |        |
| scrollerHeight       | 滚动高度       | number  |        |        |
| scrollerMaxHeight    | 最大滚动高度   | number  |        | 600    |
| options              | 选项列表       | array   |        |        |
| multiple             | 是否多选       | boolean |        |        |
| showPicker           | 是否显示选择器 | boolean |        | true   |
| showFooter           | 是否显示底部   | boolean |        | true   |
| required             | 是否必填       | boolean |        |        |

## 事件

| 事件名称 | 说明                   | 回调参数 |
| -------- | ---------------------- | -------- |
| change   | 绑定值变化时触发的事件 | value    |
| confirm  | 点确认按钮触发         |          |

## 插槽

| 插槽    | 说明     | 参数 |
| ------- | -------- | ---- |
| confirm | 确认按钮 |      |
| list    | 列表区域 |      |

## 示例

### 基础用法

```html
<cl-select-popup v-model="v1" title="选择歌曲" :options="list" />
```

### 多选

```html
<cl-select-popup v-model="v2" multiple title="选择歌曲" :options="list" />
```

### 必填

```html
<cl-select-popup v-model="v3" required title="选择歌曲" :options="list" />
```

### 自定义

```html
<cl-select-popup v-model="v4" required title="选择歌曲" :options="list">
	<template #item="{ item }"> {{ item }} </template>

	<template #default="{ label, value }">
		<cl-select-inner round background-color="#f7f7f7">
			<cl-text value="你选择了" :size="24" color="info" />
			<cl-tag round size="small" :margin="[0, 0, 0, 20]">{{ label }}</cl-tag>
		</cl-select-inner>
	</template>
</cl-select-popup>
```
