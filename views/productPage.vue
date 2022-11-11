<template>
    <logIn></logIn>
    <registerUser></registerUser>
    <body>
        <navBars :data="{'chatUserEmail': 'Helper@gmail.com', 'chatUserName': 'Alexa Help', 'chatUserPhoto': 'https://media.istockphoto.com/id/1221348467/vector/chat-bot-ai-and-customer-service-support-concept-vector-flat-person-illustration-smiling.jpg?s=612x612&w=0&k=20&c=emMSOYb4jWIVQQBVpYvP9LzGwPXXhcmbpZHlE6wgR78='}"></navBars>
        
        
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