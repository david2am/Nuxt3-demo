<script setup>
definePageMeta({
  layout: "default",
});
function enableCustomLayout() {
  setPageLayout("custom");
}
</script>

<template>
  <div>
    <h1>This is Parent View</h1>
    <p>Some common information goes here</p>
    <NuxtPage :child="123" />
    <button @click="enableCustomLayout">Enable Custom</button>
  </div>
</template>
