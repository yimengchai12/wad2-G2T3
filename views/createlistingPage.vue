
<style>
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
    
</style>
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
                    <div class="col-lg-4 col-sm-12">

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

                    <div class="col-lg-7 col-sm-12 mx-3">
                    
                        <h3 class="formHeader">About this Creation</h3>
                        
                        <div class="form-group">

                            <!-- Image Title -->
                            Listing Title:
                            <input type="text" placeholder="Title" v-model="images.title" class="form-control" required="true">


                            <!-- Image Description -->
                            Image Description:
                            <textarea placeholder="Description" v-model="images.details" class="form-control" rows="3" cols="50" required="true"></textarea>


                            <!-- Price input -->
                            Price:
                            <div class="input-group mb-3">
                                <span class="input-group-text">$</span>
                                <input type="text" class="form-control" placeholder="0.00" aria-label="Amount" v-model.number="images.price" required="true">
                            </div>


                                <!-- Add tag -->
                            Image Tags:
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Add Tags" aria-describedby="button-addon2" v-model="tag" @keyup.enter="addTag">
                                <button class="btn btn-outline-secondary buttonStyle" type="button" id="button-addon2" @click="addTag" >Add Tag</button>


                                <!-- <input type="text" @keyup.enter="addTag" placeholder="Tags (Press enter to add tags)" v-model="tag" class="form-control"> -->
                                <div class="d-flex">
                                    <p v-for="(tag,index) in images.tags" :key="tag" class="text-start p-2 bg-danger me-2">
                                        <button type="button " class="btn-close btn-close-white " aria-label="Close" @click="deleteTag(tag,index)"></button>
                                        <span class="p-1 me-2 text-light"> {{tag}}</span>  
                                    </p>
                                </div>
                            </div>
                            
                        </div>


                        <!-- Upload Button -->
                        <div class="form-group text-center" >
                            <button class="btn buttonStyle" @click="saveData" type="submit">Save Data</button>
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
import registerUser from "../src/components/RegisterPage.vue"
import navBars from "../src/components/navBars.vue"
// import imagePage from "./ImagePage.vue";
// import messageBox from "../src/components/Chat.vue";

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, setDoc, getDocs, doc  } from "firebase/firestore"; 
import { db } from "../src/main.js";
import { getAuth } from "firebase/auth";




export default {
    name: "createlistingPage",  

    data() {
        return {
            imagesObj: [],
            images: {
                userid: "", 
                email: "", 
                listDate: "",
                price: "",
                title: "",
                details: "",
                tags: [],
                image: "https://firebasestorage.googleapis.com/v0/b/wad2-6e92f.appspot.com/o/images%2FFrame%20583.png?alt=media&token=7544b0d8-2966-47f3-833a-f4619f7b37c2",
            },

            userImages: {
                images: []
            },

            tag:null,
            
        }
    },

    components: {
        navBars,
        logIn, 
        registerUser,
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
            this.images.tags.push(this.tag);
            this.tag='';
        },

        async saveData(){
            const date = new Date(); 
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            this.images.listDate= `${day}-${month}-${year}`;
            // console.log(this.images);
            // console.log(this.images.price);
            await setDoc(doc(db, "images", this.images.title), this.images)
            .then(() =>{
                // console.log("Document written with ID: ", docRef.id);
                this.reset();
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

<style>
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

    
</style>