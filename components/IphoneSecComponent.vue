<template>
  <div class="iphone-sec">
      <div class="container">
            <div class="iphon-content">
                  <swiper :navigation="true" :modules="modules" class="mySwiper">
    <swiper-slide v-for="card in 3" :key="card">
      <div class="iphone-about">
        <h1 class="text-[42px] leading-[57px] font-medium">
          Apple iPhone X 64 ГБ
        </h1>
        <p class="max-w-[418px] text-[16px] text-[#909090] font-normal">
          Совершенно новый дисплей Super Retina с диагональю 5,8 дюйма, который
          удобно лежит в руке и потрясающие выглядит, — это и есть iPhone X.
        </p>
      </div>
      <div class="ipon">
        <img class="" src="../public/images/iphone10.png" alt="" />
      </div>
      <div class="dengi">
        <h1
          class="text-[42px] leading-[40px] font-bold text-[#ED3729] mb-[17px]"
        >
          1 250 900 Сум
        </h1>
        <p
          class="text-[20px] leading-[27px] font-bold text-[#909090] line-through mb-[30px]"
        >
          2 220 900 Сум
        </p>
        <button>Показать еще</button>
      </div>
    </swiper-slide>
  </swiper>
            </div>
      </div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>
<style lang="scss" scoped>
.swiper{
      width: 100%;
      display: flex;
      justify-content: center;
}
.swiper-slide {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #F7F7F7;
      padding: 20px 50px;
      .swiper-slide-prev{
            width: 100%;
      }
  .dengi {
    button {
      padding: 12px 51px;
      border: 1px solid #ed3729;
      border-radius: 5px;
      font-size: 16px;
      font-weight: 400;
      line-height: 15.31px;
      color: #ed3729;
      transition: 0.3s;
      &:hover{
            color: #fff;
            background-color: #ed3729;
      }
    }
  }
}
</style>
