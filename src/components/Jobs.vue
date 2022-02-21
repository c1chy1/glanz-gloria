<template>
  <div class="flex flex-col px-4 sm:px-8 lg:px-12 font-AmsiPro">
    <dl class="divide-y divide-gray-200">
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 ">
        <dt class="text-sm font-medium flex justify-start lg:justify-left" >
          <p class="p-1 text-center text-xs lg:text-base text-black font-bold ">Lorem Ipsum</p>

          <span class="mx-2 p-1 px-2 self-center xl:self-auto bg-primary text-white text-center text-xs lg:text-sm rounded-lg">Full-Time</span>

        </dt>

        <dd class="mt-1 flex text-sm sm:mt-0 sm:col-span-3 ">
          <span class="flex-grow p-1 text-gray-900 text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </span>
          <span class=" flex-shrink-0">

            <a href="mailto:abc@example.com" class="bg-white rounded-md font-medium text-primary underline hover:text-fourth focus:outline-none">
            Bewerben
            </a>
          </span>
        </dd>
      </div>
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 ">
        <dt class="text-sm font-medium flex justify-start " >
          <p class="p-1 text-center text-xs lg:text-base text-black font-bold ">Lorem Ipsum</p>

          <span class=" mx-2 p-1 px-2 bg-primary self-center  xl:self-auto   text-white text-center text-xs lg:text-sm rounded-lg ">Full-Time</span>
          <span class="  p-1 px-2 bg-primary self-center  xl:self-auto text-white text-center text-xs lg:text-sm rounded-lg">Remote</span>

        </dt>

        <dd class="mt-1 flex text-sm sm:mt-0 sm:col-span-3 ">
          <span class="flex-grow p-1 text-gray-900 text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </span>
          <span class="ml-4 flex-shrink-0 outline-none">

            <a href="mailto:abc@example.com" class="bg-white rounded-md font-medium text-primary underline hover:text-fourth focus:outline-none">
            Bewerben
            </a>
          </span>
        </dd>
      </div>
      <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 ">
        <dt class="text-sm font-medium flex justify-start " >
          <p class="p-1 text-center text-xs lg:text-base text-black font-bold ">Lorem Ipsum</p>

          <span class=" mx-2 p-1 px-2  self-center xl:self-auto bg-primary text-white text-center text-xs lg:text-sm rounded-lg">Full-Time</span>
          <span class="  p-1 px-2 self-center xl:self-auto bg-primary text-white text-center text-xs lg:text-sm rounded-lg">Local</span>
        </dt>

        <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-3 ">
          <span class="flex-grow p-1 text-center">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </span>
          <span class="ml-4 flex-shrink-0">

             <a href="mailto:abc@example.com" class="bg-white rounded-md font-medium text-primary underline hover:text-fourth focus:outline-none">
            Bewerben
            </a>
          </span>
        </dd>
      </div>

    </dl>


  </div>
</template>

<script>

export default {
    name: "Jobs",




}
</script>

<style scoped>


button {

    text-underline-offset: 4px;

}
</style>
