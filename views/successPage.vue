<template>
    <logIn></logIn>
    <body>
        <navBars></navBars>
        
        
        <div>
            
        </div>
        
        <pageBody>
            <div class="container pt-5 light-text"> 
                <h4>Purchase Successful</h4>
                <h6 class="light-text">Thank you for supporting the art community!</h6>
                <router-link to="/"><button class="btn register-on-hover m-3    " style="width: fit-content">Browse more creations</button></router-link>
            </div>
           
        </pageBody>

        
        
    </body>
</template>

<script>
import pageBody from "../src/components/pageBody.vue"
import logIn from "../src/components/SignIn.vue"
import navBars from "../src/components/navBars.vue"
// import homepageListing from "../src/components/homepageListing.vue"


import { getStorage, ref, uploadBytesResumable } from "firebase/storage";

// import messageBox from "../src/components/Chat.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { onMounted } from "vue";


const isLoggedIn = ref(false);
let auth;
onMounted(()=>{
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});



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

        // messageBox,
        pageBody,
        // homepageListing,
    
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
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
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
            console.log(e.target.files[0]);
            
        }
    }
} 


</script>

<style>
    
</style>