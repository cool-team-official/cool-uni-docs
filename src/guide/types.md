# types

类型描述。

## 使用

添加 `types/shop.d.ts` 文件：

```ts
declare interface GoodsInfo {
  title: string;
  price: number;
  cover: string;
  pics: string[];
  [key: string]: any;
}
```

设定类型

```ts
const props = defineProps({
  info: Object as PropType<GoodsInfo>,
});
```

```ts
const info = ref<GoodsInfo>();
```

- 其他
