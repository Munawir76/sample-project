<template>
  <form>
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
  </form>
</template>

<script>
export default {
  name: "FormAdd",
  props: ["data"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
