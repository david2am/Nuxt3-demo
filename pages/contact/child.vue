<script setup>
const { child } = defineProps({
  child: "23",
});
</script>

<template>
  <div>
    <article>
      <h2>Child Title</h2>
      <p>Some child description</p>
      {{ child }}
    </article>
  </div>
</template>
