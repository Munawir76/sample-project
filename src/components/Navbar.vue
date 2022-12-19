<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="info">
      <b-navbar-brand href="#">
        <img src="../../public/assets/images/Logo.png" width="20%" /><span
          class="ml-3 textnav"
          >Semeru Outdoor</span
        >
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse is-nav class="list-text-nav">
        <b-navbar-nav>
          <li class="nav-item ">
            <router-link class="nav-link text-black" to="/"
              ><span class="list-text-nav">Home</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/product"
              ><span class="list-text-nav">Product</span></router-link
            >
          </li>
          <!-- <b-nav-form>
            <b-button size="sm" class="my-2 my-sm-0 ml-4" type="submit"
              >Search</b-button
            >
            <b-form-input
              size="sm"
              class="mr-sm-2 ml-4"
              placeholder="Search"
            ></b-form-input>
          </b-nav-form> -->
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <div size="sm" class="mr-sm-2">
            <!-- <b-button size="sm" class="my-2 my-sm-3 mr-4" type="submit"
              >Login</b-button
            > -->
            <b-button size="sm" class="my-2 my-sm-3" @click="logout"
              >Logout</b-button
            >
          </div>
          <router-link class="nav-link" to="/profile">
            <span class="list-text-nav gap">{{ user }}</span>
            <span class="gap"><b-avatar variant="dark"></b-avatar></span>

            <span class="badge badge-success ml-2"></span>
          </router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import router from "../router";
export default {
  name: "Navbar",
  data() {
    return {
      user: localStorage.getItem("user"),
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$swal({
        icon: "success",
        title: "Logout Successfull",
      }).then(() => {
        router.push("/login");
      });
      // console.log("ini klik");
    },
  },
};
</script>

<style scoped>
.textnav {
  font-weight: bold;
}
.list-text-nav {
  color: white;
}
.gap {
  margin-left: 1rem;
}

/* .navbar {
  position: fixed;
} */
</style>
