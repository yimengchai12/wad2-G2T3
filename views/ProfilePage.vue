<template>
    <logIn></logIn>

    <body>
        <navBars></navBars>
        <pageBody>
            <div class="container-fluid text-light pt-5">
                <div class="row justify-content-center" style="height:max-content">
                    <div class="row col-xl-5 justify-content-center">
                        <div class="row justify-content-center">
                            <div class="row col-xl-7 p-0" style="height:250px; width:250px;">
                                <img
                                    style="height:inherit; width:inherit; object-fit:cover; border-radius: 50%; padding:0;"
                                    :src="profileObj.profilePicture">
                                </div>
                            <div class="row flex-column col-xl-6 p-1">
                                <h1 class="text-center">{{ profileObj.name }}</h1>
                                <span>
                                    <router-link to='/editprofile'><button class="register-on-hover" style="height:fit-content; width:fit-content">Edit
                                        Profile</button></router-link></span>
                            </div>
                        </div>
                    </div>
                    <div class="row col-xl-6 align-items-center">
                        <div class="d-flex flex-column w-75">
                            <p class="border-start text-start ps-3 light-text">{{ profileObj.bio }}</p>
                        </div>
                    </div>
                </div>
                <hr class="my-5">
                <!-- <div class="row">
                    <div class="text-light">
                        name<input type="text" id="name" class="text-dark" v-model="profile.name">
                        phone<input type="text" id="phone" class="text-dark" v-model="profile.phone">
                        bio<input type="text" id="bio" class="text-dark" v-model="profile.bio">
                        profile picture <input type="file" id="profilePicture" class="text-dark" @change="uploadImage">
                        <div>
                            <img v-bind:src="profile.profilePicture">
                        </div>
                    </div>

                    <button @click="updateProfile()" href="#">update change</button>

                    <div class="text-light">

                        <div>{{ profileObj.name }}</div>
                        <div>{{ profileObj.bio }}</div>
                        
                        <div>{{ profileObj.address }}</div>
                        

                    </div>

                    <div class="text-light">
                        <div v-for="imageobj in listed" :key="imageobj">
                            <img :src="imageobj.image">
                            <button @click="deleteData(imageobj.title)" class="btn btn-primary">DELETE</button>
                        </div>
                    </div>
                </div> -->
            </div>



        </pageBody>
    </body>
</template>
<script>
import pageBody from "../src/components/pageBody.vue"
import logIn from "../src/components/SignIn.vue"
import navBars from "../src/components/navBars.vue"

import { getAuth, updateProfile } from "firebase/auth";
import { doc, updateDoc, getDoc, collection, query, where, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "../src/main.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// import imagePage from "./ImagePage.vue";
// import messageBox from "../src/components/Chat.vue";

const auth = getAuth();
const uid = auth.currentUser.uid;
const email = auth.currentUser.email;


export default {
    name: "profilePage",
    data() {
        return {
            profileObj: {},
            listed: [],
            profile: {
                name: null,
                phone: null,
                bio: null,
                profilePicture: null,
                email: email,
                listedImages: [],
            },
        }
    },

    components: {
        navBars,
        logIn,
        pageBody,
    },

    created() {
        this.readData();
    },

    methods: {

        async deleteData(d) {
            await deleteDoc(doc(db, "images", d));
        },

        updateProfile() {
            if (this.profile.name == null) {
                this.profile.name = this.profileObj.name;
            }
            if (this.profile.profilePicture == null) {
                this.profile.profilePicture = this.profileObj.profilePicture;
            }
            if (this.profile.listedImages.length == 0) {
                this.profile.listedImages = this.profileObj.listedImages;
            }
            if (this.profile.bio == null) {
                this.profile.bio = this.profileObj.bio;
            }

            const profileRef = doc(db, "profiles", uid);

            // Set the "capital" field of the city 'DC'
            updateDoc(profileRef, this.profile);


            if (this.profile.name != null) {
                updateProfile(auth.currentUser, {
                displayName: this.profile.name, photoURL: this.profile.profilePicture}).then(() => {
                    console.log("Profile updated!");
                })
            }

            this.reset();
            // window.location.href = '/profile'

        },

        reset() {
            Object.assign(this.$data, this.$options.data.apply(this))
        },

        async readData() {
            const docRef = doc(db, "profiles", uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                this.profileObj = docSnap.data();
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }

            const q = query(collection(db, "images"), where("userid", "==", uid));

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                this.listed.push(doc.data());
            });

        },

        uploadImage(e) {
            let file = e.target.files[0];
            const storage = getStorage();
            const storageRef = ref(storage, 'profiles/' + file.name);

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

                    getDownloadURL(ref(storage, 'profiles/' + file.name)).then((url) => {
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