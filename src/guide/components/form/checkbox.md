# Checkbox 多选框

## checkbox

### 参数

| 参数                 | 说明           | 类型                      | 可选值 | 默认值 |
| -------------------- | -------------- | ------------------------- | ------ | ------ |
| modelValue / v-model | 绑定值         | string / number / boolean |        |        |
| label                | 标识           | string / number / boolean |        |        |
| disabled             | 是否禁用       | boolean                   |        | false  |
| size                 | 尺寸           | number                    |        | 40     |
| border               | 是否显示边框   | boolean                   |        | false  |
| fill                 | 是否宽度填充   | boolean                   |        |        |
| text                 | 是否只显示文字 | boolean                   |        |        |
| round                | 是否圆角       | boolean                   |        |        |

### 事件

| 事件名称 | 说明                   | 回调参数        |
| -------- | ---------------------- | --------------- |
| change   | 绑定值变化时触发的事件 | 选中的 label 值 |

## checkbox-group

### 参数

| 参数                 | 说明           | 类型                      | 可选值 | 默认值 |
| -------------------- | -------------- | ------------------------- | ------ | ------ |
| modelValue / v-model | 绑定值         | string / number / boolean |        |        |
| disabled             | 是否禁用       | boolean                   |        | false  |
| border               | 是否显示边框   | boolean                   |        | false  |
| fill                 | 是否宽度填充   | boolean                   |        |        |
| text                 | 是否只显示文字 | boolean                   |        |        |
| round                | 是否圆角       | boolean                   |        |        |

### 事件

| 事件名称 | 说明                   | 回调参数        |
| -------- | ---------------------- | --------------- |
| change   | 绑定值变化时触发的事件 | 选中的 label 值 |

### 插槽

| 插槽名称 | 说明     | 参数        |
| -------- | -------- | ----------- |
| icon     | 图标插槽 | { checked } |

### 示例

#### 基础用法

```html
<cl-checkbox-group v-model="v0">
	<cl-checkbox label="1">炸鸡</cl-checkbox>
	<cl-checkbox label="2">汉堡</cl-checkbox>
	<cl-checkbox label="3">薯条</cl-checkbox>
</cl-checkbox-group>
```

#### 圆角

```html
<cl-checkbox-group v-model="v1" round>
	<cl-checkbox label="1">炸鸡</cl-checkbox>
	<cl-checkbox label="2">汉堡</cl-checkbox>
</cl-checkbox-group>
```

#### 禁用

```html
<cl-checkbox-group v-model="v2">
	<cl-checkbox label="1">炸鸡</cl-checkbox>
	<cl-checkbox disabled label="2">汉堡</cl-checkbox>
</cl-checkbox-group>
```

#### 开关

```html
<cl-checkbox v-model="v3">已阅读并同意《用户协议》及《隐私政策》</cl-checkbox>
```

#### 边框

```html
<cl-checkbox-group v-model="v4">
	<cl-checkbox border label="1">炸鸡</cl-checkbox>
	<cl-checkbox border label="2">汉堡</cl-checkbox>
</cl-checkbox-group>
```

#### 边框填充

```html
<cl-checkbox-group v-model="v5" fill border>
	<cl-checkbox label="1">
		<cl-text align="right" block>鸡米花（靠右）</cl-text>
	</cl-checkbox>
	<cl-checkbox label="2">可乐</cl-checkbox>
	<cl-checkbox label="3">蛋挞</cl-checkbox>
</cl-checkbox-group>
```

#### 只显示文字

```html
<cl-checkbox-group v-model="v6" text border>
	<cl-checkbox label="1">炸鸡</cl-checkbox>
	<cl-checkbox label="2">汉堡</cl-checkbox>
</cl-checkbox-group>
```

#### 边框圆角

```html
<cl-checkbox-group v-model="v7" round border>
	<cl-checkbox label="1">炸鸡</cl-checkbox>
	<cl-checkbox label="2">汉堡</cl-checkbox>
</cl-checkbox-group>
```

#### 文字贼多

```html
<cl-checkbox-group v-model="v8">
	<cl-checkbox label="1"> 汉堡、可乐、鸡肉卷、鸡排、鸡腿、蛋挞、薯条、鸡翅、原味鸡 </cl-checkbox>

	<cl-checkbox label="2"> 鸡块、鸡米发、鸡腿堡 </cl-checkbox>
</cl-checkbox-group>
```

#### 自定义图标

```html
<cl-checkbox-group v-model="v9">
	<cl-checkbox v-for="(item, index) in ['汉堡', '可乐', '薯条']" :key="index" :label="index">
		<template #icon="{ checked }">
			<cl-icon name="like-fill" :size="36" :color="checked ? 'primary' : 'info'" />
		</template>
		{{ item }}
	</cl-checkbox>
</cl-checkbox-group>
```
