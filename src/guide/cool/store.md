# store

## user

用户数据缓存。

| 名称         | 说明            | 类型               |
| ------------ | --------------- | ------------------ |
| token        | 标识            | string             |
| setToken     | 设置标识        | function           |
| refreshToken | 刷新标识        | function           |
| info         | 用户信息        | Eps.UserInfoEntity |
| get          | 获取用户信息    | function           |
| set          | 设置用户信息    | function           |
| update       | 更新用户信息    | function           |
| clear        | 清空用户、token | function           |
| logout       | 退出登陆        | function           |

### 示例

更新用户信息

```ts
const { user } = useStore();

user.update({ name: "COOL" });
```

## dict

字典数据缓存。

| 名称     | 说明         | 类型     |
| -------- | ------------ | -------- |
| data     | 字典数据     | object   |
| get      | 获取数据列表 | function |
| getLabel | 获取名称     | function |
| refresh  | 获取数据列表 | function |

### 示例

返回指定类型的数据列表

```ts
const { dict } = useStore();

console.log(dict.get("brand"));

/** 
 * 返回值为一个数组
[
  {
    label: "COOL",
    value: 1,
  },
  {
    label: "闪酷",
    value: 2,
  },
];
*/
```

返回指定类型的数据文本 label

```ts
const { dict } = useStore();

console.log(dict.getLabel("brand", 1));

// 返回值为一个字符串 COOL
```

::: warning
程序启动时会调用一次 `dict.refresh()` 获取所有的字典。有可能存在部分数据已被后台操作人员修改，可以在页面中单独刷新使用到的字典数据：

```ts
onShow(() => {
  dict.refresh(["userTag", "userStatus"]);
});
```

:::
