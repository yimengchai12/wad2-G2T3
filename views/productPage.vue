<template>
    <logIn></logIn>
    <registerUser></registerUser>
    <body>
        <navBars></navBars>
        
        
        <div>
            
        </div>
        
        <pageBody>

            
                    <div class="row light-text m-0">
                        <homepageCarousel></homepageCarousel>
                    </div>  


        </pageBody>

        
        
    </body>
</template>

<script>
import pageBody from "../src/components/pageBody.vue"
import logIn from "../src/components/SignIn.vue"
import registerUser from "../src/components/RegisterPage.vue"
import navBars from "../src/components/navBars.vue"

import homepageCarousel from "../src/components/homepageCarousel.vue";

// import imagePage from "./ImagePage.vue";
// import messageBox from "../src/components/Chat.vue";





export default {
    name: "homePage",  
    components: {
        navBars,
        logIn, 
        registerUser,
        homepageCarousel,
        pageBody,

    },
    
    methods: {

       
         
        
    }
} 


</script>

<style>
    

    
</style>