# Loadmore 加载更多

## 参数

| 参数             | 说明             | 类型    | 可选值         | 默认值       |
| ---------------- | ---------------- | ------- | -------------- | ------------ |
| loading          | 是否加载中       | boolean |                | false        |
| finish           | 是否完成         | boolean |                | false        |
| background-color | 背景色           | string  |                | #f7f7f7      |
| text             | 文本内容         | string  |                | 下拉加载更多 |
| loading-text     | 加载中文本内容   | string  |                | 加载中       |
| loading-theme    | 加载图标主题     | string  | default / spin | default      |
| finish-text      | 加载完成文本内容 | string  |                | 没有更多了   |

## 示例

### 基本用法

```html
<cl-loadmore background-color="#fff" :loading="true"></cl-loadmore>
```
