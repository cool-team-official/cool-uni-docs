# Divider 分割符

分割符组件，区隔内容的分割线

## 参数

| 参数             | 说明                           | 类型           | 可选值 | 默认值  |
| ---------------- | ------------------------------ | -------------- | ------ | ------- |
| background-color | 背景颜色                       | string         |        | #ffffff |
| color            | 线条颜色，Array 下当渐变色处理 | string / Array |        | #dcdfe6 |
| width            | 线条宽度                       | string         |        | 100%    |

## 示例

### 基本用法

```html
<cl-divider>默认</cl-divider>

<cl-divider color="#409EFF">不同颜色</cl-divider>
```

### 渐变颜色

```html
<cl-divider :color="['#fff', '#F56C6C']">渐变颜色</cl-divider>
```

### 线条宽度

```html
<cl-divider width="50%">线条宽度</cl-divider>
```

### 自定义

```html
<cl-divider>
	<text class="cl-icon-favor"></text>
	<text>猜你喜欢</text>
</cl-divider>
```
