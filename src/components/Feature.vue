<template>
  <section class="overflow-hidden">
    <div class="relative max-w-7xl mx-auto py-12  lg:grid lg:grid-cols-3 lg:gap-x-8 px-2 sm:px-6 lg:px-10">

      <div class="lg:col-span-1">

        <div class="h-1/2 flex flex-col justify-center items-center font-AmsiPro">
          <p class="text-3xl">30</p>
          <p class="text-xs text-gray-200">Projekte</p>
        </div>
        <div class="h-1/2 flex flex-col justify-center items-center font-AmsiPro">
          <p class="text-3xl">15</p>
          <p class="text-xs text-gray-200">Klienten</p>
        </div>
      </div>
      <dl class="mt-10  space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2 text-center font-AmsiPro">
        <div v-for="feature in features" :key="feature.name" class="px-2 sm:px-6 lg:px-10">
          <dt>
            <div class="flex items-center justify-center mx-auto h-12 w-12 rounded-md  text-white ">
              <component :is="feature.icon" class="h-14 w-14 " aria-hidden="true" />
            </div>
            <p class="mt-5 text-lg leading-6 font-medium text-gray-900">{{ feature.name }}</p>
          </dt>
          <dd class="mt-2 text-base text-center text-gray-500 font-Helvetica">
            {{ feature.description }}
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script>

import  Icon1   from './featureIcons/Icon1'
import  Icon2   from './featureIcons/Icon2'
import  Icon3   from './featureIcons/Icon3'
import  Icon4   from './featureIcons/Icon4'

const features = [
    {
        name: 'Competitive rates',
        description: 'Consequuntur omnis dicta cumque, inventore atque ab dolores aspernatur tempora ab doloremque.',
        icon: Icon1,
    },
    {
        name: 'No hidden fees',
        description:
            'Corporis quisquam nostrum nulla veniam recusandae temporibus aperiam officia incidunt at distinctio ratione.',
        icon: Icon2,
    },
    {
        name: 'Instant transfers',
        description:
            'Omnis, illo delectus? Libero, possimus nulla nemo tenetur adipisci repellat dolore eligendi velit doloribus mollitia.',
        icon: Icon3,
    },
    {
        name: 'Reminder emails',
        description:
            'Veniam necessitatibus reiciendis fugit explicabo dolorem nihil et omnis assumenda odit? Quisquam unde accusantium.',
        icon: Icon4,
    },
]

export default {
    name: "Feature",

    setup() {
        return {
            features,
        }
    },
}
</script>

<style scoped>

</style>
