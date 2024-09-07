<template>
  <div class="container">
    <div class="swiper-content">
          <swiper
      :slidesPerView="4"
      :centeredSlides="false"
      :slidesPerGroupSkip="1"
      :grabCursor="false"
      :keyboard="{ enabled: true }"
      :scrollbar="false"
      :navigation="true"
      :pagination="{ clickable: false }"
      :modules="modules"
      class="mySwiper1"
    >
      <swiper-slide v-for="card in 10" :key="card" swiper-slide>
        <h2 class="text-[20px] text-[#202020] leading-[19px]">Компьютеры</h2>
        <img class="comp" src="../public/images/Computer 1.png" />
      </swiper-slide>
      
      <!-- Custom navigation buttons -->
  

    </swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
body {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}



.swiper-slide {
  width: 358px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  border: 1px solid #F2F2F2;
  margin-right: 30px;
  background-color: #fff;
  padding: 10px;
}

.swiper-slide .comp {
  width: 140px;
  height: 110px;
  transform: translateY(-24px);
}





/* Remove the ::after pseudo-elements */
</style>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../assets/scss/cardenshteyn.scss";

// import required modules
import { Keyboard, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Keyboard, Navigation],
    };
  },
};
</script>
