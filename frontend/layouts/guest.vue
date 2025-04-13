<template>
    <MasterHeader />
    <MasterBody class="justify-center">
        <slot />
    </MasterBody>
    <MasterFooter />
</template>
<script setup lang="ts">

const authStore = useAuthStore()
const route = useRoute()

onMounted( () => {

    authStore.check()
        .then( (is_valid) => {

            if( is_valid && route.name == 'login' )
                navigateTo('/')
        })
})

</script>