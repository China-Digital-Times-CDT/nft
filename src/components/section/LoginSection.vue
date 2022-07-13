<template>
  <section class="login-section section-space-b pt-4 pt-md-5 mt-md-3">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-lg-6 mb-5 mb-lg-0 d-none d-lg-block">
          <img :src="SectionData.loginData.img" alt="" class="img-fluid" />
        </div>
        <!-- end col-lg-6 -->
        <div class="col-lg-6">
          <div class="section-head-sm">
            <h2 class="mb-1">{{ SectionData.loginData.title }}</h2>
            <p>{{ SectionData.loginData.subTitle }}</p>
          </div>
          <form action="#">
            <div class="form-floating mb-4">
              <input
                type="email"
                class="form-control"
                id="emailAddress"
                placeholder="name@example.com"
              />
              <label for="emailAddress">Email address</label>
            </div>
            <!-- end form-floating -->
            <div class="form-floating mb-4">
              <input
                type="password"
                class="form-control password"
                id="password"
                placeholder="Password"
              />
              <label for="password">Password</label>
              <a
                href="password"
                class="password-toggle"
                title="Toggle show/hide pasword"
              >
                <em class="password-shown ni ni-eye-off"></em>
                <em class="password-hidden ni ni-eye"></em>
              </a>
            </div>
            <!-- end form-floating -->
            <div
              class="d-flex flex-wrap align-items-center justify-content-between mb-4"
            >
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="logMeIn"
                />
                <label
                  class="form-check-label form-check-label-s1"
                  for="logMeIn"
                >
                  Remember me
                </label>
              </div>
              <router-link to="login" class="btn-link form-forget-password"
                >Forgot Password</router-link
              >
            </div>
            <button class="btn btn-primary w-100" type="submit">
              <router-link to="/dashboard"
                >{{ SectionData.loginData.btnText }}
              </router-link>
            </button>
            <span class="d-block my-4">— or login with —</span>
            <ul class="btns-group d-flex">
              <!-- <li
                class="flex-grow-1"
                v-for="(list, i) in SectionData.loginData.btns"
                :key="i"
              >
                <router-link
                  :to="list.path"
                  class="btn d-block btn-primary w-100"
                  :class="list.btnClass"
                  ><em class="ni" :class="list.icon"></em> {{ list.title }}
                </router-link>
              </li> -->
              <button
                class="btn btn-primary w-100"
                type="submit"
                @click.prevent="connect"
              >
                <em class="ni ni-github"></em>
                Github
                <!-- <router-link to="/dashboard"
                  >{{ SectionData.loginData.btnText }}
                </router-link> -->
              </button>
            </ul>
            <p class="mt-3 form-text">
              {{ SectionData.loginData.haveAccountText }}
              <router-link
                :to="SectionData.loginData.btnTextLink"
                class="btn-link"
                >{{ SectionData.loginData.btnTextTwo }}</router-link
              >
            </p>
          </form>
        </div>
        <!-- end col-lg-6 -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
  </section>
</template>
<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
import Pizzly from "pizzly-js";

export default {
  name: "LoginSection",
  data() {
    return {
      SectionData,
      user: null,
    };
  },
  mounted() {
    /*  ======== Show/Hide passoword ======== */
    function showHidePassword(selector) {
      let elem = document.querySelectorAll(selector);
      if (elem.length > 0) {
        elem.forEach((item) => {
          item.addEventListener("click", function (e) {
            e.preventDefault();
            let target = document.getElementById(item.getAttribute("href"));
            if (target.type == "password") {
              target.type = "text";
              item.classList.add("is-shown");
            } else {
              target.type = "password";
              item.classList.remove("is-shown");
            }
          });
        });
      }
    }

    showHidePassword(".password-toggle");
    this.$pizzly = new Pizzly({
      host: "https://customoauth.herokuapp.com/",
      publishableKey: "eXeRtYc3izPTavUJyuTwsuhm8iXhrQZVQfo4kG",
    });
  },
  methods: {
    connect: function () {
      this.$pizzly
        .integration("github")
        .connect()
        .then(this.connectSuccess)
        .catch(this.connectError);
    },
    connectSuccess: function (data) {
      this.user = data.authId;
      localStorage.setItem("authId", this.user);
      console.log("Successfully logged in!", this.user);
      this.printAddress();

      this.$router.replace("/dashboard");
    },
    connectError: function (err) {
      console.error(err);
      alert("Something went wrong. Look at the logs.");
    },
    fetchProfile: async function () {
      await this.$pizzly
        .integration("github")
        .auth(this.user)
        .get("/user")
        .then((response) => {
          const res = response.clone().json();
          return res;
        })
        .then((user) => console.log("username", user.name))
        .then((data) => console.log("data", data))
        .catch(this.fetchError);
    },
    printAddress: async function () {
      console.log(this.fetchProfile());
    },
  },
  // watch: {
  //   input: function () {
  //     localStorage.setItem("authId", this.user);
  //   },
  // },
};
</script>
