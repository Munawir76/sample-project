<template>
  <b-row class="content">
    <b-col cols="4">
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
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
};
</script>

<style></style>
