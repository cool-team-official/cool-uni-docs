# Dialog 对话框

## 参数

| 参数                 | 说明                        | 类型    | 可选值 | 默认值 |
| -------------------- | --------------------------- | ------- | ------ | ------ |
| v-model              | 是否显示                    | boolean |        |        |
| title                | 标题                        | string  |
| width                | 对话框宽度                  | string  |        | 80%    |
| close-on-click-modal | 是否可以通过点击 modal 关闭 | boolean |        | true   |
| show-close-btn       | 是否显示关闭按钮            | boolean |        | false  |

## 事件

| 事件名称 | 说明     | 回调参数 |
| -------- | -------- | -------- |
| close    | 关闭回调 |          |

## 示例

```html
<template>
	<cl-page :padding="20">
		<cl-dialog title="标题" v-model="visible">
			<text>云想衣裳花想容，春风拂槛露华浓。若非群玉山头见，会向瑶台月下逢。</text>
		</cl-dialog>

		<cl-card label="基础用法">
			<cl-button @tap="open">打开</cl-button>
		</cl-card>
	</cl-page>
</template>

<script lang="ts" setup>
	import { ref } from "vue";

	const visible = ref<boolean>(false);

	function open() {
		visible.value = true;
	}
</script>
```
