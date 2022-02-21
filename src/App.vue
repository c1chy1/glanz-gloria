<template>

  <Cookies id="Cookie" v-cookies/>


  <Navbar/>

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script>

import Navbar from "./components/Navbar";
import Cookies from "./components/Cookies";



import cookies from "./directives/cookies";


export default {
  name: 'App',
  components: {
    Navbar,Cookies
  },

  data() {
    return {

      cookies,
    }
  },


  methods: {


  },


}
</script>

<style>


@media (max-width: 768px)  {



  .fade-leave-active
  {
    transition: opacity 0.5s ease-in-out;
    transition-delay: 375ms !important
  }
  .fade-enter-active {
    transition: opacity 0.30s ease;


  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }




}


@media (min-width: 768px)  {


  .fade-enter-active,
  .fade-leave-active
  {
    transition: opacity 500ms ease-in-out;

  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }


}

</style>
