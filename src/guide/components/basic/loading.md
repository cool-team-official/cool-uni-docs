# Loading 加载图标

`cl-loading` 加载数据时显示动效

## 参数

| 参数  | 说明     | 类型   | 可选值         | 默认值  |
| ----- | -------- | ------ | -------------- | ------- |
| color | 图标颜色 | string |                | #409EFF |
| size  | 图标尺寸 | number |                | 25      |
| theme | 主题     | string | default / spin | 25      |

## 示例

```html
<cl-loading />

<cl-loading theme="spin" />
```

## Loading-mask 参数

| 参数       | 说明       | 类型    | 可选值 | 默认值                |
| ---------- | ---------- | ------- | ------ | --------------------- |
| text       | 提示文字   | string  |
| loading    | 是否加载中 | boolean |        | false                 |
| fullscreen | 是否全屏   | boolean |        | false                 |
| color      | 字体颜色   | string  |        | #409EFF               |
| background | 背景颜色   | string  |        | rgba(255,255,255,0.7) |

## 区域加载示例

在容器中加载数据时显示。

样式 `space` 须添加 `position: relative`

```html
<view class="space">
	<cl-loading-mask loading />

	<cl-form>
		<cl-form-item label="昵称">
			<cl-input></cl-input>
		</cl-form-item>

		<cl-form-item label="性别">
			<cl-select></cl-select>
		</cl-form-item>
	</cl-form>
</view>

<style lang="scss" scoped>
	.space {
		font-size: 28rpx;
		width: 100%;
		background-color: #f7f7f7;
		position: relative;
	}
</style>
```
