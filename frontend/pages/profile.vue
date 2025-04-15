<template>
       
    <div class="border bg-white border-gray-100 rounded-md px-6 py-4"> 

        <div class="flex items-center justify-between text-base text-gray-800 pb-2"> 
        
            <span> حساب کاربری </span>

            <NuxtLink to="/logout" class="text-12p text-red-500 hover:text-red-600 px-3 py-1 rounded-md flex items-center gap-2"> 
                
                <span class="transition-all"> خروج </span>
                
                <svg class="transition-all" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 9.204c0-2.073 0-3.11.358-3.951a4.2 4.2 0 0 1 1.364-1.747c.711-.526 1.666-.712 3.575-1.083c1.985-.385 2.977-.578 3.75-.27a3.06 3.06 0 0 1 1.532 1.365C15 4.275 15 5.353 15 7.51v8.982c0 2.156 0 3.234-.421 3.99a3.06 3.06 0 0 1-1.532 1.367c-.773.307-1.765.114-3.75-.271c-1.91-.371-2.864-.557-3.575-1.083a4.2 4.2 0 0 1-1.364-1.747C4 17.905 4 16.87 4 14.796zm11 10.594c1.447.15 3.4.614 4.438-.71c.562-.717.562-1.81.562-3.995V8.907c0-2.186 0-3.278-.562-3.995c-1.038-1.324-2.99-.86-4.438-.71M12 13v-2m7 8.727h3M2 20h3" color="currentColor" />
                </svg>
                
            </NuxtLink>
            
        </div>
 
        <div class="form-container">

            <div class="form">
                <div class="form-label">کد پرسنلی</div>
                <input type="text" class="form-input" :value="temp_user.id" placeholder="مثال: 416464" :disabled="true" />
            </div>

            <div class="form">
                <div class="form-label">گروه های شغلی</div>
                <input type="text" class="form-input" :value="temp_user.jobs.join(', ')" placeholder="مثال: جوشکار, ..." :disabled="true" />
            </div>
    
            <div class="form">
                <div class="form-label">نام خانوادگی</div>
                <input type="text" class="form-input" v-model="temp_user.last_name" placeholder="مثال: رنجبر حسنی" :disabled="loading" />
            </div>

            <div class="form">
                <div class="form-label">نام</div>
                <input type="text" class="form-input" v-model="temp_user.first_name" placeholder="مثال: امیر حسین" :disabled="loading" />
            </div>
    
            <div class="form">
                <div class="form-label">نام خانوادگی</div>
                <input type="text" class="form-input" v-model="temp_user.last_name" placeholder="مثال: رنجبر حسنی" :disabled="loading" />
            </div>
    
            <div class="form">
                <div class="form-label">شماره تلفن</div>
                <input type="text" class="form-input" v-model="temp_user.phone_number" placeholder="مثال: 09123456789" :disabled="loading" />
            </div>
    
            <div class="form">
                <div class="form-label">کدملی</div>
                <input type="text" class="form-input" v-model="temp_user.melli_code" placeholder="مثال: 3040506070" :disabled="loading" />
            </div>

            <div class="form">
                <div class="form-label">مدرک تحصیلی</div>
                <input type="text" class="form-input" v-model="temp_user.education_level" placeholder="مثال: دیپلم" :disabled="loading" />
            </div>
    
            <div class="form">
                <div class="form-label">تاریخ تولد</div>
                <input type="text" class="form-input" v-model="temp_user.birth_date" placeholder="مثال: 1360/01/01" :disabled="loading" />
            </div>

        </div>

        <div class="mt-6">
            <button class="submit-button" :data-loading="loading" @click="submit"> 
        
                <LoadingSpinner v-if="loading" size="12" />

                <span v-else> ویرایش اطلاعات </span>
                
            </button>
        </div>

    </div>

</template>
<script setup lang="ts">

import { defaultUser, type UserModel } from '~/models/user'


definePageMeta({
    layout: "panel",
})

useHead({
    title: `حساب کاربری`,
})

const userStore = useUserStore()

const { user } = storeToRefs(userStore)

const temp_user = ref<UserModel>(defaultUser())
const loading = ref<boolean>(false)

onMounted(() => {

    if ( user.value )
        temp_user.value = {...user.value}
})

const submit = () => {

    if( loading.value )
        return ;

    loading.value = true
    ask.updateProfile(temp_user.value.first_name, temp_user.value.last_name, temp_user.value.phone_number, temp_user.value.melli_code, temp_user.value.birth_date, temp_user.value.education_level)
        .then( (value) => {

            user.value = {... value}
            temp_user.value = {... value}
            swal.success("حساب کاربری", "اطلاعات با موفقیت ویرایش شد")
        })
        .finally( () => loading.value = false )
}
</script>
<style scoped>

    .form-container {
        @apply flex flex-col lg:flex-row flex-nowrap lg:flex-wrap ;
    }

    .form {
        @apply w-full lg:w-1/3 me-2 mb-4 pe-4;
    }
    
    .form-label {
        @apply text-gray-800 text-14p mb-2;
    }
    
   .form-input {
        @apply w-full text-gray-700 text-14p border border-slate-200 focus:border-blue-200 rounded px-2 py-1.5;
   }
   
   .submit-button {
        @apply w-56 flex items-center justify-center h-10 text-14p bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md;
   }
   
   .submit-button[data-loading="true"] {
        @apply bg-gray-500 cursor-wait;
   }
   
</style>