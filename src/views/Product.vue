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
          <div class="card shadow card-product mb-5">
            <img :src="data.image" class="card-img-top" alt="..." width="60%" />
            <div class="card-body">
              <h5 class="card-title">
                <strong>{{ data.title }}</strong>
              </h5>
              <h6 class="card-text">Harga : $ {{ data.price }}</h6>
              <router-link class="btn btn-success" :to="'/product/'"
                ><b-icon-cart></b-icon-cart> Pesan</router-link
              >
            </div>
          </div>
        </b-col>
      </b-row>
      <div v-for="data in products" :key="data.id">
        <CardProduct :product="data" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
import CardProduct from "../components/reusable/CardProduct.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Product",
  components: {
    Navbar,
    CardProduct,
    Footer,
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
  },
  mounted() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        this.setProducts(response?.data);
        console.log(response?.data, "ini respon");
      })
      .catch((error) => console.log(error, "ini error"));
  },
};
</script>

<style scoped>
.card-product {
  border-radius: 15px;
  justify-content: start;
  height: 840px;
}

h6 {
  color: green;
  font-weight: bold;
}

.content {
  display: flex;
  justify-content: center;
}
</style>
