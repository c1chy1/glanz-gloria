<template>


  <div>

    <form
        @submit.prevent="submitForm"
        action="#"
        class=" w-10/12 2xl:w-1/2 mx-auto mt-32 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-8 font-Helvetica">
      <div>

        <label for="last-name" class="block text-sm font-medium text-gray-700 pb-1">Name</label>

        <input
            type="text"
            name="first-name"
            id="first-name"
            autocomplete="off"
            class="pl-2 focus:outline-none focus:ring-1 focus:ring-secondary focus:border-transparent block w-full shadow-sm sm:text-lg border rounded-md"/>
      </div>


      <div>

        <label for="last-name" class="block text-sm font-medium text-gray-700 pb-1">Vorname</label>

        <input
            type="text"
            name="last-name"
            id="last-name"
            autocomplete="off"
            class="pl-2 focus:outline-none focus:ring-1 focus:ring-secondary focus:border-transparent block w-full shadow-sm sm:text-lg border rounded-md"/>
      </div>

      <div class="sm:col-span-2">
        <label for="company" class="block text-sm font-medium text-gray-700 pb-1">Firma *</label>

        <input
            type="text"
            name="company"
            id="company"
            autocomplete="off"
            v-model="company"
            class="pl-2 focus:outline-none focus:ring-1 focus:ring-secondary focus:border-transparent block w-full shadow-sm sm:text-lg border rounded-md"
            :class="v$.company.$error ? 'border-red-600 ' : ''"/>
        <span
            v-if="v$.company.$error"
            :class="v$.company.$error ? 'border-red-600 text-xs  text-red-600' : ''">

        {{ v$.company.$errors[0].$message ? "Mehr als 3 Zeichen" : "" }}
</span>

      </div>

      <div class="sm:col-span-2">
        <label for="email" class="block text-sm font-medium text-gray-700 pb-1">E-mail *</label>
        <input
            type="text"
            name="email"
            id="email"
            autocomplete="off"
            v-model="email"
            :class="v$.email.$error ? 'border-red-600' : ''"
            class="pl-2 focus:outline-none focus:ring-1 focus:ring-secondary focus:border-transparent block w-full shadow-sm sm:text-lg border rounded-md"/>
        <span
            v-if="v$.email.$error"
            :class="v$.email.$error ? 'border-red-600 text-xs  text-red-600' : ''">
     {{ v$.email.$errors[0].$message ? "Falsche E-mail Adresse" : "" }}

</span>


      </div>

      <div class="sm:col-span-2">
        <label for="zimmer" class="block text-sm font-medium text-gray-700 pb-1">Zimmer *</label>
        <input type="number"
               name="zimmer"
               id="zimmer"
               autocomplete="off"
               v-model="rooms"
               class="pl-2 focus:outline-none focus:ring-1 focus:ring-secondary focus:border-transparent block w-full shadow-sm sm:text-lg border rounded-md"
               :class="v$.rooms.$error ? 'border-red-600 ' : ''"
        />

        <span
            v-if="v$.rooms.$error"
            :class="v$.rooms.$error ? ' border-red-600 text-xs  text-red-600' : ''">
        {{ v$.rooms.$errors[0].$message ? "Notwendig" : "" }}
          </span>
      </div>


      <div class="sm:col-span-2">
        <label for="high" class="block text-sm font-medium text-gray-700 pb-1">Höhe</label>
        <input type="number" name="Höhe" id="high" autocomplete="off"
               class="pl-2 focus:outline-none focus:ring-1 focus:ring-secondary focus:border-transparent block w-full shadow-sm sm:text-lg border rounded-md"/>
      </div>
      <div class="sm:col-span-2">
        <label for="m2" class="block text-sm font-medium text-gray-700 pb-1">m²</label>
        <input type="number" name="m²" id="m2" autocomplete="off"
               class="pl-2 focus:outline-none focus:ring-1 focus:ring-secondary focus:border-transparent block w-full shadow-sm sm:text-lg border rounded-md"/>
      </div>
      <div class="sm:col-span-2">
        <label for="phone" class="block text-sm font-medium text-gray-700 pb-1">Telefon</label>
        <input type="tel" name="phone" id="phone" autocomplete="off"
               class="pl-2 focus:outline-none focus:ring-1 focus:ring-secondary focus:border-transparent block w-full shadow-sm sm:text-lg border rounded-md"/>
      </div>

      <div class="sm:col-span-2">
        <label for="address" class="block text-sm font-medium text-gray-700 pb-1">Address</label>
        <input type="text" name="address" id="address" autocomplete="off"
               class="pl-2 focus:outline-none focus:ring-1 focus:ring-secondary focus:border-transparent block w-full shadow-sm sm:text-lg border rounded-md"/>

      </div>

      <div class="sm:col-span-2">
        <div class="flex justify-between">
          <label for="how-can-we-help" class="block sm:text-lg font-medium text-gray-700 pb-1">Nachricht</label>
          <span class="text-sm text-gray-500">Max. 500 Zeichen</span>
        </div>
        <div class="mt-1">
          <textarea id="how-can-we-help" name="how-can-we-help" aria-describedby="how-can-we-help-description" rows="4"
                    class="pl-2 focus:outline-none focus:ring-1 focus:ring-secondary focus:border-transparent block w-full shadow-sm sm:text-lg border rounded-md"/>
        </div>
      </div>

      <div class="text-right sm:col-span-2">

        <button

            @click="showModal"
            type="submit"
            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-fourth bg-third hover:bg-secondary hover:text-third focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500">
          Senden
        </button>

      </div>

      <Modal
          v-model="isShow"
          :close="closeModal"
      >
        <div class="modal">
          <p>
            Danke sehr !
          </p>
          <button @click="closeModal">
            <br>Schliessen
          </button>
        </div>
      </Modal>
      <div id="modals"></div>
    </form>
  </div>
</template>

<script>

import useVuelidate from '@vuelidate/core'

import {
  required,
  minLength,
  email
} from '@vuelidate/validators'


import {ref} from 'vue'

const isShow = ref(false)

export default {
  name: "ContactForm",


  components: {},

  setup() {

    return {
      v$: useVuelidate(),
      isShow,
    }

  },

  data() {
    return {
      email: '',
      rooms: '',
      company: '',

    };
  },

  validations() {
    return {


      rooms: {required},
      email: {required, email},
      company: {required, minLength: minLength(3)},
    }


  },

  methods: {


    showModal() {
      isShow.value = true
    },

    closeModal() {
      isShow.value = false
    },

    submitForm() {


      this.v$.$validate() // checks all inputs
      if (this.v$.$error === true) {

        this.closeModal()

      } else if (!this.v$.$error === false) {
        this.showModal()
      }


    }


  },


}
</script>

<style>


.modal {
  width: 300px;
  padding: 30px;
  box-sizing: border-box;
  background-color: #fff;
  font-size: 20px;
  text-align: center;
}


* {
  box-sizing: border-box;
}

:root {
  --primary-color: #0071fe;
  --error-color: #f23648;
  --error-bg-color: #fddfe2;
  --success-color: #21a67a;
  --success-bg-color: #e0eee4;
}

.TextInput {
  position: relative;
  width: 100%;
}


input:focus {
  border-color: var(--primary-color);
}

.help-message {
  position: absolute;
  bottom: calc(-1.5 * 1em);
  left: 0;
  margin: 0;
  font-size: 14px;
}

.has-error input {
  background-color: var(--error-bg-color);
  color: var(--error-color);
  border-color: var(--error-color);
}

.has-error input:focus {
  border-color: var(--error-color);
}

.has-error {
  background-color: var(--error-bg-color);
  border-color: var(--error-color) !important;
}

.TextInput:invalid {

  background-color: yellow;
}

.success input {
  background-color: var(--success-bg-color);
  color: var(--success-color);
}

.success input:focus {
  border-color: var(--success-color);
}

.success .help-message {
  color: var(--success-color);
}


</style>
