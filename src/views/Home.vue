<template>
<div>
  <header class="w-full h-screen relative bg-cover bg-top md:bg-center bg-no-repeat bg-opacity-20"
          :style="backgroundDiv"
  >
    <div
        class=" h-full sm:w-[50%] max-w-6xl mx-auto mt-24 sm:mt-0 absolute right-0   flex flex-col justify-center px-4 sm:px-6 lg:px-8  ">
      <hero-title
          class="text-fourth font-Helvetica bg-white bg-opacity-70 p-3 sm:bg-opacity-0 lg:text-7xl md:text-6xl sm:text-5xl text-3xl"
          data-aos="fade-down"
          data-aos-delay="600"

      >Lorem ipsum dolor <br>sit amet
      </hero-title>
      <aside class="flex bg-white bg-opacity-70 sm:bg-opacity-0 p-3 py-2  sm:py-4 lg:py-6 px-4 sm:px-6 lg:px-8 xl:px-3 font-Lato">
        <p class="opacity-40 hover:opacity-100  ">Lorem Ipsum.</p>
        <p class="opacity-40 hover:opacity-100 ml-3">Lorem Ipsum.</p>

      </aside>

      <hero-description class="font-Helvetica bg-white bg-opacity-70 sm:bg-opacity-0 p-3 text-base sm:text-lg lg:text-2xl  "
                        data-aos="fade-left"
                        data-aos-delay="1400"

      >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text.
      </hero-description>
    </div>

  </header>


  <main>
    <section class="w-full lg:max-w-7xl max-w-3xl mx-auto flex justify-around  ">
      <div class="flex items-center flex-col 2xl:flex-row text-center my-8 sm:my-16 lg:my-24 px-4 sm:px-8 lg:px-12 ">

        <h2 class="w-full mx-auto lg:text-left self-start text-3xl text-fourth pb-4 font-Lato">Über uns</h2>
        <p class="max-w-7xl font-Helvetica"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat ,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
          no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
      </div>

    </section>
    <Feature class="pb-8 sm:pb-16 lg:pb-24"/>

    <section class="w-full lg:max-w-7xl max-w-3xl mx-auto flex flex-col justify-around">
      <h2 class="text-center lg:text-left text-3xl text-fourth mb-8 lg:mb-16 px-4 sm:px-8 lg:px-12 font-AmsiPro">Services</h2>
      <div
          class="lg:max-w-7xl max-w-3xl  mx-auto text-center md:grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-4 sm:px-8 lg:px-12 gap-x-8 gap-y-8 md:space-y-0 space-y-8">

        <article class="col-span-1 p-8  flex flex-col justify-around text-center bg-servicesBlue"
                 data-aos="fade-left"
                 data-aos-delay="800"

        >
          <h3 class="mb-3 text-black font-AmsiPro">LOREM</h3>
          <p class="font-Helvetica">Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum
            has
            been the industry's standard dummy text.</p>
        </article>

        <article class="col-span-1 p-8  flex flex-col justify-around bg-servicesBlue "
                 data-aos="fade-bottom"
                 data-aos-delay="800"

        >
          <h3 class="mb-3 text-black font-AmsiPro">LOREM</h3>
          <p class="font-Helvetica">Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum
            has
            been the industry's standard dummy text.</p>
        </article>

        <article class="col-span-1 p-8   flex flex-col justify-around bg-servicesBlue "
                 data-aos="fade-right"
                 data-aos-delay="800"
        >
          <h3 class="mb-3 font-AmsiPro">LOREM</h3>
          <p class="font-Helvetica">Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum
            has
            been the industry's standard dummy text.</p>
        </article>
      </div>
    </section>


    <section class="w-full lg:max-w-7xl max-w-3xl mx-auto flex flex-col justify-around">
      <div class=" flex flex-col justify-left text-center lg:text-left px-4 sm:px-8 lg:px-12">
        <h2 class="text-3xl text-fourth my-8 lg:my-12 font-AmsiPro">Wie das funktioniert</h2>
        <p class="text-base text-center  mb-8 lg:mb-12 font-AmsiPro">Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text.
        </p>

      </div>

      <aside
          class="lg:max-w-7xl max-w-3xl  mx-auto md:grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-4 md:px-8 lg:px-12 gap-x-8 gap-y-8 md:space-y-0 space-y-8 font-AmsiPro">
        <div class="col-span-1 p-12  flex flex-col justify-around bg-gray-100">

          <div class="flex p-5">
            <p class="">1</p>
            <p class="text-4xl text-gray-400">/</p>
          </div>

          <div class="h-3/4 flex flex-col justify-center items-center">

            <img

                src="../assets/first_step.png"
                alt="first step"
                class="pb-4 sm:pb-8 lg:pb-12">



            <h2 class="border-t-4 border-gray-200 text-center w-3/4 pt-4">First Step Info</h2>
            <p class="text-gray-400 text-center mt-2">Lorem ipsum dolor sit amet,<br> consetetur sadipscing
              elitr</p>
          </div>

        </div>

        <div class="col-span-1 p-12  flex flex-col justify-around  bg-gray-100">

          <div class="flex p-5">
            <p class="">2</p>
            <p class="text-4xl text-gray-400">/</p>
          </div>
          <div class="h-3/4 flex flex-col justify-center items-center">

            <img
                src="../assets/second_step.png"
                alt="second step"
                class="pb-4 sm:pb-8 lg:pb-12">

            <h2 class="border-t-4 border-gray-200 text-center w-3/4 pt-4">First Step Info</h2>
            <p class="text-gray-400 text-center mt-2">Lorem ipsum dolor sit amet,<br> consetetur sadipscing
              elitr</p>
          </div>

        </div>
        <div class="col-span-1 p-12  flex flex-col justify-around  bg-gray-100">

          <div class="flex p-5">
            <p class="">3</p>
            <p class="text-4xl text-gray-400">/</p>
          </div>
          <div class="h-3/4 flex flex-col justify-center items-center">
            <img
                src="../assets/third_step.png"
                alt="third step"
                 class="pb-4 sm:pb-8 lg:pb-12">
            <h2 class="border-t-4 border-gray-200 text-center w-3/4 pt-4">First Step Info</h2>
            <p class="text-gray-400 mt-2 text-center">Lorem ipsum dolor sit amet,<br> consetetur sadipscing
              elitr</p>
          </div>

        </div>
      </aside>
    </section>


    <section class="w-full lg:max-w-7xl max-w-3xl mx-auto flex flex-col justify-around font-AmsiPro">
      <div class=" flex flex-col justify-left text-center lg:text-left px-4 sm:px-8 lg:px-12">
        <h2 class="text-3xl text-fourth my-8 lg:my-12 ">Team</h2>
        <p class="text-base text-center  mb-8 lg:mb-12 ">Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text.</p>

      </div>
      <JobsTeam/>

      <div class=" flex flex-col justify-left text-center lg:text-left px-4 sm:px-8 lg:px-12">
        <h2 class="text-3xl text-fourth mb-8 lg:mb-12 font-AmsiPro">Jobs</h2>
      </div>
      <Jobs class="pb-8 sm:pb-16 lg:pb-24"/>
    </section>


    <section class="w-full lg:max-w-6xl max-w-3xl mx-auto flex flex-col text-center bg-sliderColor">
      <div class="py-2 sm:py-4 lg:py-6 ">
        <h3 class="text-3xl py-2 font-Manrope">Testimonials</h3>
        <p class="text-lg text-gray-600 font-Manrope">What Customers Say about Us</p>
      </div>
      <Slider/>
    </section>


    <section class="w-full lg:max-w-7xl max-w-3xl mx-auto flex flex-col pt-8 ">
      <div class=" flex flex-col justify-left text-center lg:text-left px-4 sm:px-8 lg:px-12">
        <h2 class="text-3xl text-fourth mb-8 lg:mb-12 font-AmsiPro">Kontakt</h2>
      </div>
      <GoogleMap/>
    </section>


  </main>
  <Footer class="mt-32"/>
</div>
</template>

<script>



import AOS from 'aos'
import 'aos/dist/aos.css'


import HeroDescription from "../components/headerComponents/heroDescription";
import HeroTitle from "../components/headerComponents/heroTitle"

import Feature from "../components/Feature"
import JobsTeam from "../components/JobsTeam"
import Jobs from "../components/Jobs"
import Slider from "../components/Slider"
import GoogleMap from "../components/GoogleMap";
import Footer from "../components/Footer"

export default {
  name: "Home",

  components: {


    HeroDescription,HeroTitle,Feature,
    JobsTeam,
    Jobs,
    Slider,
    GoogleMap,
    Footer,


  },

  data() {
    return {
      backgroundDiv: { backgroundImage: `url(${require('@/assets/home_header.jpg')})`},

    }
  },


  beforeMount() {

    window.scrollTo(0, 0)
  },



  mounted() {
    AOS.init({
      once: true,
      duration: 1000,
      easing: 'ease-out-sine',
      disable: 'mobile'
    })
  },

}
</script>

<style scoped>



a {

  text-underline-offset: 3px;

}

</style>
