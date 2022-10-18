<template>
    <body>
        <div class="container-fluid backdrop">
            
                <topNav></topNav>
            

            <div class="row notTopNav">
                <div class="p-0 sidenav-parent">
                    <div class="col-2 p-0"><sideNav></sideNav></div>
                </div>
                <div class="col-10" style="position:relative; left:16vw"><homepageCarousel></homepageCarousel></div>
            </div>
            <div>home</div>

            <logIn></logIn>
            <registerUser></registerUser>
        
        </div>
        <div style="height:1000px;">qweifqwef</div>
    </body>
</template>


<script>

import logIn from "./SignIn.vue"
import registerUser from "./RegisterPage.vue"
import sideNav from "../src/components/sideNav.vue"
import topNav from "../src/components/topNav.vue"
import homepageCarousel from "../src/components/homepageCarousel.vue"


export default {
    name: "homePage",  
    components: {
        sideNav,
        logIn, 
        registerUser,
        topNav,
        homepageCarousel,
    },
} 


</script>

<style>
    .backdrop {
        background-color:#08090d;
    }
    .notTopNav {
        margin-top: 80px;
    }
    .sidenav-parent {
        position:fixed;
    }
</style>