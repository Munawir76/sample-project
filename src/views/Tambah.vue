<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <b-card id="modal-tambahData" header="Tambah Data">
        <b-form @submit.stop.prevent="submitAdd">
          <b-row class="my-1">
            <b-col sm="3">
              <label for="input-none">Nama menu :</label>
            </b-col>
            <b-col sm="9">
              <b-form-input
                v-model="form.menu"
                id="input-none"
                placeholder="Masukan Nama"
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="3">
              <label for="input-none">Price :</label>
            </b-col>
            <b-col sm="9">
              <b-form-input
                v-model="form.price"
                id="input-none"
                placeholder="Masukan email anda"
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="3">
              <label for="input-none">Category :</label>
            </b-col>
            <b-col sm="9">
              <b-form-select
                v-model="form.category_id"
                :options="options"
              ></b-form-select>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="3">
              <label for="input-none">Deskripsi :</label>
            </b-col>
            <b-col sm="9">
              <b-form-input
                v-model="form.description"
                id="input-none"
                placeholder="Masukan Alamat"
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="3">
              <label for="input-none">Durasi :</label>
            </b-col>
            <b-col sm="9">
              <b-form-input
                v-model="form.duration"
                id="input-none"
                placeholder="Masukan Alamat"
              ></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-1">
            <b-col sm="3">
              <label for="input-image">Image :</label>
            </b-col>
            <b-col sm="9">
              <b-input-group>
                <b-input-group-prepend is-text>
                  <b-icon icon="image-fill"></b-icon>
                </b-input-group-prepend>
                <b-form-file id="form-image" v-model="form.image"></b-form-file>
              </b-input-group>
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
      setImageUpload(data) {
        this.imageUpload = data;
      },
      form: {
        price: null,
        menu: null,
        category_id: null,
        image: null,
        duration: null,
        description: null,
      },
      options: [
        { value: "16ff4f67-e761-445e-80a6-70c2ea4b37d1", text: "Mingguan" },
        { value: "09c2be7e-beac-438d-a5a6-566b64f8841b", text: "Bulanan" },
      ],
    };
  },
  methods: {
    submitAdd() {
      const form = new FormData();
      form.append("file", this.form.image);
      const token = localStorage.getItem("tokenAdmin");
      // console.log(form, "ini upload");
      axios
        .post("http://localhost:3000/file/upload", form, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response, "ini respon");
          this.setImageUpload(response.data.data.filename);
          const tambah = {
            price: this.form.price,
            menu: this.form.menu,
            category_id: this.form.category_id,
            image: this.imageUpload,
            duration: this.form.duration,
            description: this.form.description,
          };
          console.log(tambah, "ini datanya");
          axios
            .post("http://localhost:3000/menu/create/", tambah, {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, //Add this line
              },
            })
            .then((response) => {
              this.showAlert();
              console.log(response, "ini respon data");
            })
            .catch((error) => console.log(error, "ini error post datanya"));
          console.log(response, "ini respon");
        })
        .catch((error) => console.log(error, "ini error upload image"));
    },
    showAlert() {
      this.$swal({
        icon: "success",
        title: "Add Successfull",
      }).then(() => router.push("/profile"));
    },
  },
};
</script>

<style scoped>
.buttun {
  gap: 3px;
}
</style>
