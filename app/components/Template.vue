<script setup lang="ts">
import { items } from "~/composables/user";
const { data } = await useFetch("/api/hello");

const { locales, locale, setLocale } = useI18n();
const links = [
  { name: "Nuxt", url: "https://nuxt.com" },
  { name: "TailwindCSS", url: "https://tailwindcss.com" },
  { name: "Nuxt Image", url: "https://image.nuxt.com" },
  { name: "Nuxt Color Mode", url: "https://color-mode.nuxtjs.org" },
  { name: "Nuxt i18n", url: "https://i18n.nuxtjs.org" },
  { name: "Prettier Plugin", url: "https://prettier.io" },
  { name: "Vite PWA", url: "https://vite-pwa-org.netlify.app" },
];

const user = ref();
const count = ref(0);
const localStorageKey = "app_count";

function selectRandomUsername() {
  const randomIndex = Math.floor(Math.random() * items.length);
  user.value = items[randomIndex];
}

onMounted(() => {
  selectRandomUsername();
  const storedCount = localStorage.getItem(localStorageKey);
  if (storedCount) {
    count.value = parseInt(storedCount, 10);
  }
});

watch(count, (newCount) => {
  localStorage.setItem(localStorageKey, newCount.toString());
});

function changeLocale(event: Event) {
  const target = event.target as HTMLSelectElement;
  setLocale(target.value as "en" | "km" | "zh" | "fr");
}
</script>

<template>
  <div>
    <div class="space-y-3">
      <select :value="locale" @change="changeLocale">
        <option v-for="loc in locales" :key="loc.code" :value="loc.code">
          {{ loc.name }}
        </option>
      </select>
      <select v-model="$colorMode.preference">
        <option value="system">{{ $t("theme.system") }}</option>
        <option value="light">{{ $t("theme.light") }}</option>
        <option value="dark">{{ $t("theme.dark") }}</option>
        <option value="sepia">{{ $t("theme.sepia") }}</option>
      </select>
    </div>

    <h1>{{ $t("welcome") }}</h1>
    <div class="flex flex-col items-center justify-center space-y-3">
      <h1>
        <strong>
          {{ $t("home.hello") }},
          {{ user === "" ? "Anonymous xD" : user + "✌️" }}
          {{ data?.msg }}</strong
        >
      </h1>
      <input
        type="text"
        placeholder="What's your name, legend?"
        v-model="user"
      />
      <button
        @click="count++"
        class="rounded-xl bg-[--foreground] px-3 py-2 text-[--background] transition-all active:scale-[98%]"
      >
        {{ $t("home.clicked") }} {{ count }}
        {{ count === 0 || count === 1 ? $t("home.time") : $t("home.times") }}
        😎
      </button>
    </div>
    <p class="mt-5">{{ $t("home.desc1") }}<br />{{ $t("home.desc2") }}</p>
    <div class="my-5">
      <strong>{{ $t("home.tech_used") }}</strong>
      <p>
        <span v-for="(link, index) in links" :key="link.name">
          <a :href="link.url" target="_blank" rel="noopener noreferrer">
            {{ link.name }} </a
          ><span v-if="index < links.length - 1">, </span>
        </span>
        {{ $t("home.more") }}
      </p>
    </div>
    <p>
      {{ $t("home.source_code") }}
      <a
        href="https://github.com/nidexingg/nuxt-starter/"
        target="_blank"
        rel="noopener noreferrer"
        >GitHub</a
      >
      {{ $t("home.download") }}
      <a
        href="https://github.com/nidexingg/nuxt-starter/archive/refs/tags/1.0.0.zip"
        target="_blank"
        rel="noopener noreferrer"
        >{{ $t("home.here") }}</a
      >
    </p>
  </div>
</template>
<style scoped>
select {
  @apply my-5 w-full max-w-[100px] border-2 border-[--foreground] bg-[--background] shadow-[4px_4px_0_0] outline-none focus:ring-2 focus:ring-rose-700 sm:text-sm;
}
input {
  @apply my-2 w-[300px] border-2 border-[--foreground] bg-[--background] p-2 text-center shadow-[4px_4px_0_0] outline-none focus:ring-2 focus:ring-rose-700 sm:text-sm;
}

a {
  @apply font-bold text-rose-600 underline;
}
</style>
