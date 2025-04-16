<template>
       
    <div class="page-container text-gray-800 text-16p font-bold text-center mb-8">
        <LoadingSpinner />
    </div>

</template>
<script setup lang="ts">

definePageMeta({
    layout: "default",
})

useHead({
    title: `خروج از حساب کاربری`,
})

const router = useRouter()

const authStore = useAuthStore()

onMounted(() => {

    authStore.logout()
    
    router.push('/login')
})

</script>
<style>

    .login-label {
        @apply text-gray-800 text-14p mb-2;
    }
    
   .login-input {
        @apply w-full text-gray-700 text-14p border border-slate-200 focus:border-blue-200 rounded px-2 py-1.5;
   }
   
   .login-button {
        @apply text-14p bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full;
   }
   
   .login-button[data-loading="true"] {
        @apply bg-gray-500 cursor-wait;
   }
   
</style>