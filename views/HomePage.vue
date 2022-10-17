<template>
    <!-- <sideNav></sideNav> -->
    <topNav></topNav>
    <sideNav></sideNav>
    <div>home</div>
    <div class="form-group">
        <input type="file" @change="uploadImage" class="form-control">
    </div>

    <logIn></logIn>
    <registerUser></registerUser>
    <homepageCarousel></homepageCarousel>
    <imagePage></imagePage>
    
</template>


<script>
// import sideNav from "../src/components/sideNav.vue"
import logIn from "./SignIn.vue"
import registerUser from "./RegisterPage.vue"
import sideNav from "../src/components/sideNav.vue"
import topNav from "../src/components/topNav.vue";
import homepageCarousel from "../src/components/homepageCarousel.vue";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import imagePage from "./ImagePage.vue";

export default {
    name: "homePage",  
    components: {
        // sideNav,
        logIn, 
        registerUser,
        sideNav,
        topNav,
        homepageCarousel,
        imagePage
    },
    
    methods: {

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