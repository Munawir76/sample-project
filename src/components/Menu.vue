<template>
  <div>
    <b-row>
      <b-col>
        <div class="card shadow card-product">
          <img
            src="../../public/assets/images/sepatu-hiking-pria-piranha-10.jpg"
            class="card-img-top"
            alt="..."
            width="100%"
          />
          <div class="card-body">
            <h5 class="card-title"><strong>Sendal Gunung</strong></h5>
            <p class="card-text">Harga : Rp. 30.000</p>
            <router-link class="btn btn-success" :to="'/product/'"
              ><b-icon-cart></b-icon-cart> Pesan</router-link
            >
          </div>
        </div>
      </b-col>
      <b-col>
        <div class="card shadow card-product">
          <img
            src="../../public/assets/images/tas-selempang-pria-z-sender-tripwalk-pouch.jpg"
            class="card-img-top"
            alt="..."
            width="100%"
          />
          <div class="card-body">
            <h5 class="card-title"><strong>Tas Selempang</strong></h5>
            <p class="card-text">Harga : Rp. 30.000</p>
            <router-link class="btn btn-success" :to="'/product/'"
              ><b-icon-cart></b-icon-cart> Pesan</router-link
            >
          </div>
        </div>
      </b-col>
      <b-col>
        <div class="card shadow card-product">
          <img
            src="../../public/assets/images/sepatu-hiking-pria-piranha-10.jpg"
            class="card-img-top"
            alt="..."
            width="100%"
          />
          <div class="card-body">
            <h5 class="card-title"><strong>Sepatu Gunung</strong></h5>
            <p class="card-text">Harga : Rp. 30.000</p>
            <router-link class="btn btn-success" :to="'/product/'"
              ><b-icon-cart></b-icon-cart> Pesan</router-link
            >
          </div>
        </div>
      </b-col>
      <b-col>
        <div class="card shadow card-product">
          <img
            src="../../public/assets/images/sepatu-hiking-pria-piranha-10.jpg"
            class="card-img-top"
            alt="..."
            width="100%"
          />
          <div class="card-body">
            <h5 class="card-title"><strong>Sendal Gunung</strong></h5>
            <p class="card-text">Harga : Rp. 30.000</p>
            <router-link class="btn btn-success" :to="'/product/'"
              ><b-icon-cart></b-icon-cart> Pesan</router-link
            >
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style scoped>
.card-product {
  /* text-align: center; */
  border-radius: 15px;
  width: 380px;
}

.hover {
  transition-delay: 1ms;
}
</style>
