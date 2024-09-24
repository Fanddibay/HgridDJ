<template>
  <div class="flex w-full">
    <div class="bg-Blue-File h-[100vh] w-1/2">
      <div class="mt-[25vh] pl-12">
        <h5 class="my-auto leading-tight text-6xl">
          Deep Learning <br />
          <span class="font-bold">made easy</span> <br />
          with our <br />Low Code Tools
        </h5>
        <p class="mt-6 text-2xl">
          With our Low Code Tools, inputting data for Deep <br />
          Learning is made to be easy and simple.
        </p>
      </div>
    </div>
    <div class="bg-[#DAEAF0] w-1/2">
      <div class="mx-auto">
        <div
          class="bg-white p-6 justify-center w-[500px] mt-[20vh] rounded mx-auto"
        >
          <img src="/src/assets/logoFullColor.png" class="mx-auto" alt="" />
          <form class="grid gap-y-4 mt-12" id="loginIndex">
            <h5 class="text-blue-900 font-bold text-2xl">Sign In</h5>
            <input
              type="email"
              class="inputLogin"
              placeholder="Email Adress"
              id="exampleInputEmail1"
            />
            <div class="relative my-3">
              <input
                type="password"
                class="inputLogin"
                id="exampleInputPassword1"
                placeholder="Password"
                required
                autocomplete="off"
              />
              <span
                id="togglePassword"
                class="fa fa-fw fa-eye absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
              ></span>
            </div>
            <div
              id="errorMessage"
              class="text-red-400 font-light text-xl"
            ></div>

            <button
              type="submit"
              class="bg-Blue-Primary py-3 rounded-lg text-white hover:bg-blue-900 mt-12"
            >
              Sign In
            </button>
            <a href="#" class="text-blue-secondary mx-auto">Forgot Password</a>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const loginForm = document.getElementById("loginIndex");
    const togglePassword = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("exampleInputPassword1");

    togglePassword.addEventListener("click", function () {
      const type =
        passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);
      this.classList.toggle("fa-eye");
      this.classList.toggle("fa-eye-slash");
    });

    if (loginForm) {
      loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("exampleInputEmail1").value;
        const password = document.getElementById("exampleInputPassword1").value;
        const errorMessage = document.getElementById("errorMessage");

        if (email === "test@mail.com" && password === "test123") {
          window.location.href = "mainProject";
        } else {
          errorMessage.textContent = "Email atau password anda salah!";
          setTimeout(() => {
            errorMessage.classList.add("hidden");
          }, 5000);
        }
      });
    }
  },
};
</script>

<style></style>
