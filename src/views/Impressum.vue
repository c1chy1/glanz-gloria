<template>
  <div>
    <ImpressumText/>


  <Footer class="mt-32"/>
  </div>
</template>

<script>
import Footer from "../components/Footer"
import ImpressumText from "../components/ImpressumText"
export default {
  name: "Impressum",

  components: {
    Footer,ImpressumText
  },

  beforeMount() {

    window.scrollTo(0, 0)
  },


}
</script>

<style scoped>

</style>