# SelectRegion 下拉城市选择

## 参数

| 参数                 | 说明                   | 类型    | 可选值 | 默认值                                                           |
| -------------------- | ---------------------- | ------- | ------ | ---------------------------------------------------------------- |
| modelValue / v-model | 绑定值                 | array   |        |                                                                  |
| api                  | 城市数据 json 文件链接 | string  |        | https://cool-uni.oss-cn-shanghai.aliyuncs.com/comm/city-pca.json |
| options              | 城市数据               | array   |        |                                                                  |
| disabled             | 是否禁用               | boolean |        |                                                                  |
| border               | 是否带边框             | boolean |        | true                                                             |
| labelKey             | key 标识               | boolean |        | name                                                             |
| valueKey             | value 标识             | boolean |        | code                                                             |
| separator            | 分隔符                 | string  |        | "-"                                                              |

## 事件

| 事件名称 | 说明                   | 回调参数 |
| -------- | ---------------------- | -------- |
| change   | 绑定值变化时触发的事件 | value    |

## 示例

```html
<template>
	<cl-select-region v-model="city"></cl-select-region>
</template>

<script lang="ts" setup>
	import { ref } from "vue";
	const city = ref([]);
</script>
```
