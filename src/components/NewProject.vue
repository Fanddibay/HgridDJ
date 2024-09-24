<template>
  <div class="bg-White-Bg dark:bg-Blue-File h-[272px] m-auto p-6">
    <div class="flex justify-between items-start">
      <img
        src="/src/assets/lightMode/FeaturedIconLight.png"
        class="dark:hidden block"
        alt=""
      />
      <img
        src="/src/assets/Featuredicon.png"
        class="dark:block hidden"
        alt=""
      />
      <a href="#">
        <i class="fa-solid fa-xmark text-Blue-Canvas dark:text-green-600"></i>
      </a>
    </div>
    <h5 class="text-Blue-Canvas dark:text-white mt-4">New Project Name</h5>
    <form action="/">
      <input type="text" class="customInput" placeholder="type here..." />
      <div class="justify-end flex gap-4 mt-4">
        <a type="reset" href="/mainProject" class="secondaryButton"> Back </a>
        <button type="submit" class="primaryButton">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style></style>
