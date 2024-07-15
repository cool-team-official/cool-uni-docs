# Captcha 验证码输入框

## 参数

| 参数    | 说明       | 类型            | 可选值 | 默认值 |
| ------- | ---------- | --------------- | ------ | ------ |
| v-model | 绑定值     | string          |        |        |
| height  | 高度       | number / string |        | 120rpx |
| length  | 验证码位数 | number          |        | 4      |
| gutter  | 间隔       | number          |        | 20     |

## 事件

| 事件名称 | 说明           | 回调参数        |
| -------- | -------------- | --------------- |
| done     | 输入完成时触发 | function(value) |

## 示例

### 基本用法

```html
<cl-captcha></cl-captcha>
```

### 设置高度

```html
<cl-captcha :height="140"></cl-captcha>
```

### 设置位数

```html
<cl-captcha :length="6"></cl-captcha>
```
