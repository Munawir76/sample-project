<template>
  <div class="pesanan-sukses">
    <Navbar />
    <div class="container">
      <template>
        <div class="mt-5">
          <template>
            <router-link to="/tambah/">
              <b-button size="sm" class="mr-1 btn mb-3">
                Tambah Data
              </b-button>
            </router-link>
          </template>
          <b-table striped hover :items="products" :fields="fields">
            <template #cell(actions)="row">
              <router-link :to="'/edit/' + row.item.id">
                <b-button size="sm" class="mr-1 btn btn-warning mr-3">
                  Edit
                </b-button>
              </router-link>
              <b-button
                size="sm"
                variant="danger"
                @click="deleteData(row.item.id)"
              >
                Hapus
              </b-button>
            </template>
          </b-table>
        </div>
      </template>
    </div>
    <div class="footer">
      <!-- <Footer /> -->
      <b-alert variant="success" show> Success Alert </b-alert>;
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
// import Footer from "../components/Footer.vue";

export default {
  name: "Profile",
  components: {
    Navbar,
    // Footer,
  },
  data() {
    return {
      fields: [
        {
          key: "id",
          label: "Nomor",
        },
        {
          key: "nama",
          label: "Nama",
        },
        {
          key: "email",
          label: "E-mail",
        },
        {
          key: "alamat",
          label: "Alamat",
        },
        {
          key: "hp",
          label: "No. HP",
        },
        {
          key: "actions",
          label: "Actions",
        },
      ],
      products: [],
      form: {
        title: this.name,
        body: this.deskripsi,
      },
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    deleteData(id) {
      axios
        .delete("http://localhost:3000/posts/" + id)
        .then((response) => {
          this.setProducts(response.data);
        })
        .catch((error) => console.log(error, "ini error"));
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/posts")
      .then((response) => {
        this.setProducts(response.data);
        console.log(response?.data, "ini respon");
      })
      .catch((error) => console.log(error, "ini error"));
  },
};
</script>

<style scoped>
.footer {
  margin-bottom: 30px;
}
</style>
