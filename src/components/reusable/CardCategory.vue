<template>
  <div>
    <b-row class="card-category">
      <b-col>
        <div class="category">
          <b-card style="justify-content:center ; border-radius: 10%;">
            <blockquote class="blockquote content mb-2">
              <img :src="data.icon" alt="..." width="30%" class="img1" />
              <footer class="blockquote-footer">
                <h5 class="">{{ data.name }}</h5>
              </footer>
            </blockquote>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["data"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.category {
  margin-top: 2rem;
  width: 220px;
}
.content {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.img1 {
  margin-left: 4rem;
  margin-top: 2rem;
}
.card-category {
  margin-left: 9px;
}

.card-body-cetegory {
  align-items: center;
}
</style>
