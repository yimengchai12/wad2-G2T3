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
                <input type="text" @keyup.enter="addTag" placeholder="Tag" v-model="tag" class="form-control">
                <div class="d-flex">
                    <p v-for="(tag,index) in images.tags" :key="tag" class="text-start p-2 bg-danger me-2">
                        <button type="button" class="btn-close btn-close-white" aria-label="Close" @click="deleteTag(tag,index)"></button>
                        <span class="p-1 me-2 text-light"> {{tag}}</span>  
                    </p>
                </div>
            </div>

            <div class="form-group">
                <input type="file" @change="uploadImage" placeholder="Upload files" class="form-control">
            </div>

            <div class="form-group">
                <button class="btn btn-primary" @click="saveData" >Save Data</button>
            </div>
        </div>
    </div>

    <h3>Image List</h3>

    <div v-for="imag in imagesObj" :key="imag">
    <div class="card" style="width: 18rem;">
        <img :src="imag.image" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">{{imag.title}}</h5>
            <p class="card-text">{{imag.details}}</p>
            <button @click="deleteData(imag.title)" class="btn btn-primary">Go somewhere</button>
        </div>
    </div>
</div>

</template>

<script>

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, setDoc, getDocs, deleteDoc, doc } from "firebase/firestore"; 
import { db } from "../src/main.js";



export default {
    name: "imagePage",

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
                image: null,
            },
            tag:null
        }
    },

    components: {
    },

    created(){
        this.readData();
    },

    firestore(){
        return{
            images: db.collection('images'),
        }
    },
    
    methods: {

        deleteTag(tag,index){
            this.images.tags.splice(index,1);
        },

        async deleteData(d){
            await deleteDoc(doc(db, "images",d ));
        },

        addTag(){
            this.images.tags.push(this.tag);
            this.tag='';
        },

        async readData(){
            const querySnapshot = await getDocs(collection(db, "images"));
            querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            this.imagesObj.push(doc.data());
  
        });

        },

        async saveData(){
            await setDoc(doc(db, "images", this.images.title), this.images)
            .then(() =>{
                // console.log("Document written with ID: ", docRef.id);
                this.reset();
            })

            this.readData();
            

            // .catch(error => {
            //     console.error("Error adding document: ");
            // });
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
                // () => {
                    
                //     uploadTask.snapshot.ref.getDownloadURL().then(
                //         function(downloadURL){
                //             console.log('File available at', downloadURL);
                //         }
                //     )
                //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                //         console.log('File available at', downloadURL);
                //     });
                // }
            );
            console.log(e.target.files[0]);
            
        }

        
    },

    
} 

</script>

<style>
img { 
                -webkit-filter: blur(1px); 
                filter: blur(1px); 
            } 
</style>