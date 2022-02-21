<template>
  <div>
    <header class="w-full h-screen/2 relative bg-cover sm:bg-contain bg-no-repeat "

            :style="backgroundDiv"
    >

      <div
          class=" h-full sm:w-[50%] max-w-6xl mx-auto  absolute right-0  flex flex-col justify-end 2xl:pb-12  sm:px-6 lg:px-8 px-4 ">
        <hero-title
            class="text-fourth font-Helvetica bg-white bg-opacity-70 p-3 py-2 sm:py-4 lg:py-6 px-4 sm:px-6 lg:px-8 text-xl  sm:text-2xl  lg:text-4xl 2xl:text-5xl "
            data-aos="fade-down"
            data-aos-delay="600"

        >Lorem ipsum dolor <br>sit amet</hero-title>
        <aside class="flex  bg-white bg-opacity-70  px-4 sm:px-6 lg:px-8 font-Lato">
          <p class="opacity-40 hover:opacity-100  ">Lorem Ipsum.</p>
          <p  class="opacity-40 hover:opacity-100 ml-3">Lorem Ipsum.</p>
        </aside>
        <hero-description
            class="font-Helvetica bg-white bg-opacity-70 lg:text-lg md:text-base sm:text-sm text-xs p-3 py-2 sm:py-4 lg:py-6 px-4 sm:px-6 lg:px-8"
            data-aos="fade-left"
            data-aos-delay="1400"
        >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text.
        </hero-description>
      </div>

    </header>
  <main>
    <section class="w-full lg:max-w-7xl max-w-3xl mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16 font-Helvetica">

      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
      fringilla vel, aliquet nec, vulputate eget, arcu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.


    </section>



    <section class="w-full lg:max-w-7xl max-w-3xl mx-auto flex flex-col pt-8 ">
      <GoogleMap/>
    </section>




    <ContactForm/>
  </main>

  <Footer/>
  </div>
</template>

<script>

import HeroDescription from "../components/headerComponents/heroDescription";
import HeroTitle from "../components/headerComponents/heroTitle"
import Footer from "../components/Footer";
import GoogleMap from "../components/GoogleMap";
import ContactForm from "../components/ContactForm";
import AOS from "aos";



export default {
  name: "Contact",

  components: {

    HeroDescription,HeroTitle,ContactForm, GoogleMap,Footer
  },
  data() {
    return {
      backgroundDiv: { backgroundImage: `url(${require('@/assets/contact_header.jpg')})`},

    }
  },

  beforeMount() {

    window.scrollTo(0, 0)
  },



  mounted() {

/*    window.scrollTo(0, 0)*/
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
