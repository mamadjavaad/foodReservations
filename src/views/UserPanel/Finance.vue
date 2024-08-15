<script setup>
import { ref } from 'vue'
const tab = ref(1)
// import icons
import { mdiCashRefund } from '@mdi/js';
import { mdiAccountSchoolOutline } from '@mdi/js';
import { mdiCashPlus } from '@mdi/js';
</script>
<template>
    <v-main class="d-flex flex-column w-100 flex-wrap align-center">
        <v-tabs v-model="tab" align-tabs="center" color="#359662">
            <v-tab :value="2">انتقال اعتبار</v-tab>
            <v-tab :value="1">افزایش موجودی</v-tab>
        </v-tabs>
        <div class="w-100 d-flex mt-5 flex-column justify-center align-center flex-wrap ">
            <div v-if="tab == 2"
                class="finance-card py-6 px-1 mx-4 d-flex flex-column justify-center align-center rounded-lg border">
                <p>انتقال اعتبار</p>
                <v-text-field type="number" class="w-100 px-3 pt-4 " :append-inner-icon="mdiCashRefund"
                    label="مبلغ انتقالی" variant="solo"></v-text-field>
                <v-text-field type="number" class="w-100 px-3 pt-2 pb-2" :append-inner-icon="mdiAccountSchoolOutline"
                    label="شماره دانشجویی گیرنده" variant="solo"></v-text-field>
                <v-btn color="#359662">ثبت انتقال</v-btn>
            </div>
            <div v-if="tab == 2" class="finance-history mb-6 w-75 py-2 text-center ">
               <p class="pa-4"> تاریخچه انتقال</p>
                <v-table style="direction: rtl;" class="border rounded-lg pt-1 ">
                    <thead>
                        <tr>
                            <th class="text-center">
                                شماره تراکنش
                            </th>
                            <th class="text-center">
                                مبلغ
                            </th>
                            <th class="text-center">دانشجوی گیرنده</th>
                            <th class="text-center">تاریخ</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>5445155</td>
                            <td>2,325,151</td>
                            <td>40118537</td>
                            <td>1403/10/12</td>
                        </tr>
                        <tr>
                            <td>4382947</td>
                            <td>1,872,453</td>
                            <td>40182754</td>
                            <td>1403/10/12</td>
                        </tr>
                        <tr>
                            <td>5923847</td>
                            <td>2,349,076</td>
                            <td>40175982</td>
                            <td>1403/10/12</td>
                        </tr>
                        <tr>
                            <td>8471935</td>
                            <td>3,425,678</td>
                            <td>40184621</td>
                            <td>1403/10/12</td>
                        </tr>
                        <tr>
                            <td>2138475</td>
                            <td>1,623,407</td>
                            <td>40192038</td>
                            <td>1403/10/12</td>
                        </tr>
                        <tr>
                            <td>7564832</td>
                            <td>2,978,432</td>
                            <td>40158376</td>
                            <td>1403/10/12</td>
                        </tr>
                        <tr>
                            <td>3849207</td>
                            <td>4,210,675</td>
                            <td>40167129</td>
                            <td>1403/10/12</td>
                        </tr>
                    </tbody>
                </v-table>
            </div>
            <div v-if="tab == 1"
                class="finance-card py-6 px-1 mx-4 d-flex flex-column justify-center align-center rounded-lg border">

                <p>افزایش موجودی حساب</p>
                <v-text-field type="number" class="w-100 px-3 pt-4 pb-2" :append-inner-icon="mdiCashPlus"
                    placeholder="10,000" variant="solo"></v-text-field>
                <v-btn color="#359662">پرداخت</v-btn>
            </div>
            <div v-if="tab == 1" class="finance-history mb-6 w-75 py-2 text-center ">
               <p class="pa-4"> تاریخچه شارژ حساب</p>
                <v-table style="direction: rtl;" class="border rounded-lg pt-1 ">
                    <thead>
                        <tr>
                            <th class="text-center">
                                شماره تراکنش
                            </th>
                            <th class="text-center">
                                مبلغ
                            </th>
                            <th class="text-center">تاریخ</th>
                            <th class="text-center">وضعیت تراکنش</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>5445155</td>
                            <td>2,325,151</td>
                            <td>1403/10/12</td>
                            <td>موفق</td>

                        </tr>
                        <tr>
                            <td>4382947</td>
                            <td>1,872,453</td>
                            <td>1403/10/12</td>
                            <td>موفق</td>
                        </tr>
                        <tr>
                            <td>5923847</td>
                            <td>2,349,076</td>
                            <td>1403/10/12</td>
                            <td>ناموفق</td>
                        </tr>
                        <tr>
                            <td>8471935</td>
                            <td>3,425,678</td>
                            <td>1403/10/12</td>
                            <td>ناموفق</td>
                        </tr>
                        <tr>
                            <td>2138475</td>
                            <td>1,623,407</td>
                            <td>1403/10/12</td>
                            <td>ناموفق</td>
                        </tr>
                        <tr>
                            <td>7564832</td>
                            <td>2,978,432</td>
                            <td>1403/10/12</td>
                            <td>ناموفق</td>
                        </tr>
                        <tr>
                            <td>3849207</td>
                            <td>4,210,675</td>
                            <td>1403/10/12</td>
                            <td>موفق</td>
                        </tr>
                    </tbody>
                </v-table>
            </div>
        </div>

    </v-main>
</template>
<style lang="scss" scoped>
.finance-card {
    width: 35% !important;
    min-width: 480px;
}

@media screen and (max-width: 1280px) {

    .finance-history,
    .finance-card {
        width: 93% !important;
        min-width: 270px !important;
    }
}
</style>
