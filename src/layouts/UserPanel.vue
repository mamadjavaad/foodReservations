<script setup>
import Navbar from '@/components/Navbar.vue';
import { ref } from 'vue'
const drawer = ref(null)

</script>
<template>
    <Navbar flex-justify="space-between" style="padding: 10px !important;">
        <template v-slot:nav-left>
            <v-btn icon="mdi-location-exit" :to="{ path: '/', exact: true }" variant="tonal"></v-btn>
        </template>
        <template v-slot:nav-center>
            <a href="/panel" class="font-weight-bold ">
                <v-btn prepend-icon="mdi-home-account" variant="tonal">پنل کاربری</v-btn>
            </a>
        </template>
        <template v-slot:nav-right>
            <v-app-bar-nav-icon variant="tonal" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </template>

    </Navbar>
    <v-layout class="v-flex justify-center bg-shades-white" style="min-height: 100dvh !important;">
        <v-navigation-drawer location="right" v-model="drawer">
            <template v-slot:prepend>
                <v-list-item lines="three" title="محمدجواد فخرایی" subtitle="40118537">
                    <template v-slot:prepend>
                        <v-btn variant="text" icon="mdi-chevron-left" @click.stop="drawer = !drawer"></v-btn>
                    </template>
                </v-list-item>

            </template>

            <v-divider></v-divider>

            <v-list density="compact" nav>
                <v-list-item prepend-icon="mdi-account" title="پروفایل من" value="account" to="/panel"></v-list-item>

                <v-list-group value="Food">
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" prepend-icon="mdi-food" title="رزرو غذا"></v-list-item>
                    </template>

                    <v-list-item value="weekly" title="رزرو هفتگی" prepend-icon="mdi-calendar-week"></v-list-item>
                    <v-list-item value="daily" title="روز فروش" prepend-icon="mdi-sun-clock-outline"></v-list-item>
                    <v-list-item value="forgotReceipt" title="کد فراموشی"
                        prepend-icon="mdi-lock-question"></v-list-item>


                </v-list-group>

                <!-- <v-list-group value="finance">
                    <template v-slot:activator="{ props }">
                        <v-list-item prepend-icon="mdi-cash-fast " v-bind="props" title="امکانات مالی"></v-list-item>
                    </template>
                    <v-list-item value="increaseCredit" title="افزایش اعتبار"
                        prepend-icon="mdi-cash-multiple"></v-list-item>
                    <v-list-item value="transferCredit" title="انتقال اعتبار"
                        prepend-icon="mdi-bank-transfer-out"></v-list-item>
                    <v-list-item value="financeHistory" title="تاریخچه مالی"
                        prepend-icon="mdi-clipboard-text-clock-outline"></v-list-item>


                </v-list-group> -->
                <!-- FIXME: امکانات مالی could be a page that have تاریخچه-انتقال اعتبار-تاریخچه مالی -->
                <v-list-item prepend-icon="mdi-cash-fast " title="امکانات مالی" value="finance" to="/panel/finance"></v-list-item>

                <v-list-item prepend-icon="mdi-exit-to-app" title="خروج" value="exit" to="/"></v-list-item>


            </v-list>
        </v-navigation-drawer>
        <router-view />
    </v-layout>
</template>
