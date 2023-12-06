<script setup lang="ts">
</script>
<template>
  <div class=" bg-white rounded-2xl shadow-xl p-5">
    <div class="border-b border-gray-400 pb-2">
      <slot name="header"></slot>
    </div>

    <slot name="body"></slot>
  </div>
</template>