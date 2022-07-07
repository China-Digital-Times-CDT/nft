<template>
  <section class="explore-section pt-4">
    <div class="container">
      <!-- filter -->
      <div class="filter-box">
        <h3 class="mb-4">NFT Listings</h3>
        <div class="filter-box-filter m-0">
          <ul class="nav nav-pills nav-pills-s1" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="pills-all-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-all"
                type="button"
                role="tab"
                aria-controls="pills-all"
                aria-selected="true"
              >
                All
              </button>
            </li>
          </ul>
        </div>
        <!-- end filter-box-filter -->
      </div>
      <!-- end filter-box -->
      <div class="gap-2x"></div>
      <!-- end gap -->
      <!-- Product -->
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane show active"
          id="pills-all"
          role="tabpanel"
          aria-labelledby="pills-all-tab"
        >
          <div class="row g-gs">
            <div
              class="col-xl-3 col-lg-4 col-sm-6"
              v-for="product in products"
              :key="product.id"
            >
              <div class="card card-product mb-0">
                <div class="card-image">
                  <img
                    :src="product.img"
                    class="card-img-top"
                    alt="art image"
                  />
                </div>
                <div class="card-body p-4">
                  <h5 class="card-title text-truncate mb-0">
                    {{ product.title }}
                  </h5>
                  <div class="card-author mb-1 d-flex align-items-center">
                    <span class="me-1 card-author-by">By</span>
                    <div class="custom-tooltip-wrap">
                      <router-link
                        :to="product.authorLink"
                        class="custom-tooltip author-link"
                        >{{ product.author }}</router-link
                      >
                    </div>
                    <!-- end custom-tooltip-wrap -->
                  </div>
                  <!-- end card-author -->
                  <div
                    class="card-price-wrap d-flex align-items-center justify-content-sm-between mb-3"
                  >
                    <div class="me-5 me-sm-2">
                      <span class="card-price-title">Price</span>
                      <span class="card-price-number"
                        >&dollar; {{ product.price }}</span
                      >
                    </div>
                    <div class="text-sm-end">
                      <span class="card-price-title">Current bid</span>
                      <span class="card-price-number"
                        >{{ product.priceTwo }} ETH</span
                      >
                    </div>
                  </div>
                  <!-- end card-price-wrap -->
                  <router-link to="product" class="btn btn-sm btn-primary"
                    >Place Bid</router-link
                  >
                </div>
                <!-- end card-body -->
                <router-link
                  class="details"
                  :to="{
                    name: 'ProductDetail',
                    params: {
                      id: product.id,
                      title: product.title,
                      metaText: product.metaText,
                      price: product.price,
                      priceTwo: product.priceTwo,
                      imgLg: product.imgLg,
                      metaText: product.metaText,
                      metaTextTwo: product.metaTextTwo,
                      metaTextThree: product.metaTextThree,
                      content: product.content,
                    },
                  }"
                >
                </router-link>
              </div>
              <!-- end card -->
            </div>
          </div>
          <!-- end row -->
        </div>
        <!-- end tab-pane -->

        <!-- end tab-pane -->
      </div>
      <!-- end tab-content -->
    </div>
    <!-- .container -->
  </section>
  <!-- end explore-section -->
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import SectionData from "@/store/store.js";

export default {
  name: "ExploreSection",
  data() {
    return {
      SectionData,
      categoryMenu: [
        {
          id: 1,
          title: "All",
          options: [
            {
              category: "artworks",
            },
            {
              category: "music",
            },
            {
              category: "collectibles",
            },
            {
              category: "games",
            },
            {
              category: "metaverses",
            },
          ],
        },
      ],
      products: [
        {
          id: 1,
          img: require("@/images/thumb/nft-1.png"),
          imgLg: require("@/images/thumb/nft-lg2.jpg"),
          title: "One Tribe Black Edition",
          content:
            'Digital-only* "CB Galaxy" style Coke Boys LA sneakers wearable in the Decentraland metaverse',
          author: "ZeniconStudio",
          authorLink: "author",
          name: "art",
          price: "14.20",
          metaText: "Not for sale",
          metaTextTwo: "500 editions",
          metaTextThree:
            'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
          currentPrice: "1.32 ETH",
          category: "artworks",
        },
        {
          id: 2,
          img: require("@/images/thumb/nft-22.png"),
          imgLg: require("@/images/thumb/nft-lg2.jpg"),
          title: "Operation Jade Fury",
          content:
            'Digital-only* "CB Galaxy" style Coke Boys LA sneakers wearable in the Decentraland metaverse',
          author: "CanvaNetwork",
          authorLink: "author",
          name: "art",
          price: "10.00",
          metaText: "Not for sale",
          metaTextTwo: "500 editions",
          metaTextThree:
            'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
          currentPrice: "0.32 ETH",
          category: "artworks",
        },
        {
          id: 3,
          img: require("@/images/thumb/nft-4.png"),
          imgLg: require("@/images/thumb/nft-lg2.jpg"),
          title: "Unboxing The Compass",
          content:
            'Digital-only* "CB Galaxy" style Coke Boys LA sneakers wearable in the Decentraland metaverse',
          author: "MoveNetwork",
          authorLink: "author",
          name: "music",
          price: "10.00",
          metaText: "Not for sale",
          metaTextTwo: "500 editions",
          metaTextThree:
            'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
          currentPrice: "1.30 ETH",
          category: "music",
        },
        {
          id: 4,
          img: require("@/images/thumb/nft-5.png"),
          imgLg: require("@/images/thumb/nft-lg2.jpg"),
          title: "Rendering by the Water",
          content:
            'Digital-only* "CB Galaxy" style Coke Boys LA sneakers wearable in the Decentraland metaverse',
          author: "RukiStudio",
          authorLink: "author",
          name: "music",
          price: "13.00",
          metaText: "Not for sale",
          metaTextTwo: "500 editions",
          metaTextThree:
            'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
          currentPrice: "2.30 ETH",
          category: "music",
        },
        {
          id: 5,
          sort: "recent",
          img: require("@/images/thumb/nft-6.png"),
          imgLg: require("@/images/thumb/nft-lg2.jpg"),
          title: "Divine Opulence",
          content:
            'Digital-only* "CB Galaxy" style Coke Boys LA sneakers wearable in the Decentraland metaverse',
          author: "DvisionNetwork",
          authorLink: "author",
          name: "collectibles",
          price: "8.00",
          metaText: "Not for sale",
          metaTextTwo: "500 editions",
          metaTextThree:
            'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
          currentPrice: "1.44 ETH",
          category: "collectibles",
        },
        {
          id: 6,
          img: require("@/images/thumb/nft-7.png"),
          imgLg: require("@/images/thumb/nft-lg2.jpg"),
          title: "Sacral Metatron Cube",
          content:
            'Digital-only* "CB Galaxy" style Coke Boys LA sneakers wearable in the Decentraland metaverse',
          author: "KamranMedia",
          authorLink: "author",
          name: "collectibles",
          price: "11.00",
          metaText: "Not for sale",
          metaTextTwo: "500 editions",
          metaTextThree:
            'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
          currentPrice: "1.33 ETH",
          category: "collectibles",
        },
        {
          id: 7,
          img: require("@/images/thumb/nft-8.png"),
          imgLg: require("@/images/thumb/nft-lg2.jpg"),
          title: "Girl warming up to a bed acrobat",
          content:
            'Digital-only* "CB Galaxy" style Coke Boys LA sneakers wearable in the Decentraland metaverse',
          author: "JisanMedia",
          authorLink: "author",
          name: "metaverses",
          price: "10.00",
          metaText: "Not for sale",
          metaTextTwo: "500 editions",
          metaTextThree:
            'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
          currentPrice: "2.33 ETH",
          category: "metaverses",
        },
        {
          id: 8,
          img: require("@/images/thumb/nft-3.png"),
          imgLg: require("@/images/thumb/nft-lg2.jpg"),
          title: "Women Eyes Modern Art",
          content:
            'Digital-only* "CB Galaxy" style Coke Boys LA sneakers wearable in the Decentraland metaverse',
          author: "RifiUnited",
          authorLink: "author",
          name: "metaverses",
          price: "12.00",
          metaText: "Not for sale",
          metaTextTwo: "500 editions",
          metaTextThree:
            'Highest bid <span class="text-primary fw-semibold">0.072 wETH</span>',
          currentPrice: "3.33 ETH",
          category: "metaverses",
        },
      ],

      isFIlter: false,
      selectedTab: null,
      currentPage: 1,
      maxPerPage: 8,
      selectedId: 0,
    };
  },
  methods: {
    filterCategory(tab, id) {
      this.selectedTab = tab;
      this.isFIlter = true;
      this.selectedId = id;
    },
    loadMore() {
      this.currentPage += 1;
      this.isFIlter = false;
    },
    sorting() {
      this.products.sort((a, b) => (a.price < b.price ? 1 : -1));
    },
    sorting2() {
      this.products.sort((a, b) => (a.price > b.price ? 1 : -1));
    },

    // set active class on button
    getActiveClass(id) {
      if (id === this.activeId) {
        return "active";
      } else {
        return "";
      }
    },
  },
  computed: {
    filteredData() {
      // if(this.isFIlter == false) {
      //   return this.products.slice(0, this.currentPage * this.maxPerPage);
      // }
      return this.products.filter((data) => {
        const opts = this.selectedTab.options.map((opt) => opt.category);
        return opts.includes(data.category);
      });
    },
  },
};
</script>

<style lang="css" scoped>
.details {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.author-link {
  z-index: 2;
  position: relative;
}
</style>
