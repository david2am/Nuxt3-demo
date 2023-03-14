<script setup>
const runtimeConfig = useRuntimeConfig();
const appConfig = useAppConfig();
console.log("runtime config", runtimeConfig.hola);
console.log("app config", appConfig.title);

useServerSeoMeta({
  title: "Demo App",
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
