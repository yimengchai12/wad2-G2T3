<template>
    <body>
        <div class="container-fluid backdrop">
            <topNav></topNav>
            <div class="row notTopNav">
                <div class="p-0 sidenav-parent">
                    <div class="p-0"><sideNav></sideNav></div>
                </div>
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
    .backdrop {
        background-color: #120c18
        /* background-color:#08090d; */
    }
    .notTopNav {
        margin-top: 80px;
    }
    .sidenav-parent {
        position:fixed;
        width:330px
    }

    .not-sidenav-parent{
        position:relative; 
        left:250px;
    }
</style>