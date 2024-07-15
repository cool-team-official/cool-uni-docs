# hooks

## useCool

基础。

### 使用

```js
import { useCool } from "/@/cool";

const { refs, setRefs, upload, storage, router, service } = useCool();
```

| 名称                 | 说明       | 类型       |
| -------------------- | ---------- | ---------- |
| refs                 | ref 的集合 | object     |
| setRefs              | 设置 ref   | function   |
| [upload](#useupload) | 文件上传   | useUpload  |
| storage              | 数据储存   | object     |
| [router](./router)   | 路由操作   | useRouter  |
| [service](./service) | 数据请求   | useService |

### 示例

使用 storage 存储数据

```ts
const { storage } = useCool();

// 根据关键字获取值
storage.get("userInfo");

// 获取一次后删除
storage.once();

// 根据关键字设置值、过期时间
storage.set("userInfo", { nickName: "神仙" }, 1000);

// 根据关键字删除值
storage.remove("userInfo");

// 清空所有值
storage.clear();

// 获取全部值
storage.info();
```

使用 refs 获取组件实例

```html
<template>
  <custom :ref="setRefs('custom')" />
</template>

<script setup>
  const { refs, setRefs } = useCool();

  // 调用方法
  refs.custom.open();
</script>
```

::: warning
调用方法的前提是组件必须写了 defineExpose({ open })
:::

## usePager

数据分页。

### 使用

```js
import { usePager } from "/@/cool";

const { pager, list, onData, onRefresh } = usePager();
```

| 名称             | 说明                 | 类型     |
| ---------------- | -------------------- | -------- |
| pager            | 分页                 | object   |
| pager.list       | 数据列表             | array    |
| pager.pagination | 分页信息             | object   |
| pager.params     | 请求参数             | object   |
| pager.loading    | 是否加载中           | boolean  |
| pager.finished   | 是否加载完成         | boolean  |
| list             | 数据列表             | array    |
| onData           | 新数据时触发         | function |
| onRefresh        | 刷新时触发，配置请求 | function |

::: warning 注意以下几点：

- 刷新方法必须命名为 `refresh`

```js
function refresh(params?: any) {
  // 获取值
  const { data, next } = onRefresh(params);

  // 绑定对应的服务
  next(service.test.page(data));
}
```

- 必须使用 `defineExpose` 暴露 `refresh` 方法

```js
defineExpose({
  refresh,
});
```

- 标签循环列表的值使用 `list`

```html
<cl-list-item v-for="(item, index) in list" :key="index" :label="item.label" />
```

- 页面开启下拉刷新

```json
{
    "style": {
        "enablePullDownRefresh": true
    }
},
```

- 已配置好 `onPullDownRefresh` 下拉刷新，`onReachBottom` 上拉加载，无需手动添加。

:::

### 示例

- `refresh` 的作用在于配置请求的参数及方法。
- `params` 为外部传入的值，
- `data` 为合并后的值（包含分页参数）
- `next` 为请求操作，接收一个 `Promise<{list, pagination}>`

```html
<template>
    <cl-page>
        <cl-list>
            <cl-list-item v-for="(item, index) in list" :key="index" :label="item.label" />
        </cl-list>
    <cl-page>
</template>

<script lang="ts" setup>
	import { onReady } from "@dcloudio/uni-app";
	import { usePager, useCool } from "/@/cool";
	const { list, onData, onRefresh } = usePager();
	const { service } = useCool();

	// 刷新方法
	function refresh(params?: any) {
		// 获取值
		const { data, next } = onRefresh(params);

		// 绑定对应的服务
		next(service.test.page(data));
	}

	// 首次刷新
	onReady(() => {
		refresh();
	});

	// 暴露方法
	defineExpose({
		refresh
	});
</script>
```

#### 自定义请求

`next` 中返回 `Promise` 格式即可

```js
function refresh(params?: any) {
  // 获取值
  const { data, next } = onRefresh(params);

  next(
    new Promise((resolve) => {
      // 你的逻辑处理，如：
      uni.request({
        url: "https://xxxx",
        success() {
          // 返回格式
          resolve({
            // 数据列表
            list: [],

            // 分页信息
            pagination: {
              page: 1,
              size: 20,
              total: 0,
            },
          });
        },
      });
    })
  );
}
```

#### 修改返回的数据

有这么一个需求，返回的 `pics` 是 `,` 拼接的多图字段，需要转成数组后再标签上绑定：

```js
function refresh(params?: any) {
  // 获取值
  const { data, next } = onRefresh(params);

  // 绑定对应的服务
  next(
    service.test.page(data).then((res) => {
      // 分割 pics
      res.list.map((e) => {
        e.pics = e.pics.split(",");
      });

      return res;
    })
  );
}
```

## useUpload

文件上传。

```js
import { useCool } from "/@/cool";
const { upload } = useCool();

// 选择文件
uni.chooseImage({
  count: 1,
  sourceType: ["album", "camera"],
  success(res) {
    // 上传文件
    upload(res.tempFiles[0], {
      // 获取上传进度
      onProgressUpdate({ progress }) {
        console.log(progress);
      },
    }).then((url) => {
      // 上传后的地址
      console.log(url);
    });
  },
});
```
