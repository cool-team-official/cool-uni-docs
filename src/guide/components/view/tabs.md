# Tabs 选项卡

分隔内容上有关联但属于不同类别的数据集合。

## 参数

| 参数                 | 说明                              | 类型            | 可选值 | 默认值 |
| -------------------- | --------------------------------- | --------------- | ------ | ------ |
| modelValue / v-model | 选中的下标值或者列表项的 value 值 | string / number |        |        |
| height               | 高度                              | number          |        | 80     |
| list                 | 列表                              | array           |        |        |
| loop                 | 是否循环显示                      | boolean         |        | true   |
| fill                 | 选项卡是否填充                    | boolean         |        | false  |
| gutter               | 选项卡间隔                        | number          |        | 20     |
| border               | 是否带有下边框                    | boolean         |        | true   |
| color                | 激活的字体及浮标颜色              | string          |        | 主色   |
| un-color             | 未激活的字体颜色                  | string          |        |        |
| background-color     | 背景色                            | string          |        | #fff   |
| show-dropdown        | 是否显示下拉框                    | boolean         |        | false  |

## 方法

| 事件名称 | 说明                     | 参数 |
| -------- | ------------------------ | ---- |
| refresh  | 特殊情况下，重新刷新布局 |      |

## 示例

### 基础用法

```html
<template>
	<cl-tabs v-model="active" :list="list"></cl-tabs>
</template>

<script lang="ts" setup>
	import { ref } from "vue";

	const active = ref<number>(0);

	const list = ref<any[]>([
		{
			label: "数码"
		},
		{
			label: "家电"
		},
		{
			label: "母婴"
		},
		{
			label: "潮牌"
		}
	]);
</script>
```

### 居中

配置 `justify` 参数

```html
<template>
	<cl-tabs v-model="active" :list="list" justify="center"></cl-tabs>
</template>

<script lang="ts" setup>
	import { ref } from "vue";

	const active = ref<number>(0);

	const list = ref<any[]>([
		{
			label: "数码"
		},
		{
			label: "家电"
		},
		{
			label: "母婴"
		},
		{
			label: "潮牌"
		}
	]);
</script>
```

### 填充

配置 `fill` 参数

```html
<template>
	<cl-tabs v-model="active" :list="list" fill></cl-tabs>
</template>

<script lang="ts" setup>
	import { ref } from "vue";

	const active = ref<number>(0);

	const list = ref<any[]>([
		{
			label: "数码"
		},
		{
			label: "家电"
		},
		{
			label: "母婴"
		},
		{
			label: "潮牌"
		}
	]);
</script>
```

### 下拉框

配置 `show-dropdown` 参数及添加 `dropdown` 插槽

```html
<template>
	<cl-tabs v-model="active" :list="list" show-dropdown>
		<template #dropdown>
			<view class="dropdown">
				<cl-text
					:value="item.label"
					v-for="item in list"
					:key="item.value"
					:margin="10"
				></cl-text>
			</view>
		</template>
	</cl-tabs>
</template>

<script lang="ts" setup>
	import { ref } from "vue";

	const active = ref<number>(0);

	const list = ref<any[]>([
		{
			label: "数码"
		},
		{
			label: "家电"
		},
		{
			label: "母婴"
		},
		{
			label: "潮牌"
		}
	]);
</script>

<style lang="scss" scoped>
	.dropdown {
		background-color: #ddd;
		padding: 20rpx;
	}
</style>
```

### 更改绑定值

`list` 中不存在 `value` 的情况下，会以数组的下标返回。否则返回 `value` 值

```html
<template>
	<cl-tabs v-model="active" :list="list"></cl-tabs>
</template>

<script lang="ts" setup>
	import { ref } from "vue";

	const active = ref<string>("b");

	const list = ref<any[]>([
		{
			label: "数码",
			value: "a"
		},
		{
			label: "家电",
			value: "b"
		},
		{
			label: "母婴",
			value: "c"
		},
		{
			label: "潮牌",
			value: "d"
		}
	]);
</script>
```
