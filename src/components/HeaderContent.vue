<template>
  <header
    class="w-full bg-White-Bg dark:bg-Blue-File px-4 py-3 justify-between flex items-center border-b-[1.4px] border-Blue-File dark:border-Blue-Border"
  >
    <img
      src="/src/assets/logoFullColor.png"
      class="dark:hidden"
      width="150px"
      alt="Logo Light"
    />
    <img
      src="/src/assets/logo.png"
      class="hidden dark:block"
      width="150px"
      alt="Logo Dark"
    />
    <div class="logout">
      <a href="/FormLogin" class="flex gap-2">
        <img
          src="/src/assets/logoutLight.svg"
          class="dark:hidden"
          alt="Logout Light"
        />
        <img
          src="/src/assets/logoutDark.svg"
          class="hidden dark:block"
          alt="Logout Dark"
        />
        <p class="font-bold text-Blue-File dark:text-white">Logout</p>
      </a>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
