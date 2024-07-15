# FilterBar 过滤栏

升序降序, 下拉框，开关，自定义筛选

## cl-filter-bar

### 参数

| 参数     | 说明     | 类型    | 可选值 | 默认值 |
| -------- | -------- | ------- | ------ | ------ |
| isSticky | 是否吸顶 | boolean |        | false  |

### 事件

| 事件名称 | 说明                          | 回调参数                  |
| -------- | ----------------------------- | ------------------------- |
| change   | cl-filter-item 数据变化时触发 | function({ prop, value }) |

## cl-filter-item

### 参数

| 参数             | 说明                               | 类型                  | 可选值                    | 默认值  |
| ---------------- | ---------------------------------- | --------------------- | ------------------------- | ------- |
| v-model          | 绑定值，当时下拉多选时，必须是数组 | string, number, array |                           |         |
| prop             | 唯一标识, change 时返回            | string                |                           |         |
| type             | 筛选类型                           | string                | dropdown / order / switch |         |
| label            | 标题                               | string                |                           |         |
| disabled         | 是否禁用                           | boolean               |                           | false   |
| multiple         | 下拉框是否多选                     | boolean               |                           | false   |
| theme            | 下拉框主题                         | string                | default / grid            | default |
| grid-cols        | 格布局下的列数                     | number                |                           | 4       |
| options          | 下拉数据选项                       | array                 |                           |         |
| options.label    | 文本内容                           | string                |                           |         |
| options.value    | 绑定值                             | number / string       |                           |         |
| options.disabled | 是否禁用                           | boolean               |                           | false   |

### 事件

| 事件名称 | 说明                 | 回调参数        |
| -------- | -------------------- | --------------- |
| change   | 绑定值发生改变时触发 | function(value) |

### 插槽

| 插槽名称 | 说明         |
| -------- | ------------ |
| dropdown | 下拉框的插槽 |

### 示例

#### 基本用法

`type` 有效值：

-   order 排序 "desc" / "asc" / ""
-   switch 开关 true / false
-   dropdown 展开项

```html
<template>
	<cl-page :padding="20">
		<cl-card label="基础用法">
			<cl-filter-bar v-model="filter">
				<cl-filter-item label="排序" prop="order" type="order"></cl-filter-item>
				<cl-filter-item label="开关" prop="switch" type="switch"></cl-filter-item>
			</cl-filter-bar>
		</cl-card>
	</cl-page>
</template>

<script lang="ts" setup>
	import { ref } from "vue";

	const filter = ref<any>({
		order: "",
		switch: ""
	});
</script>
```

#### 展开项

配置 `type="dropdown"`, `options` 为数据列表

```html
<template>
	<cl-page :padding="20">
		<cl-card label="展开项">
			<cl-filter-bar v-model="filter">
				<cl-filter-item
					label="多选"
					prop="d1"
					type="dropdown"
					multiple
					:options="[
						{
							label: 'A',
							value: 1,
						},
						{
							label: 'B',
							value: 2,
						},
					]"
				></cl-filter-item>
				<cl-filter-item
					label="单选"
					prop="d2"
					type="dropdown"
					:options="[
						{
							label: 'A',
							value: 1,
						},
						{
							label: 'B',
							value: 2,
						},
					]"
				></cl-filter-item>
			</cl-filter-bar>
		</cl-card>
	</cl-page>
</template>

<script lang="ts" setup>
	import { ref } from "vue";

	const filter = ref<any>({
		d1: [],
		d2: ""
	});
</script>
```

#### 自定义

需添加 `@tap.stop` ,否则点击会自动关闭弹窗

```html
<template>
	<cl-page :padding="20">
		<cl-card label="展开项">
			<cl-filter-bar v-model="filter">
				<template #dropdown>
					<view class="cs" @tap.stop>
						<cl-input></cl-input>
					</view>
				</template>
			</cl-filter-bar>
		</cl-card>
	</cl-page>
</template>

<script lang="ts" setup>
	import { ref } from "vue";

	const filter = ref<any>({
		d1: [],
		d2: ""
	});
</script>
```
