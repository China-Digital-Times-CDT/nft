<template>
  <div class="page-wrap">
    <!-- header  -->
    <header class="header-section has-header-main">
      <!-- Header main -->
      <HeaderMain></HeaderMain>
    </header>
    <h3>Your order number</h3>
    <h3 style="text-align: center; width: 100%">
      c2db514b-20d4-41f2-98ef-a70cbf1921ab
    </h3>
    <h4 class="mt-4">
      Your order total is
      <u
        ><b>{{ this.$route.query.amount }} Satoshis</b></u
      >, and will be valid for
      <u><b id="order_expiry_description">9 minutes</b></u>
    </h4>
    <h4 class="mt-4">
      ⚠ Once paid, please stay on this page until we confirm your order and
      present you with your vouchers
    </h4>
    <h4 class="mt-4">You may want to bookmark this page for your records</h4>
    <fieldset
      style="max-width: 25rem; margin-left: 50px; border: double; padding: 11px"
      class="mt-4 text-center mb-4"
    >
      <legend>Pay with Lightning</legend>
      <div id="lightning-svg">
        <textarea
          id="lightning-uri"
          rows="5"
          style="
            word-break: break-all;
            font-family: monospace;
            resize: none;
            width: 100%;
            box-sizing: border-box;
          "
          readonly=""
          v-model="invoiceValue"
        ></textarea>
        <button
          type="button"
          id="lightning-uri-button"
          onclick="copy_to_clipboard('lightning-uri')"
        >
          📋 Copy to Clipboard
        </button>
        <button type="button">📤 Open in Wallet</button>
      </div>
    </fieldset>
    <!-- Footer  -->
    <Footer></Footer>
  </div>
  <!-- end page-wrap -->
</template>

<script>
import axios from "axios";

export default {
  name: "ProductDetail",
  data() {
    return {
      invoiceValue: null,
    };
  },
  async mounted() {
    // const route = useRoute();
    console.log("The amount is: " + this.$route.query.amount);
    await axios
      .post("http://34.84.155.121:8081/invoice", {
        amount: this.$route.query.amount,
      })
      .then((response) => {
        console.log("api--response---", response.data);
        this.invoiceValue = response.data;
      })
      .catch((error) => console.log(error));
  },
};
</script>
