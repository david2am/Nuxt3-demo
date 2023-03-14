<script setup>
definePageMeta({
  layout: "default",
});
</script>

<template>
  <div>
    <Head>
      <Title>Home</Title>
    </Head>
    <h1>Page Section</h1>
    <AppButton />
    <nav>
      <ul>
        <li>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/posts/1">Go to post number 1</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/restricted">Go restricted route</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
