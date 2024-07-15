# SelectDate 日期选择器

## 参数

| 参数                 | 说明           | 类型     | 可选值 | 默认值                                                |
| -------------------- | -------------- | -------- | ------ | ----------------------------------------------------- |
| modelValue / v-model | 绑定值         | string   |        |                                                       |
| title                | 标题           | string   |        | 选择日期                                              |
| startYear            | 开始年         | number   |        | 2000                                                  |
| mode                 | 模式           | string[] |        | ["year", "month", "date", "hour", "minute", "second"] |
| format               | 格式化值       | string   |        | YYYY-MM-DD HH:mm:ss                                   |
| displayFormat        | 格式化显示内容 | function |        |                                                       |
| start                | 开始时间       | string   |        |                                                       |
| end                  | 结束时间       | string   |        |                                                       |
| placeholder          | 占位文本       | string   |        | 请选择时间                                            |

## 事件

| 事件名称 | 说明                   | 回调参数 |
| -------- | ---------------------- | -------- |
| change   | 绑定值变化时触发的事件 | value    |

## 示例

### 基础用法

```html
<cl-select-date v-model="v1" />
```

### 时-分

```html
<cl-select-date v-model="v2" :mode="['hour', 'minute']" format="HH:mm" />
```

### 年-月

```html
<cl-select-date v-model="v3" :mode="['year', 'month']" format="YYYY-MM" />
```

### 起始时间

```html
<cl-select-date v-model="v4" start="2023-01-01 08:00:00" end="2025-12-12 12:00:00" />

<cl-row :margin="[20, 0, 0, 0]">
	<cl-text value="2023-01-01 08:00:00 < " />
	<cl-text value="时间" color="red" :margin="[0, 10, 0, 10]" />
	<cl-text value=" < 2025-12-12 12:00:00" />
</cl-row>
```

### 展示格式

```html
<cl-select-date
	v-model="v5"
	:display-format="
					(date: string) => {
						return date ? dayjs(date).format('YYYY年MM月DD日 HH时mm分ss秒') : '';
					}
				"
/>
```

### 自定义

```html
<cl-select-date v-model="v6" title="请选择预约时间">
	<template #default="{ value }">
		<cl-select-inner round background-color="#f7f7f7">
			<cl-text
				prefix-icon="cl-icon-time"
				:value="
					value
						? dayjs(value).format('YYYY年MM月DD日 HH时mm分ss秒')
						: '请选择预约时间'
				"
			/>
		</cl-select-inner>
	</template>
</cl-select-date>
```
