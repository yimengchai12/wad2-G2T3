<template>
    <body>
        <navBars :data="{'chatUserEmail': 'Helper@gmail.com', 'chatUserName': 'Alexa Help', 'chatUserPhoto': 'https://media.istockphoto.com/id/1221348467/vector/chat-bot-ai-and-customer-service-support-concept-vector-flat-person-illustration-smiling.jpg?s=612x612&w=0&k=20&c=emMSOYb4jWIVQQBVpYvP9LzGwPXXhcmbpZHlE6wgR78='}"></navBars>
    <pageBody>
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="data:image/jpeg;base64,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" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#chat">Chat now</a>
    </div>
    </div>

    <div class="modal" id="chat" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header text-center">
            <h2 class="modal-title w-100" id="exampleModalLabel">Chatbox</h2>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <ChatPage :currentUser="{'id': id, 'name': name, 'email': email, 'photoUrl':photoUrl}"></ChatPage>
        </div>

        </div>
    </div>
    </div>
    </pageBody>
    </body>
</template>


<script>
import navBars from "../src/components/navBars.vue"
import ChatPage from "../src/components/Chat.vue"
import pageBody from "../src/components/pageBody.vue"

export default {
    name: "FeedPage",  
    components: {
        ChatPage,
        navBars,
        pageBody
    },
    data(){
        return{
            id: "12345",
            name:"Jan",
            email:"test@gmail.com",
            photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS6EIQlkehqQvaTOa4XoNPzIdkvIrXIgGM74dUa8Ll0A&s"
        }
    },    
    methods: {

        uploadImage(){
            
        }
    }
} 


</script>