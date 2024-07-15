# Card 卡片

## 参数

| 参数      | 说明         | 类型    | 可选值 | 默认值 |
| --------- | ------------ | ------- | ------ | ------ |
| label     | 标题         | string  |        |        |
| more      | 是否显示更多 | boolean |        | false  |
| more-text | 更多文本内容 | string  |        |        |
| loading   | 是否加载中   | boolean |        | false  |

## 示例

### 基本用法

```html
<cl-card label="基础用法">
	<cl-text value="目光所至则心向往之"></cl-text>
</cl-card>
```

### 显示更多

配置 `more` 参数控制显示隐藏，`more-text` 为文本内容

```html
<cl-card label="显示更多" more more-text="查看更多">
	<cl-text value="被爱好似有依靠"></cl-text>
</cl-card>
```

### 加载中

配置 `loading` 参数

```html
<cl-card label="加载中" loading>
	<cl-text value="他也成为了这平淡生活里最明媚的一道光"></cl-text>
</cl-card>
```
