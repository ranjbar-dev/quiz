<template>
       
    <div class="w-full sm:w-96 border bg-white border-gray-100 rounded-md py-10 px-6 flex flex-col items-center justify-center my-auto"> 

        <div class="text-gray-800 text-16p font-bold text-center mb-8">
            سامانه آموزشی سرشت
        </div>

        <div class="w-2/3 mb-6">
            <div class="login-label">کد پرسنلی</div>
            <input type="text" class="login-input" v-model="personal_number" placeholder="مثال: 416464" :disabled="loading_authentication" />
        </div>

        <div class="w-2/3 mb-8">
            <div class="login-label">رمز عبور</div>
            <input type="text" class="login-input" v-model="password" placeholder="مثال: 12345678" :disabled="loading_authentication" />
        </div>

        <button class="login-button" :data-loading="loading_authentication" @click="send_data"> 
        
            <LoadingSpinner v-if="loading_authentication" size="12" />

            <span v-else> ورود به سامانه </span>
            
        </button>

    </div>

</template>
<script setup lang="ts">

definePageMeta({
    layout: "guest",
})

useHead({
    title: `ورود به سامانه`,
})

const router = useRouter()

const authStore = useAuthStore()

const { loading_authentication } = storeToRefs(authStore)

const personal_number = ref<string>("10020")
const password = ref<string>("admin")

const send_data = () => {
    
    if( loading_authentication.value ) 
        return
 
    authStore.login(personal_number.value, password.value)
        .then(() =>  {

            swal.success("ورود با موفقیت انجام شد", "شما با موفقیت وارد سامانه شدید")
            router.push("/")
        })
        .catch((error) => swal.error("خطا", error.message) ) 
}

</script>
<style scoped>

    .login-label {
        @apply text-gray-800 text-14p mb-2;
    }
    
   .login-input {
        @apply text-gray-700 text-14p border border-slate-200 focus:border-blue-200 rounded px-2 py-1.5;
   }
   
   .login-button {
        @apply w-48 flex items-center justify-center h-10 text-14p bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md float-start;
   }
   
   .login-button[data-loading="true"] {
        @apply bg-gray-500 cursor-wait;
   }
   
</style>