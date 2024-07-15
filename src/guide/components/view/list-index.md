# ListIndex 索引列表

## 参数

| 参数        | 说明                     | 类型                 | 可选值 | 默认值     |
| ----------- | ------------------------ | -------------------- | ------ | ---------- |
| data        | 数据列表                 | array                |        |            |
| dict        | 字典                     | { id, avatar, name } |        |            |
| selectable  | 是否可选                 | boolean              |        |            |
| selection   | 已选列表                 | array                |        |            |
| isGroup     | 是否分组                 | boolean              |        | true       |
| indexBar    | 是否显示序号栏           | boolean              |        | true       |
| searchBar   | 显示搜索栏               | boolean              |        | true       |
| placeholder | 搜索占位内容             | boolean              |        | 搜索关键字 |
| delay       | 延迟计算高度、弹窗中使用 | number               |        | 0          |

## 事件

| 插槽             | 说明                              | 参数      |
| ---------------- | --------------------------------- | --------- |
| select           | 点击行触发                        | item      |
| selection-change | selectable 可选模式下，选择后触发 | selection |

## 插槽

| 插槽    | 说明     | 参数                             |
| ------- | -------- | -------------------------------- |
| header  | 字母序号 | { item, isActive }               |
| item    | 数据项   | { item, index, group, isActive } |
| prepend | 头部追加 |                                  |
| append  | 底部追加 |                                  |

## 示例

### 基本用法

```html
<template>
	<cl-page fullscreen>
		<cl-list-index :data="CityPcas"></cl-list-index>
	</cl-page>
</template>

<script lang="ts" setup>
	// 自定选择数据源
	import CityPcas from "../static/city-pcas.json";
</script>
```
