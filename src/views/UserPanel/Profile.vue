<template>


    <v-main class="d-flex flex-column w-100 flex-wrap align-center">
       <!-- WARNING:  a design for mobile is needed : separate box column -->
        <div class="d-flex flex-wrap justify-space-around rounded-xl mt-5"
            style="background-color: #128447d9;width: 82% !important">
            <div class="px-14 py-6 text-white d-flex flex-column justify-center align-center" style="height: 70px;">
                <i class="mdi mdi-food-variant"></i>
                <p>
                    5 : وعده صبحانه خوابگاه  
                </p>
            </div>
            <div class="px-14 py-6 text-white d-flex flex-column justify-center align-center" style="height: 70px;">
                <i class="mdi mdi-food-fork-drink"></i>
                <p>
                    وعده غذایی سلف   :
                    140                 
                </p>
            </div>
            <div class="px-14 py-6 text-white d-flex flex-column justify-center align-center" style="height: 70px;">
                <i class="mdi mdi-hamburger"></i>
                <p>
                    وعده فست فود   :
                    20 
                </p>
            </div>
            <v-divider color="white" class="d-block  d-lg-none d-xl-none d-xxl-none"></v-divider>

            <div class="px-14 py-6 text-white d-flex flex-column justify-center align-center" style="height: 70px;">
                <i class="mdi mdi-food"></i>
                <p>
                    وعده خورده شده کل :
                    165
                </p>
            </div>
        </div>
      <div class="d-flex mt-4 flex-wrap justify-center align-center">
        <div class="d-flex border ma-2 rounded-lg pa-2 justify-center align-center info-card">
            <ul class="pa-2" style="direction: rtl;">
                <li class="py-2 px-5"><i class="mdi mdi-badge-account-outline"></i> نام : محمد جواد فخرائی </li>
                <li class="py-2 px-5"><i class="mdi mdi-account-tie"></i> گروه : دانشجو</li>
                <li class="py-2 px-5"><i class="mdi mdi-card-account-details-outline"></i>  کد ملی : 3575486584</li>
                <li class="py-2 px-5"><i class="mdi mdi-gender-male-female"></i> جنسیت : مرد</li>
  
            </ul>

        </div>
        <div class=" d-flex border my-2 rounded-lg pa-2 mx-6 flex-wrap justify-center align-center info-card">
            <ul class="pa-2" style="direction: rtl;">
                <li class="py-2 px-5"><i class="mdi mdi-cash-100"></i> میزان اعتبار : 1,252,760 ﷼ </li>
                <li class="py-2 px-5"><i class="mdi mdi-barcode-scan"></i> شماره بارکد: 585425030</li>
                <li class="py-2 px-5"><i class="mdi mdi-calendar-range"></i> تاریخ اعتبار : 1405/12/20</li>
                <li class="py-2 px-5"><i class="mdi mdi-clock-time-eight-outline"></i> آخرین ورود :  16:50 - 1403/05/03</li>
            </ul>

            <v-divider class="d-block d-sm-none d-md-none d-lg-none d-xl-none d-xxl-none"></v-divider>
            
            <ul class="pa-2" style="direction: rtl;">
                <li class="py-2 px-5"><i class="mdi mdi-food-outline"></i> سلف : خلیج فارس</li>
                <li class="py-2 px-5"><i class="mdi mdi-school-outline"></i> دانشکده: ریاضی و علوم کامپیوتر</li>
                <li class="py-2 px-5"><i class="mdi mdi-file-certificate-outline"></i> مقطع تحصیلی : کارشناسی</li>
                <li class="py-2 px-5"><i class="mdi mdi-progress-check"></i> وضعیت کارت : فعال</li>
            </ul>
        </div>
      </div>
        
        <div class="text-center pa-3 mb-4">
            <p>دسترسی سریع</p>
            <div class="mt-1 w-100 d-flex flex-wrap justify-center">
                <v-btn class="ma-1" size="small">رزرو هفتگی</v-btn>
                <v-btn class="ma-1" size="small">روز فروش</v-btn>
                <v-btn class="ma-1" size="small">کد فراموشی</v-btn>
            </div>
        </div>

    </v-main>


</template>
<style scoped>
@media screen and (max-width: 886px) {
    .info-card{
        width: 100% !important;
        margin: 8px 23px !important;
    }
}
</style>
