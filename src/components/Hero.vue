<template>
  <div class="hero">
    <div>
      <b-row class="mt-2">
        <b-col cols="8">
          <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000"
            fade
            indicators
            img-width="1024"
            img-height="480"
          >
            <b-carousel-slide
              img-src="https://thumbor.sirclocdn.com/unsafe/883x368/filters:format(webp)/magento.eigeradventure.com/media/weltpixel/owlcarouselslider/images/1/8/1800x750_new_arrival.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://thumbor.sirclocdn.com/unsafe/883x368/filters:format(webp)/magento.eigeradventure.com/media/weltpixel/owlcarouselslider/images/m/a/main_banner_1800x750_2_.jpg"
            ></b-carousel-slide>
            <b-carousel-slide
              img-src="https://thumbor.sirclocdn.com/unsafe/883x368/filters:format(webp)/magento.eigeradventure.com/media/weltpixel/owlcarouselslider/images/m/a/main_banner_1800x750_29.jpg"
            ></b-carousel-slide>
          </b-carousel>
        </b-col>
        <b-col cols="">
          <div class="mb-3 justify-content-center">
            <img src="../../public/assets/images/bg1.jpg" width="100%" />
          </div>
          <div>
            <img src="../../public/assets/images/bg1.jpg" width="100%" />
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style></style>
