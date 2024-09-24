<template>
  <div class="bg-White-Bg dark:bg-Blue-File h-[274px] w-[304px] m-auto p-8">
    <h5 class="text-Blue-Sidebar dark:text-white text-2xl font-bold">Start</h5>
    <div class="newProject">
      <div class="mt-6">
        <a href="/NewProjectTemplate" class="text-Blue-File dark:text-white">
          <img
            src="/src/assets/lightMode/file-medicalLight.svg"
            class="dark:hidden"
            alt="New Project Light"
          />
          <img
            src="/src/assets/file-medical.svg"
            class="hidden dark:block"
            alt="New Project Dark"
          />
          New Project
        </a>
      </div>
      <div>
        <a href="/NewFileTemplate" class="text-Blue-File dark:text-white">
          <img
            src="/src/assets/lightMode/file-medicalLight.svg"
            class="dark:hidden"
            alt="New File Light"
          />
          <img
            src="/src/assets/file-medical.svg"
            class="hidden dark:block"
            alt="New File Dark"
          />
          New File
        </a>
      </div>
      <div>
        <a href="/OpenProjectTemplate" class="text-Blue-File dark:text-white">
          <img
            src="/src/assets/lightMode/file-exportLight.svg"
            class="dark:hidden"
            alt="Open File Light"
          />
          <img
            src="/src/assets/file-export.svg"
            class="hidden dark:block"
            alt="Open File Dark"
          />
          Open File
        </a>
      </div>
      <div>
        <a href="/OpenProjectTemplate" class="text-Blue-File dark:text-white">
          <img
            src="/src/assets/lightMode/folder-openLight.svg"
            class="dark:hidden"
            alt="Open Project Light"
          />
          <img
            src="/src/assets/folder-open.svg"
            class="hidden dark:block"
            alt="Open Project Dark"
          />
          Open Project
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
