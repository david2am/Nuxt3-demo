function isAuthenticated() {
  return true;
}

export default defineNuxtRouteMiddleware((to, from) => {
  if (!isAuthenticated()) return navigateTo("/");
  console.log("logged in");
});
