<template>
  <div class="pesanan-sukses">
    <Navbar />
    <div class="container">
      <template>
        <div class="mt-5">
          <template>
            <router-link to="/tambah/">
              <b-button size="sm" class="mr-1 btn mb-3">
                <b-icon icon="plus"></b-icon>
                Tambah Data
              </b-button>
            </router-link>
          </template>
          <b-table striped hover :items="products" :fields="fields">
            <template #cell(actions)="row">
              <router-link :to="'/edit/' + row.item.id">
                <b-button size="sm" class="mr-1 btn btn-warning mr-3">
                  <b-icon icon="pencil-square"></b-icon> Edit
                </b-button>
              </router-link>
              <b-button size="sm" variant="danger" @click="showModal">
                <b-icon icon="trash"></b-icon> Hapus
              </b-button>
              <b-modal
                ref="my-modal"
                hide-footer
                title="Konfirmasi Penghapusan"
              >
                <div class="d-block text-center">
                  <h3>Yakin anda ingin hapus dana ini ?</h3>
                </div>
                <b-row>
                  <b-col
                    ><b-button
                      class="mt-5"
                      variant="outline-danger"
                      block
                      @click="deleteData(row.item.id)"
                      >Oke</b-button
                    ></b-col
                  >
                  <b-col
                    ><b-button
                      class="mt-5"
                      variant="outline-warning"
                      block
                      @click="hideModal"
                      >Batal</b-button
                    ></b-col
                  >
                </b-row>
              </b-modal>
            </template>
          </b-table>
        </div>
      </template>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
import router from "../router";

export default {
  name: "Profile",
  components: {
    Navbar,
    // Footer,
  },
  data() {
    return {
      fields: [
        // {
        //   key: "id",
        //   label: "Nomor",
        // },
        {
          key: "menu",
          label: "Nama",
        },
        {
          key: "price",
          label: "E-mail",
        },
        {
          key: "description",
          label: "Alamat",
        },
        {
          key: "category.category",
          label: "No. HP",
        },
        {
          key: "actions",
          label: "Actions",
        },
      ],
      products: [],
    };
  },
  methods: {
    getData() {
      axios
        .get("http://localhost:3000/posts")
        .then((response) => {
          this.setProducts(response.data);
          console.log(response?.data, "ini respon");
        })
        .catch((error) => console.log(error, "ini error"));
    },

    setProducts(data) {
      this.products = data;
    },
    deleteData(id) {
      axios
        .delete("http://localhost:3000/posts/" + id)
        .then((response) => {
          this.$refs["my-modal"].hide();
          this.$swal({
            icon: "success",
            title: "Delete Successfull",
          });
          this.getData();
          console.log(response, "ini respon delete");
        })
        .catch((error) => {
          console.log(error, "ini error");
        });
      console.log(id, "ininini");
    },

    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
  },
  mounted() {
    if (localStorage.getItem("tokenAdmin")) {
      axios
        .get("http://localhost:3000/menu", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          this.setProducts(response.data.data);
          console.log(response, "ini respon");
        })
        .catch((error) => console.log(error, "ini error"));
    } else if (
      !localStorage.getItem("tokenAdmin") ||
      !localStorage.getItem("tokenCustomer")
    ) {
      return this.$swal({
        icon: "error",
        title: "Access failed",
      }).then(() => {
        router.back();
      });
    }
  },
  created() {
    this.products();
  },
};
</script>

<style scoped>
.footer {
  margin-bottom: 30px;
}
</style>
