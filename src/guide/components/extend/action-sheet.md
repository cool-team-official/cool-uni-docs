# ActionSheet 操作菜单

从底部弹出的一个操作菜单，类似于 uni.showActionSheetAPI，同时添加新的支持。

## 方法

| 事件名称 | 说明 | 参数                      |
| -------- | ---- | ------------------------- |
| open     | 打开 | function(option: Options) |

### Options 有效值

| 参数                 | 说明               | 类型     | 可选值 | 默认值                    |
| -------------------- | ------------------ | -------- | ------ | ------------------------- |
| list                 | 菜单列表           | array    |
| close-on-click-modal | 点击遮罩层是否关闭 | boolean  |        | true                      |
| callback             | 回调               | function |        | function({ action })      |
| before-close         | 关闭前回调         | function |        | function({ action,done }) |
| show-cancel          | 是否显示取消按钮   | boolean  |        | true                      |
| cancel-text          | 取消按钮文本内容   | string   |        | 取消                      |

## 示例

`callback` 为点击回掉，`action` 为当前点击 `list` 的下标

```html
<template>
	<cl-page :padding="20">
		<cl-action-sheet ref="ActionSheet" />

		<cl-card label="基础用法">
			<cl-button @tap="open">打开</cl-button>
		</cl-card>
	</cl-page>
</template>

<script lang="ts" setup>
	import { ref } from "vue";

	const ActionSheet = ref<ClActionSheet.Ref>();

	function open() {
		ActionSheet.value?.open({
			list: [
				{
					label: "删除好友"
				}
			],
			callback(action) {
				console.log(action);
			}
		});
	}
</script>
```

### 添加样式

```html
<template>
	<cl-page :padding="20">
		<cl-action-sheet ref="ActionSheet" />

		<cl-card label="基础用法">
			<cl-button @tap="open">打开</cl-button>
		</cl-card>
	</cl-page>
</template>

<script lang="ts" setup>
	import { ref } from "vue";

	const ActionSheet = ref<ClActionSheet.Ref>();

	function open2() {
		ActionSheet.value?.open({
			list: [
				{
					label: "删除好友",
					color: "red",
					size: "40rpx"
				}
			]
		});
	}
</script>
```

### 添加禁用

```html
<template>
	<cl-page :padding="20">
		<cl-action-sheet ref="ActionSheet" />

		<cl-card label="基础用法">
			<cl-button @tap="open">打开</cl-button>
		</cl-card>
	</cl-page>
</template>

<script lang="ts" setup>
	import { ref } from "vue";

	const ActionSheet = ref<ClActionSheet.Ref>();

	function open() {
		ActionSheet.value?.open({
			list: [
				{
					label: "删除好友会同时删除所有聊天记录",
					disabled: true
				},
				{
					label: "删除好友",
					color: "red"
				}
			]
		});
	}
</script>
```

### 关闭前回掉

配置 `beforeClose` 参数，`done` 方法为关闭窗口

```html
<template>
	<cl-page :padding="20">
		<cl-action-sheet ref="ActionSheet" />

		<cl-card label="基础用法">
			<cl-button @tap="open">打开</cl-button>
		</cl-card>
	</cl-page>
</template>

<script lang="ts" setup>
	import { ref } from "vue";
	import { useCool } from "/@/cool";

	const { ui } = useCool();

	const ActionSheet = ref<ClActionSheet.Ref>();

	function open() {
		ActionSheet.value?.open({
			closeOnClickModal: false,
			list: [
				{
					label: "删除好友",
					color: "red"
				}
			],
			beforeClose(index, done) {
				ui.showConfirm({
					title: "提示",
					message: "是否删除该联系人",
					callback(action) {
						if (action == "confirm") {
							ui.showToast("删除成功");
							done();
						}
					}
				});
			}
		});
	}
</script>
```
