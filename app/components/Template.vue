<script setup lang="ts">
import { items } from "~/composables/username";
const count = ref(0);
const { t } = useI18n();
const appConfig = useAppConfig();
const user = ref();
function selectRandomUsername() {
  const randomIndex = Math.floor(Math.random() * items.length);
  user.value = items[randomIndex];
}

onMounted(() => {
  selectRandomUsername();
});

useSeoMeta({
  title: t("seo.name"),
  ogTitle: t("seo.name"),
  description: t("seo.description"),
  ogDescription: t("seo.description"),
  ogImage: appConfig.ogImage,
  twitterCard: "summary_large_image",
});

interface Tech {
  name: string;
  link: string;
}
const useTech: Tech[] = [
  {
    name: "@nuxt/image",
    link: "https://image.nuxt.com/",
  },
  {
    name: "@nuxt/content",
    link: "https://content.nuxt.com/",
  },
  {
    name: "@nuxtjs/tailwindcss",
    link: "https://tailwindcss.nuxtjs.org/",
  },
  {
    name: "@nuxtjs/i18n",
    link: "https://i18n.nuxtjs.org/",
  },
  {
    name: "@nuxtjs/color-mode",
    link: "https://color-mode.nuxtjs.org/",
  },
  {
    name: "@vite-pwa/nuxt",
    link: "https://vite-pwa-org.netlify.app/",
  },
  {
    name: "nuxt-og-image",
    link: "https://nuxt.com/modules/og-image",
  },
  {
    name: "@nidexingg/ui",
    link: "https://ui.nidexingg.com/",
  },
];
</script>
<template>
  <div class="block max-w-lg items-center justify-center space-y-5 p-3">
    <div class="flex flex-col items-center justify-center gap-3">
      <p>
        {{ t("template.hey") }},
        <strong>{{ user === "" ? "Anonymous xD" : user }}</strong>
      </p>
      <input
        type="text"
        v-model="user"
        :placeholder="t('template.phd')"
        class="flex h-10 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-center text-sm transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-black"
      />
      <XingButton @click="count++" type="button" variant="default">
        {{ t("template.you_clicked") }}: {{ count }}
        {{
          count === 0 || count === 1 ? t("template.time") : t("template.times")
        }}
        😎
      </XingButton>
    </div>
    <p class="flex justify-center">
      {{ t("template.browse_more") }}
      <XingLink
        to="https://www.nidexingg.com/template/nuxt"
        :text="t('template.template')"
        redirect
      />{{ t("template.on") }}
    </p>
    <div>
      <p class="mb-5 flex items-center justify-center italic">
        {{ t("template.whats_included") }}
      </p>
      <div
        class="flex flex-col items-center justify-center"
        v-for="(tech, index) in useTech"
        :key="index"
      >
        <XingLink :text="tech.name" :to="tech.link" redirect />
      </div>
    </div>
    <p class="flex justify-center text-center">MIT License</p>
    <small class="flex justify-center text-center">
      {{ t("template.source") }}
      <XingLink
        to="https://github.com/nidexingg/nuxt-starter"
        text="GitHub"
        redirect
    /></small>
  </div>
</template>
