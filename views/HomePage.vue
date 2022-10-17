<template>
    <topNav></topNav>
    <sideNav></sideNav>
    <homepageCarousel></homepageCarousel>
    <div>home</div>

    <logIn></logIn>
    <registerUser></registerUser>
    
</template>


<script>

import logIn from "./SignIn.vue"
import registerUser from "./RegisterPage.vue"
import sideNav from "./src/components/sideNav.vue"
import topNav from "./src/components/topNav.vue"
import homepageCarousel from "./src/components/homepageCarousel.vue";

export default {
    name: "homePage",  
    components: {
        sideNav,
        logIn, 
        registerUser,
        topNav,
        homepageCarousel
    },
} 
</script>