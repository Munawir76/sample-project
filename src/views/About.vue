<template>
  <div class="pesanan-sukses">
    <Navbar />
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col text-center">
          <img src="../assets/images/menunggu.png" width="300" />
          <h2><strong>Ini About</strong></h2>
          <h4>
            Sedang diperbarui <br />
            Silahkan tunggu
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "About",
  components: {
    Navbar,
  },
};
</script>
