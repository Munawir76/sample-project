<template>
  <div class="pesanan-sukses">
    <div class="container">
      <template>
        <div class="mt-5">
          <b-row class="card-login">
            <b-col>
              <b-card id="modal-tambahData" header="Tambah Data" class="login">
                <b-form @submit.stop.prevent="submitAdd">
                  <b-row class="my-1">
                    <b-col sm="3">
                      <label for="input-none">Nama Lengkap :</label>
                    </b-col>
                    <b-col sm="9">
                      <b-form-input
                        v-model="form.fullName"
                        id="input-none"
                        placeholder="Masukan Nama Anda"
                      ></b-form-input>
                    </b-col>
                  </b-row>
                  <b-row class="my-1">
                    <b-col sm="3">
                      <label for="input-none">Email :</label>
                    </b-col>
                    <b-col sm="9">
                      <b-form-input
                        v-model="form.email"
                        id="input-none"
                        placeholder="Masukan email anda"
                      ></b-form-input>
                    </b-col>
                  </b-row>
                  <b-row class="my-1">
                    <b-col sm="3">
                      <label for="input-none">Nomer Telpon :</label>
                    </b-col>
                    <b-col sm="9">
                      <b-form-input
                        v-model="form.phone"
                        id="input-none"
                      ></b-form-input>
                    </b-col>
                  </b-row>
                  <b-row class="my-1">
                    <b-col sm="3">
                      <label for="input-none">Password :</label>
                    </b-col>
                    <b-col sm="9">
                      <b-form-input
                        type="password"
                        v-model="form.password"
                        id="input-none"
                        placeholder="Masukan password"
                      ></b-form-input>
                    </b-col>
                  </b-row>
                  <b-row class="text-center mt-5">
                    <b-col>
                      <b-button size="sm" type="submit" variant="primary">
                        Regist
                      </b-button>
                    </b-col>
                  </b-row>
                  <b-row class="text-center mt-2">
                    <b-col>
                      <span>
                        <p>Sudah punya akun ?</p>
                        <router-link to="/login">Login</router-link>
                      </span>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card>
            </b-col>
          </b-row>
        </div>
      </template>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";

export default {
  name: "Regist",

  data() {
    return {
      form: {
        email: null,
        fullName: null,
        phone: "",
        password: null,
      },
    };
  },
  methods: {
    submitAdd() {
      const regist = {
        email: this.form.email,
        fullName: this.form.fullName,
        phone: this.form.phone,
        password: this.form.password,
        roleId: 2,
      };
      console.log(regist, "ini regist");
      axios
        .post("http://localhost:3000/auth/register", regist, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          this.showAlert();
          console.log(response, "ini respon");
        })
        .catch((error) => console.log(error, "ini error"));
      console.log("berhasil");
    },
    showAlert() {
      this.$swal({
        icon: "success",
        title: "Register Successfull",
      }).then(() => router.push("/login"));
    },
  },
  // computed: {
  //   validation() {
  //     return this.form.nama.length > 0;
  //   },
  // },
};
</script>

<style scoped>
.login {
  box-shadow: 300px;
}
.card-login {
  width: 70%;
  /* display: flex; */
  justify-items: center;
  align-items: center;
}
</style>
