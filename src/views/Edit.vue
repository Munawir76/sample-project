<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <b-card title="Edit Data">
        <b-form @submit.prevent="submitEdit">
          <b-row class="my-1">
            <b-col sm="3">
              <label for="input-none">Nama :</label>
            </b-col>
            <b-col sm="9">
              <b-form-input
                v-model="dataById.nama"
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
                v-model="dataById.email"
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
                v-model="dataById.hp"
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
                v-model="dataById.alamat"
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
        <router-link to="/profile" id="router"> </router-link>
      </b-card>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import axios from "axios";
import router from "../router";

export default {
  name: "Edit",
  components: {
    Navbar,
  },
  data() {
    return {
      dataById: {},
    };
  },
  methods: {
    setDataById(data) {
      this.dataById = data;
    },
    submitEdit() {
      const edit = {
        email: this.dataById.email,
        nama: this.dataById.nama,
        hp: this.dataById.hp,
        alamat: this.dataById.alamat,
      };
      console.log(this.$route.params.id, "ini paramnya");
      axios
        .put("http://localhost:3000/posts/" + this.$route.params.id, edit)
        .then((response) => {
          this.showAlert();
          console.log(response, "ini respon");
        })
        .catch((error) => console.log(error, "ini errornyaa"));
    },
    showAlert() {
      this.$swal({
        icon: "success",
        title: "Edit Successfull",
      });
      setTimeout(() => {
        router.push("/profile");
      }, 2000);
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/posts/" + this.$route.params.id)
      .then((response) => {
        this.setDataById(response.data);
        console.log(response?.data, "ini data by id");
      })
      .catch((error) => console.log(error, "ini error by id"));
  },
};
</script>

<style scoped>
.botom {
  /* display: flex; */
  align-items: center;
}
</style>
