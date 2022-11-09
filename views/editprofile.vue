<template>
    <logIn></logIn>

    <body>
        <navBars></navBars>
        <pageBody>
            <div class="container-fluid text-light p-3">
                <h1 class="text-start mb-4">Edit Profile</h1>
                <div class="d-flex text-light align-items-center mb-4">
                    <div style="height:250px; width:250px; margin:auto" class="text-center d-md-none">
                        <img style="height:250px; width:250px;object-fit:cover; border-radius: 50%; padding:0;"
                            :src="temp_profilePicture">

                    </div>
                    <div style="height:250px; width:250px" class="text-center me-5 d-none d-md-block">
                        <img style="height:250px; width:250px;object-fit:cover; border-radius: 50%; padding:0;"
                            :src="temp_profilePicture">

                    </div>
                    <div class="d-none d-md-block btnText d-flex align-items-center">
                        <label for="profilePicture">
                                <input type="file" @change="uploadImage" id="profilePicture" class="text-dark" style="display: none;">
                                <span role="button" class="btn register-on-hover" style="width:100%">Update profile picture</span>
                            </label>
                                <!-- <button type="button" class="btn btn-primary" onclick="document.getElementById('fileUpload').click();">Upload File</button> -->
                            </div>  
                    <br>
                    <br>

                </div>
                <div class="d-md-none btnText d-flex align-items-center justify-content-center mt-3 mb-3">
                        <label for="profilePicture">
                                <input type="file" @change="uploadImage" id="profilePicture" class="text-dark" style="display: none;">
                                <span role="button" class="btn register-on-hover" style="width:100%">Update profile picture</span>
                            </label>
                                <!-- <button type="button" class="btn btn-primary" onclick="document.getElementById('fileUpload').click();">Upload File</button> -->
                </div>  
                <!-- <div class="d-flex flex-column"> -->
                <div class="page">
                    <div class="field field_v1 light-text">
                        <label for="first-name" class="ha-screen-reader">First name</label>
                        <input id="first-name" class="field__input light-text" placeholder="Enter your name"
                            v-model="profile.name">
                        <span class="field__label-wrap" aria-hidden="true">
                            <span class="field__label">First name</span>
                        </span>
                    </div>
                    <div class="field field_v2">
                        <label for="last-name" class="ha-screen-reader">Phone</label>
                        <input id="last-name" class="field__input light-text" placeholder="Enter your phone number"
                            v-model="profile.phone">
                        <span class="field__label-wrap" aria-hidden="true">
                            <span class="field__label">Phone</span>
                        </span>
                    </div>
                    <div class="field field_v3">
                        <label for="email" class="ha-screen-reader">Bio</label>
                        <textarea id="email" class="field__input__bio light-text" placeholder="Enter your bio"
                            v-model="profile.bio"></textarea>
                        <span class="field__label-wrap" aria-hidden="true">
                            <span class="field__label">Bio</span>
                        </span>
                    </div>
                    <button @click="updateProfile()" href="#" class="btn register-on-hover" style="width:fit-content">Update change</button>
                </div>

                
            </div>
            <!-- </div> -->



















            <!-- <div class="container-fluid text-light pt-5">
                <div class="row justify-content-center" style="height:max-content">
                    <div class="row col-xl-5 justify-content-center">
                        <div class="row justify-content-center">
                            <div class="row col-xl-7 p-0" style="height:250px; width:250px"><img
                                    style="object-fit:cover; border-radius: 50%; padding:0;"
                                    :src="profileObj.profilePicture">
                                </div>
                            <div class="row flex-column col-xl-6 p-1">
                                <h1 class="text-center">{{ profileObj.name }}</h1>
                                <span>
                                    <router-link to='/editprofile' role="button" class="register-on-hover" style="height:fit-content; width:fit-content">Edit
                                        Profile</router-link></span>
                            </div>
                        </div>
                    </div>
                    <div class="row col-xl-6 align-items-center">
                        <div class="d-flex flex-column w-75">
                            <p class="border-start text-start ps-3">{{ profileObj.bio }}</p>
                        </div>
                    </div>
                </div>
                <hr class="my-5">
                <div class="row">
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
                </div>
            </div> -->



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
            imgchange: false,
            temp_profilePicture: '',
        }
    },

    components: {
        navBars,
        logIn,
        pageBody,
    },

    created() {
        console.log(auth.currentUser)
        this.readData();
    },

    methods: {

        async deleteData(d) {
            await deleteDoc(doc(db, "images", d));
        },

        async updateProfile() {
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
            await updateDoc(profileRef, this.profile);


            if (this.profile.name != null) {
                updateProfile(auth.currentUser, {
                    displayName: this.profile.name, photoURL: this.profile.profilePicture
                }).then(() => {
                    console.log("Profile updated!");
                })
            }

            this.reset();
            window.location.href = '/editprofile'


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
                this.profile.name = docSnap.data().name
                this.profile.phone = docSnap.data().phone
                this.profile.bio = docSnap.data().bio
                this.temp_profilePicture = docSnap.data().profilePicture


                // this.name=this.profile.Obj.name
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
                        this.temp_profilePicture = url
                        console.log(url);
                    });

                    this.imgchange = true
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
/*
=====
HELPERS
=====
*/

.ha-screen-reader {
    width: var(--ha-screen-reader-width, 1px);
    height: var(--ha-screen-reader-height, 1px);
    padding: var(--ha-screen-reader-padding, 0);
    border: var(--ha-screen-reader-border, none);

    position: var(--ha-screen-reader-position, absolute);
    clip: var(--ha-screen-reader-clip, rect(1px, 1px, 1px, 1px));
    overflow: var(--ha-screen-reader-overflow, hidden);
}

/*
=====
RESET STYLES
=====
*/

.field__input {
    --uiFieldPlaceholderColor: var(--fieldPlaceholderColor, #767676);

    background-color: transparent;
    border-radius: 0;
    border: none;

    -webkit-appearance: none;
    -moz-appearance: none;

    font-family: inherit;
    font-size: inherit;
}

.field__input:focus::-webkit-input-placeholder {
    color: var(--uiFieldPlaceholderColor);
}

.field__input:focus::-moz-placeholder {
    color: var(--uiFieldPlaceholderColor);
}

/*
=====
CORE STYLES
=====
*/

.field {
    --uiFieldBorderWidth: var(--fieldBorderWidth, 2px);
    --uiFieldPaddingRight: var(--fieldPaddingRight, 1rem);
    --uiFieldPaddingLeft: var(--fieldPaddingLeft, 1rem);
    --uiFieldBorderColorActive: var(--fieldBorderColorActive, rgba(22, 22, 22, 1));

    display: var(--fieldDisplay, inline-flex);
    position: relative;
    font-size: var(--fieldFontSize, 1rem);
}

.field__input {
    box-sizing: border-box;
    width: var(--fieldWidth, 100%);
    height: var(--fieldHeight, 3rem);
    padding: var(--fieldPaddingTop, 1.25rem) var(--uiFieldPaddingRight) var(--fieldPaddingBottom, .5rem) var(--uiFieldPaddingLeft);
    border-bottom: var(--uiFieldBorderWidth) solid var(--fieldBorderColor, rgba(0, 0, 0, .25));
}

.field__input:focus {
    outline: none;
}

.field__input::-webkit-input-placeholder {
    opacity: 0;
    transition: opacity .2s ease-out;
}

.field__input::-moz-placeholder {
    opacity: 0;
    transition: opacity .2s ease-out;
}

.field__input:focus::-webkit-input-placeholder {
    opacity: 1;
    transition-delay: .2s;
}

.field__input:focus::-moz-placeholder {
    opacity: 1;
    transition-delay: .2s;
}

.field__label-wrap {
    box-sizing: border-box;
    pointer-events: none;
    cursor: text;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.field__label-wrap::after {
    content: "";
    box-sizing: border-box;
    width: 100%;
    height: 0;
    opacity: 0;

    position: absolute;
    bottom: 0;
    left: 0;
}

.field__input:focus~.field__label-wrap::after {
    opacity: 1;
}

.field__label {
    position: absolute;
    left: var(--uiFieldPaddingLeft);
    top: calc(50% - .5em);

    line-height: 1;
    font-size: var(--fieldHintFontSize, inherit);

    transition: top .2s cubic-bezier(0.9, -0.15, 0.1, 1.15), opacity .2s ease-out, font-size .2s ease-out;
}

.field__input:focus~.field__label-wrap .field__label,
.field__input:not(:placeholder-shown)~.field__label-wrap .field__label {
    --fieldHintFontSize: var(--fieldHintFontSizeFocused, .75rem);

    top: var(--fieldHintTopHover, .25rem);
}

/* 
effect 1
*/

.field_v1 .field__label-wrap::after {
    border-bottom: var(--uiFieldBorderWidth) solid var(--uiFieldBorderColorActive);
    transition: opacity .2s ease-out;
}

/* 
effect 2
*/

.field_v2 .field__label-wrap {
    overflow: hidden;
}

.field_v2 .field__label-wrap::after {
    border-bottom: var(--uiFieldBorderWidth) solid var(--uiFieldBorderColorActive);
    transform: translate3d(-105%, 0, 0);
    transition: transform .285s ease-out .2s, opacity .2s ease-out .2s;
}

.field_v2 .field__input:focus~.field__label-wrap::after {
    transform: translate3d(0, 0, 0);
    transition-delay: 0;
}

/*
effect 3
*/

.field_v3 .field__label-wrap::after {
    border: var(--uiFieldBorderWidth) solid var(--uiFieldBorderColorActive);
    transition: height .2s ease-out, opacity .2s ease-out;
}

.field_v3 .field__input:focus~.field__label-wrap::after {
    height: 100%;
}

/*
=====
LEVEL 4. SETTINGS
=====
*/

.field {
    --fieldBorderColor: #D1C4E9;
    --fieldBorderColorActive: #673AB7;
}

/*
=====
DEMO
=====
*/

/* body{
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans, Ubuntu, Fira Sans, Helvetica Neue, sans-serif;
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
} */

.page {
    box-sizing: border-box;
    width: 100%;
    max-width: 480px;
    /* margin: auto; */
    padding: 1rem;
    display: grid;
    grid-gap: 50px;
}

.field__input__bio {
    --uiFieldPlaceholderColor: var(--fieldPlaceholderColor, #767676);

    background-color: transparent;
    border-radius: 0;
    border: none;

    -webkit-appearance: none;
    -moz-appearance: none;

    font-family: inherit;
    font-size: inherit;
}

.field__input__bio:focus::-webkit-input-placeholder {
    color: var(--uiFieldPlaceholderColor);
}

.field__input__bio:focus::-moz-placeholder {
    color: var(--uiFieldPlaceholderColor);
}

/*
=====
CORE STYLES
=====
*/

.field {
    --uiFieldBorderWidth: var(--fieldBorderWidth, 2px);
    --uiFieldPaddingRight: var(--fieldPaddingRight, 1rem);
    --uiFieldPaddingLeft: var(--fieldPaddingLeft, 1rem);
    --uiFieldBorderColorActive: var(--fieldBorderColorActive, rgba(22, 22, 22, 1));

    display: var(--fieldDisplay, inline-flex);
    position: relative;
    font-size: var(--fieldFontSize, 1rem);
}

.field__input__bio {
    box-sizing: border-box;
    width: var(--fieldWidth, 100%);
    height: var(--fieldHeight, 10rem);
    padding: var(--fieldPaddingTop, 1.25rem) var(--uiFieldPaddingRight) var(--fieldPaddingBottom, .5rem) var(--uiFieldPaddingLeft);
    border-bottom: var(--uiFieldBorderWidth) solid var(--fieldBorderColor, rgba(0, 0, 0, .25));
}

.field__input__bio:focus {
    outline: none;
}

.field__input__bio::-webkit-input-placeholder {
    opacity: 0;
    transition: opacity .2s ease-out;
}

.field__input__bio::-moz-placeholder {
    opacity: 0;
    transition: opacity .2s ease-out;
}

.field__input__bio:focus::-webkit-input-placeholder {
    opacity: 1;
    transition-delay: .2s;
}

.field__input__bio:focus::-moz-placeholder {
    opacity: 1;
    transition-delay: .2s;
}

.field__label-wrap {
    box-sizing: border-box;
    pointer-events: none;
    cursor: text;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

.field__label-wrap::after {
    content: "";
    box-sizing: border-box;
    width: 100%;
    height: 0;
    opacity: 0;

    position: absolute;
    bottom: 0;
    left: 0;
}

.field__input__bio:focus~.field__label-wrap::after {
    opacity: 1;
}

.field__label {
    position: absolute;
    left: var(--uiFieldPaddingLeft);
    top: calc(50% - .5em);

    line-height: 1;
    font-size: var(--fieldHintFontSize, inherit);

    transition: top .2s cubic-bezier(0.9, -0.15, 0.1, 1.15), opacity .2s ease-out, font-size .2s ease-out;
}

.field__input__bio:focus~.field__label-wrap .field__label,
.field__input__bio:not(:placeholder-shown)~.field__label-wrap .field__label {
    --fieldHintFontSize: var(--fieldHintFontSizeFocused, .75rem);

    top: var(--fieldHintTopHover, .25rem);
}

/* 
effect 1
*/

.field_v1 .field__label-wrap::after {
    border-bottom: var(--uiFieldBorderWidth) solid var(--uiFieldBorderColorActive);
    transition: opacity .2s ease-out;
}

/* 
effect 2
*/

.field_v2 .field__label-wrap {
    overflow: hidden;
}

.field_v2 .field__label-wrap::after {
    border-bottom: var(--uiFieldBorderWidth) solid var(--uiFieldBorderColorActive);
    transform: translate3d(-105%, 0, 0);
    transition: transform .285s ease-out .2s, opacity .2s ease-out .2s;
}

.field_v2 .field__input__bio:focus~.field__label-wrap::after {
    transform: translate3d(0, 0, 0);
    transition-delay: 0;
}

/*
effect 3
*/

.field_v3 .field__label-wrap::after {
    border: var(--uiFieldBorderWidth) solid var(--uiFieldBorderColorActive);
    transition: height .2s ease-out, opacity .2s ease-out;
}

.field_v3 .field__input__bio:focus~.field__label-wrap::after {
    height: 100%;
}

/*
=====
LEVEL 4. SETTINGS
=====
*/

.field {
    --fieldBorderColor: #D1C4E9;
    --fieldBorderColorActive: #673AB7;
}
.uploadedImage:hover{
    border: 2px solid white;
    
}
.image{
    width: 100%;
    height: auto;
    margin-right: 50px;
}
</style>