<template>
  <div class="big">
    <div class="nav_top py-3">
      <div class="container flex justify-between items-center">
        <div class="nav-top_left flex gap-[74px]">
          <div class="nav-top_item flex items-center gap-[5px]">
            <img src="../public/images/map-pin.png" alt="" class="w-5 h-5" />
            <h3>Ташкент</h3>
          </div>
          <div class="nav_top_menu flex gap-8">
            <h3>Наши магазины</h3>
            <h3>B2B продажи</h3>
            <h3>Покупка в рассрочку</h3>
            <h3>Способы оплаты</h3>
            <h3>Гарантия на товары</h3>
          </div>
        </div>
        <div class="nav-top_right flex gap-[53px]">
          <div class="flex gap-[5px] item-center">
            <img src="../public/images/phone-tel.png" alt="" />
            <h1>+998 95 123 55 88</h1>
          </div>
          <select name="" id="">
            <option value="Рус">Рус</option>
          </select>
        </div>
      </div>
    </div>
    <nav>
      <div class="container">
        <div class="nav_content flex justify-between mt-[25px]">
          <div class="nav_left">
            <div class="logo">
              <img src="../assets/images/Frame.png" alt="" />
            </div>
          </div>
          <div class="nav_inputs flex">
            <select name="" id="">
              <option value="Все категории">Все категории</option>
            </select>
            <div class="lina"></div>
            <input type="text" placeholder="Телефоны и бытовая" />
            <img src="../public/images/mic.png" alt="" class="w-4 h-4" />
            <button>
              <img src="../public/images/search.png" alt="" class="w-4 h-4" />
              Поиск
            </button>
          </div>
          <div class="nav_right flex gap-[36px] item-center text-center">
            <div class="_1 flex items-center flex-col">
              <img src="../public/images/user.png" alt="" />
              Войти
            </div>
            <div class="_2 flex items-center flex-col">
              <img src="../public/images/Compound Path.png" alt="" />
              Сравнение
            </div>
            <div class="_3 flex items-center flex-col">
              <img src="../public/images/heart.png" alt="" />
              Избранное
            </div>
            <div class="_4 flex items-center flex-col">
              <img src="../public/images/Vector.png" alt="" />
              Корзина
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="nav_bottom">
      <div class="container">
        <div class="nav_bottom_content flex gap-[55px] mt-[33px] items-center">
          <button
            class="nav_bottom_button flex py-[10px] px-[79px] bg-[#ED3729] text-white items-center gap-[10px] rounded-[5px]"
            @click="openModal2"
          >
            <div class="flex flex-col gap-[4px]">
              <span class="w-[22px] h-[2px] bg-white"></span>
              <span class="w-[22px] h-[2px] bg-white"></span>
              <span class="w-[22px] h-[2px] bg-white"></span>
            </div>
            Категории
          </button>
          <div class="nav_bottom_menu flex gap-[48px]">
            <h1>Наши магазины</h1>
            <h1>Моноблоки</h1>
            <h1>Телефоны, планшеты</h1>
            <h1>Ноутбуки</h1>
            <h1>Комплектующие</h1>
            <h1>Сетевое оборудование</h1>
            <h1>Оргтехника</h1>
          </div>
        </div>
      </div>
    </div>
    <navswiperComp></navswiperComp>
    <div class="message bg-[#ED3729] w-[67px] h-[67px] rounded-[50%]" @click="openModal3">
      <img src="../assets/images/Vector.png" alt="" />
    </div>
    <button class="button" v-if="modalOpen2" @close="closeModal2" @click="modalOpen2 = false">
      <span class="X"></span>
      <span class="Y"></span>
      <div class="close">Close</div>
    </button>
    <div class="message_modal_bg" v-if="modalOpen3" @close="closeModal3" @click="modalOpen3 = false">
    </div>
    <messageComp v-if="modalOpen3" @close="closeModal3"></messageComp>
    <filterCom v-if="modalOpen2" @close="closeModal2"></filterCom>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalOpen2: false,
      modalOpen: false,
      modalOpen3: false,
      bars: false,
    };
  },
  components: {},
  methods: {
    openModal() {
      this.modalOpen = true;
    },
    openModal2() {
      this.modalOpen2 = true;
    },
    openModal3() {
      this.modalOpen3 = true;
    },
    closeModal1(){
      this.closeModal1 = false;
    }
  },
};
</script>

<style lang="scss" scoped>
</style>