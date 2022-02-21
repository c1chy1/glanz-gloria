<template>
  <div class="background">
    <div class="mx-auto py-8 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-12">
      <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
        <div
            class="space-y-5 sm:space-y-4"
            data-aos="fade-right"
            data-delay="500"
            data-aos-anchor="#aos-anchor2"
        >
          <h2 class="text-3xl text-primary tracking-tight sm:text-4xl">Team</h2>
          <p class="text-xl text-gray-500 font-Helvetica">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. </p>
        </div>
        <div class="lg:col-span-2">
          <ul role="list"
              class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8 font-HelveticaRegular">
            <li v-for="person in people" :key="person.name">
              <div class="space-y-4 p-1 sm:p-3 lg:p-5">
                <div class="aspect-w-3 aspect-h-2">
                  <img class="object-cover shadow-lg pt-4" :src="person.imageUrl" alt=""/>
                </div>
                <div class="flex text-lg space-x-3"  id="aos-anchor2">
                  <h3 class="p-1 text-fourth ">{{ person.name }}</h3>
                  <p class="text-sm text-teamTeal bg-gray-100 p-2 bg-opacity-50 rounded-lg font-AmsiPro">
                    {{ person.role }}</p>
                </div>
                <div class="text-lg">
                  <p class="text-gray-500">{{ person.bio }}</p>
                </div>

              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


const people = [
    {
        name: 'Lorem Ipsum',
        role: 'CO-FOUNDER',
        imageUrl:
      require ('../assets/about_img.jpg'),
        bio:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',

    },
    {
        name: 'Lorem Ipsum',
        role: 'CO-FOUNDER',
        imageUrl:
            require ('../assets/about_img.jpg'),
        bio:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',

    },

    {
        name: 'Lorem Ipsum',
        role: 'CO-FOUNDER',
        imageUrl:
            require ('../assets/about_img.jpg'),
        bio:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
    },

    {
        name: 'Lorem Ipsum',
        role: 'CO-FOUNDER',
        imageUrl:
            require ('../assets/about_img.jpg'),
        bio:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
    },
]


export default {
    name: "AboutTeam",
    setup() {
        return {
            people,
        }
    },

/*    mounted() {
        AOS.init({
            once: true,
            duration: 1000,
            easing: 'ease-out-sine',
        })
    },*/
}
</script>

<style scoped>


.background {
    background: linear-gradient(rgba(232, 222, 210, 0.15), rgba(232, 222, 210, 0.15));

    background-repeat: no-repeat;

}


</style>
