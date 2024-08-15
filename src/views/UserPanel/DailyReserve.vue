<script setup>
import { ref } from 'vue'
const chosenMeal = ref('شام')
const chosenFood = ref('سالاد الویه,نوشیدنی 6000')
const chosenRestaurant=ref('مرکزی')
</script>

<template>
    <v-main class="d-flex flex-column w-100 flex-wrap align-center">
        <div class="reserve-card d-flex flex-column justify-center align-center mt-5 mx-5 pa-5 border rounded">
            <div class="mb-2">
                <p> رزرو روز فروش </p>
                <p class="text-caption">شنبه - 1401/10/11</p>
            </div>
            <v-locale-provider locale="fa">
                <v-select v-model="chosenMeal" class="w-100 px-3 pt-4 " label="وعده غذایی"
                    :items="['صبحانه', 'نهار', 'شام']" variant="solo"></v-select>
                <v-select v-model="chosenFood" class="w-100 px-3 pt-4 " label="انتخاب غذا"
                    :items="['کوکو سبزی,آش 6000', 'سالاد الویه,نوشیدنی 6000']" variant="solo"></v-select>
                    <v-select v-model="chosenRestaurant" class="w-100 px-3 pt-4 " label="انتخاب سلف"
                    :items="['موسوی', 'خلیج فارس', 'مرکزی']" variant="solo"></v-select>
                <v-btn color="#359662">ثبت رزرو</v-btn>

                </v-locale-provider>
        </div>
    </v-main>
</template>
<style scoped> 
.reserve-card{
    width: 80% ;
}
@media screen and (max-width: 500px) {
    .reserve-card {
        width: 91% !important;
        min-width: 270px !important;
        padding: 20px 0px !important;
    }
}
</style>