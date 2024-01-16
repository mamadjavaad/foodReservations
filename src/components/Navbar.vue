<script setup>

</script>

<template>
<nav class="w-100 d-flex flex-column flex-wrap pa-5 border-b">

  <div class="w-100  bg-transparent d-flex justify-space-between align-center px-2">
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