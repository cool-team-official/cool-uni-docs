# service

数据请求。

## 目录结构

```
| service/
--| index // 入口
--| base // BaseService、Service
--| request // 封装请求方法
--| sign // 请求签名
```

::: warning
默认处理了 401、403、404、500 错误，如果需要自定义错误处理
:::

## 使用

- 方式一

```ts
import { service } from "/@/cool";
```

- 方式二

```ts
import { useCool } from "/@/cool";
const { service } = useCool();
```

<br />

`vscode`中有代码提示，数据同步于后端的接口：

```ts
service.base.sys.user.page({ page: 1 });

// 等于

request({
  url: "/base/sys/user/page",
  data: {
    page: 1,
  },
});
```

<img src="/images/service-tip.gif" :style="{
    margin: '0 0 0 -15px'
}" />
