<template>
    <body>
        <navBars :data="{'chatUserEmail': 'Helper@gmail.com', 'chatUserName': 'Alexa Help', 'chatUserPhoto': 'https://media.istockphoto.com/id/1221348467/vector/chat-bot-ai-and-customer-service-support-concept-vector-flat-person-illustration-smiling.jpg?s=612x612&w=0&k=20&c=emMSOYb4jWIVQQBVpYvP9LzGwPXXhcmbpZHlE6wgR78='}"></navBars>
         
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

import logIn from "../src/components/SignIn.vue"
import navBars from "../src/components/navBars.vue"


export default {
    name: "collectionPage",  
    components: {
        navBars,
        logIn
        
       
    },
} 


</script>

<style>

</style>