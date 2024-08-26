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
            <div v-for="card in 4" :key="card" class="card-content flex flex-col">

          <div class="card-islombek">
            <div class="card-islombek-top">
              <div class="skidka  w-[40px] h-[40px] rounded-[50%] bg-[#ED3729] grid place-items-center">
                <p class=" uch text-white text-[14px]">-3%</p>
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
              <div class="tel text-center text-[#000000] text-[16px] font-bold leading-[24px] max-w-[234px]">
                <h1>Телефон TECNO Spark 6 Go KE5j 3/64GB Ice Jadeite</h1>
              </div>
              <div class="zakaz">
                  <p class="text-[#909090] text-[14px] line-height-[25px]">Предложение заканчивается через:</p>
                  <div class="den flex gap-[22px]">
                        <div class="soat text-center flex flex-col">
                              <p>27</p>
                              <p class="text-[#909090] text-[8px] ">ДНЕЙ</p>
                        </div>
                        <img src="../public/images/Line 5.svg" alt="">
                        <div class="soat flex text-center flex-col">
                              <p>21</p>
                              <p class="text-[#909090] text-[8px] ">ЧАСОВ</p>
                        </div>
                        <img src="../public/images/Line 5.svg" alt="">
                        <div class="soat flex text-center flex-col">
                              <p>32</p>
                              <p class="text-[#909090] text-[8px] ">МИНУТ</p>
                        </div>
                        <img src="../public/images/Line 5.svg" alt="">
                        <div class="soat flex text-center flex-col">
                              <p>05</p>
                              <p class="text-[#909090] text-[8px] ">СЕКУНД</p>
                        </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="card-islombek-last border-[1px] border-[#F2F2F2] p-[15px] flex items-center gap-[44px] bg-[#fff]">
                  <img  class="cursor-pointer"  src="../public/images/shopping-cart.svg" alt="">
                  <img src="../public/images/line 2.svg" alt="">
                  <img  class="heart cursor-pointer"  src="../public/images/Vector.svg" alt="">
                  <img src="../public/images/line 2.svg" alt="">
                  <img  class="cursor-pointer"  src="../public/images/vaqt.svg" alt="">
            </div>
            </div>
            
        </div>
        <div class="card-bottom flex gap-[30px]">
            <div v-for="card in 4" :key="card" class="card-content flex flex-col">

          <div class="card-islombek">
            <div class="card-islombek-top">
              <div class="skidka  w-[40px] h-[40px] rounded-[50%] bg-[#ED3729] grid place-items-center">
                <p class=" uch text-white text-[14px]">-3%</p>
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
              <div class="tel text-center text-[#000000] text-[16px] font-bold leading-[24px] max-w-[234px]">
                <h1>Телефон TECNO Spark 6 Go KE5j 3/64GB Ice Jadeite</h1>
              </div>
              <div class="zakaz">
                  <p class="text-[#909090] text-[14px] line-height-[25px]">Предложение заканчивается через:</p>
                  <div class="den flex gap-[22px]">
                        <div class="soat text-center flex flex-col">
                              <p>27</p>
                              <p class="text-[#909090] text-[8px] ">ДНЕЙ</p>
                        </div>
                        <img src="../public/images/Line 5.svg" alt="">
                        <div class="soat flex text-center flex-col">
                              <p>21</p>
                              <p class="text-[#909090] text-[8px] ">ЧАСОВ</p>
                        </div>
                        <img src="../public/images/Line 5.svg" alt="">
                        <div class="soat flex text-center flex-col">
                              <p>32</p>
                              <p class="text-[#909090] text-[8px] ">МИНУТ</p>
                        </div>
                        <img src="../public/images/Line 5.svg" alt="">
                        <div class="soat flex text-center flex-col">
                              <p>05</p>
                              <p class="text-[#909090] text-[8px] ">СЕКУНД</p>
                        </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="card-islombek-last border-[1px] border-[#F2F2F2] p-[15px] flex items-center gap-[44px] bg-[#fff]">
                  <img src="../public/images/shopping-cart.svg" alt="">
                  <img src="../public/images/line 2.svg" alt="">
                  <img  class="heart cursor-pointer"  src="../public/images/Vector.svg" alt="">
                  <img src="../public/images/line 2.svg" alt="">
                  <img  class="cursor-pointer"  src="../public/images/vaqt.svg" alt="">
            </div>
            </div>
            
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>