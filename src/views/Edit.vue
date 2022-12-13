<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <b-card title="Edit Data">
        <b-form @submit="submitEdit">
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
          <div class="botom">
            <router-link to="/profile">
              <b-button size="sm" variant="danger">
                Batal
              </b-button>
            </router-link>
            <b-button size="sm" type="submit" variant="primary" class="ml-3">
              Simpan
            </b-button>
          </div>
        </b-form>
      </b-card>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import axios from "axios";

export default {
  name: "Edit",
  components: {
    Navbar,
  },

  data() {
    return {
      form: {
        email: "this.data.email",
        nama: "this.data.nama",
        noHp: "this.data.noHp",
        alamat: "this.data.alamat",
      },
    };
  },
  methods: {
    setDataById(data) {
      this.dataById = data;
    },
    submitEdit() {
      const edit = {
        email: this.form.email,
        nama: this.form.nama,
        hp: this.form.noHp,
        alamat: this.form.alamat,
      };
      console.log(this.$route.params.id, "ini paramnya");
      axios
        .put("http://localhost:3000/posts/" + this.$route.params.id, edit)
        .then((response) => {
          console.log(response, "ini respon");
        })
        .catch((error) => console.log(error, "ini error"));
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/posts/" + this.$route.params.id)
      .then((response) => {
        this.setDataById(response.data);
        console.log(response?.data, "ini data by id");
      })
      .catch((error) => console.log(error, "ini error"));
  },
};
</script>

<style scoped>
.botom {
  /* display: flex; */
  align-items: center;
}
</style>
