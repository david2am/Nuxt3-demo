export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      hola: "hola",
      some: "some",
    },
  },
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
    },
  },
});
