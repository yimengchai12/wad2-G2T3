<template>
    <h3>Image List</h3>
    <div class="d-flex" style="overflow:hidden">
    <div v-for="imag in imagesObj" :key="imag" class="me-5">
        <div class="card" style="width: 18rem;">
            <img :src="imag.image" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">{{imag.title}}</h5>
                <p>Tags: 
                    <span v-for="tag in imag.tags" :key="tag" class="card-text d-inline me-2 bg-warning p-2 border border-dark">{{tag}}</span>
                </p>
                <p class="card-text">{{imag.details}}</p>
                <button @click="deleteData(imag.title)" class="btn btn-primary">DELETE </button>
            </div>
        </div>
    </div>
</div>

</template>

<script>

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, getDocs,  deleteDoc, doc,  } from "firebase/firestore"; 
import { db } from "../main.js";


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
        }
    },

    components: {
    },

    firestore(){
        return{
            images: db.collection('images'),
        }
    },

    created(){
        this.readData();
    },
    
    methods: {

        async deleteData(d){
            await deleteDoc(doc(db, "images",d ));
        },

        async readData(){
            // read all images
            const querySnapshot = await getDocs(collection(db, "images"));
            querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            this.imagesObj.push(doc.data());
            // end of read all images 

            // read user images 
            // const docRef = doc(db, "profiles", uid);
            // const docSnap = getDoc(docRef);

            // if (docSnap.exists()) {
            // console.log("Document data:", docSnap.data().images);
            // this.userImages.images=docSnap.data().images
            // } else {
            // console.log("No such document!");
            // }
            // end of read user images 
  
        });

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

<style scoped>
/* img { 
    -webkit-filter: blur(1px); 
    filter: blur(1px); 
    width: 300px;
    height: 300px;
    object-fit: contain

}  */
</style>