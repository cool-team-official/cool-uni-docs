# Badge 角标

## 参数

| 参数        | 说明         | 类型                                | 可选值 | 默认值 |
| ----------- | ------------ | ----------------------------------- | ------ | ------ |
| model-value | 文本内容     | string                              |
| max         | 最大值       | number                              |
| is-dot      | 是否点状显示 | boolean                             |        | false  |
| hidden      | 是否隐藏     | boolean                             |        | false  |
| type        | 类型         | primary / success / error / warning |        |

## 示例

### 基本用法

```html
<cl-badge value="16">
	<cl-button>评论</cl-button>
</cl-badge>
```

### 自定义内容

```html
<cl-badge value="NEW">
	<cl-button>自定义内容</cl-button>
</cl-badge>
```

### 最大值

```html
<cl-badge :value="132" :max="99">
	<cl-button>最大</cl-button>
</cl-badge>
```

### 点形状

```html
<cl-badge :value="132" is-dot>
	<cl-button>点形状</cl-button>
</cl-badge>
```

### 不同状态

```html
<cl-badge type="primary" is-dot>
	<cl-button type="text" size="mini">主要</cl-button>
</cl-badge>
```
