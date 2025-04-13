<template>
    <div class="w-auto-slider">
        <swiper-container ref="swiperRef">
            <swiper-slide v-for="(slide, idx) in slides" :key="idx" >
                <img :src="`/images/slider/${slide}.jpg`" alt="slide" class="w-full object-cover">
            </swiper-slide>
        </swiper-container>
    </div>
</template>
<script setup lang="ts">

definePageMeta({
    layout: "panel",
})

useHead({
    title: `Home`,
})

const userStore = useUserStore()

const { user } = storeToRefs(userStore)

const swiperRef = ref(null)
const slides = ref([ '1', '2', '3' ])
const swiper = useSwiper(swiperRef)

</script>