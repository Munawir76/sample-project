<template>
  <div>
    <b-row>
      <b-col>
        <div class="category">
          <b-card style="justify-content:center ; border-radius: 10%;">
            <blockquote class="blockquote content mb-2">
              <img
                src="../../public/assets/images/Tas.jpg"
                alt="..."
                width="30%"
                class="img1"
              />
              <footer class="blockquote-footer">
                <h5 class="">Tas</h5>
              </footer>
            </blockquote>
          </b-card>
        </div>
      </b-col>
      <b-col>
        <div class="category">
          <b-card style="justify-content:center ; border-radius: 10%;">
            <blockquote class="blockquote content mb-2">
              <img
                src="../../public/assets/images/shirt.jpg"
                alt="..."
                width="30%"
                class="img1"
              />
              <footer class="blockquote-footer">
                <h5 class="">Baju</h5>
              </footer>
            </blockquote>
          </b-card>
        </div>
      </b-col>
      <b-col>
        <div class="category">
          <b-card style="justify-content:center ; border-radius: 10%;">
            <blockquote class="blockquote content mb-2">
              <img
                src="../../public/assets/images/shoe.jpg"
                alt="..."
                width="30%"
                class="img1"
              />
              <footer class="blockquote-footer">
                <h5 class="">Sepatu</h5>
              </footer>
            </blockquote>
          </b-card>
        </div>
      </b-col>
      <b-col>
        <div class="category">
          <b-card style="justify-content:center ; border-radius: 10%;">
            <blockquote class="blockquote content mb-2">
              <img
                src="../../public/assets/images/trousers.jpg"
                alt="..."
                width="30%"
                class="img1"
              />
              <footer class="blockquote-footer">
                <h5 class="">Celana</h5>
              </footer>
            </blockquote>
          </b-card>
        </div>
      </b-col>
      <b-col>
        <div class="category">
          <b-card style="justify-content:center ; border-radius: 10%;">
            <blockquote class="blockquote content mb-2">
              <img
                src="../../public/assets/images/sunglasses.jpg"
                alt="..."
                width="30%"
                class="img1"
              />
              <footer class="blockquote-footer">
                <h5 class="">Kaca Mata</h5>
              </footer>
            </blockquote>
          </b-card>
        </div>
      </b-col>
      <b-col>
        <div class="category">
          <b-card style="justify-content:center ; border-radius: 10%;">
            <blockquote class="blockquote content mb-2">
              <img
                src="../../public/assets/images/flip-flops.jpg"
                alt="..."
                width="30%"
                class="img1"
              />
              <footer class="blockquote-footer">
                <h5 class="">Sandal</h5>
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

.card-body-cetegory {
  align-items: center;
}
</style>
