# SliderVerify 图片拖动验证

## 参数

| 参数        | 说明   | 类型   | 可选值        | 默认值 |
| ----------- | ------ | ------ | ------------- | ------ |
| type        | 类型   | string | fill / rotate | fill   |
| image       | 图片   | string |
| offset      | 偏移值 | number |               | 5      |
| title       | 标题   | string |               |        |
| placeholder | 文案   | string |               |        |

## 事件

| 事件名称 | 说明     | 回调参数 |
| -------- | -------- | -------- |
| success  | 成功回调 |          |
| fail     | 是吧回调 |          |

## 示例

### 拖动验证

```html
<cl-button @tap="refs.sliderVerify?.open()">打开</cl-button>
<cl-slider-verify
  title="拖动验证"
  :image="Bg1"
  :ref="setRefs('sliderVerify')"
/>
```

### 旋转验证

```html
<cl-button @tap="refs.sliderVerify2?.open()">打开</cl-button>
<cl-slider-verify
  title="旋转验证"
  type="rotate"
  :image="Avatar4"
  :ref="setRefs('sliderVerify2')"
/>
```
