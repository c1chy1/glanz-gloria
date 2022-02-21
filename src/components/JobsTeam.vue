<template>


  <div class="bg-white">
    <div class="mx-auto py-12  max-w-7xl px-4 sm:px-8 lg:px-12 lg:py-16 font-AmsiPro">
      <div class="space-y-12">
        <ul role="list" class=" space-y-12 lg:grid lg:grid-cols-3 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0 text-center">
          <li v-for="person in people" :key="person.name" class="border-person">
            <div class="space-y-4 items-center justify-items-center sm:grid sm:grid-cols-1 sm:space-y-0">
              <div class="h-[130px] w-[130px] mx-auto mb-6">
                <img class="object-cover rounded-lg " :src="person.imageUrl" alt="" />
              </div>
              <div class="sm:col-span-2 text-center">
                <div class="space-3-4">
                  <div class="flex text-lg leading-6 space-x-3 justify-center ">
                    <h3 class="p-1">{{ person.name }}</h3>
                    <p class="text-sm text-teamTeal bg-gray-100 p-2 bg-opacity-50 rounded-lg">{{ person.role }}</p>
                  </div>
                  <div class="text-lg">
                    <p class="text-gray-500 p-1">{{ person.bio }}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>


</template>

<script>

const people = [
    {
        name: 'Lorem Ipsum',
        role: 'CEO',
        imageUrl:
            require ('../assets/Avatar-1.png'),
        bio:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
    },

    {
        name: 'Lorem Ipsum',
        role: 'CO-FOUNDER',
        imageUrl:
        require ('../assets/Avatar-2.png'),
        bio:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
    },


    {
        name: 'Lorem Ipsum',
        role: 'CO-FOUNDER',
        imageUrl:
            require ('../assets/Avatar-3.png'),
        bio:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
    },

]

export default {
    name: "JobsTeam",


    setup() {
        return {
            people,
        }
    },
}




</script>

<style scoped>


@media (min-width: 1024px)  {

  .border-person:nth-child(2) {

    border-right: 1px solid rgba(222, 227, 231, 0.43);
  }

  .border-person:nth-child(1) {

    border-right: 1px solid rgba(222, 227, 231, 0.43);

  }

}







</style>



