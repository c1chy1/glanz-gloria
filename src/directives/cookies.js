

const cookies = {



    created(el,binding ,vnode) {




        const vm = binding.instance

        var ckies_notwendig =  vm.$cookie.isCookieAvailable("ckies_notwendige")

        var ckies_technics =  vm.$cookie.isCookieAvailable("ckies_technics")
        var ckies_statistik =  vm.$cookie.isCookieAvailable("ckies_statistik")
        var ckies_marketing =  vm.$cookie.isCookieAvailable("ckies_marketing")


        if (el.id === "cookie" && ckies_technics === true || ckies_statistik === true || ckies_marketing === true || ckies_notwendig === true) {



            vnode.el.style.display = "none"
        }
    },





    updated (el,binding) {


        const randomStatisticID = Math.floor(Math.random() * 10000000);
        const randomMarketingID = Math.floor(Math.random() * 10000000);
        const randomPraferenzID = Math.floor(Math.random() * 10000000);
        const randomNotwendigeID = Math.floor(Math.random() * 10000000);

        const vm = binding.instance


        if (binding.value === true && el.id === "PraferenzID" ) {

            vm.$cookie.setCookie('ckies_technics', randomPraferenzID, {
                expire: '14d',
                path: '/',
                domain: '',
                secure: 'true',
                sameSite: '',
            })
            document.querySelectorAll('.removeTechnics').forEach(item=> item.style.display = "block")




        } else if (binding.value === false && el.id === "PraferenzID") {

            vm.$cookie.removeCookie("ckies_technics", {
                path: '/',
                domain: '',
            })

            document.querySelectorAll('.removeTechnics').forEach(item=> item.style.display = "none")

        }

        if (binding.value === true && el.id === "StatistikID" ) {


            vm.$cookie.setCookie('ckies_statistik', randomStatisticID , {
                expire: '14d',
                path: '/',
                domain: '',
                secure: 'true',
                sameSite: '',
            })
            document.querySelectorAll('.removeStats').forEach(item=> item.style.display = "block")



        } else if(binding.value === false && el.id === "StatistikID") {


            vm.$cookie.removeCookie("ckies_statistik", {
                path: '/',
                domain: '',
            })
            document.querySelectorAll('.removeStats').forEach(item=> item.style.display = "none")

        }

        if (binding.value === true && el.id === "MarketingID" ) {

            vm.$cookie.setCookie('ckies_marketing', randomMarketingID, {
                expire: '14d',
                path: '/',
                domain: '',
                secure: 'true',
                sameSite: '',
            })

            document.querySelectorAll('.removeMarketing').forEach(item=> item.style.display = "block")


        } else if (binding.value === false && el.id === "MarketingID") {


            vm.$cookie.removeCookie("ckies_marketing", {
                path: '/',
                domain: '',
            })



            document.querySelectorAll('.removeMarketing').forEach(item=> item.style.display = "none")


        }

        else {

            vm.$cookie.setCookie('ckies_notwendige', randomNotwendigeID, {
                expire: '28d',
                path: '/',
                domain: '',
                secure: 'true',
                sameSite: '',
            })

        }




    },

    mounted() {





    },



}
export default cookies;
