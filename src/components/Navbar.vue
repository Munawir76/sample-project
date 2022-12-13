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
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>
          <router-link class="nav-link" to="/profile">
            <span class="list-text-nav gap">Profile</span>
            <span class="gap"><b-avatar variant="dark"></b-avatar></span>

            <span class="badge badge-success ml-2"></span>
          </router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
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
