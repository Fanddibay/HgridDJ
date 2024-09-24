<template>
  <div class="bg-White-Bg dark:bg-Blue-File m-auto p-6">
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
        <i class="fa-solid fa-xmark text-text-darken dark:text-green-dark"></i>
      </a>
    </div>
    <h5 class="text-Blue-File dark:text-white mt-4">New Project Name</h5>
    <form action="/" class="grid gap-y-4">
      <input type="text" class="customInput" placeholder="type here..." />

      <v-select
        v-model="selected"
        :items="items"
        label="Select"
        class="h-14 items-center rounded bg-Input-Bg text-Blue-File dark:text-white dark:bg-Blue-Primary"
      >
      </v-select>
      <div class="justify-end flex gap-4 mt-4">
        <a type="reset" href="/MainProject" class="secondaryButton"> Back </a>
        <button type="submit" class="primaryButton">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      items: ["Video Labels", "face-detection", "newtest111", "randomfile"],
    };
  },
  mounted() {},
};
</script>

<style></style>
