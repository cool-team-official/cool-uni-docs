# Noticebar 通知栏

## 参数

| 参数             | 说明           | 类型           | 可选值                | 默认值     |
| ---------------- | -------------- | -------------- | --------------------- | ---------- |
| text             | 文本内容       | string / array |
| direction        | 方向           | string         | horizontal / vertical | horizontal |
| color            | 姿态颜色       | string         |                       | #444444    |
| background-color | 背景颜色       | string         |                       | #ffffff    |
| scrollable       | 能否滑动       | boolean        |                       | false      |
| closeable        | 能否关闭       | boolean        |                       | false      |
| icon             | 左侧图标类名   | string         |
| duration         | 滑动时长（秒） | number         |                       | 10         |

## 示例

### 基本用法

```html
<cl-noticebar text="云想衣裳花想容，春风拂槛露华浓。"></cl-noticebar>
```

### 带图标

```html
<cl-noticebar icon="cl-icon-notification" text="云想衣裳花想容，春风拂槛露华浓。"></cl-noticebar>
```

### 可关闭

```html
<cl-noticebar text="云想衣裳花想容，春风拂槛露华浓。" closeable></cl-noticebar>
```

### 可滑动

```html
<cl-noticebar text="云想衣裳花想容，春风拂槛露华浓。" scrollable></cl-noticebar>
```

### 不同方向

`text` 需为数组

```html
<cl-noticebar
	:text="['云想衣裳花想容，春风拂槛露华浓。', '这世界那么多人']"
	direction="vertical"
	scrollable
	:duration="5"
></cl-noticebar>
```
