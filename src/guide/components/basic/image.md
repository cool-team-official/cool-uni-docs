# Image 图片

`cl-image` 组件基于 uni-app 的 `image` 组件

## 参数

| 参数         | 说明             | 类型                    | 可选值 | 默认值 |
| ------------ | ---------------- | ----------------------- | ------ | ------ |
| src          | 资源地址         | string                  |        |        |
| mode         | 裁剪、缩放的模式 | string                  |        |        |
| size         | 尺寸             | string / number         |        | 100%   |
| round        | 是否圆角         | boolean                 |        | false  |
| margin       | 外间距           | array / string / number |        |        |
| preview-list | 预览列表         | array                   |        |        |

## 插槽

| 插槽        | 说明         |
| ----------- | ------------ |
| error       | 图片加载失败 |
| placeholder | 图片地址为空 |

## 示例

裁剪模式

-   scaleToFill 不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
-   aspectFit 保持纵横比缩放图片，使图片的长边能完全显示出来
-   aspectFill 保持纵横比缩放图片，只保证图片的短边能完全显示出来
-   widthFix 宽度不变，高度自动变化，保持原图宽高比不变
-   heightFix 高度不变，宽度自动变化，保持原图宽高比不变

```html
<cl-image mode="aspectFill"></cl-image>
```

### 插槽

```html
<!-- 空数据 -->
<cl-image src="">
	<template #placeholder>
		<text>图片地址为空</text>
	</template>
</cl-image>

<!-- 加载失败 -->
<cl-image src="http://">
	<template #error>
		<text>图片地址错误</text>
	</template>
</cl-image>
```

### 自定义大小

```html
<cl-image :size="100"></cl-image>

<cl-image :size="[100, 200]"></cl-image>
```

### 点击预览

配置 `previewList`, 会自动匹配当前的 `src` 为第一张显示

```html
<cl-image :preview-list="previewList"></cl-image>
```
