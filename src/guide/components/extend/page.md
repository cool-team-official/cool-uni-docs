# Page 页面组件

由于 uniapp 限制，该组件可作为全局组件使用。添加了该组件后，即可使用 `ui` 内的方法：

## 方法

| 事件名称    | 说明       | 参数                                                                    |
| ----------- | ---------- | ----------------------------------------------------------------------- |
| showToast   | 打开提示框 | function(options: [ClToast.Options](/src/guide/components/basic/toast)) |
| showConfirm | 打开确认框 | function(options: [ClConfirm.Options](./confirm))                       |
| showLoading | 打开加载框 | function(text: string)                                                  |
| hideLoading | 关闭加载框 | function()                                                              |

```html
<template>
  <cl-page>
    <view class="page-home">
      <!-- 内容 -->
    </view>
  </cl-page>
</template>

<script lang="ts" setup>
  import { useCool } from "/@/cool";

  const { ui } = useCool();

  function open() {
    ui.showToast();
  }
</script>
```

如需修改组件，编辑文件`/cool/ui/components/cl-page/cl-page.vue`
