<template>
    <logIn></logIn>

    <body>
        <navBars></navBars>
        <pageBody>
            <div class="container-fluid p-0 m-0" style="width:70vw;">
                <div class="row">
                    <h1 class="light-text mt-5 text-start">Meet the dev team!</h1>
                </div>
                <div class="row d-flex">
                    <ul class="cards">
                    <li>
                        <a href="" class="card">
                        <img src="../src/assets/phuket.jpg" class="card__image" style="height:100%; object-fit: cover;" alt="" />
                        <div class="card__overlay">
                            <div class="card__header">
                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                            <img class="card__thumb" src="../src/assets/phuket.jpg" style="object-fit:cover" alt="" />
                            <div class="card__header-text">
                                <h2 class="card__title">Yimeng Chai</h2>            
                                <h4 class="card__status">Backend God/Basically Fullstack Dev</h4>
                            </div>
                            </div>
                            <p class="card__description">The brains behind everything you don't see</p>
                        </div>
                        </a>      
                    </li>
                    <li>
                        <a href="" class="card">
                        <img src="../src/assets/alden.png" style="height:auto ;object-fit: contain;" class="card__image" alt="" />
                        <div class="card__overlay">
                            <div class="card__header">
                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                            <img class="card__thumb" src="../src/assets/alden.png" alt="" />
                            <div class="card__header-text">
                                <h2 class="card__title">Alden Ng</h2>            
                                <h4 class="card__status">Frontend Dev</h4>
                            </div>
                            </div>
                            <p class="card__description">Alden did the frontend stuff! Alden loves WAD2. He loves prof layfoo and prof shar!</p>
                        </div>
                        </a>      
                    </li>
                    <li>
                        <a href="" class="card">
                        <img src="../src/assets/julian.png" class="card__image" alt="" />
                        <div class="card__overlay">
                            <div class="card__header">
                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                            <img class="card__thumb" src="../src/assets/julian.png" alt="" />
                            <div class="card__header-text">
                                <h2 class="card__title">Julian Ooi</h2>            
                                <h4 class="card__status">Frontend Dev</h4>
                            </div>
                            </div>
                            <p class="card__description">Julian's greatest weakness is that he is a perfectionist</p>
                        </div>
                        </a>      
                    </li>
                    <li>
                        <a href="" class="card">
                        <img src="../src/assets/janzeer.png" class="card__image" alt="" />
                        <div class="card__overlay">
                            <div class="card__header">
                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                            <img class="card__thumb" src="../src/assets/janzeer.png" alt="" />
                            <div class="card__header-text">
                                <h2 class="card__title">Al Janzeer</h2>            
                                <h4 class="card__status">Frontend Dev</h4>
                            </div>
                            </div>
                            <p class="card__description">The communication expert, Janzeer supported the entire development of the TalkJS API</p>
                        </div>
                        </a>      
                    </li>    
                    </ul>
                </div>
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
onMounted(() => {
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
    name: "aboutUs",
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

        uploadImage(e) {
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

<style scoped>
:root {
  --surface-color: #120c18;
  --curve: 40;
}

* {
  box-sizing: border-box;
}


.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(435px, 1fr));
  gap: 2rem;
  margin: 4rem 5vw;
  padding: 0;
  list-style-type: none;
}

.card {
  position: relative;
  display: block;
  height: 100%;  
  border: #32263f;
  outline: #32263f;
  border-radius: 30px;
  overflow: hidden;
  text-decoration: none;
}

.card__image {      
  width: 100%;
  height: auto;
}

.card__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;  
  outline: #32263f;    
  border: #32263f;
  border-radius: 30px;   
  background-color: #25192f;   
  transform: translateY(100%);
  transition: .2s ease-in-out;
}

.card:hover .card__overlay {
  transform: translateY(0);
}

.card__header {
  position: relative;
  display: flex;
  text-align: left;
  gap: 2em;
  padding: 2em;
  border-radius: 30px 0 0 0;   
  border:  #32263f;
  outline: #32263f;
  background-color: #25192f;
  transform: translateY(-100%);
  transition: .2s ease-in-out;
}

.card__arc {
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 100%;
  right: 0;      
  z-index: 1;
}

.card__arc path {
  fill: #25192f;
  d: path("M 40 80 c 22 0 40 -22 40 -40 v 40 Z");
}       

.card:hover .card__header {
  transform: translateY(0);
}

.card__thumb {
  flex-shrink: 0;
  width: 50px;
  height: 50px;      
  border-radius: 50%;     
  border:#32263f;
}

.card__title {
  /* font-size: 1.5em; */
  margin: 0 0 .3em;
  color: #e42474;
}

.card__tagline {
  display: block;
  margin: 1em 0;
  font-family: "MockFlowFont";  
  font-size: .8em; 
  color: #D7BDCA;  
}

.card__status {
  
  color: #D7BDCA;
  
}

.card__description {
  padding: 0 2em 2em;
  margin: 0;
  text-align: start;
  font-size: 1.3em;
  color: #D7BDCA;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}    
   

</style>