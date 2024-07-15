# Avatar 头像

## Avatar 参数

| 参数      | 说明     | 类型    | 可选值          | 默认值      |
| --------- | -------- | ------- | --------------- | ----------- |
| src       | 图片地址 | string  |
| mode      | 裁剪模式 | string  |                 | scaleToFill |
| name      | 展位名称 | string  |                 |             |
| lazy-load | 懒加载   | boolean |                 | false       |
| size      | 图标尺寸 | number  |                 | 80          |
| shape     | 类型     | string  | circle / square | circle      |

## Avatar-gorup 参数

| 参数     | 说明     | 类型    | 可选值 | 默认值      |
| -------- | -------- | ------- | ------ | ----------- |
| urls     | 图片地址 | string  |
| size     | 图标尺寸 | number  |        | 80          |
| mode     | 裁剪模式 | string  |        | scaleToFill |
| max      | 最大数量 | number  |        | 5           |
| shape    | 懒加载   | boolean |        | false       |
| showMore | 图标尺寸 | number  |        | 80          |

## 示例

### 基本用法

```html
<cl-avatar src=""></cl-avatar>
```

### 头像形状

```html
<cl-avatar shape="square"></cl-avatar>
```

### 头像大小

```html
<cl-avatar :size="70"></cl-avatar>
```

### 文字头像

```html
<cl-avatar :size="70">cool</cl-avatar>
```

### 头像组

```html
<cl-avatar-group :urls="[...]"></cl-avatar-group>
```
