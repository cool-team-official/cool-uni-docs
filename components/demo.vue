<template>
  <div
    class="demo"
    :class="{
      'is-home': isHome,
      'is-fr': isFr,
    }"
    v-if="isShow"
  >
    <img class="bg" src="/demo/bg.png" />

    <iframe class="preview" :src="`/demo/index.html#/${path}`" />
  </div>

  <div class="home-space" v-if="isHome"></div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  isHome: Boolean,
  isFr: Boolean,
  path: {
    type: String,
    default: "",
  },
});

const isShow = computed(() => {
  if (props.isHome) {
    return true;
  }

  return props.path;
});
</script>

<style lang="scss">
.VPFeatures.VPHomeFeatures {
  .item {
    &:last-child {
      display: none;
    }
  }
}
</style>

<style lang="scss" scoped>
.demo {
  position: relative;
  height: 727px;
  width: 364px;
  background-color: var(--vp-c-bg);
  border-radius: 50px;
  margin: 50px 0;

  &::after {
    content: "";
    height: 25px;
    width: calc(100% - 40px);
    position: absolute;
    left: 20px;
    top: 23px;
    background-color: #fff;
  }

  .bg {
    position: relative;
    height: 727px;
    width: 364px;
    z-index: 2;
    pointer-events: none;
  }

  .preview {
    border: 0;
    position: absolute;
    left: 24px;
    top: 48px;
    height: 658px;
    width: 332px;
    border-radius: 0 0 30px 0;
  }

  &.is-home {
    position: fixed;
    right: calc(50% - 688px);
    top: 50px;
    z-index: 999;
  }

  &.is-fr {
    position: fixed;
    right: calc(50% - 950px);
    top: 60px;
    z-index: 999;
  }
}

.home-space {
  height: 100px;
}
</style>
