<script setup>
const route = useRoute();
</script>

<template>
  <p>This is the post number {{ route.params.id }}</p>
</template>
