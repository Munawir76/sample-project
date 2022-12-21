<template>
  <div class="card shadow card-product mt-5">
    <img
      :src="'http://localhost:3000/file/' + data.image"
      class="card-img-top"
      alt="..."
      width="60%"
    />
    <div class="card-body">
      <h5 class="card-title">
        <strong>{{ data.menu }}</strong>
      </h5>
      <h5 class="">Deskripsi : {{ data.description }}</h5>
    </div>
    <b-row>
      <b-col>
        <div class="card-body">
          <h6 class="card-text">Harga : {{ convertRupiah(data.price) }}</h6>
        </div>
      </b-col>
      <b-col cols="5" class="cart">
        <router-link class="btn btn-success" :to="'/product/'">
          <b-icon-cart /> Pesan</router-link
        >
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { convertRupiah } from "../../helper/format-rupiah";

export default {
  name: "CardProduct",
  props: ["data"],
  data() {
    return {};
  },
  methods: {
    convertRupiah,
  },
};
</script>

<style></style>
