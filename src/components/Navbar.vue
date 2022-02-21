<template>

  <Menu as="nav" class="navbar bg-white w-full shadow-lg z-40" v-slot="{ open }"

        :class="{ 'hidden-navbar': !showNavbar }"

  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between  h-16 lg:h-20">

        <div class="logo flex-shrink-0 flex items-center ">
          <router-link :to="{ name: 'Home' }">
            <img class=" hidden lg:block h-16 w-auto "
                 src="../assets/logo_final.png"
                 alt="logo Glanz & Gloria"
            >
          </router-link>

          <router-link :to="{ name: 'Home' }" >
            <img
                class=" block lg:hidden h-12 w-auto"
                src="../assets/logo_final.png"
                alt="logo Glanz & Gloria">
          </router-link>

        </div>
        <div class="hidden items-center sm:ml-6 md:flex md:space-x-8 font-AmsiPro ">

          <router-link :to="{ name: 'About' }"
                       class="text-teal hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base ">Über
            uns
          </router-link>
          <router-link :to="{ name: 'Services' }"
                       class="text-teal hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base ">
            Services
          </router-link>
          <router-link :to="{ name: 'Home' }"
                       class="text-teal hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base ">Jobs
          </router-link>
          <router-link :to="{ name: 'Contact' }"
                       class="text-teal hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base ">
            Kontakt
          </router-link>
        </div>

        <div class="mr-4 flex items-center md:hidden">
          <!-- Mobile menu button -->
          <MenuButton as="button" id="btn"

                      @click="!open"
                      v-bind:class="isClosed ? '' : 'on'"
                      v-on:click="burgerTime()"

                      class="z-50 relative">
            <span class="w-8 h-1"></span>
            <span class="w-8 h-1"></span>
            <span class="w-8 h-1"></span>
          </MenuButton>



        </div>

      </div>
    </div>
    <transition
        name="expand"
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave"
    >

      <MenuItems class="md:hidden">
        <div class="flex flex-col px-2 pt-2 pb-3 space-y-1">

          <MenuItem>
          <router-link

              :to="{ name: 'About' }"
              class="text-teal hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base "
              @click="burgerTime()">Über uns
          </router-link>

          </MenuItem>

          <MenuItem>
          <router-link


              :to="{ name: 'Services' }"
              class="text-teal hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base "
              @click="burgerTime()"
          >Services
          </router-link>
          </MenuItem>

          <MenuItem>
          <router-link

              :to="{ name: 'Home' }"
              class="text-teal hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base "
              @click="burgerTime()"
          >Jobs
          </router-link>
          </MenuItem>
          <MenuItem>
          <router-link

              :to="{ name: 'Contact' }"
              class="text-teal hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base "
              @click="burgerTime()"
          >Kontakt
          </router-link>
          </MenuItem>

        </div>
      </MenuItems>

    </transition>


  </Menu>


</template>

<script>

import {Menu,MenuButton, MenuItems,MenuItem} from '@headlessui/vue'
/*import {MenuIcon,XIcon} from '@heroicons/vue/outline'*/


const OFFSET = 60

export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,

  },

  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
      isClosed : true
    }
  },


  methods: {

    enter(element) {
      const width = getComputedStyle(element).width;
      element.style.width = width;
      element.style.position = 'absolute';
      element.style.visibility = 'hidden';
      element.style.height = 'auto';
      const height = getComputedStyle(element).height;
      element.style.width = null;
      element.style.position = null;
      element.style.visibility = null;
      element.style.height = 0;
      getComputedStyle(element).height;
      requestAnimationFrame(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
    leave(element) {
      const height = getComputedStyle(element).height;
      element.style.height = height;
      getComputedStyle(element).height;
      requestAnimationFrame(() => {
        element.style.height = 0;
      });
    },

    onScroll() {
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    },




    burgerTime() {


      this.isClosed = !this.isClosed;

    },

  },

  mounted() {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
    const viewportMeta = document.createElement('meta')
    viewportMeta.name = 'viewport'
    viewportMeta.content = 'width=device-width, initial-scale=1'
    document.head.appendChild(viewportMeta)
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  },


}
</script>

<style scoped>


.router-link-active {

  background-color: #086878;
  color: white;
  transition: 0.5s all;

}


.logo a {

  background-color: transparent;
  color: white;
  transition: 0.5s all;

}
.expand-enter-active,
.expand-leave-active {
  transition: height 0.5s ease-in-out;
  overflow: hidden;
}

.expand-enter,
.expand-leave-to {
  height: 0;
}


.navbar {

  position: fixed;
  transform: translate3d(0, 0, 0);
  transition: 0.5s all ease-out;
}

.navbar.hidden-navbar {

  transform: translate3d(0, -100%, 0);
}





#btn {

  cursor: pointer;
  background: white;
  border-radius: 50%;
  border: none;
  outline: none;
}
#btn span {
  position: absolute;

  top: 50%;
  left: 50%;
  background: #262626;
  border-radius: 2px;
  overflow: hidden;
  transition: all 0.3s linear;
}
#btn span::before {
  content: "";
  position: absolute;
  width: 0;
  height: 100%;
  top: 0;
  right: 0;
  background: gray;
  transition: all 0.3s linear;
}
#btn span:nth-child(1) {
  animation: span-first-off 0.5s ease-in-out;
  animation-fill-mode: forwards;
}
#btn span:nth-child(2) {
  animation: span-second-off 0.5s ease-in-out;
  animation-fill-mode: forwards;
}
#btn span:nth-child(3) {
  animation: span-third-off 0.5s ease-in-out;
  animation-fill-mode: forwards;
}

#btn.on:hover span::before {
  width: 100%;
  transition: all 0.3s linear;
}
#btn.on span:nth-child(1) {
  animation: span-first-on 0.5s ease-in-out;
  animation-fill-mode: forwards;
}
#btn.on span:nth-child(2) {
  animation: span-second-on 0.5s ease-in-out;
  animation-fill-mode: forwards;
}
#btn.on span:nth-child(3) {
  animation: span-third-on 0.5s ease-in-out;
  animation-fill-mode: forwards;
}

@keyframes span-first-on {
  0% {
    transform: translate(-50%, -300%);
  }
  30% {
    transform: translate(-50%, -50%);
  }
  100% {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
}
@keyframes span-first-off {
  0% {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  30% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -300%);
  }
}
@keyframes span-second-on {
  0% {
    transform: translate(-50%, -50%);
  }
  25% {
    background: gray;
  }
  50% {
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    transform: translate(-150%, -50%) scale(0);
  }
}
@keyframes span-second-off {
  0% {
    transform: translate(-150%, -50%) scale(0);
  }
  25% {
    background: gray;
  }
  50% {
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    transform: translate(-50%, -50%);
  }
}
@keyframes span-third-on {
  0% {
    transform: translate(-50%, 200%);
  }
  30% {
    transform: translate(-50%, -50%);
  }
  100% {
    transform: translate(-50%, -50%) rotate(45deg);
  }
}
@keyframes span-third-off {
  0% {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  30% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, 200%);
  }
}


















</style>
