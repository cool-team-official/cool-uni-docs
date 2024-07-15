# Grid 宫格布局

## 参数

| 参数   | 说明       | 类型    | 可选值 | 默认值 |
| ------ | ---------- | ------- | ------ | ------ |
| column | 一行几列   | number  |        | 2      |
| border | 是否带边框 | boolean |        | false  |

## 示例

```html
<cl-grid :column="5">
	<cl-grid-item v-for="(item, index) in 15" :key="index"> {{ item }} </cl-grid-item>
</cl-grid>
```
