# Switch 开关

## 参数

| 参数                 | 说明           | 类型                      | 可选值 | 默认值  |
| -------------------- | -------------- | ------------------------- | ------ | ------- |
| modelValue / v-model | 绑定值         | boolean / string / number |        |         |
| disabled             | 是否禁用       | boolean                   |        | false   |
| active-value         | 打开时的值     | boolean / string / number |        |         |
| inactive-value       | 关闭时的值     | boolean / string / number |        |         |
| active-color         | 打开时的背景色 | string                    |        | #409EFF |
| inactive-color       | 关闭时的背景色 | string                    |        | #C0CCDA |

## 事件

| 事件名称 | 说明                   | 回调参数   |
| -------- | ---------------------- | ---------- |
| change   | 绑定值变化时触发的事件 | 新状态的值 |

## 示例

#### 基础用法

```html
<cl-switch v-model="v1"></cl-switch>
```

#### 其他颜色

```html
<cl-switch color="red"></cl-switch>
```

#### 禁用

```html
<cl-switch v-model="v3" disabled></cl-switch>
```
