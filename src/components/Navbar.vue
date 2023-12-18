<script setup>
// toggle theme
import { useTheme } from 'vuetify'
const theme = useTheme()
const toggleTheme = ()=>{
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
<nav class="w-100 d-flex flex-column flex-wrap pa-5 border-b">

  <div class="w-100  bg-transparent d-flex justify-space-between align-center ">
    <a href="https://github.com/mamadjavaad" target="_blank">
      <v-btn icon="mdi-github" variant="tonal"></v-btn>  
    </a>
   <div class="d-flex flex-column text-center">
    <a href="/"  class="font-weight-bold " >
      <v-btn prepend-icon="mdi-food-drumstick" variant="tonal">رزرو غذا</v-btn>  
    </a>
   </div>
    <v-btn icon="mdi-theme-light-dark"  @click="toggleTheme()" variant="tonal"></v-btn>
  </div>

</nav>
 
</template>
<style>
.v-input .v-label {
  font-size: 0.8em;
}
</style>