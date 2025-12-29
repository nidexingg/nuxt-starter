<script setup lang="ts">
defineProps({
  error: {
    type: Object,
    required: true,
  },
});

function handleError() {
  clearError({ redirect: "/" });
}

function goBack() {
  clearError();
  useRouter().back();
}
</script>

<template>
  <main
    class="grid min-h-full place-items-center bg-black px-6 py-24 sm:py-32 lg:px-8"
  >
    <div class="text-center">
      <p class="text-accent text-base font-semibold">
        {{ error.statusCode }}
      </p>
      <h1 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
        {{ error.message }}
      </h1>
      <p class="mt-6 text-base leading-7 text-neutral-600">
        {{ $t("404.desc") }}
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <NuxtLink
          class="bg-accent hover:bg-accent-hover cursor-pointer rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm"
          @click="handleError"
        >
          {{ $t("404.back_home") }}
        </NuxtLink>
        <button
          class="bg-accent hover:bg-accent-hover cursor-pointer rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm"
          @click="goBack"
        >
          {{ $t("404.back") }}
        </button>
      </div>
    </div>
  </main>
</template>
