<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>
            Daftar
            <strong>Product</strong>
          </h2>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Cari Product Favorite Anda.."
              aria-label="Cari"
              aria-describedby="basic-addon1"
            />

            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <b-icon-search></b-icon-search>
              </span>
            </div>
          </div>
        </div>
      </div>

      <b-row class="content">
        <b-col cols="4" v-for="data in products" :key="data.id">
          <CardProduct :data="data" />
        </b-col>
      </b-row>

      <b-modal ref="my-modal" hide-footer title="Peringatan !">
        <div class="d-block text-center">
          <h3>Anda harus login terlebih dahulu</h3>
        </div>
        <b-row>
          <b-col
            ><b-button
              class="mt-5"
              variant="outline-warning"
              block
              @click="showModal"
              >Oke</b-button
            ></b-col
          >
        </b-row>
      </b-modal>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
import Footer from "../components/Footer.vue";
import router from "../router";
import CardProduct from "../components/reusable/CardProduct.vue";

export default {
  name: "Product",
  components: {
    Navbar,
    Footer,
    CardProduct,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    showModal() {
      router.push("/login");
    },
  },
  mounted() {
    if (
      localStorage.getItem("tokenAdmin") ||
      localStorage.getItem("tokenCustomer")
    ) {
      axios
        .get("http://localhost:3000/menu")
        .then((response) => {
          this.setProducts(response?.data?.data);
          console.log(response?.data?.data, "ini respon");
        })
        .catch((error) => console.log(error, "ini error"));
    } else {
      console.log("harus masuk");
      this.$refs["my-modal"].show();
    }
  },
};
</script>

<style scoped>
.card-product {
  border-radius: 15px;
  justify-content: start;
  height: 540px;
}

h6 {
  color: green;
  font-weight: bold;
}

.cart {
  display: flex;
  align-items: center;
}

.content {
  display: flex;
  justify-content: center;
}
</style>
