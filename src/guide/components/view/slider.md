# Slider 滑动选择器

## 参数

| 参数             | 说明                         | 类型    | 可选值 | 默认值       |
| ---------------- | ---------------------------- | ------- | ------ | ------------ |
| value / v-model  | 绑定值                       | number  |        | 0            |
| disabled         | 是否禁用                     | boolean |        | false        |
| min              | 最小值                       | number  |        | 0            |
| max              | 最大值                       | number  |        | 100          |
| step             | 步长                         | number  |        | 1            |
| active-color     | 滑块左侧已选择部分的线条颜色 | string  |        | 各个平台不同 |
| background-color | 滑块右侧背景条的颜色         | string  |        | #e9e9e9      |
| block-size       | 滑块的大小                   | number  |        | 28           |
| block-color      | 滑块的颜色                   | string  |        | #ffffff      |
| show-value       | 是否显示当前 value           | boolean |        | false        |

## 示例

### 基本用法

```html
<cl-slider></cl-slider>
```

### 显示值

```html
<cl-slider show-value></cl-slider>
```
