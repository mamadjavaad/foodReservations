<script setup>
const navProps=defineProps({
  flexJustify:{
    type:String,
    default:'space-evenly'
  }

})
</script>

<template>
<nav class="w-100 d-flex flex-column flex-wrap pa-5 border-b" style="background-color: #328458;color: white;">

  <div :class="`w-100  bg-transparent d-flex justify-${flexJustify} mx-auto align-center px-2`">
   <slot name="nav-left">
    
   </slot>
   
<slot name="nav-center">

</slot>
<slot name="nav-right">
    
  </slot>
 
  </div>

</nav>
 
</template>
<style>
.v-input .v-label {
  font-size: 0.8em;
}
</style>