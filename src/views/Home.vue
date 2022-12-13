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
      <Category />
      <!-- <hr class="mt-5" /> -->
      <div class="row landing-page">
        <div>
          <Menu />
        </div>
      </div>
      <div class="mt-10"><history-profile /></div>
    </div>
    <Steps />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Menu from "../components/Menu.vue";
import Category from "@/components/Category.vue";
import HistoryProfile from "../components/HistoryProfile.vue";
import Steps from "../components/Steps.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    Menu,
    Category,
    HistoryProfile,
    Steps,
    Footer,
  },
};
</script>

<style>
.landing-page {
  padding: 3rem;
}
</style>
