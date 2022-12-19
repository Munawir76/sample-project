<template>
  <div class="pesanan-sukses">
    <div class="container ">
      <div class="mt-5 card-login">
        <b-row class="">
          <b-col>
            <b-card id="modal-tambahData" header="Tambah Data" class="login">
              <b-form @submit.stop.prevent="submitAdd">
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
                      Login
                    </b-button>
                  </b-col>
                </b-row>
                <b-row class="text-center mt-2">
                  <b-col>
                    <span>
                      <p>Belum punya akun ?</p>
                      <router-link to="/regist">Register</router-link>
                    </span>
                  </b-col>
                </b-row>
              </b-form>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router";
import jwt_decode from "jwt-decode";

export default {
  name: "Login",

  data() {
    return {
      form: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    submitAdd() {
      const login = {
        email: this.form.email,
        password: this.form.password,
      };
      console.log(login, "ini value login");
      axios
        .post("http://localhost:3000/auth/login", login, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          const decode = jwt_decode(response?.data?.access_token);
          localStorage.setItem("user", decode?.name);
          if (decode.role === "Admin") {
            localStorage.setItem("tokenAdmin", response?.data?.access_token);
            this.$swal({
              icon: "success",
              title: "Login Successfull",
            }).then(() => router.push("/profile"));
          } else if (decode.role === "Member") {
            localStorage.setItem("tokenCustomer", response?.data?.access_token);
            this.$swal({
              icon: "success",
              title: "Login Successfull",
            }).then(() => router.push("/product"));
          }

          console.log(response, "ini respon login");
        })
        .catch((error) => console.log(error, "ini error"));
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
  width: 100%;
}
</style>
