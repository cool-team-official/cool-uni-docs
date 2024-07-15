# Radio 单选框

## Radio

### 参数

| 参数                 | 说明           | 类型                      | 可选值 | 默认值 |
| -------------------- | -------------- | ------------------------- | ------ | ------ |
| modelValue / v-model | 绑定值         | string / number / boolean |        |        |
| label                | 标识           | string / number / boolean |        |        |
| disabled             | 是否禁用       | boolean                   |        | false  |
| size                 | 图标大小       | number                    |        | 40     |
| border               | 是否显示边框   | boolean                   |        | false  |
| fill                 | 是否宽度填充   | boolean                   |        |        |
| text                 | 是否只显示文字 | boolean                   |        |        |
| round                | 是否圆角       | boolean                   |        |        |

### 事件

| 事件名称 | 说明                   | 回调参数        |
| -------- | ---------------------- | --------------- |
| change   | 绑定值变化时触发的事件 | 选中的 label 值 |

## Radio-group

### 参数

| 参数            | 说明           | 类型                      | 可选值 | 默认值 |
| --------------- | -------------- | ------------------------- | ------ | ------ |
| value / v-model | 绑定值         | string / number / boolean |        |        |
| disabled        | 是否禁用       | boolean                   |        | false  |
| border          | 是否显示边框   | boolean                   |        | false  |
| fill            | 是否宽度填充   | boolean                   |        |        |
| text            | 是否只显示文字 | boolean                   |        |        |
| round           | 是否圆角       | boolean                   |        |        |

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
<cl-radio v-model="v1" label="1">炸鸡</cl-radio>
<cl-radio v-model="v1" label="2">汉堡</cl-radio>
<cl-radio v-model="v1" label="3">薯条</cl-radio>
<cl-radio v-model="v1" label="4">可乐</cl-radio>
<cl-radio v-model="v1" label="5">冰淇淋</cl-radio>
```

#### 禁用

```html
<cl-radio v-model="v3" disabled label="1">炸鸡</cl-radio>
<cl-radio v-model="v3" disabled label="2">汉堡</cl-radio>
```

#### 边框

```html
<cl-radio v-model="v4" border label="1">炸鸡</cl-radio>
<cl-radio v-model="v4" border label="2">汉堡</cl-radio>
```

#### 边框填充

```html
<cl-radio-group v-model="v5" fill border>
	<cl-radio label="1">
		<cl-text align="right" block>鸡米花（靠右）</cl-text>
	</cl-radio>
	<cl-radio label="2">可乐</cl-radio>
	<cl-radio label="3">蛋挞</cl-radio>
</cl-radio-group>
```

#### 只显示文字

```html
<cl-radio-group v-model="v6" text border>
	<cl-radio label="1">炸鸡</cl-radio>
	<cl-radio label="2">汉堡</cl-radio>
</cl-radio-group>
```

#### 圆角

```html
<cl-radio-group v-model="v7" round border>
	<cl-radio label="1">炸鸡</cl-radio>
	<cl-radio label="2">汉堡</cl-radio>
</cl-radio-group>
```

#### 文字贼多

```html
<cl-radio-group v-model="v8">
	<cl-radio label="1"> 汉堡、可乐、鸡肉卷、鸡排、鸡腿、蛋挞、薯条、鸡翅、原味鸡 </cl-radio>

	<cl-radio label="2"> 鸡块、鸡米发、鸡腿堡 </cl-radio>
</cl-radio-group>
```

#### 自定义图标

```html
<cl-radio-group v-model="v9">
	<cl-radio v-for="(item, index) in ['汉堡', '可乐', '薯条']" :key="index" :label="index">
		<template #icon="{ checked }">
			<cl-icon name="like-fill" :size="36" :color="checked ? 'primary' : 'info'" />
		</template>
		{{ item }}
	</cl-radio>
</cl-radio-group>
```
