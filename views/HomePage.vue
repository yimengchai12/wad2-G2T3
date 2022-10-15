<template>
    <sideNav></sideNav>
    <div>home</div>

    <logIn></logIn>
    <registerUser></registerUser>
    
</template>

<script>
import sideNav from "../src/components/sideNav.vue"
import logIn from "./SignIn.vue"
import registerUser from "./RegisterPage.vue"

export default {
    name: "homePage",  
    components: {
        sideNav,
        logIn, 
        registerUser
    },
} 
</script>