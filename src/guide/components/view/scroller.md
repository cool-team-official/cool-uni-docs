# Scroller 滚动列表

## 参数

| 参数                | 说明                 | 类型    | 可选值 | 默认值   |
| ------------------- | -------------------- | ------- | ------ | -------- |
| top                 | 距离顶部多少 px 触发 | number  |        | 80       |
| bottom              | 距离底部多少 px 触发 | number  |        | 100      |
| loadingText         | 正在刷新文案         | string  |        | 正在刷新 |
| pullingText         | 下拉刷新文案         | string  |        | 下拉刷新 |
| releaseText         | 释放刷新文案         | string  |        | 释放刷新 |
| scrollTop           | 滚动条距离顶部位置   | number  |        |          |
| scrollIntoView      | 滚动到对应元素 id    | string  |        |          |
| scrollWithAnimation | 滚动是否动画 id      | boolean |        | true     |
| enableBackToTop     | 点击回顶部           | boolean |        |          |
| showBackTopButton   | 是否显示返回顶部按钮 | boolean |        | true     |
| showScrollbar       | 是否显示滚动条       | boolean |        |          |
| refresherEnabled    | 开启刷新             | boolean |        | true     |

## 事件

| 插槽   | 说明       | 参数                      |
| ------ | ---------- | ------------------------- |
| down   | 下拉刷新   |                           |
| up     | 加载更多   |                           |
| scroll | 滚动时触发 | { detail: { scrollTop } } |

## 方法

| 插槽     | 说明     | 参数          |
| -------- | -------- | ------------- |
| scrollTo | 滚动到   | (top: number) |
| backTop  | 回到顶部 |               |

## 插槽

| 插槽    | 说明     | 参数                   |
| ------- | -------- | ---------------------- |
| loading | 下拉加载 | { status, text, move } |

## 示例

### 基本用法

```html
<template>
	<cl-page fullscreen>
		<cl-scroller :ref="setRefs('scroller')" @up="loadmore" @down="refresh">
			<cl-list-item
				v-for="(item, index) in list"
				:key="index"
				:label="`${item + 1}`"
				:padding="[0, 20, 0, 20]"
			/>
		</cl-scroller>
	</cl-page>
</template>

<script lang="ts" setup>
	import { ref } from "vue";
	import { useCool } from "/@/cool";
	import { onReady } from "@dcloudio/uni-app";
	import { range } from "lodash-es";

	const { refs, setRefs } = useCool();

	const list = ref<number[]>([]);

	function loadmore() {
		setTimeout(() => {
			const data = range(list.value.length, list.value.length + 20);
			list.value.push(...data);
		}, 300);
	}

	function refresh() {
		list.value = range(20);

		setTimeout(() => {
			refs.scroller.end();
		}, 500);
	}

	onReady(() => {
		refresh();
	});
</script>
```
