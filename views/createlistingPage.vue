<template>
    <logIn></logIn>
    <registerUser></registerUser>
    <body>
        <navBars></navBars>
        <div>
        </div>
        <pageBody>
            <h3>Add Photos</h3>
            <div>
                <input type="file" @change="uploadImage"/>
                <div>
                    <img v-bind:src="images.image" >
                </div>
            </div>
            <div>
                <div class="listing" >
                    <div class="form-group">
                        Listing Title:
                        <input type="text" placeholder="Title" v-model="images.title" class="form-control">
                    </div>

                    <div class="form-group">
                        Image Details:
                        <textarea placeholder="Details" v-model="images.details" class="form-control" rows="3" cols="50"></textarea>
                    </div>

                    <div class="form-group">
                        Price:
                        <div class="input-group mb-3">
                            <span class="input-group-text">$</span>
                            <input type="text" class="form-control" placeholder="0.00" aria-label="Amount" v-model.number="images.price">
                        </div>
                    </div>

                    <div class="form-group">
                        Image Tags:
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Add Tags" aria-describedby="button-addon2" v-model="tag" @keyup.enter="addTag">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="addTag" >Add Tag</button>
                        </div>

                        <!-- <input type="text" @keyup.enter="addTag" placeholder="Tags (Press enter to add tags)" v-model="tag" class="form-control"> -->
                        <div class="d-flex">
                            <p v-for="(tag,index) in images.tags" :key="tag" class="text-start p-2 bg-danger me-2">
                                <button type="button" class="btn-close btn-close-white" aria-label="Close" @click="deleteTag(tag,index)"></button>
                                <span class="p-1 me-2 text-light"> {{tag}}</span>  
                            </p>
                        </div>
                    </div>

                    <div class="form-group text-center" >
                        <button class="btn btn-primary" @click="saveData" >Save Data</button>
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
                email: "", 
                listDate: "",
                price: "",
                title: "",
                details: "",
                tags: [],
                image: "https://firebasestorage.googleapis.com/v0/b/wad2-6e92f.appspot.com/o/images%2Faddimg.png?alt=media&token=4eebda76-5290-43ca-abde-6c1be7968fd3",
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
            // console.log(this.images);
            // console.log(this.images.price);
            this.profile.listedImages.push(this.images.image);
            await setDoc(doc(db, "profiles", this.images.userid), this.profile);
            await setDoc(doc(db, this.images.userid, this.images.title), this.images);
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