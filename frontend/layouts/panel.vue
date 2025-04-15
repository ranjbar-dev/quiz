<template>
    <MasterHeader />
    <MasterBody>
        <slot v-if="!loading_authentication && is_authenticated && !loading_user" />
    </MasterBody>
    <MasterFooter />
</template>
<script setup lang="ts">

import { useAuthStore } from '~/stores/auth';

const authStore = useAuthStore()
const userStore = useUserStore()
const route = useRoute()

const { is_authenticated, loading_authentication } = storeToRefs(authStore)
const { loading_user } = storeToRefs(userStore)

onMounted( () => {

    authStore.check()
        .then( (is_valid) => {

            if( !is_valid && route.name !== 'login' )
                navigateTo('/login')
        })
})

</script>