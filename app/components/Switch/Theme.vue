<script setup lang="ts">
const colorMode = useColorMode();
const { t } = useI18n();
</script>
<template>
  <div class="flex items-center justify-center">
    <XingIcon
      v-if="colorMode.preference === 'light'"
      name="ph:sun-dim-duotone"
      class="mr-1"
    />
    <XingIcon v-else name="ph:moon-duotone" class="mr-1" />
    <select
      v-model="$colorMode.preference"
      class="bg-white dark:bg-black text-black dark:text-white outline-none"
    >
      <option value="system">{{ t("theme.system") }}</option>
      <option value="light">{{ t("theme.light") }}</option>
      <option value="dark">{{ t("theme.dark") }}</option>
    </select>
  </div>
</template>