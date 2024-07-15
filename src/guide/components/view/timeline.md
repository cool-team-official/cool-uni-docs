# Timeline 时间线

## Timeline 参数

| 参数            | 说明         | 类型            | 可选值 | 默认值 |
| --------------- | ------------ | --------------- | ------ | ------ |
| timestamp-width | 左侧时间宽度 | number / string |        | 140    |

## Timeline-item 参数

| 参数      | 说明           | 类型    | 可选值 | 默认值 |
| --------- | -------------- | ------- | ------ | ------ |
| timestamp | 时间           | string  |        |        |
| content   | 内容           | string  |        |        |
| icon      | 图标           | string  |        |        |
| color     | 图标，字体颜色 | string  |        | #999   |
| show-line | 是否显示竖线   | boolean |        | false  |

::: tip
如左侧内容需要自定义时，设置 `timestamp-width` = `?px` 固定宽度，或者 `timestamp-width` = `auto` 自适应。
:::

## 示例

### 基本用法

```html
<template>
	<cl-timeline>
		<cl-timeline-item
			v-for="(item, index) in list"
			:key="index"
			:timestamp="item.timestamp"
			:show-line="item.showLine"
			:content="item.content"
			:icon="item.icon"
			:color="item.color"
		>
		</cl-timeline-item>
	</cl-timeline>
</template>

<script lang="ts" setup>
	import { ref } from "vue";

	const list = ref<ClTimeline.Item[]>([
		{
			timestamp: "昨天",
			content: "开通账号，赠送500"
		},
		{
			timestamp: "今天",
			content: "成功转入9000",
			color: "#409EFF"
		},
		{
			timestamp: "11-06",
			content: "开始计算收益",
			icon: "cl-icon-toast-waiting",
			color: "#E6A23C"
		},
		{
			timestamp: "11-09",
			content: "收益到账",
			showLine: true,
			icon: "cl-icon-check-border",
			color: "#67C23A"
		}
	]);
</script>
```

### 自定义内容

使用 `content` 插槽

```html
<template>
	<cl-timeline>
		<cl-timeline-item
			v-for="(item, index) in list"
			:key="index"
			:timestamp="item.timestamp"
			:show-line="item.showLine"
			:content="item.content"
			:icon="item.icon"
			:color="item.color"
		>
			<template #content>
				<cl-tag>{{ item.content }}</cl-tag>
			</template>
		</cl-timeline-item>
	</cl-timeline>
</template>

<script lang="ts" setup>
	import { ref } from "vue";

	const list = ref<ClTimeline.Item[]>([
		{
			timestamp: "昨天",
			content: "开通账号，赠送500"
		},
		{
			timestamp: "今天",
			content: "成功转入9000",
			color: "#409EFF"
		},
		{
			timestamp: "11-06",
			content: "开始计算收益",
			icon: "cl-icon-toast-waiting",
			color: "#E6A23C"
		},
		{
			timestamp: "11-09",
			content: "收益到账",
			showLine: true,
			icon: "cl-icon-check-border",
			color: "#67C23A"
		}
	]);
</script>
```
