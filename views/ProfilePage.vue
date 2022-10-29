<template>
    <logIn></logIn>
    <registerUser></registerUser>
    <body>
        <navBars></navBars>
        
        <pageBody>
            <div class="text-light">
                name<input type="text" id="name" class="text-dark" v-model="profile.name">
                pone<input type="text" id="phone" class="text-dark"  v-model="profile.phone">
                address<input type="text" id="address" class="text-dark"  v-model="profile.address">
                
            </div>
            <button @click="updateProfile">update change</button>

        </pageBody>

        
        
    </body>
</template>

<script>
import pageBody from "../src/components/pageBody.vue"
import logIn from "../src/components/SignIn.vue"
import registerUser from "../src/components/RegisterPage.vue"
import navBars from "../src/components/navBars.vue"

import { getAuth } from "firebase/auth";
import { doc, updateDoc, getDoc} from "firebase/firestore";
import { db } from "../src/main.js";

// import imagePage from "./ImagePage.vue";
// import messageBox from "../src/components/Chat.vue";

const auth = getAuth();
// const user = auth.currentUser;
const uid = auth.currentUser.uid;


export default {
    name: "profilePage",  
    data(){
        return {
            profile: {
                name: null,
                phone: null,
                address: null, 
            },
            userImages: null,
        }
    },

    components: {
        navBars,
        logIn, 
        registerUser,
        pageBody,
    },

    created(){
        this.readData();
    },
    
    methods: {
        updateProfile(){
            const profileRef = doc(db, "profiles", uid);

            // Set the "capital" field of the city 'DC'
            updateDoc(profileRef, this.profile);
        },

        async readData(){
            const docRef = doc(db, "profiles", uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
            console.log("Document data:", docSnap.data().images);
            this.userImages=docSnap.data().images
            } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            }
        }, 
    } 
}


</script>

<style>
    

    
</style>