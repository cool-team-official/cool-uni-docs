# config

基础信息、微信、代理的配置。

## 目录结构

```
| config/
--| index.ts // 入口
--| proxy.ts // 代理请求配置
--| dev.ts // 开发环境配置
--| prod.ts // 生产环境配置

```

## 示例

```ts
import { config } from "/@/config";

console.log(config.app.name); // 应用名称
```
