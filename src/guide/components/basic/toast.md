# Toast 吐司提示

## 方法

| 事件名称 | 说明 | 参数                      |
| -------- | ---- | ------------------------- |
| open     | 打开 | function(option: Options) |

### Options 有效值

| 参数        | 说明         | 类型    | 可选值                                     | 默认值    |
| ----------- | ------------ | ------- | ------------------------------------------ | --------- |
| icon        | 图标类名     | string  |
| image       | 图片         | object  |                                            | null      |
| image.url   | 图片地址     | string  |                                            |           |
| image.mode  | 图片裁剪模式 | string  |                                            | aspectFit |
| image.style | 图片样式     | object  |                                            |           |
| message     | 提示消息     | string  |
| duration    | 保留时长     | number  |                                            | 2000      |
| type        | 类型         | string  | primary / success / error / warning / info |           |
| position    | 悬浮位置     | string  | top / middle / bottom                      | bottom    |
| single      | 是否单个显示 | boolean |                                            | false     |

## 示例

在 `cl-page` 中使用

```html
<template>
  <cl-page>
    <cl-button @tap="open"></cl-button>
  </cl-page>
</template>

<script setup lang="ts">
  import { useUi } from "/$/cool-ui";
  const ui = useUi();

  function open() {
    ui.showToast("Hello");
  }
</script>
```

使用 `ref` 获取组件实例并添加 `ClToast.Ref` 类型提示

```html
<template>
  <view class="demo">
    <cl-toast ref="Toast"></cl-toast>
    <cl-button @tap="open">提示</cl-button>
  </view>
</template>

<script lang="ts" setup>
  import { ref } from "vue";
  const Toast = ref<ClToast.Ref>();

  function open() {
    Toast.value?.open({
      message: "Toast 提示",
    });
  }
</script>
```

### 不同类型

配置 `type` 参数：

```html
<template>
  <view class="demo">
    <cl-toast ref="Toast"></cl-toast>
    <cl-button @tap="open">提示</cl-button>
  </view>
</template>

<script lang="ts" setup>
  import { ref } from "vue";
  const Toast = ref<ClToast.Ref>();

  function open() {
    Toast.value?.open({
      message: "Toast 提示",
      type: "primary", // warning error info success
    });
  }
</script>
```

### 不同位置

配置 `position` 参数：

```html
<template>
  <view class="demo">
    <cl-toast ref="Toast"></cl-toast>
    <cl-button @tap="open">提示</cl-button>
  </view>
</template>

<script lang="ts" setup>
  import { ref } from "vue";
  const Toast = ref<ClToast.Ref>();

  function open() {
    Toast.value?.open({
      message: "Toast 提示",
      position: "top", // top middle bottom
    });
  }
</script>
```

### 添加图片、图标

```html
<template>
  <view class="demo">
    <cl-toast ref="Toast"></cl-toast>
    <cl-button @tap="open">图标</cl-button>
    <cl-button @tap="open2">图片</cl-button>
  </view>
</template>

<script lang="ts" setup>
  import { ref } from "vue";
  const Toast = ref<ClToast.Ref>();

  function open() {
    Toast.value?.open({
      message: "Toast 提示",
      icon: "cl-icon-good-fill",
    });
  }

  function open2() {
    Toast.value?.open({
      message: "Toast 提示",
      image: {
        url: "../static/avatar.png",
        style: {
          height: "120rpx",
          width: "120rpx",
        },
      },
    });
  }
</script>
```
