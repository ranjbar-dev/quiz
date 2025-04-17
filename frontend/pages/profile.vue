<template>
       
    <div v-if="loading_jobs" class="flex items-center justify-center h-screen"   >
    <LoadingSpinner size="12" />
    </div>

    <div class="page-container border bg-white border-gray-100 rounded-md px-6 py-4" v-else> 

        <div class="flex items-center justify-between text-base text-gray-800 border-b border-gray-100 pb-4 mb-4"> 
        
            <span> حساب کاربری </span>
            
        </div>
 
        <div class="form-container">

            <div class="form">
                <div class="form-label">کد پرسنلی</div>
                <input type="text" class="form-input" :value="temp_user.id" placeholder="مثال: 416464" :disabled="true" />
            </div>

            <div class="form">
                <div class="form-label">گروه های شغلی</div>
                <input type="text" class="form-input" :value="use_jobs" placeholder="مثال: جوشکار, ..." :disabled="true" />
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
                <div class="form-label">نام پدر</div>
                <input type="text" class="form-input" v-model="temp_user.father_name" placeholder="مثال: حسین" :disabled="loading" />
            </div>
    
            <div class="form">
                <div class="form-label">جنسیت</div>
                <input type="text" class="form-input" v-model="temp_user.gender" placeholder="مثال: 1" :disabled="loading" />
            </div>
    
            <div class="form">
                <div class="form-label">کدملی</div>
                <input type="text" class="form-input" v-model="temp_user.national_code" placeholder="مثال: 3040506070" :disabled="loading" />
            </div>
    
            <div class="form">
                <div class="form-label">تاریخ تولد</div>
                <input type="text" class="form-input" v-model="temp_user.birth_date" placeholder="مثال: 1360/01/01" :disabled="loading" />
            </div>
            
    
            <div class="form">
                <div class="form-label">محل تولد</div>
                <input type="text" class="form-input" v-model="temp_user.birth_place" placeholder="مثال: تهران" :disabled="loading" />
            </div>

            <div class="form">
                <div class="form-label">بخش</div>
                <input type="text" class="form-input" v-model="temp_user.department" placeholder="مثال: بخش مالی" :disabled="loading" />
            </div>

            <div class="form">
                <div class="form-label">سمت</div>
                <input type="text" class="form-input" v-model="temp_user.position" placeholder="مثال: مدیر" :disabled="loading" />
            </div>

            <div class="form">
                <div class="form-label">شماره تلفن</div>
                <input type="text" class="form-input" v-model="temp_user.phone_number" placeholder="مثال: 09123456789" :disabled="loading" />
            </div>

            <div class="form">
                <div class="form-label">شماره محل کار   </div>
                <input type="text" class="form-input" v-model="temp_user.work_phone" placeholder="مثال: 09123456789" :disabled="loading" />
            </div>

            <div class="form">
                <div class="form-label">مدرک تحصیلی</div>
                <input type="text" class="form-input" v-model="temp_user.education_level" placeholder="مثال: دیپلم" :disabled="loading" />
            </div>

            
            
        </div>

        <div class="flex items-center justify-end gap-2 mt-6">

            <button class="submit-button" :data-loading="loading" @click="submit"> 
        
                <LoadingSpinner v-if="loading" size="12" />

                <span v-else> ویرایش اطلاعات </span>
                
            </button>

            <NuxtLink to="/logout" class="logout-button" :data-loading="loading"> 
        
                خروج از حساب کاربری
                
            </NuxtLink>
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
const jobStore = useJobStore()

const { user } = storeToRefs(userStore)
const { jobs, loading_jobs } = storeToRefs(jobStore)

const temp_user = ref<UserModel>(defaultUser())
const loading = ref<boolean>(false)

const use_jobs = computed(() => {

    return jobs.value.filter( (job) => temp_user.value.jobs.includes(job.id) ).map( (job) => job.name ).join(', ')
})

onMounted(() => {

    if ( user.value )
        temp_user.value = {...user.value}

    jobStore.fetchJobs()
})

const submit = () => {

    if( loading.value )
        return ;

    loading.value = true
    ask.updateProfile(temp_user.value)
        .then( (value) => {

            user.value = {... value}
            temp_user.value = {... value}
            swal.success("ویرایش اطلاعات", "اطلاعات با موفقیت ویرایش شد")
        })
        .catch( (error) => {

            swal.error("ویرایش اطلاعات", error.message)
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

   .logout-button {
        @apply w-56 flex items-center justify-center h-10 text-14p bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md;
   }
   
   input:disabled {
        @apply bg-gray-50 cursor-not-allowed;
   }
</style>