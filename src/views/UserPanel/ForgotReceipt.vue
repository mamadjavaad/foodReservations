<script setup>
import { ref } from 'vue'
import DatePicker from 'vue3-persian-datetime-picker'
const today = ref('1403/07/06')
const chosenMeal = ref('نهار')
const codeFlag = ref(false)
const forgetcode = ref(125596)
// import icons
import { mdiAlertOutline } from '@mdi/js';
import { mdiProgressQuestion } from '@mdi/js';
</script>
<template>
    <v-main class="d-flex flex-column w-100 flex-wrap align-center">
        <div class="warning-box d-flex justify-end mt-5 mx-5 pa-5 text-right rounded">
            <p>توجه - گرفتن فیش فراموشی تا سقف 5 درخواست درماه مجاز است . بیش از این تعداد با نرخ جریمه ثابت 50000 ریال
                محاسبه می گردد همچنین غذای آزاد فاقد جریمه می باشد</p>
            <v-icon class="mx-2 ">{{ mdiAlertOutline }}</v-icon>
        </div>

        <div class="receipt-card d-flex flex-column justify-center align-center mt-5 mx-5 pa-5 border rounded">
            <p class="mb-2">دریافت کد فراموشی</p>
            <div class="w-100 d-flex px-2 flex-column " style="direction: rtl;">
                <date-picker label=" تاریخ رزرو" class="w-100 px-3 pt-4 " color="#359662" v-model="today"></date-picker>
                <v-locale-provider locale="fa">
                    <v-select v-model="chosenMeal" class="w-100 px-3 pt-4 " label="وعده غذایی"
                        :items="['صبحانه', 'نهار', 'شام']" variant="solo"></v-select>
                </v-locale-provider>
            </div>
            <v-btn class="ma-2" color="#359662" @click="codeFlag = true">دریافت</v-btn>
        </div>
        <v-slide-y-transition>
            <div class="mt-6 receipt-card" v-if="codeFlag" transition="fade-transition">
                <v-alert class="text-body-2 pa-5" :icon="mdiProgressQuestion" border="start" border-color="green"
                    style="direction: rtl;" title="کد فراموشی" type="success" variant="tonal">
                    از کد فراموشی {{ forgetcode }} برای دریافت وعده غذایی خود استفاده کنید .
                </v-alert>
            </div>
        </v-slide-y-transition>

    </v-main>
</template>

<style lang="scss" scoped>
.receipt-card,
.warning-box {
    width: 80%;
}

.warning-box {
    background: #dde382;
    color: #000000b0;
    font-size: 15px;
    border: 2px solid #8e95105e;
}

/*  customizing ui framework components  */
:deep(.vpd-input-group) {
    height: 56px !important;
    box-shadow: 0px 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 2px 2px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 5px 0px #0000001f;
}

:deep(.form-control) {
    border: none !important;
    padding: 0px 16px;
    border-radius: 3px;
}

:deep(.vpd-icon-btn) {
    font-size: 14px !important;
    padding: 0px 12px;

    svg {
        margin: 0px 8px;
    }
}

:deep(.v-alert-title) {
    margin-bottom: 6px !important;
}

/* responsive media  */
@media screen and (max-width: 500px) {

    .warning-box,
    .receipt-card {
        width: 91% !important;
        min-width: 270px !important;
    }

    .receipt-card {
        padding: 20px 0px !important;
    }
}
</style>