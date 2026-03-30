<script setup lang="ts">
const config = useAppConfig();
definePageMeta({
  layout: "template",
});
useSeoMeta({
  author: config.title,
  title: config.title,
  ogTitle: config.ogTitle,
  twitterTitle: config.title,
  description: config.description,
  ogDescription: config.ogDescription,
  twitterDescription: config.description,
  ogImage: config.ogImage,
  twitterImage: config.ogImage,
  twitterCard: "summary_large_image",
  ogSiteName: config.title,
  ogLocale: "en_US",
  ogType: "website",
});
</script>
<template>
  <div>
    <Template/>
  </div>
</template>
<style scoped></style>
