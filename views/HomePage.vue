<template>
    <logIn></logIn>
    <body>
        <navBars :data="{'chatUserEmail': 'Helper@gmail.com', 'chatUserName': 'Alexa Help', 'chatUserPhoto': 'https://media.istockphoto.com/id/1221348467/vector/chat-bot-ai-and-customer-service-support-concept-vector-flat-person-illustration-smiling.jpg?s=612x612&w=0&k=20&c=emMSOYb4jWIVQQBVpYvP9LzGwPXXhcmbpZHlE6wgR78='}"></navBars>
        
        
        <div>
            
        </div>
        
        <pageBody>
   
            
                    <div class="row light-text m-0">
                        <homepageCarousel></homepageCarousel>
                    </div>  
                    <div class="row mt-5 pt-5 light-text">
                        <!-- <homepageListing></homepageListing> -->
                    <imagePage></imagePage>
                    </div>
                    <!-- <messageBox></messageBox> -->
                    <div class="row mt-5">
                        
                    </div>

        </pageBody>

        
        
    </body>
</template>

<script>
import pageBody from "../src/components/pageBody.vue"
import logIn from "../src/components/SignIn.vue"
import navBars from "../src/components/navBars.vue"
// import homepageListing from "../src/components/homepageListing.vue"

import homepageCarousel from "../src/components/homepageCarousel.vue";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import imagePage from "../src/components/ImagePage.vue";
// import messageBox from "../src/components/Chat.vue";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { onMounted } from "vue";


// const isLoggedIn = ref(false);
// let auth;
// onMounted(()=>{
//   auth = getAuth();
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       isLoggedIn.value = true;
//     } else {
    //   isLoggedIn.value = false;
//     }
//   });
// });



export default {
    name: "homePage",  
    // props: ['uid'],
    // data(){
    //     return{
  
    //     }
    // },
    
    
    components: {
        navBars,
        logIn, 
        homepageCarousel,
        imagePage,
        // messageBox,
        pageBody,
        // homepageListing,
    
    },
    
    created() {
        
        // const auth = getAuth();
        // onAuthStateChanged(auth, (user) => {
        //     if (user) {
        //         this.isLoggedIn.value = true;
        //     } else {
        //         this.sLoggedIn.value = false;
        //     }
        // });
    },

    methods: {

        uploadImage(e){
            let file = e.target.files[0];
            const storage = getStorage();
            const storageRef = ref(storage, 'images/' + file.name);
            
            const metadata = {
                contentType: 'image/jpeg/png/jpg',
            };

            const uploadTask = uploadBytesResumable(storageRef, file, metadata);

            uploadTask.on('state_changed', 
                (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    // const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    // console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                    case 'paused':
                        // console.log('Upload is paused');
                        break;
                    case 'running':
                        // console.log('Upload is running');
                        break;
                    }
                }, 
                (error) => {
                    // Handle unsuccessful uploads
                    switch (error.code) {
                    case 'storage/unauthorized':
                    alert("User doesn't have permission to access the object");
        // User doesn't have permission to access the object
                    break;
                }
            }
            );
            // console.log(e.target.files[0]);
            
        }
    }
} 


</script>

<style>
    
</style>