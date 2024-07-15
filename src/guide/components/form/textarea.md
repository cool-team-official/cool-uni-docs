# Textarea 文本域

`cl-textarea` 组件基于 uni-app 的 `textarea` 组件

## 参数

| 参数                 | 说明         | 类型            | 可选值 | 默认值 |
| -------------------- | ------------ | --------------- | ------ | ------ |
| modelValue / v-model | 绑定值       | string / number |        |        |
| count                | 是否显示统计 | boolean         |        |        |
| border               | 是否带有边框 | boolean         |        | true   |
| height               | 高           | number          |        | 140    |
| auto-height          | 高           | boolean         |        |        |

## 示例

### 基本用法

```html
<cl-textarea />
```

### 统计字数

```html
<cl-textarea count />
```
