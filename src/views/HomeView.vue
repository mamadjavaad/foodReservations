<script setup>
import Navbar from '../components/Navbar.vue'
</script>

<template>
  <v-layout class="d-flex flex-column flex-wrap">
    <Navbar />
<v-main class="d-flex align-center justify-center ">
  <div class="d-flex w-50  mt-9 rounded border container-xs" style="min-height: 440px;">
    <div class="w-25 bg-purple-accent-4 rounded d-flex justify-center align-center banner-xs">
      <v-icon style="font-size: 50px;">mdi-lock</v-icon>

    </div>
    <div class="w-75 rounded pa-7 content-xs">
      <h3 class="text-center py-4">ورود دانشجو</h3>
      <v-form class="py-4">
        <v-text-field
          class="mb-2"
          clearable
          label="ایمیل"
        ></v-text-field>

        <v-text-field
          clearable
          label="رمز عبور"
          type="password"
        ></v-text-field>

        <br>

        <v-btn
        type="submit"
          variant="outlined"
          block
        >
ورود
      </v-btn>
      </v-form>
    </div>

  </div>
</v-main>

  </v-layout>
</template>
<style lang="scss" scoped>
//responsive width for devises with max 1200px size
@media screen and (max-width: 1200px) {
.container-xs{
  width: 80% !important;
}
}

// styles for extera small devices (vuetify xs doesent work for some classes)
@media screen and (max-width: 600px) {
  .container-xs{
    flex-direction: column !important;
.banner-xs{
  width: 100% !important;
  padding: 20px;
}
.content-xs{
  width: 100% !important ;
}
  }
}
</style>