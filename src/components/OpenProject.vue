<template>
  <div class="bg-White-Bg dark:bg-Blue-File m-auto p-6">
    <div class="flex justify-between items-start">
      <span>
        <i
          class="fa-solid fa-file-export text-Blue-File dark:text-white fa-xl"
        ></i
      ></span>
      <a href="/mainProject">
        <i class="fa-solid fa-xmark text-Blue-File dark:text-white"></i>
      </a>
    </div>
    <h5 class="text-Blue-File dark:text-white my-4 text-lg font-bold">
      Open file
    </h5>
    <div class="flex items-center gap-4">
      <div>
        <div id="fileDetails" class="my-4 hidden">
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-3 text-Blue-File dark:text-white">
              <i class="fa-regular fa-file-lines"></i>
              <p id="fileName" class="text-Blue-File dark:text-white"></p>
            </div>
            <p id="fileSize" class="text-Blue-File dark:text-white"></p>
          </div>
          <form action="/">
            <!-- left content input level 1 -->
            <v-select
              v-model="selected"
              :items="items"
              label="Select"
              class="h-14 w-96 items-center rounded bg-Input-Bg text-Blue-File dark:text-white dark:bg-Blue-Primary"
            >
            </v-select>
            <div class="justify-end flex gap-4 mt-4">
              <a type="reset" href="/mainProject" class="secondaryButton">
                Back
              </a>
              <button type="submit" class="primaryButton">Save</button>
            </div>
          </form>
        </div>
        <!-- left content area -->
        <div id="dropArea" class="dropArea group">
          <button
            id="fileSelectBtn"
            class="text-white font-bold py-2 px-4 rounded"
          >
            <i
              class="fa-solid fa-file-circle-plus fa-xl text-Blue-File hover:text-white dark:text-white group-hover:text-white group-hover:dark:text-Blue-File"
            ></i>
          </button>
          <p
            class="mb-2 text-Blue-File hover:text-white dark:text-white group-hover:text-white group-hover:dark:text-Blue-File"
          >
            from your computer
          </p>
          <p
            class="mb-4 text-Blue-File hover:text-white dark:text-white group-hover:text-white group-hover:dark:text-Blue-File"
          >
            drag the file...
          </p>

          <input id="fileInput" type="file" class="hidden" />
        </div>
      </div>
      <div>
        <div id="fileDetails1" class="my-4 hidden">
          <div class="flex items-center gap-3 text-blue-light">
            <img src="/src/assets/IconData.svg" alt="" />
            <p id="fileName1" class="text-blue-light"></p>
          </div>

          <!-- <p id="fileSize" class="text-blue-light"></p> -->
        </div>
        <!-- right content area -->
        <div id="dropArea1" class="dropArea group">
          <button
            id="fileSelectBtn1"
            class="text-white font-bold py-2 px-4 rounded"
          >
            <i
              class="fa-solid fa-folder-plus fa-xl text-Blue-File dark:text-white group-hover:text-white group-hover:dark:text-Blue-File"
            ></i>
          </button>
          <p
            class="mb-2 text-Blue-File hover:text-white dark:text-white group-hover:text-white group-hover:dark:text-Blue-File"
          >
            from your computer
          </p>
          <p
            class="mb-4 text-Blue-File hover:text-white dark:text-white group-hover:text-white group-hover:dark:text-Blue-File"
          >
            drag the file...
          </p>

          <input id="fileInput1" type="file" class="hidden" />
        </div>
      </div>
    </div>
    <!-- right level 2 -->
    <div class="my-4 hidden" id="fileJson">
      <form action="/">
        <v-select
          v-model="selected"
          :items="items1"
          id="selectedFile"
          label="Select1"
          class="h-14 w-96 items-center rounded bg-Input-Bg text-Blue-File dark:text-white dark:bg-Blue-Primary"
        >
        </v-select>
        <div class="justify-between items-center mt-4 hidden" id="textName">
          <div class="flex items-center gap-3 text-Blue-File dark:text-white">
            <i class="fa-regular fa-file-lines"></i>
            <p class="textJsonFile">Simple.json</p>
          </div>
        </div>

        <div class="justify-end flex gap-4 mt-4" id="simpleSave">
          <a type="reset" href="/mainProject" class="secondaryButton"> Back </a>
          <button type="submit" class="primaryButton">Save</button>
        </div>
      </form>
    </div>
    <!-- right level 3 -->
    <div class="hidden" id="jsonFiles">
      <div class="grid jsonFile grid-cols-6 gap-6">
        <div id="jsonFiles1">
          <a href="#" class="textJsonFile">
            <img
              src="/src/assets/folder-open-white.svg"
              class="mx-auto"
              alt=""
            />
            Simple.Json
          </a>
        </div>
        <div>
          <a href="#" class="textJsonFile">
            <img
              src="/src/assets/folder-open-white.svg"
              class="mx-auto"
              alt=""
            />
            Simple.Json
          </a>
        </div>
        <div>
          <a href="#" class="textJsonFile">
            <img
              src="/src/assets/folder-open-white.svg"
              class="mx-auto"
              alt=""
            />
            Simple.Json
          </a>
        </div>
        <div>
          <a href="#" class="textJsonFile">
            <img
              src="/src/assets/folder-open-white.svg"
              class="mx-auto"
              alt=""
            />
            Simple.Json
          </a>
        </div>
        <div>
          <a href="#" class="textJsonFile">
            <img
              src="/src/assets/folder-open-white.svg"
              class="mx-auto"
              alt=""
            />
            Simple.Json
          </a>
        </div>
        <div>
          <a href="#" class="textJsonFile">
            <img
              src="/src/assets/folder-open-white.svg"
              class="mx-auto"
              alt=""
            />
            Simple.Json
          </a>
        </div>
        <div>
          <a href="#" class="textJsonFile">
            <img
              src="/src/assets/folder-open-white.svg"
              class="mx-auto"
              alt=""
            />
            Simple.Json
          </a>
        </div>
        <div>
          <a href="#" class="textJsonFile">
            <img
              src="/src/assets/folder-open-white.svg"
              class="mx-auto"
              alt=""
            />
            Simple.Json
          </a>
        </div>
        <div>
          <a href="#" class="textJsonFile">
            <img
              src="/src/assets/folder-open-white.svg"
              class="mx-auto"
              alt=""
            />
            Simple.Json
          </a>
        </div>
        <div>
          <a href="#" class="textJsonFile">
            <img
              src="/src/assets/folder-open-white.svg"
              class="mx-auto"
              alt=""
            />
            Simple.Json
          </a>
        </div>
        <div>
          <a href="#" class="textJsonFile">
            <img
              src="/src/assets/folder-open-white.svg"
              class="mx-auto"
              alt=""
            />
            Simple.Json
          </a>
        </div>
        <div>
          <a href="#" class="textJsonFile">
            <img
              src="/src/assets/folder-open-white.svg"
              class="mx-auto"
              alt=""
            />
            Simple.Json
          </a>
        </div>
      </div>
      <div class="justify-end flex gap-4 mt-4">
        <a type="reset" href="/mainProject" class="secondaryButton"> Back </a>
        <button type="submit" id="openJson" class="primaryButton">Open</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      items: ["Video Labels", "face-detection", "newtest111", "randomfile"],
      items1: ["Video Labels", "face-detection", "newtest111", "randomfile"],
    };
  },
  mounted() {
    const dropArea = document.getElementById("dropArea");
    const fileInput = document.getElementById("fileInput");
    const fileSelectBtn = document.getElementById("fileSelectBtn");
    const fileDetails = document.getElementById("fileDetails");
    const fileName = document.getElementById("fileName");
    const fileSize = document.getElementById("fileSize");

    const dropArea1 = document.getElementById("dropArea1");
    const fileInput1 = document.getElementById("fileInput1");
    const fileSelectBtn1 = document.getElementById("fileSelectBtn1");
    const fileDetails1 = document.getElementById("fileDetails1");
    const fileName1 = document.getElementById("fileName1");
    const fileSize1 = document.getElementById("fileSize1");

    const jsonFile = document.getElementById("jsonFiles");

    dropArea.addEventListener("click", () => {
      fileInput.click();
    });

    fileInput.addEventListener("change", handleFiles);
    dropArea.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropArea.classList.add("border-blue-500");
    });
    dropArea.addEventListener("dragleave", () => {
      dropArea.classList.remove("border-blue-500");
    });
    dropArea.addEventListener("drop", (e) => {
      e.preventDefault();
      dropArea.classList.remove("border-blue-500");
      const files = e.dataTransfer.files;
      handleFiles({ target: { files } });
    });

    function handleFiles(event) {
      const file = event.target.files[0];
      if (file) {
        dropArea.classList.add("hidden");
        dropArea1.classList.add("hidden");

        fileDetails.classList.remove("hidden");
        fileName.textContent = `${file.name}`;
        fileSize.textContent = `Size: ${(file.size / 1024).toFixed(0)} KB`;
      }
    }

    dropArea1.addEventListener("click", () => {
      fileJson.classList.remove("hidden");
      dropArea1.classList.add("hidden");
      dropArea.classList.add("hidden");
    });
    const simpleSave = document.getElementById("simpleSave");
    const jsonFiles1 = document.getElementById("jsonFiles1");
    const selectElement = document.getElementById("selectedFile");
    const textName = document.getElementById("textName");
    selectElement.addEventListener("change", () => {
      if (selectElement.value) {
        jsonFile.classList.remove("hidden");
        selectElement.classList.add("w-full");
        simpleSave.classList.add("hidden");
      }
    });

    jsonFiles1.addEventListener("click", () => {
      jsonFile.classList.add("hidden");
      selectElement.classList.remove("w-full");

      selectElement.classList.add("w-96");
      simpleSave.classList.remove("hidden");
      textName.classList.remove("hidden");
    });

    const openJson = document.getElementById("openJson");
    const fileJson = document.getElementById("fileJson");

    openJson.addEventListener("click", () => {
      fileJson.classList.remove("hidden");
      jsonFile.classList.add("hidden");
    });
  },
};
</script>

<style></style>
