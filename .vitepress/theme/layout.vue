<template>
  <Layout>
    <template #aside-outline-before>
      <demo is-fr :path="path" :key="path" />
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from "vitepress/theme";
import Demo from "../../components/demo.vue";
import { useRoute } from "vitepress";
import { watch, ref } from "vue";

const route = useRoute();

const { Layout } = DefaultTheme;

const path = ref("");

watch(
  () => route.path,
  (val) => {
    if (val.includes("/guide/components/")) {
      const str = val
        .replace("/guide/components", "")
        .replace("/src", "")
        .replace(".html", "");

      path.value = `pages/demo${str}`;
    } else {
      path.value = "";
    }
  },
  {
    deep: true,
  }
);
</script>
