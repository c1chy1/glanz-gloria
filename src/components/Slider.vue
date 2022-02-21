<template>

    <vueper-slides
        :arrows="false"
        bullets-outside
        transition-speed="750"
        lazy
        class="bg-white text-center no-shadow"
        fixed-height="50vh"
        slide-multiple
        :slide-ratio="0.3"
        :gap="4"

    >
        <vueper-slide
            v-for="slide in slides"
            :key="slide.id"
            :title="slide.title"
            :content="slide.content"
        >


        </vueper-slide>
    </vueper-slides>


</template>

<script>


import {VueperSlide, VueperSlides} from "vueperslides";
import 'vueperslides/dist/vueperslides.css'

export default {
    name: "Slider",
    components: {VueperSlide, VueperSlides},

    data() {
        return {
          slides: [
            {
              id: 'slide-1',
              title: '<h4 style="color: #00C5DE" class="text-xs md:text-xl font-Manrope">My Company Culture has changed #1</h4>',
              content: '<p class="w-1/2 mx-auto pt-5 font-Helvetica text-xs md:text-base  xl:text-xl">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec finibus dolor. Donec mattis est cursus aliquet vehicula. Mauris ac ultrices ipsum. Sed nec velit molestie, vulputate nunc in, imperdiet dolor. Donec aliquet sodales euismod. Nulla ut massa ex.”</p>' +
                  '<p class="mt-8 text-xs md:text-base  xl:text-xl font-Manrope">— Daniela Andrade</p>' +
                  '<p class="text-gray-400 text-xs md:text-base pt-2 font-light font-Manrope">Director of Materials Management | Mount Graham Regional Medical Center</p>'
            },

            {
              id: 'slide-2',
              title: '<h4 style="color: #00C5DE" class="text-xs md:text-xl font-Manrope">My Company Culture has changed #2</h4>',
              content: '<p class="w-1/2 mx-auto pt-5 font-Helvetica  text-xs md:text-base  xl:text-xl">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec finibus dolor. Donec mattis est cursus aliquet vehicula. Mauris ac ultrices ipsum. Sed nec velit molestie, vulputate nunc in, imperdiet dolor. Donec aliquet sodales euismod. Nulla ut massa ex.”</p>' +
                  '<p class="mt-8 text-xs md:text-base  xl:text-xl font-Manrope">— Daniela Andrade</p>' +
                  '<p class="text-gray-400 text-xs md:text-base pt-2 font-light font-Manrope">Director of Materials Management | Mount Graham Regional Medical Center</p>'
            },

            {
              id: 'slide-3',
              title: '<h4 style="color: #00C5DE" class="text-xs md:text-xl font-Manrope">My Company Culture has changed #3</h4>',
              content: '<p class="w-1/2 mx-auto pt-5 font-Helvetica  text-xs md:text-base  xl:text-xl">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec finibus dolor. Donec mattis est cursus aliquet vehicula. Mauris ac ultrices ipsum. Sed nec velit molestie, vulputate nunc in, imperdiet dolor. Donec aliquet sodales euismod. Nulla ut massa ex.”</p>' +
                  '<p class="mt-8 text-xs md:text-base  xl:text-xl font-Manrope">— Daniela Andrade</p>' +
                  '<p class="text-gray-400 text-xs md:text-base pt-2 font-light font-Manrope">Director of Materials Management | Mount Graham Regional Medical Center</p>'
            },

          ],
            active: 0,


        }
    }


}
</script>

<style scoped>

</style>
