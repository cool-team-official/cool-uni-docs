# Confirm 确认框

## 方法

| 事件名称 | 说明 | 参数                      |
| -------- | ---- | ------------------------- |
| open     | 打开 | function(option: Options) |

### Options 有效值

| 参数                 | 说明                                             | 类型     | 可选值 | 默认值                     |
| -------------------- | ------------------------------------------------ | -------- | ------ | -------------------------- |
| title                | 标题                                             | string   |
| width                | 对话框宽度                                       | string   |        | 80%                        |
| show-cancel-button   | 是否显示取消按钮                                 | boolean  |        | true                       |
| cancel-button-text   | 取消按文本内容                                   | string   |        | 取消                       |
| show-confirm-button  | 是否显示确认按钮                                 | boolean  |        | true                       |
| confirm-button-text  | 确认按钮文本内容                                 | string   |        | 确认                       |
| close-on-click-modal | 是否可以通过点击 modal 关闭                      | boolean  |        | true                       |
| before-close         | 关闭前回调                                       | function |        | function({ action, done }) |
| callback             | 关闭后回调，若不使用 Promise，可以使用此参数指定 | function |        | function({ action })       |

## 事件

| 事件名称 | 说明     | 回调参数 |
| -------- | -------- | -------- |
| close    | 关闭回调 |          |

## 示例

### 基本弹窗

```html
<template>
	<cl-page :padding="20">
		<cl-confirm ref="Confirm"></cl-confirm>

		<cl-button @tap="open">打开</cl-button>
	</cl-page>
</template>

<script lang="ts" setup>
	import { ref } from "vue";
	import { useCool } from "/@/cool";

	const { ui } = useCool();

	const Confirm = ref<ClConfirm.Ref>();

	function open() {
		Confirm.value?.open({
			title: "温馨提示",
			message: "你有一个待取信件",
			callback(action) {
				switch (action) {
					case "confirm":
						ui.showToast("领取成功");
						break;

					case "cancel":
						ui.showToast("已取消");
						break;

					case "close":
						ui.showToast("已关闭");
						break;
				}
			}
		});
	}
</script>
```

自定义内容

```html
<template>
	<cl-page :padding="20">
		<cl-confirm ref="Confirm">
			<cl-input></cl-input>
		</cl-confirm>

		<cl-button @tap="open">打开</cl-button>
	</cl-page>
</template>

<script lang="ts" setup>
	import { ref } from "vue";
	import { useCool } from "/@/cool";

	const { ui } = useCool();

	const Confirm = ref<ClConfirm.Ref>();

	function open() {
		Confirm.value?.open({
			title: "温馨提示"
		});
	}
</script>
```

### 关闭回掉

`showLoading` 和 `hideLoading` 可控制确认按钮的加载状态以便来处理请求场景。

```html
<template>
	<cl-page :padding="20">
		<cl-confirm ref="Confirm"></cl-confirm>

		<cl-button @tap="open">打开</cl-button>
	</cl-page>
</template>

<script lang="ts" setup>
	import { ref } from "vue";
	import { useCool } from "/@/cool";

	const { ui } = useCool();

	const Confirm = ref<ClConfirm.Ref>();

	function open() {
		Confirm.value?.open({
			title: "温馨提示",
			message: "你有一个待取信件",
			beforeClose(action, { done, showLoading, hideLoading }) {
				if (action == "confirm") {
					showLoading();

					setTimeout(() => {
						done();
						ui.showToast("领取成功");
					}, 2000);
				} else {
					done();
				}
			}
		});
	}
</script>
```
