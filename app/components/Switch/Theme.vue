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
    <select v-model="$colorMode.preference" class="outline-none">
      <option value="system">{{ t("theme.system") }}</option>
      <option value="light">{{ t("theme.light") }}</option>
      <option value="dark">{{ t("theme.dark") }}</option>
    </select>
  </div>
</template>
<style scoped>
select {
  background: transparent;
}
option {
  background: hsl(var(--background));
  color: hsl(var(--foreground));
}
</style>
