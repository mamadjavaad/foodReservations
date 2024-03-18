<script setup>
import { ref } from 'vue';

const boxFlag = ref(true);
const items = [
  {
    title: 'افزایش قیمت غذا دانشجویی',
    subtitle: `<span class="text-primary">1402/6/30</span> <br/> افزایش قیمت غذا با مصوبه صندوق رفاه دانشجویان کشور انجام گرفته است و برای همه دانشگاههای وزارت علوم یکسان می باشد`,
  },
  { type: 'divider', inset: true },
  {
    title: 'نظرسنجی غذا',
    subtitle: `<span class="text-primary">1402/6/15</span> <br/> دانشجویان محترم نظرسنجی غذا بصورت روزانه در سامانه ی تغذیه فعال می باشد.
لطفا نسبت به غذای همان روز نظر خود را ثبت کنید`,
  },
  { type: 'divider', inset: true },
  {
    title: 'کمبود غذا',
    subtitle:
      '<span class="text-primary">1402/6/10</span> <br/> دانشجویان عزیز به دلیل کمبود غذا سلف ها دارای محدودیت شده اند',
  },
  { type: 'divider', inset: true },
  {
    title: 'تعطیلی سلف ',
    subtitle:
      '<span class="text-primary">1402/6/06</span> <br/> سلف خلیج به دلیل مشکلات فنی 5 روز تعطیل خواهد بود ',
  },

]

// import components and icons
import Navbar from '../components/Navbar.vue'
</script>

<template>
  <v-layout class="d-flex flex-column flex-wrap">
    <Navbar>
      <template v-slot:nav-center>
        <a href="/" class="font-weight-bold ">
          <v-btn  variant="tonal" color="#f7f7f4d1">
            <img src="../assets/logo.svg" alt="scuLogo" class="mr-3">
            رزرو غذا دانشگاه چمران
          </v-btn>
        </a>
      </template>
    </Navbar>
    <div class="w-100 d-flex align-center justify-center" style="background: #dde382;">
      <v-btn prepend-icon="mdi-post-outline" variant="text" @click="boxFlag = false"
        :class="!boxFlag ? 'border-t-green rounded-0' : ''">اطلاعیه ها</v-btn>
      <v-btn prepend-icon="mdi-login" variant="text" @click="boxFlag = true"
        :class="boxFlag ? 'border-t-green rounded-0' : ''">ورود به پنل</v-btn>
    </div>

    <v-main class="d-flex align-center justify-center mt-14">

      <!-- login : ورود -->
      <div class="d-flex w-50  mt-9 mb-3 rounded-xl container-xs " style="min-height: 440px;background-color: white;"
        v-if="boxFlag">
        <div class="w-25 d-flex justify-center align-center banner-xs">
          <v-icon style="font-size: 50px; color: #dde382;">mdi-lock</v-icon>

        </div>
        <div class="w-75 rounded pa-7 content-xs">
          <h3 class="text-center py-4">ورود دانشجو</h3>
          <form class="py-4">
            <v-text-field class="mb-2" clearable label="ایمیل" type="email" required
              oninvalid="this.setCustomValidity('لطفا ایمیل خود را به درستی وارد کنید')"
              oninput="this.setCustomValidity('')"></v-text-field>

            <v-text-field clearable label="رمز عبور" type="password" required
              oninvalid="this.setCustomValidity('لطفا رمز عیور خود را وارد کنید')"
              oninput="this.setCustomValidity('')"></v-text-field>

            <br>

            <v-btn type="submit" variant="flat" block color="#dde382" to="/panel">
              ورود
            </v-btn>
          </form>

        </div>

      </div>
      <!-- blogs : اطلاعیه ها -->
      <div class="d-flex w-50 mb-9  rounded-xl container-xs" style="min-height: 440px;background-color: white;"
        v-if="!boxFlag">
        <div class="w-25 d-flex justify-center align-center banner-xs">
          <v-icon style="font-size: 50px; color: #dde382;">mdi-account-voice</v-icon>

        </div>
        <div class="w-75 rounded py-5 content-xs">
          <h3 class="text-center pb-3">اطلاعیه ها</h3>
          <v-list :items="items" item-props lines="three" style="direction: rtl;">
            <template v-slot:subtitle="{ subtitle }">
              <div v-html="subtitle"></div>
            </template>
          </v-list>

        </div>

      </div>
    </v-main>

  </v-layout>
</template>
<style lang="scss" scoped>
.border-t-green {
  border-top: 3px solid #4b936c;
}

.banner-xs {
  background-color: #328458;
  border-radius: 20px ;
  border-top-right-radius: 0px ;
  border-bottom-right-radius: 0px ;
}

//responsive width for devises with max 1300px size
@media screen and (max-width: 1300px) {
  .container-xs {
    width: 80% !important;
  }
}

// styles for extera small devices (vuetify xs doesent work for some classes)
@media screen and (max-width: 600px) {
  .container-xs {
    flex-direction: column !important;
    width: 90% !important;

    .banner-xs {
      width: 100% !important;
      padding: 30px;
      border-top-right-radius: 20px !important;
      border-bottom-right-radius: 20px !important;
      border-bottom-left-radius: 0px !important;
      border-bottom-right-radius: 0px !important;

    }

    .content-xs {
      width: 100% !important;
    }
  }
}
</style>