<template>
  <Layout>
    <template #sidebar-nav-before>
      <div class="ad">
        <img
          v-for="item in ad.list"
          :key="item"
          :src="item.pic"
          @click="ad.toLink(item)"
        />
      </div>
    </template>

    <template #aside-outline-before>
      <demo is-fr :path="path" :key="path" />
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from "vitepress/theme";
import Demo from "../../components/demo.vue";
import { useRoute } from "vitepress";
import { watch, ref, onMounted, reactive } from "vue";

const route = useRoute();

const { Layout } = DefaultTheme;

const ad = reactive({
  list: [],

  toLink(item) {
    if (item.link) {
      window.open(item.link);
    } else {
      window.open(`https://cool-js.com/ad/${item.id}`);
    }
  },

  get() {
    fetch("http://192.168.0.119:9009/app/info/ad/list", {
      method: "POST",
      body: JSON.stringify({
        channel: 1,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.list = res.data;
      });
  },
});

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

onMounted(() => {
  ad.get();
});
</script>

<style scoped>
.ad img {
  display: block;
  width: 100%;
  margin-top: 10px;
  border-radius: 8px;
  cursor: pointer;
}

.ad img:hover {
  opacity: 0.9;
}
</style>
