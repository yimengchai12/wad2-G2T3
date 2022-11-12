<template>

<div class="d-flex">
            <h2>Recently Posted</h2>
        </div>
    <div class="d-flex" style="overflow-x:scroll; overflow-y:hidden; padding-top:1px;padding-bottom:10px; height:max-content;width:83vw;">
        <div v-for="imag in recentObj" :key="imag" class="me-4">
            <div class="card homepageListing" style="width: 250px; height:400px;margin-top:10px">
                <router-link :to="'/buy/' + imag.title"><img :src="imag.image" class="card-img-top img-fluid rounded-4" style="object-fit: cover;"  alt=""></router-link>
                <div class="card-body">
                    <router-link :to="'/buy/' + imag.title" style="text-decoration:none; color: #fffeee" ><h5 class="card-title">{{imag.title}}</h5></router-link>
                <!-- <p>Tags: 
                    <span v-for="tag in imag.tags" :key="tag" class="card-text d-inline me-2 bg-warning p-2 border border-dark">{{tag}}</span>
                </p> -->
                <!-- <p class="card-text">{{imag.details}}</p> -->
                <!-- <button @click="deleteData(imag.title)" class="btn btn-primary">DELETE</button> -->
                <p style="color:#e42474">{{imag.artistName}}</p>
            </div>
            </div>
        </div>
    </div>

    <hr class="my-3">

    <div class="text-start" style="padding-top:1px;padding-bottom:10px; height:max-content ;width:83vw;">
        <h2 class="my-3" style="text-align: start;">All</h2>
        <div class="d-flex" style="flex-wrap: wrap;">
        <div v-for="imag in imagesObj" :key="imag" class="me-auto">
            <div class="card homepageListing d-inline-block" style="width: 250px; height:400px;margin-top:20px;">
                <router-link :to="'/buy/' + imag.title"><img :src="imag.image" class="card-img-top img-fluid rounded-4" style="object-fit: cover;"  alt=""></router-link>
                <div class="card-body">
                    <router-link :to="'/buy/' + imag.title" style="text-decoration:none; color: #fffeee" ><h5 class="card-title">{{imag.title}}</h5></router-link>
                <!-- <p>Tags: 
                    <span v-for="tag in imag.tags" :key="tag" class="card-text d-inline me-2 bg-warning p-2 border border-dark">{{tag}}</span>
                </p> -->
                <!-- <p class="card-text">{{imag.details}}</p> -->
                <!-- <button @click="deleteData(imag.title)" class="btn btn-primary">DELETE</button> -->
                    <p style="color:#e42474">{{imag.artistName}}</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    
        






    <!-- Recently posted section -->

    <!-- <div class="d-flex mt-5">
            <h2>Recently Posted</h2>
    </div>
    <div class="d-flex" style="overflow-x:scroll; overflow-y:hidden; padding-top:1px;padding-bottom:10px; height:max-content;width:83vw;">
        <div v-for="imag in recentObj" :key="imag" class="me-4">
            <div class="card homepageListing" style="width: 250px; height:400px;margin-top:10px">
                <router-link :to="'/buy/' + imag.title"><img :src="imag.image" class="card-img-top img-fluid rounded-4" style="object-fit: cover;"  alt=""></router-link>
            <div class="card-body">
                <router-link :to="'/buy/' + imag.title" style="text-decoration:none; color: #fffeee"><h5 class="card-title">{{imag.title}}</h5></router-link>
                <p>Tags: 
                    <span v-for="tag in imag.tags" :key="tag" class="card-text d-inline me-2 bg-warning p-2 border border-dark">{{tag}}</span>
                </p>
                <p class="card-text">{{imag.details}}</p> -->
                <!-- <<button @click="deleteData(imag.title)" class="btn btn-primary">DELETE</button>
                <p style="color:#e42474">{{imag.artistName}}</p>
            </div> -->
            <!-- </div>
        </div>
    </div>  -->

</template>

<script>

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, getDocs,  deleteDoc, doc, query, orderBy, limit } from "firebase/firestore"; 
import { db } from "../main.js";
// import buyPage from "../../views/buyPage.vue";


export default {
    name: "imagePage",
    
    data() {
        return {
            imagesObj: [],
            recentObj: [],
            images: {
                artistName:"",
                userid: "", 
                email: "", 
                listDate: "",
                price: "",
                title: "",
                details: "",
                tags: [],
                image: null,
            },
            // title: this.images.title
        }
    },

    components: {
        // buyPage
    },

    firestore(){
        return{
            images: db.collection('images'),
        }
    },

    created(){
        this.readData();
        console.log(this.imagesObj)
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

            const imagesRef = collection(db, "images");
            const q = query(imagesRef, orderBy("millisec", "desc"), limit(10));
            const imagesSnapshot = await getDocs(q);
            imagesSnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                this.recentObj.push(doc.data());
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
.homepageListing {
    background-color: #120c18;
    outline: 1px solid #25192f;
    border-radius: 15px;
    width: 15rem;
}

img { 
    /* -webkit-filter: blur(1px);  */
    /* filter: blur(1px);  */
    width: 300px;
    height: 300px;
    object-fit: contain
} 
::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 2px;
	background-color: #120c18;
}

::-webkit-scrollbar
{   
    height:8px;
	width: 10px;
	background-color: #120c18;
}

::-webkit-scrollbar-thumb
{
	border-radius: 2px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #25192f;
}
.card-title {
  /* white-space: nowrap; */
  overflow: hidden;
  /* text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  max-width: 200px;
  -webkit-box-orient: vertical; */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.card:hover{
    background-color: rgb(32,23,43);
}

</style>