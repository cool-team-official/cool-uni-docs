# InputNumber 计数器

`cl-input-number` 计数器组件，仅允许输入标准的数字值，可定义范围

## 参数

| 参数                 | 说明                   | 类型    | 可选值 | 默认值 |
| -------------------- | ---------------------- | ------- | ------ | ------ |
| modelValue / v-model | 绑定值                 | number  |        | 0      |
| step                 | 计数器步长             | number  |        | 1      |
| max                  | 设置计数器允许的最大值 | number  |        | 100    |
| min                  | 设置计数器允许的最小值 | number  |        | 0      |
| input                | 是否可输入             | boolean |        | false  |
| width                | 输入框宽度             | number  |        | 100    |
| precision            | 数值精度               | number  |        |        |

## 事件

| 事件名称 | 说明                   | 回调参数 |
| -------- | ---------------------- | -------- |
| change   | 绑定值变化时触发的事件 |          |

## 示例

### 基本用法

```html
<cl-input-number />
```

### 步数

```html
<cl-input-number :step="5" />
```

### 范围（4~10）

```html
<cl-input-number :max="10" :min="4" />
```
