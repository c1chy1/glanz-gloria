<template>

  <div class="w-full mx-auto flex flex-col items-center justify-around lg:flex-row  px-4 sm:px-8 lg:px-12">
    <img
        src="../assets/Google_map.png"
        alt="glanz und gloria map"
        data-aos="flip-left"
        data-delay="2000"
        data-aos-offset="300"
    >

    <ul class="font-Helvetica lg:text-lg pt-5 lg:pt-0">
      <li class="flex items-center">
        <LocationMarkerIcon class="h-5 w-5 mr-5 text-teal opacity-40"/>
        Lorem ipsum 1, 1111, Lorem
      </li>
      <li class="flex items-center my-4">
        <MailOpenIcon class="h-5 w-5 mr-5 text-teal opacity-40"/>
        <a class="hover:text-primary"

            href="mailto:abc@example.com">example@example.de</a></li>
      <li class="flex items-center">
        <PhoneIncomingIcon class="h-5 w-5 mr-5 text-teal opacity-40"/>
        +11 111111111
      </li>

    </ul>

  </div>

</template>


<script>


import {LocationMarkerIcon, MailOpenIcon, PhoneIncomingIcon} from '@heroicons/vue/solid'


export default {
    name: "GoogleMap",

    components: {

        LocationMarkerIcon,MailOpenIcon,PhoneIncomingIcon


    }
}
</script>

<style scoped>

</style>
