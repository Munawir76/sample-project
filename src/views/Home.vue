<template>
  <div class="home">
    <Navbar />
    <div class="landing-page">
      <Hero />
      <div class="row mt-5">
        <div class="col">
          <h2>Best <strong>Product</strong></h2>
        </div>
        <div class="col">
          <router-link to="/product" class="btn btn-success float-right ">
            <b-icon-eye> </b-icon-eye>Lihat Semua
          </router-link>
        </div>
      </div>
      <hr />
      <div class="row landing-page">
        <b-row class="content">
          <b-col cols="2" v-for="data in category" :key="data.id">
            <CardCategory :data="data" />
          </b-col>
        </b-row>
      </div>
      <div class="row landing-page">
        <b-row class="content">
          <b-col cols="3" v-for="data in products" :key="data.id">
            <CardProduct :data="data" />
          </b-col>
        </b-row>
      </div>
      <div class="mt-10"><history-profile /></div>
    </div>
    <Steps />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import CardCategory from "../components/reusable/CardCategory";
import HistoryProfile from "../components/HistoryProfile.vue";
import Steps from "../components/Steps.vue";
import Footer from "../components/Footer.vue";
import CardProduct from "../components/reusable/CardProduct.vue";
import axios from "axios";
import dataCategory from "../constant/data-category";

const category = dataCategory;
// console.log(category, "ini cat");

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    CardCategory,
    HistoryProfile,
    Steps,
    Footer,
    CardProduct,
  },
  data() {
    return {
      products: [],
      category: category,
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/menu")
      .then((response) => {
        this.setProducts(response?.data?.data);
        // console.log(response?.data?.data, "ini respon");
      })
      .catch((error) => console.log(error, "ini error"));
  },
};
</script>

<style>
.landing-page {
  padding: 3rem;
}

.content {
  display: flex;
  justify-content: center;
}
</style>
