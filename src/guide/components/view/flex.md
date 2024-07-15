# Flex 弹性布局

## Row 参数

| 参数    | 说明                      | 类型            | 可选值               | 默认值 |
| ------- | ------------------------- | --------------- | -------------------- | ------ |
| gutter  | 栅格间隔                  | string / number |                      | 0      |
| type    | 布局模式，可选 flex       | string          | flex                 |
| justify | flex 布局下的水平排列方式 | string          | start / end / center | start  |
| align   | flex 布局下的垂直排列方式 | string          | start / end / middle | start  |

## Col 参数

| 参数   | 说明               | 类型            | 可选值 | 默认值 |
| ------ | ------------------ | --------------- | ------ | ------ |
| span   | 栅格占据的列数     | string / number |        | 24     |
| offset | 栅格左侧的间隔格数 | string / number |        | 0      |
| pull   | 栅格向右移动格数   | string / number |        | 0      |
| push   | 栅格向左移动格数   | string / number |        | 0      |

## 示例

### 基本用法

```html
<cl-row>
	<cl-col span="4"> 4 </cl-col>
	<cl-col span="12"> 12 </cl-col>
	<cl-col span="8"> 8 </cl-col>
</cl-row>
```

### 分栏间隔

设置 `gutter` 参数

```html
<cl-row :gutter="20">
	<cl-col span="4"> 4 </cl-col>
	<cl-col span="12"> 12 </cl-col>
	<cl-col span="8"> 8 </cl-col>
</cl-row>
```
