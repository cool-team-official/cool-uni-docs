# Skeleton 骨架图

用于在加载中时显示的占位。

## 参数

| 参数         | 说明         | 类型                    | 可选值 | 默认值 |
| ------------ | ------------ | ----------------------- | ------ | ------ |
| loading      | 是否加载中   | boolean                 |        | false  |
| loadingStyle | 加载中的样式 | object                  |        | {}     |
| height       | 高           | number / string         |        | 100%   |
| width        | 宽           | number / string         |        | 100%   |
| radius       | 圆角         | number / string         |        | 0      |
| margin       | 圆角         | number / string / array |        | 0      |

## 示例

### 基本用法

```html
<template>
  <view class="count">
    <view class="item" v-for="(item, index) in list" :key="index">
      <cl-skeleton
        :height="120"
        :width="120"
        :radius="120"
        :margin="[0, 0, 20, 0]"
        :loading="!item.avatar"
      >
        <cl-image
          :radius="120"
          :src="item.avatar"
          background-color="#fff"
          v-if="item.avatar"
        />
      </cl-skeleton>

      <cl-skeleton
        :custom-style="{
            height: '28rpx',
            width: '90rpx',
            borderRadius: '6rpx',
        }"
        :loading="!item.name"
      >
        <cl-text :size="24" align="center" block>{{ item.name }}</cl-text>
      </cl-skeleton>
    </view>
  </view>
</template>

<script setup lang="ts">
  import { onReady } from "@dcloudio/uni-app";
  import { uniqueId } from "lodash-es";
  import { ref } from "vue";

  const list = ref<any[]>([{}, {}, {}]);

  function get() {
    setTimeout(() => {
      list.value = list.value.map((_, i) => {
        return {
          id: uniqueId(),
          avatar: `/pages/demo/static/avatar${i + 1}.png`,
          bg: `/pages/demo/static/bg${i + 1}.png`,
          name: ["小青", "小白", "小黑", "笑死"][i],
        };
      });
    }, 1500);
  }

  onReady(() => {
    get();
  });
</script>

<style lang="scss" scoped>
  .count {
    display: flex;
    padding: 20rpx 0;

    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 200rpx;
    }
  }
</style>
```
