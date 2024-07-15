# Tag 标签

`cl-tag` 用于标记和选择

## 参数

| 参数     | 说明       | 类型    | 可选值                                    | 默认值 |
| -------- | ---------- | ------- | ----------------------------------------- | ------ |
| type     | 类型       | string  | primary / success / error / warning/ info |
| plaing   | 是否镂空   | boolean |                                           | false  |
| size     | 尺寸       | string  | small / mini                              | small  |
| closable | 是否可关闭 | boolean |                                           | false  |
| round    | 是否圆角   | boolean |                                           | false  |

## 方法

| 事件名称 | 说明     | 参数 |
| -------- | -------- | ---- |
| open     | 显示标签 |      |
| close    | 关闭标签 |      |

## 示例

### 基础用法

```html
<!-- 默认 -->
<cl-tag>默认</cl-tag>

<!-- 圆角 -->
<cl-tag round>圆角</cl-tag>
```

### 标签尺寸

```html
<!-- 默认尺寸 -->
<cl-tag size="small">默认尺寸</cl-tag>

<!-- 小尺寸 -->
<cl-tag size="mini">小尺寸</cl-tag>
```

### 标签颜色

```html
<cl-tag type="primary">主要</cl-tag>
<cl-tag type="success">成功</cl-tag>
<cl-tag type="error">失败</cl-tag>
<cl-tag type="warning">警告</cl-tag>
<cl-tag type="info">信息</cl-tag>
```

### 其他

```html
<!-- 镂空 -->
<cl-tag plain>镂空</cl-tag>
<!-- 可移除标签 -->
<cl-tag closable>可移除标签</cl-tag>
```
