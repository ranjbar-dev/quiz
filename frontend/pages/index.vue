<template>
    <div>
        
    </div>
</template>
<script setup lang="ts">

definePageMeta({
    layout: "panel",
})

useHead({
    title: `Home`,
})

const userStore = useUserStore()

const { user } = storeToRefs(userStore)

</script>