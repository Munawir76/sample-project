<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <b-card id="modal-tambahData" header="Tambah Data">
        <b-form @submit.stop.prevent="submitAdd">
          <b-row class="my-1">
            <b-col sm="3">
              <label for="input-none">Nama :</label>
            </b-col>
            <b-col sm="9">
              <b-form-input
                v-model="form.nama"
                id="input-none"
                placeholder="Masukan Nama"
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
              <label for="input-none">No. HP:</label>
            </b-col>
            <b-col sm="9">
              <b-form-input
                :validate="true"
                v-model="form.noHp"
                id="input-none"
                placeholder="Masukan No. HP"
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="3">
              <label for="input-none">Alamat:</label>
            </b-col>
            <b-col sm="9">
              <b-form-input
                v-model="form.alamat"
                id="input-none"
                placeholder="Masukan Alamat"
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="text-center mt-5">
            <b-col></b-col>
            <b-col cols="0">
              <router-link to="/profile">
                <b-button size="sm" variant="danger">
                  Batal
                </b-button>
              </router-link>
            </b-col>
            <b-col cols="1">
              <b-button size="sm" type="submit" variant="primary">
                Simpan
              </b-button>
            </b-col>
            <b-col></b-col>
          </b-row>
        </b-form>
      </b-card>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import axios from "axios";
import router from "../router";

export default {
  name: "Tambah",
  components: {
    Navbar,
  },
  data() {
    return {
      form: {
        email: null,
        nama: "",
        noHp: null,
        alamat: null,
      },
    };
  },
  methods: {
    submitAdd() {
      if (this.validation) {
        const tambah = {
          email: this.form.email,
          nama: this.form.nama,
          hp: this.form.noHp,
          alamat: this.form.alamat,
        };
        axios
          .post("http://localhost:3000/posts", tambah)
          .then((response) => {
            this.showAlert();
            console.log(response, "ini respon");
          })
          .catch((error) => console.log(error, "ini error"));
      } else {
        this.$swal({
          icon: "error",
          title: "Data tidak lengkap",
        });
      }
    },
    showAlert() {
      this.$swal({
        icon: "success",
        title: "Add Successfull",
      });
      setTimeout(() => {
        router.push("/profile");
      }, 2000);
    },
  },
  computed: {
    validation() {
      return this.form.nama.length > 0;
    },
  },
};
</script>

<style scoped>
.buttun {
  gap: 3px;
}
</style>
