export default defineEventHandler(async (event) => {
  const avatar = getRouterParam(event, "id");
  const data = await $fetch(
    `https://raw.githubusercontent.com/s-complex/Friends/refs/heads/main/img/${avatar}`
  );
  return data;
});
