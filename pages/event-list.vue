<script setup>
import { ref } from "vue";

const { data } = await useFetch(
  "https://my-json-server.typicode.com/david2am/my-json-server-events"
);
console.log(data);
const events = ref(data);
</script>

<template>
  <h1>Events For Good</h1>
  <div class="events">
    <!--<EventCard v-for="event in events" :key="event.id" :event="event">
    </EventCard>-->
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
