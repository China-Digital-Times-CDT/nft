<template>
  <div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main bg-pattern-3">
      <!-- Header main -->
      <HeaderMain></HeaderMain>
    </header>
    <!-- create -->
    <section class="create-section section-space-b pt-4 pt-md-5 mt-md-4">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <form action="#" class="form-create mb-5 mb-lg-0">
              <div class="form-item mb-4">
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
                      <label class="mb-2 form-label">Price</label>
                      <input
                        type="text"
                        class="form-control form-control-s1"
                        placeholder="Enter a price for item"
                      />
                    </div>
                    <!-- end form-create-tab-wrap -->
                  </div>

                  <!-- end tab-pane -->
                </div>
                <!-- end tab-content -->
              </div>

              <!-- end form-item -->
              <div class="form-item mb-4">
                <div class="mb-4">
                  <label class="mb-2 form-label">Title</label>
                  <input
                    type="text"
                    class="form-control form-control-s1"
                    placeholder="title"
                  />
                </div>
                <div class="mb-4">
                  <label class="mb-2 form-label">Description</label>
                  <textarea
                    name="message"
                    class="form-control form-control-s1"
                    placeholder="Description"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label class="mb-2 form-label">Royalties</label>
                  <input
                    type="text"
                    class="form-control form-control-s1"
                    placeholder="Royalties"
                  />
                  <p class="form-text mt-1">
                    Suggested: 0, 10%, 20%, 30%. Maximum is 70%
                  </p>
                </div>
              </div>
              <!-- end form-item -->
              <!-- end form-item -->
              <button class="btn btn-primary" type="button">
                Create new NFT collection
              </button>
            </form>
          </div>
          <!-- endn col -->
        </div>
        <!-- row-->
      </div>
      <!-- container -->
    </section>
    <!-- create-section -->
    <!-- Footer  -->
    <!-- Collections -->
    <Collections></Collections>
    <Footer></Footer>
  </div>
  <!-- end page-wrap -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";
export default {
  name: "CreateSingle",
  data() {
    return {
      SectionData,
    };
  },
  mounted() {
    /*==============File upload =============== */
    function fileUpload(selector) {
      let elem = document.querySelectorAll(selector);
      if (elem.length > 0) {
        elem.forEach((item) => {
          item.addEventListener("change", function () {
            var target = document.getElementById(item.dataset.target);
            var allowedExtensions = ["jpg", "png", "gif", "webp", "mp4", "mp3"];
            var fileExtension = this.value.split(".").pop();
            var lastDot = this.value.lastIndexOf(".");
            var ext = this.value.substring(lastDot + 1);
            var extTxt = (target.value = ext);

            if (!allowedExtensions.includes(fileExtension)) {
              alert(
                extTxt +
                  " file type not allowed, Please upload jpg, png, gif, webp, mp4 or mp3 file"
              );
              target.innerHTML =
                "Please upload jpg, png, gif, webp, mp4 or mp3 file";
            } else {
              target.innerHTML = item.files[0].name;
            }
          });
        });
      }
    }

    fileUpload(".file-upload-input");
  },
};
</script>
