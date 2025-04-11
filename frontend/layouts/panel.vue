<template>
    <MasterHeader />
    <MasterBody>
        <slot v-if="!loading_authentication && is_authenticated" />
    </MasterBody>
    <MasterFooter />
</template>
<script setup lang="ts">

import { useAuthStore } from '~/stores/auth';

const authStore = useAuthStore()
const route = useRoute()

const { is_authenticated, loading_authentication } = storeToRefs(authStore)
onMounted( () => {

    authStore.check()
        .then( (is_valid) => {

            if( !is_valid && route.name !== 'login' )
                navigateTo('/login')
        })
})

</script>