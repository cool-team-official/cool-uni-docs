# Form 表单校验

基于 `async-validator` 的表单验证，规则文档请查阅 [https://github.com/yiminghe/async-validator](https://github.com/yiminghe/async-validator)

## Form

### 参数

| 参数                    | 说明             | 类型    | 可选值                     | 默认值 |
| ----------------------- | ---------------- | ------- | -------------------------- | ------ |
| v-model                 | 表单数据对象     | object  |
| rules                   | 表单验证规则     | object  |
| border                  | 是否带边框       | boolean |                            | false  |
| disabled                | 是否禁用         | boolean |                            | false  |
| tips                    | 错误信息提示     | string  | "toast" / "inner" / "none" | true   |
| label-width             | 表单域标签的宽度 | string  |                            | 150rpx |
| label-position          | 表单域标签的位置 | string  | right / left / top         | right  |
| validate-on-rule-change | 规则改变时验证   | boolean |                            |        |

### 方法

| 事件名称      | 说明                         | 参数                                                              |
| ------------- | ---------------------------- | ----------------------------------------------------------------- |
| setRules      | 设置规则                     | Function(rules)                                                   |
| validate      | 对整个表单进行校验的方法     | Function(callback: Function(boolean, object))                     |
| validateField | 对部分表单字段进行校验的方法 | Function(props: string / array, callback: Function(errorMessage)) |
| resetFields   | 对整个表单进行重置           |
| clearValidate | 移除表单项的校验结果         | Function(props: string / array)                                   |

## Form-item

### 参数

| 参数                     | 说明                 | 类型    | 可选值               | 默认值 |
| ------------------------ | -------------------- | ------- | -------------------- | ------ |
| prop                     | 表单字段名           | string  |                      |        |
| label                    | 表单域标签           | string  |                      |        |
| label-width              | 表单域标签的宽度     | string  |                      | 150rpx |
| show-message             | 是否显示校验错误信息 | boolean |                      | true   |
| justify                  | 水平排序             | string  | start / end / center |        |
| validate-on-value-change | 值改变时是否触发验证 | boolean |                      | false  |

::: warning
如果 rules 带有自定义验证方法 `validator`, 请改用 `setRules` 的方式设置规则（在初始化中设置即可）
:::

::: danger
表单值必须使用 `ref` 绑定。

```ts
const form = ref<any>({
	name: ""
});
```

:::

### 示例

```html
<template>
	<cl-page :padding="20">
		<cl-card label="基础用法">
			<cl-button @tap="setTips('inner')" v-if="tips == 'toast'"
				>切换为行内提示，输入时自动触发</cl-button
			>
			<cl-button @tap="setTips('toast')" v-else>切换为Toast提示，提交时弹出</cl-button>

			<cl-form ref="Form" v-model="form" :rules="rules" :tips="tips" :disabled="loading">
				<cl-form-item label="活动名称" prop="name">
					<cl-input v-model="form.name"></cl-input>
				</cl-form-item>

				<cl-form-item label="活动区域" prop="area">
					<cl-select v-model="form.area" :options="options.area"></cl-select>
				</cl-form-item>

				<cl-form-item label="活动时间" prop="date">
					<cl-select v-model="form.date" mode="date"></cl-select>
				</cl-form-item>

				<cl-form-item label="活动类型" prop="type">
					<cl-checkbox-group v-model="form.type">
						<cl-checkbox
							v-for="(item, index) in options.type"
							:key="index"
							:label="item.value"
						>
							{{ item.label }}
						</cl-checkbox>
					</cl-checkbox-group>
				</cl-form-item>

				<cl-form-item label="资源" prop="source">
					<cl-radio-group v-model="form.source">
						<cl-radio
							v-for="(item, index) in options.source"
							:key="index"
							:label="item.value"
						>
							{{ item.label }}
						</cl-radio>
					</cl-radio-group>
				</cl-form-item>
			</cl-form>

			<cl-row type="flex" justify="end">
				<cl-button @tap="reset">重置</cl-button>
				<cl-button @tap="clear">清空</cl-button>
				<cl-button @tap="submit" type="success" :loading="loading">提交</cl-button>
			</cl-row>
		</cl-card>
	</cl-page>
</template>

<script lang="ts" setup>
	import { reactive, ref } from "vue";

	const Form = ref<ClForm.Ref>();

	const form = ref<any>({
		name: "",
		area: 2,
		type: [0, 1],
		source: 0
	});

	const rules = reactive<any>({
		name: {
			required: true,
			message: "活动名称不能为空"
		},
		area: {
			required: true,
			message: "活动区域不能为空"
		}
	});

	const options = reactive<any>({
		area: [
			{
				label: "A区",
				value: 0
			},
			{
				label: "B区",
				value: 1
			},
			{
				label: "C区",
				value: 2
			}
		],
		type: [
			{
				label: "线上活动",
				value: 0
			},
			{
				label: "推广活动",
				value: 1
			},
			{
				label: "线下活动",
				value: 2
			}
		],
		source: [
			{
				label: "赞助",
				value: 0
			},
			{
				label: "场地",
				value: 1
			}
		]
	});

	const tips = ref<string>("toast");

	const loading = ref<boolean>(false);

	function setTips(name: string) {
		tips.value = name;
	}

	function submit() {
		Form.value?.validate((valid, errors) => {
			if (valid) {
				console.log(form.value);
				loading.value = true;

				setTimeout(() => {
					loading.value = false;
				}, 1500);
			}
		});
	}

	function reset() {
		Form.value?.reset();
	}

	function clear() {
		Form.value?.clear();
	}
</script>
```
