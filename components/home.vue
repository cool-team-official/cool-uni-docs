<template>
  <div class="box">
    <p class="tag">✨ Cool unix 项目脚手架</p>
    <p class="title">开源免费、uvue组件库、多语言、深色模式、Ai编码</p>
    <p class="sub-title"></p>

    <div class="tabs">
      <div
        class="item"
        v-for="item in tab.list"
        :key="item.value"
        :class="{ active: tab.active == item.value }"
        @click="tab.change(item)"
      >
        {{ item.label }}
      </div>
    </div>

    <div class="tab-content">
      <span>{{ tabInfo.content }}</span>

      <button v-if="tabInfo.demo" @click="open(tabInfo.demo)">查看演示</button>
    </div>

    <demo is-home />
  </div>
</template>

<script setup>
import Demo from "./demo.vue";
import { reactive, onMounted, computed } from "vue";

const tab = reactive({
  active: "eps",
  list: [
    {
      label: "Eps",
      value: "eps",
      content: "一键生成接口服务层代码，自动完成类型定义",
    },
    {
      label: "tailwindcss",
      value: "vue",
      content: "集成 Tailwind CSS，支持深色模式，快速构建界面",
    },
    {
      label: "i18n",
      value: "locale",
      content: "内置多语言支持，AI智能翻译，轻松实现全球化",
    },
    {
      label: "Admin",
      value: "admin",
      content: "搭配 cool-admin，快速搭建企业级中后台系统",
      demo: "https://show.cool-admin.com/",
    },
  ],
  change(item) {
    tab.active = item.value;
  },
});

const tabInfo = computed(() => {
  return tab.list.find((item) => item.value == tab.active);
});

function open(url) {
  window.open(url, "_blank");
}

onMounted(() => {});
</script>

<style lang="scss" scoped>
.tag {
  font-size: 14px;
  border: 1px solid #ddd;
  background-color: rgba(0, 0, 0, 0.02);
  border-radius: 20px;
  padding: 5px 15px;
  font-weight: 600;

  :is(.dark &) {
    border-color: #444;
    background-color: rgba(255, 255, 255, 0.02);
  }
}

.title {
  font-size: 35px;
  font-weight: 600;
  user-select: none;
  line-height: 50px;
}

.sub-title {
  font-size: 20px;
}

.tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  user-select: none;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 15px;
    font-size: 18px;
    cursor: pointer;

    &::after {
      display: block;
      content: "";
      height: 2px;
      width: 0;
      background-color: #000;
      transition: width 0.2s ease-in-out;
      margin-top: 10px;
      border-radius: 5px;
    }

    &.active {
      &::after {
        width: 40%;
      }
    }

    :is(.dark &)::after {
      background-color: #eee;
    }
  }
}

.tab-content {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  border: 1px solid #ddd;
  padding: 10px 25px;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.02);
  margin-bottom: 50px;
  font-size: 14px;
  text-align: center;
  min-height: 50px;

  :is(.dark &) {
    border-color: #444;
    background-color: rgba(255, 255, 255, 0.02);
  }

  .btn {
    display: flex;
    justify-content: center;
  }

  button {
    line-height: normal;
    background-color: #000;
    color: #fff;
    border: none;
    padding: 5px 12px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    margin-left: 10px;
    white-space: nowrap;

    :is(.dark &) {
      background-color: #444;
      color: #fff;
    }
  }
}

.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
