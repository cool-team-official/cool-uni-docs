# Select 下拉选项

## 参数

| 参数                 | 说明                                                          | 类型                      | 可选值                                          | 默认值   |
| -------------------- | ------------------------------------------------------------- | ------------------------- | ----------------------------------------------- | -------- |
| modelValue / v-model | 绑定值                                                        | string / number / boolean |
| mode                 | 类型                                                          | string                    | selector / multiSelector / date / time / region | selector |
| placeholder          | 占位内容                                                      | string                    |
| options              | 选项数据                                                      | Array                     |                                                 | []       |
| label-key            | 作为 label 唯一标识的键名                                     | string                    |                                                 | label    |
| value-key            | 作为 value 唯一标识的键名                                     | string                    |                                                 | value    |
| separator            | value 拼接符                                                  | string                    |                                                 | ,        |
| disabled             | 是否禁用                                                      | boolean                   |                                                 | false    |
| border               | 是否带有边框                                                  | boolean                   |                                                 | false    |
| fields               | mode = date，选择器的粒度                                     | string                    | year / month / day                              | day      |
| start                | mode = date，表示有效日期范围的开始，字符串格式为"YYYY-MM-DD" | string                    |                                                 |          |
| end                  | mode = date，表示有效日期范围的结束，字符串格式为"YYYY-MM-DD" | string                    |                                                 |          |
| default-first-option | 为空时，是否默认返回 options 第一个 value                     | boolean                   |                                                 | true     |

## 事件

| 事件名称      | 说明                                   | 回调参数 |
| ------------- | -------------------------------------- | -------- |
| change        | 绑定值变化时触发的事件                 | value    |
| confirm       | 绑定值变化时触发的事件, 返回完整数据   | item     |
| cancel        | 取消选择时触发的事件                   |          |
| column-change | 某一列的值改变时触发 columnchange 事件 |          |

## 示例

```html
<template>
	<cl-select v-model="val" :options="list"></cl-select>
</template>

<script setup lang="ts">
	import { ref } from "vue";

	const val = ref(1);

	const list = ref([
		{
			label: "海南东山羊",
			value: 1
		},
		{
			label: "乌鱼子",
			value: 2
		}
	]);
</script>
```
