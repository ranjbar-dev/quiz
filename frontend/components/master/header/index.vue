<template>
    <div class="h-16 w-screen px-4 gap-12 flex items-center justify-start bg-white border-b border-gray-100"> 

        <div class="hidden lg:flex items-center gap-4">

            <img src="/images/logo.png" alt="logo" class="h-10 w-10">

            <div class="text-gray-800 text-16p font-bold">
                سامانه آموزش و تعبیه فراوان کارگران
            </div>

        </div>
        
        <div class="hidden lg:flex items-center gap-6">

            <div class="header-link" data-selected="true"> صفحه اصلی </div>

            <div class="header-link"> آزمون های در حال برگذاری </div>

            <div class="header-link"> برنامه توسعه فردی </div>

            <div class="header-link"> گواهی های صادره </div>
            
        </div>

        <div class="flex items-center gap-6">
            <svg class="w-32p h-32p text-gray-600 hover:text-blue-400 cursor-pointer" @click="toggle_sidebar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" d="M4 17.27v-1h16v1zm0-4.77v-1h16v1zm0-4.77v-1h16v1z" />
            </svg>
        </div>

        <div class="flex items-center gap-2 ms-auto text-gray-600 hover:text-blue-400 fill-gray-600 hover:fill-blue-400 cursor-pointer ">

            <svg class="transition-all" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                <path fill="current" d="M16 10c0 2.21-1.79 4-4 4s-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4" />
                <path fill="current" fill-rule="evenodd" d="M12 24c6.63 0 12-5.37 12-12S18.63 0 12 0S0 5.37 0 12s5.37 12 12 12m6.27-2.96C21.13 19.05 23 15.75 23 12c0-6.08-4.92-11-11-11S1 5.92 1 12c0 3.75 1.87 7.05 4.73 9.04C6.435 19.72 8.71 16 12 16s5.56 3.72 6.27 5.04" clip-rule="evenodd" />
            </svg>

            <nuxt-link to="/login" class="text-sm transition-all" v-if="!is_authenticated"> ورود به سامانه </nuxt-link>

            <nuxt-link to="/profile" class="text-sm transition-all" v-if="is_authenticated"> {{ user?.first_name }} {{ user?.last_name }} </nuxt-link >
            
        </div>

        <div class="absolute top-0 left-0 w-full h-full bg-gray-500/50 z-10" v-if="show_sidebar">

        </div>

    </div>
</template>
<script lang="ts" setup>

const authStore = useAuthStore();
const userStore = useUserStore();
const { is_authenticated } = storeToRefs(authStore);
const { user } = storeToRefs(userStore);

const show_sidebar = ref(false);

const toggle_sidebar = () => show_sidebar.value = !show_sidebar.value



</script>
<style scoped>

.header-link{
    @apply text-gray-600 text-sm hover:text-blue-400 cursor-pointer transition-all;
}

.header-link[data-selected="true"]{
    @apply font-bold text-gray-700;
}

</style>

