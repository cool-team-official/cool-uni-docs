<template>
  <div class="box">
    <p class="tag">✨ Cool unix 项目脚手架</p>
    <p class="title">开源免费、uvue组件库、Ai编码、多语言、暗黑模式</p>
    <p class="sub-title"></p>

    <div class="tabs">
      <div
        class="item"
        v-for="item in tab.list"
        :key="item.value"
        :class="{ active: tab.active == item.value }"
        @click="tab.change(item.value)"
      >
        {{ item.label }}
      </div>
    </div>

    <demo is-home />
  </div>
</template>

<script setup>
import Demo from "./demo.vue";
import { reactive } from "vue";

const tab = reactive({
  active: "eps",
  list: [
    {
      label: "service",
      value: "eps",
    },
    {
      label: "tailwindcss",
      value: "vue",
    },
    {
      label: "locale",
      value: "locale",
    },
    {
      label: "dark",
      value: "dark",
    },
  ],
  change(value) {
    tab.active = value;
  },
});
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

.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
