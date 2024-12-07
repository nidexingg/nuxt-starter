<template>
  <div
    class="flex h-screen flex-col items-center justify-center bg-white text-black dark:bg-black dark:text-white"
  >
    <div class="flex items-center justify-center space-x-5">
      <LogoNuxt class="mb-5 flex justify-center" />
      <XingIcon name="maki:cross" size="1.5em" />
      <LogoXing class="mb-5 flex justify-center" />
    </div>
    <div class="flex justify-center space-x-3">
      <SwitchLang />
      <SwitchTheme />
    </div>
    <slot />
  </div>
</template>
