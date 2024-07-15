# SelectCity 城市选择器

省市区其他数据来源 https://github.com/modood/Administrative-divisions-of-China

## 参数

| 参数                 | 说明       | 类型    | 可选值 | 默认值          |
| -------------------- | ---------- | ------- | ------ | --------------- |
| modelValue / v-model | 绑定值     | array   |        |                 |
| data                 | 城市数据   | array   |        | 默认 pca 省市区 |
| title                | 标题       | string  |        | 请选择所在地区  |
| labelKey             | 显示关键字 | string  |        | name            |
| valueKey             | 值关键字   | string  |        | name            |
| placeholder          | 占位文本   | string  |        | 请选择所在地区  |
| separator            | 分隔符     | boolean |        | " - "           |

## 事件

| 事件名称 | 说明                   | 回调参数 |
| -------- | ---------------------- | -------- |
| change   | 绑定值变化时触发的事件 | value    |

## 示例

### 基础用法

```html
<cl-select-city v-model="v1" />
```

### 省市区乡镇 4 级

```html
<template>
	<cl-select-city v-model="v2" :data="CityPcas" placeholder="省市区县、乡镇" />
</template>

<script lang="ts" setup>
	import CityPcas from "../static/city-pcas.json";
</script>
```

### 自定义

```html
<cl-select-city v-model="v3">
	<template #default="{ selection }">
		<cl-row :margin="[0, 0, 20, 0]" v-if="selection.length">
			<cl-tag v-for="item in selection" plain round :key="item.code">{{ item.name }}</cl-tag>
		</cl-row>

		<cl-button round>选择所在地区</cl-button>
	</template>
</cl-select-city>
```
