<template>
  <div
    class="flex h-screen flex-col items-center bg-[hsl(var(--background))] p-3 text-[hsl(var(--foreground))]"
  >
    <div id="header" class="mt-5 flex flex-col justify-center gap-5">
      <div class="flex justify-center gap-5">
        <LogoNuxt />
        <XingIcon name="maki:cross" size="1.5em" class="mt-3" />
        <LogoXing />
      </div>
      <div class="flex justify-center gap-3">
        <SwitchLang />
        <SwitchTheme />
      </div>
    </div>
    <div id="content">
      <slot />
    </div>
  </div>
</template>
