<template>
  <div class="overflow-hidden bg-[#fafafa] dark:bg-[#0D1726]">
    <HeaderContent />
    <div class="flex h-[100vh] overflow-hidden">
      <SidebarContent />
      <MainProject />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const inputSearch = document.getElementById("inputSearch");
    const fileSearch = document.getElementById("fileSearch");
    const searchToggle = document.getElementById("searchToggle");
    const homeToggle = document.getElementById("homeToggle");
    const searchContent = document.getElementById("searchContent");
    const fileContent = document.getElementById("fileContent");

    inputSearch.addEventListener("click", (e) => {
      e.preventDefault();
      fileSearch.classList.remove("hidden");
    });

    searchToggle.addEventListener("click", () => {
      if (searchContent.classList.contains("hidden")) {
        searchContent.classList.remove("hidden");
        fileContent.classList.add("hidden");
      }
    });

    homeToggle.addEventListener("click", () => {
      if (fileContent.classList.contains("hidden")) {
        searchContent.classList.add("hidden");
        fileContent.classList.remove("hidden");
        fileSearch.classList.add("hidden");
      }
    });
  },
};
</script>

<style></style>
