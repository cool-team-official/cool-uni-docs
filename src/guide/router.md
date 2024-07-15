# router

页面跳转

| 属性名                    | 说明                   | 类型     |
| ------------------------- | ---------------------- | -------- |
| tabs                      | 底部导航               | object[] |
| routes                    | 路由列表               | object[] |
| query                     | 跳转参数（地址栏）     | object   |
| params                    | 跳转参数（缓存）       | object   |
| pages                     | 自定义页面路径         | object   |
| currentPage               | 当前页面信息           | function |
| path                      | 当前路由路径           | string   |
| info                      | 当前路由信息           | function |
| [push](#push)             | 路由跳转               | function |
| back                      | 后退                   | function |
| [callMethod](#callmethod) | 执行当前页面的某个方法 | function |
| isFirstPage               | 页面栈长度是否只有 1   | function |
| isCurrentPage             | 是否当前页             | function |
| home                      | 回到首页               | function |
| switchTab                 | 跳转 Tab 页            | function |
| isTab                     | 是否是 Tab 页          | function |
| login                     | 去登陆                 | function |
| [nextLogin](#nextlogin)   | 登录成功后操作         | function |
| ---                       | ---                    |

## 使用

- 方式一

```ts
import { router } from "/@/cool";
```

- 方式二

```ts
import { useCool } from "/@/cool";
const { router } = useCool();
```

### push

```ts
router.push("/pages/goods/list");
```

```ts
router.push({
  path: "/pages/goods/detail",
  query: {
    id: 1,
  },
});

router.query(); // { id }
```

```ts
router.push({
  path: "/pages/goods/detail",
  params: {
    data: {},
  },
});

router.params(); // { data }
```

### callMethod

执行当前页面的某个方法。

如：监听消息并刷新页面，直接触发页面的 refresh 方法，而不是在每个页面加事件监听

```html
<template>
  <text>Demo</text>
</template>

<script setup>
  function refresh(params) {}

  defineExpose({
    refresh,
  });
</script>
```

```ts
router.callMethod("refresh", { page: 1 });
```

### isTab

检测是否 Tab 页面，返回 `boolean`

```ts
router.isTab("/pages/index/home");
```

### nextLogin

跳转到重定向登录前的页面，并触发 `afterLogin` 事件

```ts
router.nextLogin();
```
