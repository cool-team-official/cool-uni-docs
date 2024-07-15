# Countdown 倒计时

## 参数

| 参数         | 说明                       | 类型          | 可选值 | 默认值 |
| ------------ | -------------------------- | ------------- | ------ | ------ |
| simple       | 是否精简：为 00 时自动隐藏 | boolean       |        | false  |
| font-size    | 字体大小                   | number        |        | 26     |
| day          | 还剩 n 天                  | number        |        |        |
| hour         | 还剩 n 时                  | number        |        |        |
| minute       | 还剩 n 分                  | number        |        |        |
| second       | 还剩 n 秒                  | number        |        |        |
| datetime     | 日期                       | date / string |        |        |
| number-style | 数字样式                   | object        |        |        |
| text-style   | 分隔符样式                 | object        |        |        |

## 事件

| 事件名称 | 说明       | 回调参数 |
| -------- | ---------- | -------- |
| stop     | 停止时触发 |          |
| done     | 结束时触发 |          |

## 方法

| 事件名称 | 说明 | 参数 |
| -------- | ---- | ---- |
| next     | 继续 |      |
| stop     | 暂停 |      |

## 示例

### 基本用法

```html
<cl-countdown :hour="5"></cl-countdown>
```

### 精简模式

为 00 时自动隐藏

```html
<cl-countdown :hour="1" simple></cl-countdown>
```

### 自定义格式

配置 `format` 参数

— d 天
— h 时
— m 分
— s 秒

```html
<cl-countdown :hour="5" format="{d}天{h}时{m}分{s}秒后结束"></cl-countdown>
```

### 自定义样式

配置 `number-style` 与 `text-style` 参数

```html
<cl-countdown
	:hour="5"
	:font-size="40"
	:number-style="{
        backgroundColor: 'red',
        color: '#fff',
    }"
></cl-countdown>
```
