<template>

    <div class="hidden lg:flex h-16 w-screen px-4 gap-12 items-center justify-center bg-white border-t border-gray-100"> 
        
        <div class="flex items-center gap-6">

            <div class="footer-link"> شرکت ملی مس </div>

            <div class="footer-link"> مس خاتون آباد </div>

            <div class="footer-link"> سایت آموزش </div>

        </div>

    </div>

    <div class="flex lg:hidden h-16 w-screen px-4 gap-8 items-center justify-center bg-white border-t border-gray-100"> 

        <div class="footer-link-mobile" data-selected="true">

            <svg class="w-24p h-24p" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.1001 22V12H15.1001V22M3.1001 9L12.1001 2L21.1001 9V20C21.1001 20.5304 20.8894 21.0391 20.5143 21.4142C20.1392 21.7893 19.6305 22 19.1001 22H5.1001C4.56966 22 4.06096 21.7893 3.68588 21.4142C3.31081 21.0391 3.1001 20.5304 3.1001 20V9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <span> صفحه اصلی </span>

        </div>

        <div class="footer-link-mobile">

            <svg class="w-24p h-24p" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_60_100)">
                    <path d="M8.7002 18L1.7002 22V6L8.7002 2M8.7002 18L16.7002 22M8.7002 18V2M16.7002 22L23.7002 18V2L16.7002 6M16.7002 22V6M16.7002 6L8.7002 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                    <clipPath id="clip0_60_100">
                        <rect width="24" height="24" fill="white" transform="translate(0.700195)"/>
                    </clipPath>
                </defs>
            </svg>

            <span> نقشه راه </span>

        </div>

        <div class="footer-link-mobile">

            <svg class="w-24p h-24p" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.51029 13.89L7.30029 23L12.3003 20L17.3003 23L16.0903 13.88M19.3003 8C19.3003 11.866 16.1663 15 12.3003 15C8.4343 15 5.30029 11.866 5.30029 8C5.30029 4.13401 8.4343 1 12.3003 1C16.1663 1 19.3003 4.13401 19.3003 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>


            <span> گواهی ها </span>

        </div>
        
        <div class="footer-link-mobile">

            <svg class="w-24p h-24p" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.9004 21V19C20.9004 17.9391 20.479 16.9217 19.7288 16.1716C18.9787 15.4214 17.9613 15 16.9004 15H8.90039C7.83952 15 6.82211 15.4214 6.07196 16.1716C5.32182 16.9217 4.90039 17.9391 4.90039 19V21M16.9004 7C16.9004 9.20914 15.1095 11 12.9004 11C10.6913 11 8.90039 9.20914 8.90039 7C8.90039 4.79086 10.6913 3 12.9004 3C15.1095 3 16.9004 4.79086 16.9004 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <span> پروفایل </span>

        </div>
        
    </div>

</template>
<style scoped>

.footer-link{
    @apply text-gray-600 text-sm hover:text-blue-400 cursor-pointer transition-all underline;
}

.footer-link-mobile{
    @apply flex flex-col justify-center items-center gap-1 text-12p text-gray-600 cursor-pointer;
}

.footer-link-mobile[data-selected="true"]{
    @apply text-blue-400;
}

</style>

