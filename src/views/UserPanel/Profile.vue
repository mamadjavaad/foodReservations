<script setup>
// import icons
import { mdiFoodVariant } from '@mdi/js';
import { mdiFoodForkDrink } from '@mdi/js';
import { mdiHamburger } from '@mdi/js';
import { mdiFood } from '@mdi/js';
import { mdiBadgeAccountOutline } from '@mdi/js';
import { mdiAccountTie } from '@mdi/js';
import { mdiCardAccountDetailsOutline } from '@mdi/js';
import { mdiGenderMaleFemale } from '@mdi/js';
import { mdiCash100 } from '@mdi/js';
import { mdiBarcodeScan } from '@mdi/js';
import { mdiCalendarRange } from '@mdi/js';
import { mdiClockTimeEightOutline } from '@mdi/js';
import { mdiFoodOutline } from '@mdi/js';
import { mdiSchoolOutline } from '@mdi/js';
import { mdiFileCertificateOutline } from '@mdi/js';
import { mdiProgressCheck } from '@mdi/js';
</script>
<template>
    <v-main class="d-flex flex-column w-100 flex-wrap align-center">
        <div class="d-flex flex-wrap justify-space-around rounded-xl mt-5"
            style="background-color: #128447d9;width: 82% !important">
            <div class="px-14 py-6 text-white d-flex flex-column justify-center align-center" style="height: 70px;">
                <v-icon>{{ mdiFoodVariant }}</v-icon>
                <p>
                    5 : وعده صبحانه خوابگاه
                </p>
            </div>
            <div class="px-14 py-6 text-white d-flex flex-column justify-center align-center" style="height: 70px;">
                <v-icon>{{ mdiFoodForkDrink }}</v-icon>
                <p>
                    وعده غذایی سلف :
                    140
                </p>
            </div>
            <div class="px-14 py-6 text-white d-flex flex-column justify-center align-center" style="height: 70px;">
                <v-icon>{{ mdiHamburger }}</v-icon>
                <p>
                    وعده فست فود :
                    20
                </p>
            </div>
            <v-divider color="white" class="d-block  d-lg-none d-xl-none d-xxl-none"></v-divider>

            <div class="px-14 py-6 text-white d-flex flex-column justify-center align-center" style="height: 70px;">
                <v-icon>{{ mdiFood }}</v-icon>
                <p>
                    وعده خورده شده کل :
                    165
                </p>
            </div>
        </div>
        <div class="d-flex mt-4 flex-wrap justify-center align-center">
            <div class="d-flex border ma-2 rounded-lg pa-2 justify-center align-center info-card">
                <ul class="pa-2" style="direction: rtl;">
                    <li class="py-2 px-5"><v-icon class="mx-2">{{ mdiBadgeAccountOutline  }}</v-icon>نام : محمد جواد فخرائی </li>
                    <li class="py-2 px-5"><v-icon  class="mx-2">{{ mdiAccountTie }}</v-icon>گروه : دانشجو</li>
                    <li class="py-2 px-5"><v-icon class="mx-2">{{ mdiCardAccountDetailsOutline }}</v-icon>کد ملی : 3575486584</li>
                    <li class="py-2 px-5"><v-icon class="mx-2">{{ mdiGenderMaleFemale }}</v-icon>جنسیت : مرد</li>

                </ul>

            </div>
            <div class=" d-flex border my-2 rounded-lg pa-2 mx-6 flex-wrap justify-center align-center info-card">
                <v-divider class="d-block d-sm-none d-md-none d-lg-none d-xl-none d-xxl-none"></v-divider>
                <ul class="pa-2" style="direction: rtl;">
                    <li class="py-2 px-5"><v-icon class="mx-2">{{ mdiCash100 }}</v-icon>میزان اعتبار : 1,252,760 ﷼ </li>
                    <li class="py-2 px-5"><v-icon class="mx-2">{{ mdiBarcodeScan }}</v-icon>شماره بارکد: 585425030</li>
                    <li class="py-2 px-5"><v-icon class="mx-2">{{ mdiCalendarRange }}</v-icon>تاریخ اعتبار : 1405/12/20</li>
                    <li class="py-2 px-5"><v-icon class="mx-2">{{ mdiClockTimeEightOutline }}</v-icon>آخرین ورود : 16:50 -
                        1403/05/03</li>
                </ul>
                <ul class="pa-2 order-mobile" style="direction: rtl;">
                    <li class="py-2 px-5"><v-icon class="mx-2">{{ mdiFoodOutline }}</v-icon>سلف : خلیج فارس</li>
                    <li class="py-2 px-5"><v-icon class="mx-2">{{ mdiSchoolOutline }}</v-icon>دانشکده: ریاضی و علوم کامپیوتر</li>
                    <li class="py-2 px-5"><v-icon class="mx-2">{{ mdiFileCertificateOutline }}</v-icon>مقطع تحصیلی : کارشناسی</li>
                    <li class="py-2 px-5"><v-icon class="mx-2">{{ mdiProgressCheck }}</v-icon>وضعیت کارت : فعال</li>
                </ul>

            </div>
        </div>

        <div class="text-center pa-3 mb-4">
            <p>دسترسی سریع</p>
            <div class="mt-1 w-100 d-flex flex-wrap justify-center">
                <v-btn class="ma-1" size="small" :to="{ name: 'DailyReserve' }" exact>روز فروش</v-btn>
                <v-btn class="ma-1" size="small" :to="{ name: 'ForgotReceipt' }" exact>کد فراموشی</v-btn>
                <v-btn class="ma-1" size="small" :to="{ name: 'FoodReserve' }" exact>رزرو هفتگی</v-btn>

            </div>
        </div>

    </v-main>


</template>
<style scoped>
@media screen and (max-width: 886px) {
    .info-card {
        width: 100% !important;
        margin: 8px 23px !important;
    }

    .order-mobile {
        order: -1;
    }
}
</style>
