# 主题与样式系统

Cool Unix 基于 [Tailwind CSS](https://tailwindcss.com/) 构建了完整的主题系统，提供灵活的样式定制能力和优雅的深色模式支持。

## 🎨 颜色系统

框架内置了完整的颜色体系，支持主题色和表面色的自由搭配：

<theme-color />

<script setup>
    import ThemeColor from '../../components/theme-color.vue'
</script>

## ⚙️ 主题配置

通过 `tailwind.config.ts` 文件自定义主题配置：

```js
// tailwind.config.ts
export default {
	content: [resolve("./**/*.{uvue,vue}"), "!**/node_modules/**", "!**/dist/**"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				...getPrimary("teal"), // 设置主色调
				...getSurface("zinc"), // 设置表面色调
			},
			// 自定义扩展配置
			fontSize: {
				md: ["1rem", "1.5rem"] // 自定义字体大小
			},
			scale: {
				"80": "0.8" // 自定义缩放比例
			},
		}
	},
	corePlugins: {
		preflight: false // 禁用默认样式重置
	}
} as Config;
```

### 颜色配置说明

- **主色系 (Primary)**: 用于品牌色彩、按钮、链接等主要交互元素
- **表面色系 (Surface)**: 用于背景、边框、分割线等界面基础元素

## 📝 样式类使用指南

### 布局与定位

```html
<!-- Flexbox 布局 -->
<view class="flex flex-col">纵向布局</view>
<view class="flex flex-row">横向布局</view>
<view class="flex flex-row items-center">垂直居中</view>
<view class="flex flex-row items-center justify-center">完全居中</view>
<view class="flex-1">弹性伸缩</view>
```

### 尺寸设置

```html
<!-- 固定尺寸 -->
<view class="h-5 w-5">小尺寸</view>
<view class="h-full w-full">全尺寸</view>

<!-- 自定义尺寸 -->
<view class="h-[50rpx] w-[50rpx]">自定义 rpx</view>
<view class="h-[50px] w-[50px]">自定义 px</view>
<view class="h-80/100">百分比尺寸</view>
```

### 间距与边距

```html
<!-- 内边距 -->
<view class="p-3">全方向内边距</view>
<view class="px-3">水平内边距</view>
<view class="py-3">垂直内边距</view>

<!-- 外边距 -->
<view class="m-3">全方向外边距</view>
<view class="mx-3">水平外边距</view>
<view class="my-3">垂直外边距</view>
```

### 圆角与边框

```html
<!-- 圆角设置 -->
<view class="rounded-md">中等圆角</view>
<view class="rounded-lg">大圆角</view>
<view class="rounded-full">完全圆角</view>

<!-- 边框样式 -->
<view class="border border-solid border-surface-100">基础边框</view>
```

### 文字样式

```html
<!-- 字体大小 -->
<view class="text-xs">超小字体</view>
<view class="text-md">中等字体</view>
<view class="text-lg">大字体</view>
<view class="text-xl">超大字体</view>

<!-- 文字颜色 -->
<view class="text-primary-50">主色文字</view>
<view class="text-surface-50">表面色文字</view>
<view class="text-center">居中对齐</view>

<!-- 自定义颜色 -->
<view class="text-[#ff0]">自定义颜色</view>
<view class="text-[30rpx]">自定义大小</view>
```

### 强制样式 (!important)

```html
<!-- 使用 ! 前缀强制覆盖样式 -->
<view class="!text-surface-100">强制文字颜色</view>
<view class="!bg-white">强制背景色</view>
<view class="!border-surface-300">强制边框色</view>
```

## 🌙 深色模式

### API 调用

```ts
import { isDark, toggleTheme, setIsAuto, setTheme } from "@/cool";

// 状态检查
console.log(isDark.value); // 当前是否为深色模式

// 主题切换
toggleTheme(); // 切换深色/亮色模式

// 主题设置
setTheme("light"); // 设置为亮色模式
setTheme("dark"); // 设置为深色模式

// 自动模式（仅 APP 端有效）
setIsAuto(true); // 跟随系统主题
```

### 样式适配

#### 方式一：使用 dark: 前缀

```html
<view class="bg-surface-100 dark:!bg-surface-900">
  <text class="text-surface-700 dark:!text-white">自适应文本</text>
</view>
```

> **💡 提示**: `dark:` 前缀后加 `!` 表示使用 `!important` 强制覆盖样式

#### 方式二：使用响应式变量

```html
<view class="bg-surface-100" :class="{ '!bg-surface-900': isDark }">
  <text class="text-surface-700" :class="{ '!text-white': isDark }"
    >响应式文本</text
  >
</view>
```

### 在 SCSS 中使用

```html
<style lang="scss" scoped>
  .custom-component {
    @apply text-md bg-primary-500;
    @apply h-10 w-10 fixed right-10 top-10;
  }
</style>
```

## ⚠️ 重要注意事项

由于 uni-app x 的 [CSS 限制](https://doc.dcloud.net.cn/uni-app-x/css/)，在使用时需要注意以下几点：

:::warning 📱 APP 端限制
**文字样式限制**: APP 中不能在 `view` 标签中使用字体相关的样式

```html
<!-- ❌ 错误用法 -->
<view class="text-md">文本内容</view>

<!-- ✅ 正确用法 -->
<text class="text-md">文本内容</text>
```

:::

:::warning 🔄 动态样式渲染
**父子样式联动**: APP 中动态修改父级样式时，子元素样式不会自动重新渲染

```html
<view class="box" :class="{ 'active': isActive }">
  <text class="text">文本</text>
</view>

<style lang="scss" scoped>
  .box {
    @apply bg-white;

    .text {
      @apply text-surface-700;
    }

    &.active {
      @apply bg-black; /* ✅ 生效 */

      .text {
        @apply text-white; /* ❌ 不生效 */
      }
    }
  }
</style>
```

**解决方案**: 为子元素单独添加响应式类名

```html
<view class="box" :class="{ 'active': isActive }">
  <text class="text" :class="{ 'active': isActive }">文本</text>
</view>

<style lang="scss" scoped>
  .box {
    @apply bg-white;

    .text {
      @apply text-surface-700;

      &.active {
        @apply text-white; /* ✅ 生效 */
      }
    }

    &.active {
      @apply bg-black;
    }
  }
</style>
```

:::

## 🚀 最佳实践

1. **优先使用预设颜色**: 使用框架内置的 `primary` 和 `surface` 色系
2. **合理使用深色模式**: 为重要界面元素提供深色模式适配
3. **注意平台差异**: 了解不同平台的样式限制，编写兼容性代码
4. **保持一致性**: 在项目中统一使用 Tailwind CSS 类名，避免混用内联样式

## 📚 延伸阅读

- [Tailwind CSS 官方文档](https://tailwindcss.com/docs)
- [uni-app x CSS 规范](https://doc.dcloud.net.cn/uni-app-x/css/)
