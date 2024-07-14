<template>
  <div
    class="demo"
    :class="{
      'is-home': isHome,
    }"
  >
    <img class="bg" src="/demo/bg.png" />

    <iframe class="preview" src="/demo/index.html" />
  </div>

  <div class="home-space" v-if="isHome"></div>
</template>

<script setup>
const props = defineProps({
  isHome: Boolean,
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
  background-color: #fff;
  border-radius: 50px;
  margin: 50px 0;

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
  }

  &.is-home {
    position: fixed;
    right: calc(50% - 688px);
    top: 50px;
    z-index: 999;
  }
}

.home-space {
  height: 100px;
}
</style>
