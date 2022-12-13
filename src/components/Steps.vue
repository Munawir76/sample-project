<template>
  <div>
    <div class="steps mb-5 justify-items-center">
      <b-row class="mt-10">
        <b-col>
          <div class="flex flex-col-4 mt-5 p-5">
            <img src="../../public/assets/images/login.svg" width="50%" />
            <!-- <footer class="blockquote mt-3 ml-5">
              <h4 class="">Login</h4>
            </footer> -->
          </div>
        </b-col>
        <b-col>
          <div class="flex flex-col-4  mt-5 p-5">
            <img src="../../public/assets/images/shopping.svg" width="50%" />
            <!-- <footer class="blockquote-footer mt-3 ml-5">
              <h4 class="">Belanja</h4>
            </footer> -->
          </div>
        </b-col>
        <b-col>
          <div class="flex flex-col-4  mt-5 p-5">
            <img src="../../public/assets/images/payment.svg" width="50%" />
            <!-- <footer class="blockquote-footer mt-3 ml-5">
              <h4 class="">Bayar</h4>
            </footer> -->
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Steps",
};
</script>

<style>
.steps {
  justify-content: center;
  height: 400px;
  margin-top: 10rem;
  margin-left: 10rem;
}
</style>
