<script setup lang="ts">
const config = useAppConfig();
definePageMeta({
  layout: "template",
});
useSeoMeta({
  title: config.title,
  ogTitle: config.ogTitle,
  description: config.description,
  ogDescription: config.ogDescription,
  ogImage: config.ogImage,
  twitterCard: "summary_large_image",
});
</script>
<template>
  <div>
    <Template/>
  </div>
</template>
<style scoped></style>
