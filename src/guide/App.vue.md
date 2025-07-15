# App.vue

uni-app 的主组件，所有页面都是在 App.vue 下进行切换的，是应用入口文件。

```html
<script setup lang="ts">
  import { useStore } from "/@/cool";
  import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";

  onLaunch(() => {
    console.log("App Launch");

    const { dict, user } = useStore();

    // 获取字典
    // dict.refresh();

    if (user.token) {
      // 获取登录用户信息
      // user.get();
    }
  });

  onShow(() => {
    console.log("App Show");
  });

  onHide(() => {
    console.log("App Hide");
  });
</script>

<style lang="scss">
  @import "/$/cool-ui/index.scss";
  @import "/@/static/css/index.scss";
</style>
```

::: warning
依据情况是否注释 `获取字典` 和 `获取登录用户信息`
:::
