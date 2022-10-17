<template>
    <topNav></topNav>
    <sideNav></sideNav>
    <homepageCarousel></homepageCarousel>
    <div>home</div>

    <logIn></logIn>
    <registerUser></registerUser>
    
</template>


<script>
// import sideNav from "../src/components/sideNav.vue"
import logIn from "./SignIn.vue"
import registerUser from "./RegisterPage.vue"
import sideNav from "./components/sideNav.vue"
import topNav from "./components/topNav.vue"
import homepageCarousel from "./components/homepageCarousel.vue";

export default {
    name: "homePage",  
    components: {
        sideNav,
        logIn, 
        registerUser,
        sideNav,
        topNav,
        homepageCarousel
    },
} 
</script>