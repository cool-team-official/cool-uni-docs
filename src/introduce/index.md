# 简介

随着技术不断地发展，开发应用是越来越简单了。尽管简单也需要有个好的梯子才能迅速登顶。

## 技术选型

- [UniApp 跨端开发框架](https://uniapp.dcloud.net.cn/)
- [Pinia 状态管理库](https://pinia.vuejs.org/)
- [Vite 构建工具](https://vitejs.dev/)

## 内置功能

- UI 组件库：精美的组件及一些黑科技。
- 微信授权登录：包含小程序、APP、公众号登录。
- 短信登录：短信验证码登录。
- 手机一键登录：已接入[uniapp 一键登录](https://uniapp.dcloud.net.cn/tutorial/app-oauth.html)。
- 信息管理：个人中心展示、基础信息编辑、版本管理。
- 图片上传：已接入七牛、oss、cos 等。
- 服务请求：自动同步后端的接口，生成 Service 请求方法。如：

```typescript
const { service } = useCool();

// 分页
service.user.info.page();

// 用户详情
service.user.info.info({ id: 1 });

// 新增用户
service.user.info.add({ name: "神仙" });
```
