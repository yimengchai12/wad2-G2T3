<template>
    <body>
        <topNav></topNav>
        <sideNav></sideNav>
         
        <div class="container-fluid backdrop">
            
            <div class="row notTopNav">
                
            </div>
            <div class="not-suidenav-parent">
                
                <logIn></logIn>
                <registerUser></registerUser>
            </div>
        </div>
    </body>
</template>


<script>

import logIn from "./SignIn.vue"
import registerUser from "./RegisterPage.vue"
import sideNav from "../src/components/sideNav.vue"
import topNav from "../src/components/topNav.vue"


export default {
    name: "collectionPage",  
    components: {
        sideNav,
        logIn, 
        registerUser,
        topNav,
       
    },
} 


</script>

<style>

</style>