<template>
    <div class="flex flex-col items-center justify-center h-screen w-screen bg-slate-100" dir="rtl">
       

        <div class="w-96 border bg-white border-gray-100 rounded-md py-8 px-6"> 

            <div class="text-gray-800 text-16p font-bold text-center mb-8">
                سامانه ثبت نام ورود سرویس های سازمانی
            </div>

            <div class="mb-4">
                <div class="login-label">نام</div>
                <input type="text" class="login-input" v-model="first_name" placeholder="مثال: امیر حسین" />
            </div>

            <div class="mb-4">
                <div class="login-label">نام خانوادگی</div>
                <input type="text" class="login-input" v-model="last_name" placeholder="مثال: حسینی" />
            </div>

            <div class="mb-4">
                <div class="login-label">شماره تلفن</div>
                <input type="text" class="login-input" v-model="phone_number" placeholder="مثال: 09123456789" />
            </div>

            <div class="mb-6">
                <div class="login-label">کد ملی</div>
                <input type="text" class="login-input" v-model="national_code" placeholder="مثال: 00123456789" />
            </div>

            <button class="login-button" :data-loading="loading_authentication" @click="send_data"> 
            
                <span v-if="loading_authentication">
                    در حال ارسال ...
                </span>
                <span v-else>
                    ارسال 
                </span>
            </button>

        </div>

    </div>
</template>
<script setup lang="ts">

definePageMeta({
    layout: "guest",
})

useHead({
    title: `Login`,
})

const router = useRouter()

const authStore = useAuthStore()

const { loading_authentication } = storeToRefs(authStore)

const first_name = ref<string>("")
const last_name = ref<string>("")
const phone_number = ref<string>("")
const national_code = ref<string>("")

const send_data = () => {
    
    if( loading_authentication.value ) 
        return
 
    authStore.login(first_name.value, last_name.value, phone_number.value, national_code.value)
        .then((r) => {
            console.warn(r)
        } )
        .catch((error) => swal.error("خطا", error) ) 
}

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