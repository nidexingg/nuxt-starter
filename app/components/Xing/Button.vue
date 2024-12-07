<script setup lang="ts">
import { useAttrs, computed } from "vue";
interface Props {
  variant?: keyof typeof variants.variant;
  size?: keyof typeof variants.size;
  rounded?: keyof typeof variants.rounded;
}

const variants = {
  variant: {
    default:
      "bg-black dark:bg-white text-white dark:text-black hover:bg-black/90 dark:hover:bg-white/80",
    error: "bg-rose-600 text-white hover:bg-rose-600/80",
    outline:
      "border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black hover:bg-zinc-200/80 dark:hover:bg-zinc-800/80",
    secondary:
      "bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white hover:bg-zinc-200/80 dark:hover:bg-zinc-800/80",
    ghost:
      "text-black dark:text-white hover:bg-zinc-200/80 dark:hover:bg-zinc-800/80",
    void: "text-primary underline-offset-4 hover:underline",
  },
  size: {
    default: "h-10 px-4 py-2",
    xs: "h-7 px-2",
    sm: "h-9 px-3",
    lg: "h-11 px-8",
    icon: "h-10 w-10",
  },
  rounded: {
    default: "rounded-xl",
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  },
};

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
  size: "default",
  rounded: "default",
});

const attr = useAttrs();

const buttonClass = computed(() => {
  const baseClass =
    "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 transition-all";

  const variantClass = variants.variant[props.variant];
  const sizeClass = variants.size[props.size];
  const roundedClass = variants.rounded[props.rounded];

  return `${baseClass} ${variantClass} ${sizeClass} ${roundedClass}`;
});
</script>

<template>
  <button :class="buttonClass" v-bind="attr" v-on="$attrs">
    <slot />
  </button>
</template>
