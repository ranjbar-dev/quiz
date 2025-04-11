<template>
    <div class="border-b border-r border-slate-300 rounded-full animate-spin" :style="`width: ${size}px; height: ${size}px;`"></div>
</template>
<script setup lang="ts">

const props = defineProps({
    size: { 
        type: String,
         default: "20"
    },
})

</script>
