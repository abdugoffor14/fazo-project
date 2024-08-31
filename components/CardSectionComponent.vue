<template>
  <div class="cardsection">
    <div class="container">
      <div class="content">
        <div class="card-top flex justify-between pt-[82px]">
          <div class="card-top-left">
            <h2 class="text-[24px] text-[#202020] leading-[22px]">
              Горящие предложения
            </h2>
          </div>
          <div
            class="card-top-right flex gap-[13px] items-center text-[#909090]"
          >
            <nuxt-link to="">Посмотреть все</nuxt-link>
            <span><img src="../public/images/Arrow.svg" alt="" /></span>
          </div>
        </div>
        <div class="card-bottom flex gap-[30px]">
         <div v-for="(card, i) in cards" :key="i" class="card-content flex flex-col">
            <div class="card-islombek">
              <div class="card-islombek-top">
                <div
                  class="skidka w-[40px] h-[40px] rounded-[50%] bg-[#ED3729] grid place-items-center"
                >
                  <p class="uch text-white text-[14px]">-3%</p>
                </div>
              </div>
              <div class="iphon">
                <img src="../public/images/iphone.svg" alt="" />
              </div>
              <div class="card-islombek-bottom">
                <div class="sum flex gap-[11px] items-center">
                  <p
                    class="line-through text-[#909090] text-[14px] line-height-[25px]"
                  >
                    1 373 000 сум
                  </p>
                  <img src="../public/images/Line 4.svg" alt="" />
                  <h3 class="text-[#ED3729] text-[18px] line-height-[17px]">
                    1 304 000 сум
                  </h3>
                </div>
                <div
                  class="tel text-center text-[#000000] text-[16px] font-bold leading-[24px] max-w-[234px]"
                >
                  <h1>Телефон TECNO Spark 6 Go KE5j 3/64GB Ice Jadeite</h1>
                </div>
                <div class="zakaz">
                  <p class="text-[#909090] text-[14px] line-height-[25px]">
                    Предложение заканчивается через:
                  </p>
                  <div class="den flex gap-[22px]">
                    <div class="soat text-center flex flex-col">
                      <p>27</p>
                      <p class="text-[#909090] text-[8px]">ДНЕЙ</p>
                    </div>
                    <img src="../public/images/Line 5.svg" alt="" />
                    <div class="soat flex text-center flex-col">
                      <p>21</p>
                      <p class="text-[#909090] text-[8px]">ЧАСОВ</p>
                    </div>
                    <img src="../public/images/Line 5.svg" alt="" />
                    <div class="soat flex text-center flex-col">
                      <p>32</p>
                      <p class="text-[#909090] text-[8px]">МИНУТ</p>
                    </div>
                    <img src="../public/images/Line 5.svg" alt="" />
                    <div class="soat flex text-center flex-col">
                      <p>05</p>
                      <p class="text-[#909090] text-[8px]">СЕКУНД</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="card-islombek-last border-[1px] border-[#F2F2F2] p-[15px] flex items-center gap-[44px] bg-[#fff]"
            >
              <img
                class="cursor-pointer"
                src="../public/images/shopping-cart.svg"
                alt=""
              />
              <img src="../public/images/line 2.svg" alt="" />
              <div class="heart1" @click="addToWishlist(i)">
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                :fill="card.fill ? 'red' : 'none'"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.2494 2.64976C16.8306 2.21734 16.3332 1.87431 15.7858 1.64027C15.2385 1.40623 14.6517 1.28577 14.0592 1.28577C13.4667 1.28577 12.88 1.40623 12.3326 1.64027C11.7852 1.87431 11.2879 2.21734 10.869 2.64976L9.99968 3.54678L9.13036 2.64976C8.28426 1.7767 7.1367 1.28622 5.94013 1.28622C4.74356 1.28622 3.596 1.7767 2.7499 2.64976C1.9038 3.52283 1.42847 4.70696 1.42847 5.94165C1.42847 7.17635 1.9038 8.36048 2.7499 9.23354L3.61922 10.1306L9.99968 16.7143L16.3801 10.1306L17.2494 9.23354C17.6685 8.80132 18.001 8.28813 18.2278 7.7233C18.4546 7.15846 18.5713 6.55305 18.5713 5.94165C18.5713 5.33025 18.4546 4.72484 18.2278 4.16001C18.001 3.59518 17.6685 3.08199 17.2494 2.64976V2.64976Z"
                  :stroke="card.stroke ? 'red' : '#BDBDBD'"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              </div>

              <img src="../public/images/line 2.svg" alt="" />
              <img
                class="cursor-pointer"
                src="../public/images/vaqt.svg"
                alt=""
              />
            </div>
          </div>
          
        </div>
          
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let cards = ref(
  Array(8).fill().map(() => ({
    fill: false,
    stroke: false,
  }))
)

function addToWishlist(index) {
  cards.value[index].fill = !cards.value[index].fill
  cards.value[index].stroke = !cards.value[index].stroke
}

</script>

<style lang="scss" scoped>
</style>