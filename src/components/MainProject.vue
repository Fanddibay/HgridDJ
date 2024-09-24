<template>
  <div class="flex justify-between overflow-hidden w-full">
    <!-- left content -->

    <div
      class="dark:bg-Blue-File bg-White-Bg h-[100vh] w-[450px] overflow-auto pb-32 testScroll border-r border-Blue-Border"
    >
      <div id="fileContent" class="">
        <!-- project content -->
        <div
          class="bg-Blue-Primary p-2 flex justify-between items-center dark:border-transparent"
        >
          <h5 class="text-white text-sm font-medium">Project Management</h5>
          <div class="flex items-center gap-2">
            <a href="#" class="hover:text-blue-dark">
              <i class="fa-solid fa-square-plus fa-lg text-white"></i>
            </a>
            <a href="#" class="hover:text-blue-dark">
              <i class="fa-solid fa-folder-plus fa-lg text-white"></i>
            </a>
          </div>
        </div>
        <!-- grid project content -->
        <!-- content 1 -->
        <div
          class="flex items-center justify-between group text-white px-4 py-2 cursor-pointer hover:bg-blue-dark"
          @click="toggleDropdown('dropdown1')"
        >
          <div class="flex items-center gap-3">
            <i
              class="fa-regular fa-folder fa-xl dark:text-white text-Blue-File"
            ></i>
            <h5
              class="dark:text-white text-Blue-File group-hover:text-Blue-File group-hover:dark:text-white"
            >
              HD211 projects
            </h5>
          </div>
          <svg
            id="icon-dropdown1"
            class="w-4 h-4 transition-transform duration-200 dark:text-white text-Blue-File"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
        <!-- content 1 -->
        <!-- dropdown content 1 -->
        <div id="dropdown1" class="dropdown-menu pl-6 relative">
          <div class="dashed-line"></div>
          <ul class="py-1 text-white">
            <li class="relative">
              <div
                class="flex group items-center justify-between px-4 py-2 text-white cursor-pointer hover:bg-blue-dark"
                @click="toggleDropdown('subDropdown1')"
              >
                <div class="flex items-center gap-4">
                  <i class="fa-regular fa-folder-open iconOperator"></i>
                  <span
                    class="textOperator group-hover:text-Blue-File group-hover:dark:text-white"
                    >Project 1</span
                  >
                </div>
                <svg
                  id="icon-subDropdown1"
                  class="w-4 h-4 transition-transform duration-200 iconOperator"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
              <div id="subDropdown1" class="dropdown-menu mt-2 pl-9 relative">
                <div class="dashed-line"></div>
                <ul>
                  <li class="relative">
                    <div
                      class="flex items-center justify-between group px-4 py-2 text-white cursor-pointer hover:bg-blue-dark"
                      @click="toggleDropdown('subSubDropdown1')"
                    >
                      <div class="flex items-center gap-4">
                        <i class="fa-regular fa-folder-open iconOperator"></i>
                        <span
                          class="textOperator group-hover:text-Blue-File group-hover:dark:text-white"
                          >Subproject 1.1</span
                        >
                      </div>
                      <svg
                        id="icon-subSubDropdown1"
                        class="w-4 h-4 transition-transform duration-200 iconOperator"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                    <div
                      id="subSubDropdown1"
                      class="dropdown-menu mt-2 pl-12 relative"
                    >
                      <div class="dashed-line"></div>
                      <ul>
                        <li>
                          <a
                            href="#"
                            class="flex gap-3 items-center px-4 py-2 hover:bg-blue-dark group"
                          >
                            <i
                              class="fa-regular fa-file-lines iconOperator"
                            ></i>
                            <span
                              class="textOperator group-hover:text-Blue-File group-hover:dark:text-white"
                              >Project.Json</span
                            >
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex gap-3 items-center px-4 py-2 hover:bg-blue-dark group"
                          >
                            <i
                              class="fa-regular fa-file-lines iconOperator"
                            ></i>
                            <span
                              class="textOperator group-hover:text-Blue-File group-hover:dark:text-white"
                              >newfile.json</span
                            >
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="flex gap-3 items-center px-4 py-2 hover:bg-blue-dark group"
                          >
                            <i
                              class="fa-regular fa-file-lines iconOperator"
                            ></i>
                            <span
                              class="textOperator group-hover:text-Blue-File group-hover:dark:text-white"
                              >newProject.json</span
                            >
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="block">
                    <a
                      href="#"
                      class="flex gap-3 items-center px-4 py-2 hover:bg-blue-dark group"
                    >
                      <i class="fa-regular fa-folder-open iconOperator"></i>
                      <span
                        class="textOperator group-hover:text-Blue-File group-hover:dark:text-white"
                        >Subproject 1.2</span
                      >
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-blue-dark group">
                <div class="flex items-center gap-4">
                  <i class="fa-regular fa-folder-open iconOperator"></i>
                  <span
                    class="textOperator group-hover:text-Blue-File group-hover:dark:text-white"
                    >Project 2</span
                  >
                </div>
              </a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-blue-dark group">
                <div class="flex items-center gap-4">
                  <i class="fa-regular fa-folder-open iconOperator"></i>
                  <span
                    class="textOperator group-hover:text-Blue-File group-hover:dark:text-white"
                    >Project 3</span
                  >
                </div>
              </a>
            </li>
          </ul>
        </div>
        <!-- end dropdown content 1 -->
        <!-- content 2 -->
        <div
          class="flex items-center justify-between text-white px-4 py-2 cursor-pointer hover:bg-blue-dark group"
        >
          <div class="flex items-center gap-3">
            <i
              class="fa-regular fa-folder fa-xl dark:text-white text-Blue-File"
            ></i>
            <h5
              class="dark:text-white text-Blue-File group-hover:text-Blue-File group-hover:dark:text-white"
            >
              HD211 projects
            </h5>
          </div>
          <svg
            id="icon-dropdown1"
            class="w-4 h-4 transition-transform duration-200 dark:text-white text-Blue-File"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
        <!-- end content 2 -->
        <!-- content 3 -->
        <div
          class="flex items-center justify-between text-white px-4 py-2 cursor-pointer hover:bg-blue-dark group"
        >
          <div class="flex items-center gap-3">
            <i
              class="fa-regular fa-folder fa-xl dark:text-white text-Blue-File"
            ></i>
            <h5
              class="dark:text-white text-Blue-File group-hover:text-Blue-File group-hover:dark:text-white"
            >
              HD211 projects
            </h5>
          </div>
          <svg
            id="icon-dropdown1"
            class="w-4 h-4 transition-transform duration-200 dark:text-white text-Blue-File"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
        <!-- end content 3 -->
        <!-- content 4 -->
        <div
          class="flex items-center justify-between text-white px-4 py-2 cursor-pointer hover:bg-blue-dark group"
        >
          <div class="flex items-center gap-3">
            <i
              class="fa-regular fa-folder fa-xl dark:text-white text-Blue-File"
            ></i>
            <h5
              class="dark:text-white text-Blue-File group-hover:text-Blue-File group-hover:dark:text-white"
            >
              HD211 projects
            </h5>
          </div>
          <svg
            id="icon-dropdown1"
            class="w-4 h-4 transition-transform duration-200 dark:text-white text-Blue-File"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
        <!-- end content 4 -->
        <!-- end project content -->
        <!-- operator -->
        <div class="operator">
          <!-- content 1 -->
          <div
            class="contentOperator bg-Yellow-Primary text-white"
            @click="toggleDropdowns()"
          >
            <div class="flex items-center gap-3">
              <h5>HGrid DE</h5>
            </div>
            <div class="flex gap-2 items-center">
              <a href="#">
                <i class="fa-solid fa-square-plus fa-lg text-white"></i>
              </a>
              <div>
                <svg
                  id="icon-dropdowns"
                  class="w-4 h-4 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <!-- content 1 -->
          <!-- dropdown content  -->
          <div id="dropdowns" class="dropdown-menu relative HgridDE">
            <ul
              class="py-1 text-Blue-File dark:text-white bg-transparent dark:bg-dark-blue"
            >
              <li class="relative">
                <div
                  class="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-green-dark"
                >
                  <div class="flex items-center gap-4">
                    <i class="fa-regular fa-file-code text-Yellow-Primary"></i>
                    <span>Workflow HGrid DE</span>
                  </div>
                </div>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-green-dark">
                  <div class="flex items-center gap-4">
                    <i class="fa-regular fa-file-code text-Yellow-Primary"></i>
                    <span>Workflow HGrid DE</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-green-dark">
                  <div class="flex items-center gap-4">
                    <i class="fa-regular fa-file-code text-Yellow-Primary"></i>
                    <span>Workflow HGrid DE</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-green-dark">
                  <div class="flex items-center gap-4">
                    <i class="fa-regular fa-file-code text-Yellow-Primary"></i>
                    <span>Workflow HGrid DE</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <!-- end dropdown content 1 -->
          <!-- content 2 -->
          <div
            class="contentOperator bg-Purpple-Primary text-white"
            @click="toggleDropdowns1()"
          >
            <div class="flex items-center gap-3">
              <h5>HGrid AN</h5>
            </div>
            <div class="flex gap-2 items-center">
              <a href="#">
                <i class="fa-solid fa-square-plus fa-lg text-white"></i>
              </a>
              <div>
                <svg
                  id="icon-dropdowns2"
                  class="w-4 h-4 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <!-- content 2 -->
          <!-- dropdown content 2 -->
          <div id="dropdowns1" class="dropdown-menu relative HgridAN">
            <ul
              class="py-1 text-Blue-File dark:text-white bg-transparent dark:bg-dark-blue"
            >
              <li class="relative">
                <div
                  class="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-green-dark"
                >
                  <div class="flex items-center gap-4">
                    <i class="fa-regular fa-file-code text-Purpple-Primary"></i>
                    <span>Workflow HGrid AN</span>
                  </div>
                </div>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-green-dark">
                  <div class="flex items-center gap-4">
                    <i class="fa-regular fa-file-code text-Purpple-Primary"></i>
                    <span>Workflow HGrid AN</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-green-dark">
                  <div class="flex items-center gap-4">
                    <i class="fa-regular fa-file-code text-Purpple-Primary"></i>
                    <span>Workflow HGrid AN</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-green-dark">
                  <div class="flex items-center gap-4">
                    <i class="fa-regular fa-file-code text-Purpple-Primary"></i>
                    <span>Workflow HGrid AN</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <!-- end dropdown content 2 -->
          <!-- content 3 -->
          <div
            class="contentOperator bg-Red-Primary text-white"
            @click="toggleDropdowns2()"
          >
            <div class="flex items-center gap-3">
              <h5>HGrid DL</h5>
            </div>
            <div class="flex gap-2 items-center">
              <a href="#">
                <i class="fa-solid fa-square-plus fa-lg text-white"></i>
              </a>
              <div>
                <svg
                  id="icon-dropdowns3"
                  class="w-4 h-4 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <!-- content 3 -->
          <!-- dropdown content 3 -->
          <div id="dropdowns2" class="dropdown-menu relative HgridAN">
            <ul
              class="py-1 text-Blue-File dark:text-white bg-transparent dark:bg-dark-blue"
            >
              <li class="relative">
                <div
                  class="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-green-dark"
                >
                  <div class="flex items-center gap-4">
                    <i class="fa-regular fa-file-code text-Red-Primary"></i>
                    <span>Workflow HGrid DL</span>
                  </div>
                </div>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-green-dark">
                  <div class="flex items-center gap-4">
                    <i class="fa-regular fa-file-code text-Red-Primary"></i>
                    <span>Workflow HGrid DL</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-green-dark">
                  <div class="flex items-center gap-4">
                    <i class="fa-regular fa-file-code text-Red-Primary"></i>
                    <span>Workflow HGrid DL</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-green-dark">
                  <div class="flex items-center gap-4">
                    <i class="fa-regular fa-file-code text-Red-Primary"></i>
                    <span>Workflow HGrid DL</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <!-- end dropdown content 3 -->
        </div>
        <!-- end operator -->
      </div>
      <div id="searchContent" class="p-4 hidden">
        <div class="relative">
          <input
            id="inputSearch"
            type="text"
            placeholder="Search..."
            class="pl-10 py-2 w-full border bg-gray-300 dark:bg-Blue-Primary text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
          />
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <i class="fas fa-search"></i>
          </div>
        </div>
        <p class="text-Blue-File dark:text-white text-end justify-end my-3">
          3 Results
        </p>
        <div class="grid gap-y-4 hidden" id="fileSearch">
          <a
            href="#"
            class="flex items-center gap-2 text-Blue-File dark:text-white"
            ><i class="fa-solid fa-code"></i>File.Json</a
          >
          <a
            href="#"
            class="flex items-center gap-2 text-Blue-File dark:text-white"
            ><i class="fa-solid fa-code"></i>File.Json</a
          >
          <a
            href="#"
            class="flex items-center gap-2 text-Blue-File dark:text-white"
            ><i class="fa-solid fa-folder-open"></i>File.Json</a
          >
        </div>
      </div>
    </div>
    <!-- middle content -->
    <div class="w-full relative justify-center middleCanvas">
      <!-- page link workflow-->
      <div class="m-2 text-sm flex items-center gap-4">
        <div
          class="bg-Blue-Primary text-white shadow dark:shadow-none gap-4 p-2 flex items-center rounded dark:text-white"
        >
          <h5>HD211 Projects</h5>
          <i class="fa-solid fa-xmark"></i>
        </div>
        <div
          class="bg-slate-400 text-white shadow dark:shadow-none dark:text-text-dark gap-4 p-2 flex items-center rounded"
        >
          <h5>HD211 projects not selected</h5>
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
      <!-- feature go js -->
      <div class="container mt-4">
        <div class="flex items-center gap-12 justify-center">
          <div class="flex gap-3">
            <button class="button-canvas">
              <img
                src="/src/assets/canvasIcon/clipboard.svg"
                class="hidden dark:block"
                alt=""
              />
              <img
                src="/src/assets/lightMode/clipboard.svg"
                class="dark:hidden"
                alt=""
              />
            </button>
            <button class="button-canvas" id="btnCanvas">
              <img
                src="/src/assets/canvasIcon/save.svg"
                class="hidden dark:block"
                alt=""
              />
              <img
                src="/src/assets/lightMode/save.svg"
                class="dark:hidden"
                alt=""
              />
            </button>
          </div>
          <div class="flex gap-3">
            <button class="button-canvas">
              <img
                src="/src/assets/canvasIcon/rotation-left.svg"
                class="hidden dark:block"
                alt=""
              />
              <img
                src="/src/assets/lightMode/rotationleft.svg"
                class="dark:hidden"
                alt=""
              />
            </button>
            <button class="button-canvas">
              <img
                src="/src/assets/canvasIcon/rotation-right.svg"
                class="hidden dark:block"
                alt=""
              />
              <img
                src="/src/assets/lightMode/rotationright.svg"
                class="dark:hidden"
                alt=""
              />
            </button>
          </div>
          <div class="flex gap-3">
            <button class="button-canvas">
              <img
                src="/src/assets/canvasIcon/file-code.svg"
                class="hidden dark:block"
                alt=""
              />
              <img
                src="/src/assets/lightMode/file-code.svg"
                class="dark:hidden"
                alt=""
              />
            </button>
            <button class="button-canvas">
              <img
                src="/src/assets/canvasIcon/package.svg"
                class="hidden dark:block"
                alt=""
              />
              <img
                src="/src/assets/lightMode/package-02.svg"
                class="dark:hidden"
                alt=""
              />
            </button>
          </div>
          <div class="flex gap-3">
            <button class="button-canvas">
              <img
                src="/src/assets/canvasIcon/zoom-in.svg"
                class="hidden dark:block"
                alt=""
              />
              <img
                src="/src/assets/lightMode/zoomin.svg"
                class="dark:hidden"
                alt=""
              />
            </button>
            <button class="button-canvas">
              <img
                src="/src/assets/canvasIcon/zoom-out.svg"
                class="hidden dark:block"
                alt=""
              />
              <img
                src="/src/assets/lightMode/zoomout.svg"
                class="dark:hidden"
                alt=""
              />
            </button>
            <button class="button-canvas">
              <img
                src="/src/assets/canvasIcon/delete.svg"
                class="hidden dark:block"
                alt=""
              />
              <img
                src="/src/assets/lightMode/delete2.svg"
                class="dark:hidden"
                alt=""
              />
            </button>
            <button class="button-canvas">
              <img
                src="/src/assets/canvasIcon/play.svg"
                class="hidden dark:block"
                alt=""
              />
              <img
                src="/src/assets/lightMode/play.svg"
                class="dark:hidden"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
      <!-- loader -->
      <div
        class="bg-[#8C8F91] py-12 px-4 left-[25%] mt-12 absolute rounded hidden w-[400px]"
        id="loader"
      >
        <div
          class="my-6 text-center justify-center mx-auto"
          id="loaderAnimation"
        >
          <h5 class="text-white text-2xl mb-12">
            Generating workflow, please wait...
          </h5>
          <img
            class="mx-auto text-center animate-spin"
            src="/src/assets/loader.png"
            alt=""
          />
        </div>
        <div
          class="my-6 text-center justify-center mx-auto hidden"
          id="successAnimation"
        >
          <img
            class="mx-auto text-center"
            src="/src/assets/successAnimation.png"
            alt=""
          />
          <h5 class="text-white text-2xl my-6">Generate workflow success!</h5>
          <button
            class="bg-[#676766] text-white px-10 py-3"
            id="btnSuccessAnimation"
          >
            Ok
          </button>
        </div>
      </div>
      <!-- canvas go js -->
      <div class="my-4 bg-white w-full h-full">Canvas in here!</div>
      <!-- bottom panel -->
      <!-- <div
        class="absolute bottom-[100px] right-5 text-Blue-File dark:text-white text-xl cursor-pointer hover:text-card-workflow"
        ref="togglePanel"
      >
        <i class="fa-solid fa-circle-info fa-xl"></i>
      </div> -->
      <div
        ref="resizeContainer"
        class="dark:text-white bg-White-Bg text-Blue-File dark:bg-Blue-File w-full overflow-auto absolute testScroll bottom-0"
      >
        <div ref="resizeHandle" class="resizeHandle"></div>
        <div
          class="p-10 text-Blue-File dark:text-white dark:bg-Blue-File text-sm z-50"
        >
          <!-- Padding top untuk menghindari teks tersembunyi di balik handle -->
          <div class="flex items-center justify-between mb-4">
            <h5 class="text-base font-medium">Terminal</h5>
            <div class="flex gap-4 items-center">
              <a href="#" ref="upPanel"
                ><i class="fa-solid fa-angles-up"></i
                ><i class="fa-solid fa-angles-down hidden"></i
              ></a>
              <a href="#" ref="closePanel"><i class="fa-solid fa-xmark"></i></a>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            sequi! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Suscipit numquam obcaecati quam deleniti omnis laboriosam facere ad,
            soluta eligendi aspernatur voluptas doloribus quidem amet tempore.
            Perferendis quidem dignissimos et voluptatum officiis tempore
            repellendus natus veniam. Aut dolores cupiditate dicta dignissimos!
            Laudantium voluptatibus excepturi praesentium, unde vitae error
            culpa provident ipsam consequatur soluta nesciunt ipsa, dicta nemo
            quis quae porro.
          </p>
        </div>
      </div>
    </div>
    <!-- right content -->
    <div
      class="p-4 border-l border-Blue-Border justify-start w-[500px] bg-White-Bg dark:bg-Blue-File h-[100vh] testScroll overflow-auto pb-24"
    >
      <!-- workflow content -->
      <div class="flex items-center gap-2" @click="toggleNode">
        <button
          @click="toggleWorkflow"
          id="toggleWorkflow"
          class="py-2 p-4 rounded text-Blue-File dark:text-white"
        >
          Workflow config
        </button>
        <button
          id="toggleNode"
          class="py-2 p-4 rounded bg-[#033446] text-[#ffffff66]"
        >
          Node Config
        </button>
      </div>
      <div class="workflow">
        <div>
          <p class="programUseBorder pb-4">Program Use</p>
        </div>
        <!-- programing language -->
        <div class="py-4">
          <form class="programUse">
            <div class="">
              <label for="python" class="">Pythons</label>
              <input
                type="radio"
                id="python"
                name="language"
                value="python"
                class="bg-red-400"
              />
            </div>
            <div>
              <label for="cpp" class="text-gray-700">C++</label>
              <input
                type="radio"
                id="cpp"
                name="language"
                value="cpp"
                class=""
              />
            </div>
            <div>
              <label for="javascript" class="text-gray-700">JavaScript</label>
              <input
                type="radio"
                id="javascript"
                name="language"
                value="javascript"
                class=""
              />
            </div>
          </form>
        </div>
        <p class="programUseBorder pb-2">Problem Selection</p>
        <!-- problem selection -->
        <!-- 1 -->
        <form class="programUse1">
          <div class="formBorder">
            <h5 class="py-4 text-text-light">Natural Language</h5>
            <div class="">
              <label for="Natural" class="text-gray-700"
                >Text Classification</label
              >
              <input
                type="radio"
                id="Natural"
                name="language"
                value="python"
                class=""
              />
            </div>
            <div>
              <label for="Sentiment" class="text-gray-700"
                >Sentiment Analysis</label
              >
              <input
                type="radio"
                id="Sentiment"
                name="language"
                value="cpp"
                class=""
              />
            </div>
            <div>
              <label for="Entity" class="text-gray-700"
                >Entity Extraction</label
              >
              <input
                type="radio"
                id="Entity"
                name="language"
                value="javascript"
                class=""
              />
            </div>
          </div>
        </form>
        <!-- 2 -->
        <form class="programUse1">
          <div class="formBorder">
            <h5 class="py-4 text-text-light">Vision</h5>
            <div class="">
              <label for="Classification" class="text-gray-700"
                >Classification Image</label
              >
              <input
                type="radio"
                id="Classification"
                name="language"
                value="python"
                class=""
              />
            </div>
            <div>
              <label for="Analysis" class="text-gray-700"
                >Sentiment Analysis</label
              >
              <input
                type="radio"
                id="Analysis"
                name="language"
                value="cpp"
                class=""
              />
            </div>
            <div>
              <label for="Object" class="text-gray-700">Object Detection</label>
              <input
                type="radio"
                id="Object"
                name="language"
                value="javascript"
                class=""
              />
            </div>
          </div>
        </form>
        <!-- 3 -->
        <form class="programUse1">
          <div class="formBorder">
            <h5 class="py-4 text-text-light">Table</h5>
            <div class="">
              <label for="Supervised" class="text-gray-700"
                >Supervised Classification</label
              >
              <input
                type="radio"
                id="Supervised"
                name="language"
                value="python"
                class=""
              />
            </div>
            <div>
              <label for="Regression" class="text-gray-700">Regression</label>
              <input
                type="radio"
                id="Regression"
                name="language"
                value="cpp"
                class=""
              />
            </div>
          </div>
        </form>
        <div>
          <p class="programUseBorder pb-4">Model Type Option</p>
        </div>
        <!-- programing language -->
        <div class="py-4">
          <form class="programUse">
            <div class="">
              <label for="Multi" class="text-gray-700"
                >Multi Layer Perception (MLP)</label
              >
              <input
                type="radio"
                id="Multi"
                name="language"
                value="python"
                class=""
              />
            </div>
            <div>
              <label for="Convolution" class="text-gray-700"
                >Convolution Neutral Network (CNN)</label
              >
              <input
                type="radio"
                id="Convolution"
                name="language"
                value="cpp"
                class=""
              />
            </div>
            <div>
              <label for="Recurret" class="text-gray-700"
                >Recurret Neural Network (RNN)</label
              >
              <input
                type="radio"
                id="Recurret"
                name="language"
                value="javascript"
                class=""
              />
            </div>
          </form>
        </div>
      </div>
      <!-- tabs -->
      <div class="max-w-2xl mx-auto p-4 hidden" id="tabs">
        <div class="">
          <nav class="-mb-px flex space-x-4" aria-label="Tabs">
            <!-- Tab 1 -->
            <a href="#" class="tab-link"> Parameters </a>
            <!-- Tab 2 -->
            <a href="#" class="tab-link"> Detail </a>
            <!-- Tab 3 -->
            <a href="#" class="tab-link"> Notes </a>
            <!-- Tab 4 -->
            <a href="#" class="tab-link"> Help</a>
          </nav>
        </div>

        <div class="mt-4">
          <!-- Tab 1 Content -->
          <div id="tab-content-1" class="tab-content active">
            <div class="grid gap-y-6 tabParameter">
              <div class="flex justify-between items-center">
                <label for="AspectRatio">PAD to Aspect Ratio</label>
                <select
                  id="AspectRatio"
                  class="bg-Blue-Primary px-6 py-1 rounded !appearance-none text-white"
                >
                  <option value="1" selected class="text-white">False</option>
                  <option value="1" class="text-white">True</option>
                </select>
              </div>
              <div class="flex justify-between items-center">
                <label for="FollowLinks">Follow Links</label>
                <select
                  id="FollowLinks"
                  class="bg-page-lane dark:bg-card-workflow px-6 py-1 rounded !appearance-none"
                >
                  <option value="1" selected class="dark:text-white">
                    False
                  </option>
                  <option value="1" class="dark:text-white">True</option>
                </select>
              </div>
              <div class="flex justify-between items-center">
                <label for="subset">Subset</label>
                <input
                  id="subset"
                  type="text"
                  placeholder="none"
                  class="bg-page-lane dark:bg-card-workflow px-6 py-1 rounded !appearance-none"
                />
              </div>
              <div class="flex justify-between items-center">
                <label for="Seed">Seed</label>
                <input
                  id="Seed"
                  type="text"
                  placeholder="none"
                  class="bg-page-lane dark:bg-card-workflow px-6 py-1 rounded !appearance-none border-"
                />
              </div>
              <div class="flex justify-between items-center">
                <label for="colorMode">Color Mode</label>

                <select
                  id="colorMode"
                  class="bg-page-lane dark:bg-card-workflow px-6 py-1 rounded !appearance-none"
                ></select>
              </div>
              <div class="flex justify-between items-center">
                <label for="Directory">Directory</label>
                <input
                  id="Directory"
                  type="text"
                  placeholder=" "
                  class="bg-page-lane dark:bg-card-workflow px-6 py-1 rounded !appearance-none"
                />
              </div>
            </div>
          </div>
          <!-- Tab 2 Content -->
          <div id="tab-content-2" class="tab-content">
            <p>
              Konten untuk Tab 2: Berisi penjelasan tentang topik kedua,
              memberikan wawasan tambahan yang relevan dengan tab kedua ini.
            </p>
          </div>
          <!-- Tab 3 Content -->
          <div id="tab-content-3" class="tab-content">
            <p>
              Konten untuk Tab 3: Tab ketiga menyajikan detail lebih lanjut
              mengenai tema yang dibahas, berguna untuk referensi lebih dalam.
            </p>
          </div>
          <!-- Tab 4 Content -->
          <div id="tab-content-4" class="tab-content">
            <div class="flex items-center justify-between">
              <p>Enable pro tip document</p>
              <label class="switch">
                <input type="checkbox" checked id="checkboxProTip" />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggleDropdown(id) {
      const element = document.getElementById(id);
      element.classList.toggle("show");

      const icon = document.getElementById(`icon-${id}`);

      icon.classList.toggle("rotate-180");
    },

    toggleDropdowns() {
      const elements = document.getElementById("dropdowns");
      elements.classList.toggle("show");

      const icons = document.getElementById("icon-dropdowns");
      icons.classList.toggle("rotate-180");
    },

    toggleDropdowns1() {
      const elements = document.getElementById("dropdowns1");
      elements.classList.toggle("show");

      const icons = document.getElementById("icon-dropdowns2");
      icons.classList.toggle("rotate-180");
    },

    toggleDropdowns2() {
      const elements = document.getElementById("dropdowns2");
      elements.classList.toggle("show");

      const icons = document.getElementById("icon-dropdowns3");
      icons.classList.toggle("rotate-180");
    },
  },

  mounted() {
    // resize js
    // Access elements via $refs in Vue
    const resizeHandle = this.$refs.resizeHandle;
    const resizeContainer = this.$refs.resizeContainer;
    const closePanel = this.$refs.closePanel;
    const togglePanel = this.$refs.togglePanel;
    const upPanel = this.$refs.upPanel;
    const checkboxProTip = document.getElementById("checkboxProTip");

    let isResizing = false;
    let startY;
    let startHeight;

    resizeHandle.addEventListener("mousedown", (e) => {
      isResizing = true;
      startY = e.clientY;
      startHeight = parseInt(
        document.defaultView.getComputedStyle(resizeContainer).height,
        10
      );
      document.addEventListener("mousemove", resize);
      document.addEventListener("mouseup", stopResize);
    });

    const resize = (e) => {
      if (isResizing) {
        const newHeight = startHeight - (e.clientY - startY);
        if (newHeight > 0) {
          resizeContainer.style.height = `${newHeight}px`;
        }
      }
    };

    const stopResize = () => {
      isResizing = false;
      document.removeEventListener("mousemove", resize);
      document.removeEventListener("mouseup", stopResize);
    };

    closePanel.addEventListener("click", () => {
      checkboxProTip.checked = false;
      resizeContainer.classList.add("hidden");
      togglePanel.classList.remove("hidden");
      togglePanel.addEventListener("click", () => {
        resizeContainer.classList.remove("hidden");
        togglePanel.classList.add("hidden");
      });
    });

    checkboxProTip.addEventListener("click", () => {
      resizeContainer.classList.toggle("hidden");
    });

    upPanel.addEventListener("click", () => {
      const downIcon = document.querySelector(".fa-angles-down");
      const upIcon = document.querySelector(".fa-angles-up");

      resizeContainer.classList.toggle("h-full");
      downIcon.classList.toggle("hidden");
      upIcon.classList.toggle("hidden");
    });

    const tabs = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", function (e) {
        e.preventDefault();

        // Remove active class from all tabs and contents
        tabs.forEach((t) =>
          t.classList.remove(
            "text-Blue-File",
            "border-Blue-File",
            "dark:text-Blue-Primary",
            "dark:border-Blue-Primary"
          )
        );
        tabContents.forEach((tc) => tc.classList.remove("active"));

        // Add active class to clicked tab and corresponding content
        this.classList.add(
          "text-Blue-File",
          "border-Blue-File",
          "dark:text-Blue-Primary",
          "dark:border-Blue-Primary"
        );
        tabContents[index].classList.add("active");
      });
    });

    // Set first tab as active by default
    tabs[0].classList.add(
      "text-Blue-File",
      "border-Blue-File",
      "dark:text-Blue-Primary",
      "dark:border-Blue-Primary"
    );
    tabContents[0].classList.add("active");

    const toggleWorkflow = document.getElementById("toggleWorkflow");
    const toggleConfig = document.getElementById("toggleNode");

    const workflowContent = document.querySelector(".workflow");
    const configContent = document.getElementById("tabs");

    // Set initial state for workflow button (default selected)
    toggleWorkflow.classList.add(
      "bg-Blue-Primary",
      "text-white",
      "dark:bg-Blue-Primary"
    );

    // Event listener for toggleConfig
    toggleConfig.addEventListener("click", () => {
      // Remove selected styles from toggleWorkflow and apply unselected styles
      toggleWorkflow.classList.remove(
        "text-white",
        "bg-Blue-Primary",
        "dark:bg-Blue-Primary"
      );
      toggleWorkflow.classList.add("bg-[#033446]", "text-[#ffffff66]"); // Apply unselected styles

      // Apply selected styles to toggleConfig
      toggleConfig.classList.add(
        "text-white",
        "bg-Blue-Primary",
        "dark:bg-Blue-Primary"
      );
      toggleConfig.classList.remove("bg-[#033446]", "text-[#ffffff66]"); // Remove unselected styles

      // Hide workflow content and show config content
      workflowContent.classList.add("hidden");
      configContent.classList.remove("hidden");
    });

    // Event listener for toggleWorkflow
    toggleWorkflow.addEventListener("click", () => {
      // Remove selected styles from toggleConfig and apply unselected styles
      toggleConfig.classList.remove(
        "text-white",
        "bg-Blue-Primary",
        "dark:bg-Blue-Primary"
      );
      toggleConfig.classList.add("bg-[#033446]", "text-[#ffffff66]"); // Apply unselected styles

      // Apply selected styles to toggleWorkflow
      toggleWorkflow.classList.add(
        "text-white",
        "bg-Blue-Primary",
        "dark:bg-Blue-Primary"
      );
      toggleWorkflow.classList.remove("bg-[#033446]", "text-[#ffffff66]"); // Remove unselected styles

      // Hide config content and show workflow content
      configContent.classList.add("hidden");
      workflowContent.classList.remove("hidden");
    });

    const btnCanvasLoader = document.getElementById("btnCanvas");
    const loader = document.getElementById("loader");
    const loaderAnimation = document.getElementById("loaderAnimation");
    const successAnimation = document.getElementById("successAnimation");
    const btnSucess = document.getElementById("btnSuccessAnimation");
    btnCanvasLoader.addEventListener("click", () => {
      loader.classList.remove("hidden");
    });

    setTimeout(() => {
      loaderAnimation.classList.add("hidden");
      successAnimation.classList.remove("hidden");
    }, 3000);

    btnSucess.addEventListener("click", () => {
      loader.classList.add("hidden");
    });
  },
};
</script>

<style>
.dropdown-menu {
  display: none;
}
.dropdown-menu.show {
  display: block;
}
.dashed-line {
  border-left: 1px dashed #ccc;
  height: 90%;
  position: absolute;
  left: 10;
  top: 0;
}
.rotate-90 {
  transform: rotate(90deg);
}
.rotate-180 {
  transform: rotate(180deg);
}

.tab-content {
  display: none;
}
.tab-content.active {
  display: block;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #0a677a;
}

input:focus + .slider {
  box-shadow: 0 0 1px #0a677a;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
