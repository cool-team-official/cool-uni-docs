# Rate 评分

## 参数

| 参数                 | 说明               | 类型            | 可选值 | 默认值             |
| -------------------- | ------------------ | --------------- | ------ | ------------------ |
| modelValue / v-model | 绑定值             |                 | number |
| icon                 | 图标类名           | string          |        | cl-icon-favor-fill |
| color                | 选中颜色，支持多色 | string / array  |        | #409EFF            |
| void-color           | 未选中颜色         | string          |        | #C6D1DE            |
| size                 | 尺寸               | number / string |        | 40                 |
| max                  | 最大值             | number          |        | 5                  |
| disabled             | 是否禁用           | boolean         |        | false              |
| show-text            | 是否显示值         | boolean         |        | false              |

## 事件

| 事件名称 | 说明                   | 回调参数 |
| -------- | ---------------------- | -------- |
| change   | 绑定值变化时触发的事件 |

## 示例

### 基本用法

```html
<cl-rate :value="2.7"></cl-rate>
```

### 多色

```html
<cl-rate :value="2" :color="['#F56C6C', '#E6A23C', '#67C23A']"></cl-rate>
```

### 其他图标

```html
<cl-rate :value="1" icon="cl-icon-emoji"></cl-rate>
```
