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
                profile picture <input type="file" id="profilePicture" class="text-dark" @change="uploadImage">
                <div>
                    <img v-bind:src="profile.profilePicture" >
                </div>
            </div>

            <button @click="updateProfile">update change</button>

            <div class="text-light">
                
                <div>{{profileObj.name}}</div>
                <div>{{profileObj.phone}}</div>
                <div>{{profileObj.email}}</div>
                <div>{{profileObj.address}}</div>
                <img :src="profileObj.profilePicture">

            </div>

        </pageBody>
    </body>
</template>
<script>
import pageBody from "../src/components/pageBody.vue"
import logIn from "../src/components/SignIn.vue"
import registerUser from "../src/components/RegisterPage.vue"
import navBars from "../src/components/navBars.vue"

import { getAuth, updateProfile } from "firebase/auth";
import { doc, updateDoc, getDoc} from "firebase/firestore";
import { db } from "../src/main.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// import imagePage from "./ImagePage.vue";
// import messageBox from "../src/components/Chat.vue";

const auth = getAuth();
const uid = auth.currentUser.uid;
const email = auth.currentUser.email;


export default {
    name: "profilePage",  
    data(){
        return {
            profileObj: {},
            profile: {
                name: null,
                phone: null,
                address: null, 
                profilePicture: null,
                email: email, 
                listedImages: [],
            },
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
            

            if (this.profile.name != null){ 
                updateProfile(auth.currentUser, {
                displayName: this.profile.name,}).then(() => {
                    console.log("Profile updated!");
                })
            }

            this.reset();
        },

        reset(){
                Object.assign(this.$data, this.$options.data.apply(this) )
        },

        async readData(){
            const docRef = doc(db, "profiles", uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                this.profileObj = docSnap.data();
            } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            }
        }, 

        uploadImage(e){
            let file = e.target.files[0];
            const storage = getStorage();
            const storageRef = ref(storage, 'profiles/' + uid);
            
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

                    getDownloadURL(ref(storage, 'images/' + file.name)).then((url) => {
                        this.profile.profilePicture = url;
                        console.log(url);
                    });
                }, 
                (error) => {
                    // Handle unsuccessful uploads
                    switch (error.code) {
                    case 'storage/unauthorized':
                    alert("User doesn't have permission to access the object");
        // User doesn't have permission to access the object
                    break;
                }
                }, 
            );
        } 
    }
}


</script>

<style>
    

    
</style>