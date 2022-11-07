
<template>
    <logIn></logIn>
    <registerUser></registerUser>
    <body>
        <navBars></navBars>
        <div>
        </div>
        <pageBody>
            <div class="container-fluid">
                <div class="row heading py-5">
                    <h1>Create New Listing</h1>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-sm-12 mb-5">

                        <h3 class="formHeader">Upload Creation</h3>
                        
                        <!-- Image upload -->
                        <div class="uploadContainer">
                            <div class="btnText">
                                <input id="fileUpload" type="file" @change="uploadImage" accept="image/*" required="true" style="display: none;">
                                <!-- <button type="button" class="btn btn-primary" onclick="document.getElementById('fileUpload').click();">Upload File</button> -->
                            </div>
                            <div>
                                <label for="fileUpload">
                                    <img class="image uploadedImage" v-bind:src="images.image" >
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-7 col-sm-12 mx-3 p-0">
                    
                        <h3 class="formHeader">About this Creation</h3>
                        
                        
                        <div class="form-group">

                            <!-- Image Title -->
                            <div class="field field_v1 w-75">
                        <label for="listing-title" class="ha-screen-reader">Title</label>
                        <input id="listing-title" type="text" class="field__input" placeholder="Title" v-model="images.title" required="true">
                        <span class="field__label-wrap" aria-hidden="true" >
                            <span class="field__label">Title</span>
                        </span>
                        </div>
                        
                        <br>
                            <!-- Image Description -->
                           


                            <!-- Price input -->
                        
                            <div class="input-group mb-3 mt-3">
                                <span class="input-group-text">$</span>
                                <div class="field field_v1 w-75">
                        <label for="listing-price" class="ha-screen-reader">Title</label>
                        <input id="listing-price" type="text" class="field__input" placeholder="0.00" v-model="images.price" aria-label="amount" required="true">
                        <span class="field__label-wrap" aria-hidden="true" >
                            <span class="field__label">Price</span>
                        </span>
                        </div>
                            </div>


                                <!-- Add tag -->
                                <div class="input-group mb-3 mt-3">
                                
                                <div class="field field_v1 w-75">
                        <label for="tags" class="ha-screen-reader">Add Tags</label>
                        <input id="tags" type="text" class="field__input" placeholder="Add Tags" aria-describedby="button-addon2" v-model="tag" @keyup.enter="addTag">
                        
                        <span class="field__label-wrap" aria-hidden="true" >
                            <span class="field__label">Add Tags</span>
                        </span>
                        </div>
                        <button class="btn btn-outline-secondary buttonStyle add-on-hover" type="button" id="button-addon2" @click="addTag" >Add Tag</button>
                            </div>
                           
                            <div class="d-inline-flex flex-wrap" >
                                    <p v-for="(tag,index) in images.tags" :key="tag" style="width:max-content" class="text-start p-2 signin-on-hover me-2">
                                        <button type="button " class="btn-close btn-close-white" aria-label="Close" @click="deleteTag(tag,index)"></button>
                                        <span class="p-1 me-2 text-light"> {{tag}}</span>  
                                    </p>
                                </div>
                                <br>
                            Image Description:
                            <textarea placeholder="Description" v-model="images.details" class="form-control" rows="3" cols="50" required="true"></textarea>
                        </div>


                        <!-- Upload Button -->
                        <div class="form-group text-center" >
                            <button class="btn register-on-hover rounded-pill" style="width:fit-content" @click="saveData" type="submit">List your creation</button>
                        </div>
                    </div>
                </div>
            </div>

            


            
        </pageBody>

        
        <div></div>
    </body>

</template>

<script>
import pageBody from "../src/components/pageBody.vue"
import logIn from "../src/components/SignIn.vue"
import navBars from "../src/components/navBars.vue"
// import imagePage from "./ImagePage.vue";
// import messageBox from "../src/components/Chat.vue";

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, setDoc, getDocs, doc, getDoc  } from "firebase/firestore"; 
import { db } from "../src/main.js";
import { getAuth } from "firebase/auth";




export default {
    name: "createlistingPage",  

    data() {
        return {
            imagesObj: [],
            images: {
                userid: "", 
                artistName: '',
                email: "", 
                listDate: "",
                price: "",
                title: "",
                details: "",
                tags: [],
                image: "https://firebasestorage.googleapis.com/v0/b/wad2-6e92f.appspot.com/o/images%2FFrame%20583.png?alt=media&token=7544b0d8-2966-47f3-833a-f4619f7b37c2",
            },

            profile: {},

            tag:null,
            
        }
    },

    components: {
        navBars,
        logIn,
        pageBody,
    },

    created() {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user){
            console.log(user.email);
            console.log(user.uid);
            this.images.userid=user.uid;
            this.images.email=user.email;
            this.images.artistName = user.displayName;
            this.getAndAddData();
        }
        else {
            console.log("No user")
        }

        
    },
    methods: {
        deleteTag(tag,index){
            this.images.tags.splice(index,1);
        },
       
        addTag(){
            if(event.target.value!="")
            this.images.tags.push(this.tag);
            this.tag='';
        },

        async getAndAddData(){
            const docRef = doc(db, "profiles", this.images.userid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                this.profile = docSnap.data();
                console.log("docsnap exists" +this.profile.listedImages);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }

        },

        async saveData(){
            const date = new Date(); 
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            this.images.listDate= `${day}-${month}-${year}`;
            if (this.tag.length > 0){
                this.images.tags.push(this.tag);
            }
            // console.log(this.images);
            console.log(this.profile.listedImages);
            this.profile.listedImages.push(this.images.image);
            await setDoc(doc(db, "profiles", this.images.userid), this.profile);
            await setDoc(doc(db, this.images.userid, this.images.title), this.images);
            await setDoc(doc(db, "images", this.images.title), this.images)
            .then(() =>{
                // console.log("Document written with ID: ", docRef.id);
                // this.reset();
                window.location.href = '/buy/'+this.images.title;
            })
        },
        

        async readData(){
            // read all images
            const querySnapshot = await getDocs(collection(db, "images"));
            querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            this.imagesObj.push(doc.data());
        });
        },

        reset(){
                Object.assign(this.$data, this.$options.data.apply(this) )
        },

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

                    getDownloadURL(ref(storage, 'images/' + file.name)).then((url) => {
                        this.images.image = url;
                        // this.uploadingImages = url;
                        console.log(url);
                        console.log(this.images.image);
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
        )}
    },

} 


</script>

<style scoped>
img {
    width: 300px;
    height: 300px;
    object-fit: contain
}

.form-group {
    margin-bottom: 1rem;
    color: white;
    text-align: left;
}

input[type="file"] {
    display: none;
}
.custom-file-upload {
    /* border: 1px solid #ccc; */
    display: inline-block;
    padding: 6px 12px;
    /* cursor: pointer; */
}

.heading{
    text-align: left;
    color: white;
}

/* Image upload styling START */
.uploadContainer{
    margin-top: 20px;
    color: white;
    position: relative;
    /* margin-left: 20px; */
    margin-right: 20px;
}
.uploadedImage:hover{
    border: 2px solid white;
    
}
.image{
    width: 100%;
    height: auto;
    margin-right: 50px;
}
/*  image upload styling END */


.formHeader{
    color: white;
    text-align: left;
    padding-bottom: 20px;
}
.buttonStyle{
    background-color: rgb(228,36,116);
    color: white
}

.add-on-hover {
border: none;
outline: none;
color:  #fefffe;
background: #e42474;
cursor: pointer;
position: relative;
z-index: 0;
border-radius: 10px;
}
.add-on-hover:before {
content: '';
background: linear-gradient(45deg, #e42474, #7a00ff, #ff00c8);
position: absolute;
top: -2px;
left:-2px;
background-size: 400%;
z-index: -1;
filter: blur(5px);
width: calc(100% + 4px);
height: calc(100% + 4px);
animation: glowing 20s linear infinite;
opacity: 0;
transition: opacity .3s ease-in-out;
border-radius: 10px;
}

.add-on-hover:active {
    color: #e42474;
}

.add-on-hover:active:after {
    background: transparent;
}

.add-on-hover:hover:before {
    opacity: 1;
}

.add-on-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    background: #e42474;
    left: 0;
    top: 0;
    border-radius: 10px;
}

input[type=text],
input[type=password]{
    color:#fefffe;
}
.modal-dialog,
.modal-content,
.modal-header,
.modal-body {
    color: #fefffe;
    background-color: #120c18;
}


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

    /* -webkit-appearance: none;
  -moz-appearance: none; */

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

body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Open Sans, Ubuntu, Fira Sans, Helvetica Neue, sans-serif;
    margin: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.page {
    box-sizing: border-box;
    width: 100%;
    max-width: 400px;
    margin: auto;
    padding: 1rem;
    display: grid;
    grid-gap: 30px;
}


@media (min-width: 1024px) {

    .linktr {
        position: absolute;
        right: 1rem;
        bottom: 1rem;
    }
}

.r-link {
    --uirLinkDisplay: var(--rLinkDisplay, inline-flex);
    --uirLinkTextColor: var(--rLinkTextColor);
    --uirLinkTextDecoration: var(--rLinkTextDecoration, none);

    display: var(--uirLinkDisplay) !important;
    color: var(--uirLinkTextColor) !important;
    text-decoration: var(--uirLinkTextDecoration) !important;
}
</style>