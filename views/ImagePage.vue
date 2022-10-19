<template>
    <h3>Add Photos</h3>
    <div>
        <div class="image" >
            <div class="form-group">
                <input type="text" placeholder="Title" v-model="images.title" class="form-control">
            </div>

            <div class="form-group">
                <textarea placeholder="Details" v-model="images.details" class="form-control" rows="3" cols="50"></textarea>
            </div>

            <div class="form-group">
                <input type="text" placeholder="Tag" v-model="images.tag" class="form-control">
            </div>

            <div class="form-group">
                <input type="file" @change="uploadImage" placeholder="Upload files" class="form-control">
            </div>

            <div class="form-group">
                <button class="btn btn-primary" @click="saveData">Save Data</button>
            </div>
        </div>
    </div>

</template>

<script>

import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../src/main.js";


export default {
    name: "imagePage",

    data() {
        return {
            images: {
                title: "",
                details: "",
                tag: "",
                image: "",
            },
        }
    },

    components: {
    },
    
    methods: {

        async saveData(){
            const docRef = await addDoc(collection(db, "images"), this.images)
            console.log(docRef.id)
            // .then(docRef =>{
            //     console.log("Document written with ID: ", docRef.id);
            // })
            
            // .catch(error => {
            //     console.error("Error adding document: ");
            // });
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

