<template>
  <div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
      <!-- Header main -->
      <HeaderMain></HeaderMain>
    </header>
    <section class="create-section section-space-b pt-4 pt-md-5 mt-md-4">
      <div class="container">
        <div class="row justify-content-center">
          <div>
            <h5 class="mb-3">{{ $t("mintnft.contributors") }}</h5>

            <div class="mb-5">
              <div v-for="item in data" :key="item.id">
                <div class="card card-product mb-0" style="margin: 10px">
                  <div class="card-image">
                    <img
                      src="item.avatar_url"
                      alt="art image"
                      style="width: 50px"
                    />
                    <div>{{ $t("mintnft.username") }}: {{ item.login }}</div>
                    <div>{{ $t("mintnft.repourl") }}: {{ item.repos_url }}</div>
                  </div>
                </div>
              </div>
            </div>
            <form action="#" class="form-create mb-5 mb-lg-0">
              <div class="form-item mb-4">
                <!-- <div>{{ this.data[0].login }}</div> -->

                <h5 class="mb-3">Upload file</h5>
                <div class="file-upload-wrap">
                  <p class="file-name mb-4" id="file-name">
                    PNG, GIF, WEBP, MP4 or MP3. Max 100mb.
                  </p>
                  <input
                    id="file-upload"
                    class="file-upload-input"
                    data-target="file-name"
                    type="file"
                    hidden
                    @change="previewFiles"
                    multiple
                  />
                  <label for="file-upload" class="input-label btn btn-primary"
                    >Choose File</label
                  >
                </div>
              </div>
              <!-- end form-item -->
              <div class="form-item mb-4">
                <div class="tab-content mt-4" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="fixed-price"
                    role="tabpanel"
                    aria-labelledby="fixed-price-tab"
                  >
                    <div class="form-create-tab-wrap">
                      <label class="mb-2 form-label">{{
                        $t("mintnft.price")
                      }}</label>
                      <input
                        type="text"
                        class="form-control form-control-s1"
                        placeholder="Enter a price for item"
                        v-model="price"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-item mb-4">
                <div class="tab-content mt-4" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="fixed-price"
                    role="tabpanel"
                    aria-labelledby="fixed-price-tab"
                  >
                    <div class="form-create-tab-wrap">
                      <label class="mb-2 form-label">Product ID</label>
                      <input
                        type="text"
                        class="form-control form-control-s1"
                        placeholder="Enter a id for item"
                        v-model="id"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <!-- end form-item -->
              <div class="form-item mb-4">
                <div class="mb-4">
                  <label class="mb-2 form-label">{{
                    $t("mintnft.title")
                  }}</label>
                  <input
                    type="text"
                    class="form-control form-control-s1"
                    placeholder="title"
                    v-model="title"
                  />
                </div>
                <div class="mb-4">
                  <label class="mb-2 form-label">{{
                    $t("mintnft.description")
                  }}</label>
                  <textarea
                    name="message"
                    class="form-control form-control-s1"
                    placeholder="Description"
                    v-model="description"
                  ></textarea>
                </div>
                <!-- <div class="mb-3">
                  <label class="mb-2 form-label">{{
                    $t("mintnft.royalties")
                  }}</label>
                  <input
                    type="text"
                    class="form-control form-control-s1"
                    placeholder="Royalties"
                  />
                  <p class="form-text mt-1">
                    {{ $t("mintnft.suggestion") }}
                  </p>
                </div> -->
              </div>
              <!-- end form-item -->
              <!-- end form-item -->
              <button class="btn btn-primary" type="button" @click="addNew">
                {{ $t("mintnft.createnew") }}
              </button>
            </form>
          </div>
          <!-- endn col -->
        </div>
        <!-- row-->
      </div>
      <!-- container -->
    </section>
    <!-- Footer  -->
    <Footer></Footer>
  </div>
  <!-- end page-wrap -->
</template>

<script>
//import ProductDetailSection from '@/components/section/Products'
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
import Pizzly from "pizzly-js";
import axios from "axios";

export default {
  name: "ProductDetail",
  data() {
    return {
      SectionData,
      data: [],
      ordernumber: 0,
      title: "",
      description: "",
      price: 0,
      id: 0,
      file: null,
      uploadedPath: null,
    };
  },
  mounted() {
    var authId = localStorage.getItem("authId");
    this.$pizzly = new Pizzly({
      host: "https://customoauth.herokuapp.com/",
      publishableKey: "eXeRtYc3izPTavUJyuTwsuhm8iXhrQZVQfo4kG",
      name: "League",
      description: "A great team",
      permission: "push",
      privacy: "closed",
    });
    this.fetchProfile(authId);
  },
  methods: {
    previewFiles(event) {
      console.log("file--", event.target.files[0]);
      this.file = event.target.files[0];
    },
    fetchProfile: async function (authId) {
      await this.$pizzly
        .integration("github")
        .auth(authId)
        .get("orgs/rkiorg/teams/rkiteam/members")
        .then((response) => {
          const res = response.clone().json();
          return res;
        })
        .then((user) => {
          console.log("user-----here----", user);
          this.data = user;
          console.log("user-----here----", this.data[0].login);
        })
        .then((data) => data)
        .catch(this.fetchError);
    },
    async addNew() {
      console.log("file--", this.file);

      var bodyFormData = new FormData();
      bodyFormData.append("myFile", this.file);
      await axios
        .post(
          "https://gem.chinadigitaltimes.net/api/fileupload",
          bodyFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Accept: "application/json",
              type: "formData",
            },
          }
        )
        .then((response) => {
          console.log("added new product", response.data);
          this.uploadedPath = response.data.path;
        })
        .catch((error) => console.log(error));

      if (this.uploadedPath) {
        var username = localStorage.getItem("username");
        console.log("uploading---data", username);
        var filename = this.uploadedPath.substring(
          this.uploadedPath.lastIndexOf("/") + 1
        );
        this.uploadedPath =
          "https://gem.chinadigitaltimes.net/files" + filename;

        await axios
          .post("https://gem.chinadigitaltimes.net/api/addNFTProduct", {
            productid: this.id,
            productname: this.title,
            currentbidding: this.price,
            description: this.description,
            filepath: this.uploadedPath,
            username: username,
          })
          .then((response) => {
            console.log("added new product", response.data);
            this.title = "";
            this.description = "";
            this.price = 0;
            this.id = 0;
            this.file = null;
            this.uploadedPath = null;
            this.$router.replace({
              path: "/explore",
            });
          })
          .catch((error) => console.log(error));
      }
    },
  },
};
</script>
