<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <b-card title="Edit Data">
        <b-form @submit.prevent="submitEdit">
          <b-row class="my-1">
            <b-col sm="3">
              <label for="input-none">Nama menu :</label>
            </b-col>
            <b-col sm="9">
              <b-form-input
                v-model="dataById.menu"
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
                v-model="dataById.price"
                id="input-none"
                placeholder="Masukan email anda"
              ></b-form-input>
            </b-col>
          </b-row>

          <b-row class="my-1">
            <b-col sm="3">
              <label for="input-none">Deskripsi :</label>
            </b-col>
            <b-col sm="9">
              <b-form-input
                v-model="dataById.description"
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
                <b-form-file
                  id="form-image"
                  v-model="dataById.image"
                ></b-form-file>
              </b-input-group>
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

const token = localStorage.getItem("tokenAdmin");

export default {
  name: "Edit",
  components: {
    Navbar,
  },
  data() {
    return {
      dataById: {},
      setImageUpload(data) {
        this.imageUpload = data;
      },
    };
  },
  methods: {
    setDataById(data) {
      this.dataById = data;
    },
    submitEdit() {
      const form = new FormData();
      form.append("file", this.dataById.image);
      console.log(form, "ini upload");
      axios
        .post("http://localhost:3000/file/upload", form, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((respon) => {
          console.log(respon.data.data, "ini respon image");
          this.setImageUpload(respon.data.data.filename);
          const edit = {
            price: this.dataById.price,
            menu: this.dataById.menu,
            image: this.imageUpload,
            description: this.dataById.description,
          };
          console.log(this.$route.params.id, "ini paramnya");
          axios
            .put(
              "http://localhost:3000/menu/edit/" + this.$route.params.id,
              edit,
              {
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`, //Add this line
                },
              }
            )
            .then((response) => {
              this.showAlert();
              console.log(response, "ini respon");
            })
            .catch((error) => console.log(error, "ini errornyaa"));
        });
    },
    showAlert() {
      this.$swal({
        icon: "success",
        title: "Edit Successfull",
      }).then(() => router.push("/profile"));
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/menu/" + this.$route.params.id)
      .then((response) => {
        this.setDataById(response.data.data);
        console.log(response?.data.data, "ini data by id");
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
