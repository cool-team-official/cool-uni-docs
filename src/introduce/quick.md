# 快速开始指南

## 开发环境推荐

为了获得最佳的开发体验，我们推荐使用以下工具：

- **代码编辑器**：[Cursor](https://cursor.com/cn) - AI 驱动的智能编辑器，提供强大的代码提示和生成功能
- **运行调试工具**：[HBuilderX](https://www.dcloud.io/hbuilderx.html) - 专为 uni-app 优化的集成开发环境

## 获取项目代码

您可以通过以下任一方式克隆项目仓库：

### GitHub（推荐海外用户）
```shell
git clone https://github.com/cool-team-official/cool-unix.git
```

### Gitee（推荐国内用户）
```shell
git clone https://gitee.com/cool-team-official/cool-unix.git
```

> **💡 提示**：建议国内用户优先选择 Gitee，下载速度更快更稳定。

## 安装与运行

### 1. 安装依赖

进入项目根目录，安装项目依赖：

```shell
# 推荐使用 pnpm（更快，更节省空间）
pnpm i

# 或者使用其他包管理器
npm install
# yarn install
```

> **⚡ 性能提示**：推荐使用 `pnpm`，它具有以下优势：
> - 安装速度更快
> - 磁盘空间占用更少
> - 依赖管理更严格

### 2. 启动项目

使用 [HBuilderX](https://www.dcloud.io/hbuilderx.html) 打开项目，即可运行到各个平台：

#### 支持的平台
- **🌐 H5**：浏览器预览
- **📱 小程序**：微信、支付宝、百度等各大小程序平台
- **📲 App**：Android、iOS 原生应用
- **🚀 鸿蒙**：华为鸿蒙 App（[查看详细文档](https://uniapp.dcloud.net.cn/tutorial/harmony/runbuild.html)）

#### 首次运行注意事项

> **📋 重要提示**：HBuilderX 首次运行时会自动安装必要的扩展插件，请注意查看控制台提示信息，确保所有插件安装完成。

### 3. 开发模式

项目启动后，您可以：
- 实时预览代码修改效果
- 使用 HBuilderX 的调试功能
- 体验热重载带来的高效开发体验

## 下一步

恭喜！🎉 您已经成功启动了项目。接下来可以：

- 📖 阅读 [组件文档](../guide/components/basic/button.md) 了解可用组件
- 🛠️ 查看 [配置指南](../guide/config.md) 自定义项目设置
- 🎨 学习 [主题定制](./theme.md) 打造独特风格
