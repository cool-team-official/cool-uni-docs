# 图标配置指南

本框架支持主流图标库：[iconfont](https://www.iconfont.cn/) 和 [remixicon](https://remixicon.com/)，您可以轻松集成自定义图标。

## 1. 选择图标

### iconfont 图标库

在 iconfont 平台选择所需图标后，点击 `下载至本地` 按钮获取图标包。

<img src="/public/images/iconfont.jpg" />

### remixicon 图标库

在 remixicon 平台选择图标后，点击 `⬇️Fonts` 按钮下载。

<img src="/public/images/remixicon.jpg" />

> **⚠️ 平台已知问题**：当选择图标过多时，下载按钮可能被遮挡。解决方法：
>
> 1. 按 `F12` 打开开发者工具
> 2. 找到 `class="items"` 元素
> 3. 调整其样式属性

<div style="display: flex; gap: 20px;">
    <img src="/public/images/remixicon-bug-1.jpg" />
    <img src="/public/images/remixicon-bug-2.jpg" style="height: 250px" />
</div>

## 2. 安装图标包

将下载的 `zip` 压缩包放置到项目根目录的 `/.cool/icons/` 文件夹下。

### 重要提示

- **🚫 禁止操作**：不可删除或覆盖基础图标文件（`iconfont` 和 `remixicon`）
- **📝 命名规范**：请重命名 zip 文件，避免使用特殊符号（如 `+-=.\@`），建议格式：`icon-project.zip`
- **📁 文件夹显示**：如果找不到 `.cool` 目录，可能被系统隐藏，请使用快捷键显示隐藏文件：
  - **Windows**：`Ctrl + H`
  - **macOS**：`Cmd + Shift + .`

## 3. 构建图标

在项目根目录打开终端，执行以下命令：

```shell
pnpm build-icon
```

<img src="/public/images/build-icon.png" />

执行成功后，图标将自动集成到项目中，可直接使用。

## 4. 使用图标

图标的 `name` 属性与图标库中的名称一一对应，使用时请注意：

- **避免命名冲突**：建议为自定义图标添加项目前缀
- **保持一致性**：统一图标命名规范

### 基础用法

```vue
<cl-icon name="home-line"></cl-icon>
```

### 自定义前缀示例

```vue
<!-- 推荐：使用项目前缀避免冲突 -->
<cl-icon name="project-custom-icon"></cl-icon>
```
