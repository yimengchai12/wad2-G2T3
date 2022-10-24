<template>
    <body>
        <navBars></navBars>
         
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
import navBars from "../src/components/navBars.vue"


export default {
    name: "collectionPage",  
    components: {
        navBars,
        logIn, 
        registerUser,
        
       
    },
} 


</script>

<style>

</style>