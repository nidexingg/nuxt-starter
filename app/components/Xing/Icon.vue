<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string;
    size?: string;
    style?: string;
    flip?: string;
    rotate?: string;
  }>(),
  {
    size: "1em",
    style: "",
    flip: "",
    rotate: "",
  },
);
</script>
<template>
  <iconify-icon
    :icon="name"
    :height="size"
    :style="style"
    :flip="flip"
    :rotate="rotate"
    :ssr="true"
  ></iconify-icon>
</template>
