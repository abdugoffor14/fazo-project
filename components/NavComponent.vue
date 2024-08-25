<template>
    <div>
        <div class="nav_top py-3">
            <div class="container flex justify-between items-center">
                <div class="nav-top_left flex gap-[74px]">
                    <div class="nav-top_item flex items-center gap-[5px]">
                        <img src="../public/images/map-pin.png" alt="" class="w-5 h-5">
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
                        <img src="../public/images/phone-tel.png" alt="">
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
                            <img src="../assets/images/Frame.png" alt="">
                        </div>
                    </div>
                    <div class="nav_inputs flex ">
                        <select name="" id="">
                            <option value="Все категории">Все категории</option>
                        </select>
                        <div class="lina"></div>
                        <input type="text" placeholder="Телефоны и бытовая">
                        <img src="../public/images/mic.png" alt="" class="w-4 h-4">
                        <button>
                            <img src="../public/images/search.png" alt="" class="w-4 h-4">
                            Поиск
                        </button>
                    </div>
                    <div class="nav_right flex gap-[36px] item-center text-center">
                        <div class="_1">
                            <img src="../public/images/user.png" alt="">
                            Войти
                        </div>
                        <div class="_2">
                            <img src="../public/images/Compound Path.png" alt="">
                            Сравнение
                        </div>
                        <div class="_3">
                            <img src="../public/images/heart.png" alt="">
                            Избранное
                        </div>
                        <div class="_4">
                            <img src="../public/images/Vector.png" alt="">
                            Корзина
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>