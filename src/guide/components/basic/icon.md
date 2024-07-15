# Icon 图标

`cl-icon` 提供了一套常用的图标集合，继续更新中

## 参数

| 参数       | 说明         | 类型            | 可选值 | 默认值 |
| ---------- | ------------ | --------------- | ------ | ------ |
| name       | 图标类名     | string          |        |        |
| class-name | 完整图标类名 | string          |        |        |
| size       | 尺寸         | string / number |        |        |
| color      | 颜色         | string          |        |        |

## 示例

### 基本用法

```html
<cl-icon name="search"></cl-icon>
```

### 大小

```html
<cl-icon name="search" :size="40"></cl-icon>
```

### 颜色

设置 `color="primary"` 为主色

```html
<cl-icon name="search" color="red"></cl-icon>
```
