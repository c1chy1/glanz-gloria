<template>




  <div class="h-screen w-screen bg-black fixed z-50 flex p-2 xl:p-4"   id="cookie" v-if="!closeCookie">

    <div  v-show="seen"
         class=" max-w-lg w-full  text-left m-auto rounded-lg bg-white  items-center font-Montserrat p-3">

      <div class="h-full">

        <h2 class="py-2 font-semibold text-2xl text-black">
          Ein Hinweis zu Cookies
        </h2>
        <p>
          Wir möchten Cookies dafür nutzen, unsere Website zu analysieren und sie für dich zu verbessern, sowie für
          Werbezwecke.<br>
          <a href="">
            <span class="text-primary">Unsere Datenschutzbestimmung</span></a></p>

        <div class="h-1/2 flex flex-col justify-end pt-3">
          <button class="text-md text-white font-semibold hover:text-secondary p-2 bg-fourth rounded-lg"
                  @click.prevent="allSubmit()"

          >Alle Cookies erlauben
          </button>
          <button class="text-md text-black hover:text-secondary font-semibold p-2"
                  v-on:click="seen = !seen">Cookie-Einstellungen anpassen
          </button>


          <button class="text-md text-white font-semibold hover:text-secondary p-2 bg-fourth rounded-lg"

                  id="Button"
                  @click.prevent=" allCancel()"
                  v-cookies

          >Alle Cookies ablehnen
          </button>
        </div>
      </div>
    </div>


    <div v-show="!seen"
         class=" max-w-xl w-full text-left m-auto rounded-lg bg-white  items-center font-Montserrat p-2 xl:p-3">

      <div

          id="hide"
          class="flex flex-col overflow-auto h-80 xl:h-auto"
      >

        <div class="pb-4">
          <h2 class="py-1 xl:py-2 font-semibold xl:text-2xl text-black">
            Cookie-Einstellungen anpassen
          </h2>
          <p class="text-xs xl:text-lg">
            Wir möchten Cookies dafür nutzen, unsere Website zu analysieren und sie für dich zu verbessern, sowie für
            Werbezwecke.<br>
            <a href=""><span class="text-primary">Unsere Datenschutzbestimmung</span></a></p>


        </div>

        <hr class=" hidden xl:block border-gray">

        <div class="flex flex-col">

          <label class="toggle text-sm xl:text-md text-black py-2 xl:py-3" for="NotwendigeID">
            <input type="checkbox" class="toggle__input" id="NotwendigeID"
                   :value="true"
                   v-model="notwendig"
                   disabled

            />
            <span class="toggle-track self-center">
				<span class="toggle-indicator">
					<span class="checkMark">
						<svg viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
							<path
                  d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
						</svg>
					</span>
				</span>

			</span>
            Notwendige
          </label>

          <p class="text-xs xl:w-11/12 self-end xl:pl-1.5">Diese Cookies sind für den Betrieb der Seite notwendig und
            ermöglichen unter anderem Basis-Funktionen wie Navigation sowie sicherheitsrelevante Funktionalitäten. Die
            Seite kann ohne diese Cookies nicht fehlerfrei funktionieren.</p>

        </div>


        <div class="flex flex-col">

          <label class="toggle text-sm xl:text-md text-black py-2 xl:py-3" for="PraferenzID">

            <input
                @click="checkbox()"
                v-cookies="preference"
                v-model="preference"
                :value="true"
                type="checkbox"
                class="toggle__input"
                id="PraferenzID"/>

            <span class="toggle-track self-center">
				<span class="toggle-indicator">
					<span class="checkMark">
						<svg viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
							<path
                  d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
						</svg>
					</span>
				</span>

			</span>
            Präferenzen
          </label>

          <p class="text-xs xl:w-11/12 self-end xl:pl-1.5">Diese Cookies ermöglichen es uns, deine präferierten Einstellungen
            zum Aussehen oder Verhalten unserer Website, oder auch Sprache bzw. Region zu speichern, damit sie perfekt
            auf dich zugeschnitten ist.</p>

        </div>


        <div class="flex flex-col">

          <label class="toggle text-sm xl:text-md text-black py-2 xl:py-3" for="StatistikID"


          >
            <input

                @click="checkbox()"
                v-cookies="statistic"
                v-model="statistic"
                :value="true"
                type="checkbox"
                class="toggle__input"
                id="StatistikID"/>


            <span class="toggle-track self-center">
				<span class="toggle-indicator">
					<span class="checkMark">
						<svg viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
							<path
                  d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
						</svg>
					</span>
				</span>

			</span>
            Statistik
          </label>

          <p class="text-xs xl:w-11/12 self-end xl:pl-1.5">Um unser Angebot und unsere Webseite zu verbessern, erfassen wir
            anonymisierte Daten für Statistiken und Erhebungen. Mithilfe dieser Cookies können wir zum Beispiel den
            Effekt von bestimmten Inhalten auf unserer Webseite ermitteln und optimieren.</p>

        </div>


        <div class="flex flex-col">

          <label class="toggle text-sm xl:text-md text-black py-2 xl:py-3" for="MarketingID">
            <input

                @click="checkbox()"
                v-cookies="marketing"
                v-model=" marketing"
                :value="true"
                type="checkbox"
                class="toggle__input"
                id="MarketingID"/>
            <span class="toggle-track self-center">
				<span class="toggle-indicator">
					<!-- 	This check mark is optional	 -->
					<span class="checkMark">
						<svg viewBox="0 0 24 24" id="ghq-svg-check" role="presentation" aria-hidden="true">
							<path
                  d="M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z"></path>
						</svg>
					</span>
				</span>

			</span>
            Marketing
          </label>

          <p class="text-xs xl:w-11/12 self-end xl:pl-1.5">Diese Cookies werden genutzt, um personalisierte Inhalte, passend
            zu deinen Interessen anzuzeigen. Sie ermöglichen es uns, dir besonders relevante Angebote zu
            präsentieren.</p>

        </div>
        <div></div>
        <div></div>

      </div>


      <footer class="flex flex-col pt-2 xl:pt-6">

        <button class="w-full mx-auto bg-red text-sm xl:text-md text-white bg-fourth hover:text-secondary  font-semibold p-2 rounded-lg"

                @click="closeCookie = true"
                type="submit"
        >Auswahl speichern
        </button>

        <button

            id="allSubmit"
            class="h-12 w-full mx-auto text-sm xl:text-md text-black hover:text-primary font-semibold p-2 rounded-lg"
            @click.prevent="allSubmit()"
             :value="true"

        >Alle Cookies erlauben
        </button>

      </footer>
    </div>


  </div>


</template>
<script>



import { onUpdated } from "vue"


import cookies from "@/directives/cookies";

export default {
  name: "Cookie3",

  data() {
    return {
      cookies,
      seen: true,
      notwendig: true,
      statistic: false,
      preference: false,
      marketing: false,
      closeCookie: false,
      onSubmit: false,
    }
  },


  methods: {

    checkbox() {

      this.onSubmit= !this.onSubmit
    },


    allSubmit() {


        this.statistic =  true
        this.preference =  true
        this.marketing = true

      const randomNotwendigeID = Math.floor(Math.random() * 10000000);
      this.$cookie.setCookie('ckies_notwendige', randomNotwendigeID, {
        expire: '28d',
        path: '/',
        domain: '',
        secure: 'true',
        sameSite: '',
      })


      setTimeout(() => {
       this.close()
      }, 100);

    },


    close() {

      this.closeCookie =  true

    },


    allCancel() {

      const randomNotwendigeID = Math.floor(Math.random() * 10000000);
      this.$cookie.setCookie('ckies_notwendige', randomNotwendigeID, {
          expire: '28d',
          path: '/',
          domain: '',
          secure: 'true',
          sameSite: '',
        })

      setTimeout(() => {
        this.close()
      }, 100);


    },
  },

  setup() {

    onUpdated(() => {
      window.scrollTo(0, 0)
    })

  }

}

</script>

<style scoped lang="scss">

$toggle-indicator-size: 16px;
$track-height: $toggle-indicator-size + 6;
$track-width: $toggle-indicator-size * 2.5;
$highContrastModeSupport: solid 2px transparent;


$light: #ccc;
$mid: #1a6564;
$dark: white;
$speed: 0.75s;


$track-border: #ccc;
$track-background: #ccc;
$focus-ring: 0px 0px 0px 2px $dark;

@media (min-width: 320px) and (max-width: 480px) {

  .toggle-track {


    height: $track-height - 5 !important;
    width: $track-width - 5 !important;

  }
  .toggle-indicator {

    height: $toggle-indicator-size - 5 !important;
    width:$toggle-indicator-size - 5 !important; ;
  }



}

button {

  font-family: system-ui;


}


.toggle {
  align-items: center;
  border-radius: 100px;
  display: flex;
  font-weight: 700;
  margin-bottom: 16px;

  &:last-of-type {
    margin: 0;
  }
}


.toggle__input {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;

  &:not([disabled]):active + .toggle-track,
  &:not([disabled]):focus + .toggle-track {
    border: 1px solid transparent;
    box-shadow: $focus-ring;
  }

  &:disabled + .toggle-track {
    cursor: not-allowed;
    opacity: 0.7;
  }
}

.toggle-track {
  background: $track-background;
  border: 1px solid $track-border;
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  height: $track-height;
  margin-right: 12px;
  position: relative;
  width: $track-width;
}

.toggle-indicator {
  align-items: center;
  background: $dark;

  border-radius: $toggle-indicator-size;
  bottom: 2px;
  display: flex;
  height: $toggle-indicator-size;
  justify-content: center;
  left: 2px;
  outline: $highContrastModeSupport;
  position: absolute;
  transition: $speed;
  width: $toggle-indicator-size;
}


.checkMark {

  fill: red;
  height: $toggle-indicator-size - 4;
  width: $toggle-indicator-size - 4;
  opacity: 0;
  transition: opacity $speed ease-in-out;
}

.toggle__input:checked + .toggle-track .toggle-indicator {
  background: $dark;
  transform: translateX($track-width - $track-height);

  .checkMark {
    opacity: 1;
    transition: opacity $speed ease-in-out;
  }
}

@media screen and (-ms-high-contrast: active) {
  .toggle-track {
    border-radius: 0;
  }
}


.accordion:after {
  content: '\02795';
  font-size: 13px;
  color: #777;
  float: right;
  margin-left: 5px;
}

.active:after {
  content: "\2796";
}
</style>