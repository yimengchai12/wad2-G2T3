<template>
    <body>
        <div class="container-fluid backdrop">
            <topNav></topNav>
            <div class="row notTopNav">
                <div class="col-2 p-0 m-0"><sideNav></sideNav></div>
                
            </div>
        <div>home</div>

        <logIn></logIn>
        <registerUser></registerUser>
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
    .backdrop {
        background-color:#08090d;
    }
    .notTopNav {
        margin-top: 80px;
    }
</style>