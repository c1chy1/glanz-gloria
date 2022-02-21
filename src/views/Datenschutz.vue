<template>

  <div>
  <datenschutz-text/>
  <Footer class="mt-32"/>
  </div>
</template>




<script>
import DatenschutzText from "../components/DatenschutzText";
import Footer from "../components/Footer"


export default {
  name: "Datenschutz",

  components: {Footer,DatenschutzText},


  beforeMount() {

    window.scrollTo(0, 0)
  },
}
</script>




<style scoped>

</style>