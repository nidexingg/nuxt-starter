<script setup lang="ts">
withDefaults(
  defineProps<{
    to: string;
    text: string;
    redirect?: boolean;
  }>(),
  {
    redirect: false,
  },
);
</script>
<template>
  <NuxtLink v-if="redirect === true" :to="to" target="_blank" class="link">
    {{ text }} <XingIcon name="ic:baseline-arrow-outward" size="1em" />
  </NuxtLink>
  <NuxtLink v-else :to="to" class="link">
    {{ text }}
  </NuxtLink>
</template>
<style scoped>
.link {
  color: #e11d48;
  transition: all;
  transition-duration: 250ms;
  transition-timing-function: ease;
  margin-left: 5px;
  margin-right: 5px;
}

.link:hover {
  font-weight: bold;
}
</style>
