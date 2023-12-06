<script setup lang='ts'>
const route = useRoute()

const todoId = route.params.id



</script>
<template>
    <div>
        {{ todoId }}
    </div>
</template>