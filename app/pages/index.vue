<script setup lang="ts">
definePageMeta({
  layout: "template",
});
const appConfig = useAppConfig();
useSeoMeta({
  title: appConfig.title,
  ogTitle: appConfig.ogTitle,
  description: appConfig.description,
  ogDescription: appConfig.ogDescription,
  ogImage: appConfig.ogImage,
  twitterCard: "summary_large_image",
});
</script>
<template>
  <div>
    <Template />
  </div>
</template>
