<template>
    <div class="flex flex-col justify-start items-start">

        <img :src="`/images/slider/1.jpg`" alt="slide" class="mx-auto w-2/3 object-cover rounded-md">

        <div class="w-full mt-4 bg-white rounded-md p-4">
            
            <h6 class="text-gray-800 text-16p font-bold">اخبار</h6>

            <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنیکهای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
        </div>

        <div class="w-full mt-4 bg-white rounded-md p-4">
            
            <h6 class="text-gray-800 text-16p font-bold">اطلاعیه ها</h6>

            <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنیکهای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
        </div>
        
        <div class="w-full mt-4 bg-white rounded-md p-4">
            
            <h6 class="text-gray-800 text-16p font-bold">اطلاعیه ها</h6>

            <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنیکهای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
        </div>
        
    </div>
</template>
<script setup lang="ts">

definePageMeta({
    layout: "panel",
})

useHead({
    title: `Home`,
})

</script>