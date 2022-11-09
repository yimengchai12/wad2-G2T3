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
            </div>

            <div class="text-light">
                <!-- name<input type="text" id="name" class="text-dark" v-model="profile.name">
                pone<input type="text" id="phone" class="text-dark"  v-model="profile.phone">
                address<input type="text" id="address" class="text-dark"  v-model="profile.address">
                profile picture <input type="file" id="profilePicture" class="text-dark" @change="uploadImage"> -->
                <!-- <div>
                    <img v-bind:src="profile.profilePicture" >
                </div> -->
            </div>
<!-- 
            <button @click="updateProfile()" href="#">update change</button> -->

            <div class="text-light">
                
                <div>{{profileObj.name}}</div>
                <div>{{profileObj.phone}}</div>
                <div>{{profileObj.email}}</div>
                <div>{{profileObj.address}}</div>
                <!-- <img :src="profileObj.profilePicture"> -->

            </div>

            <div class="text-light">
                <div v-for="imageobj in listed" :key="imageobj">
                    <img :src="imageobj.image" >
                </div>
            </div>

        </pageBody>
    </body>
</template>
<script>
import pageBody from "../src/components/pageBody.vue"
import logIn from "../src/components/SignIn.vue"
import navBars from "../src/components/navBars.vue"

// import { getAuth, } from "firebase/auth";
import { doc, getDoc, collection, query, where, getDocs} from "firebase/firestore";
import { db } from "../src/main.js";

// import imagePage from "./ImagePage.vue";
// import messageBox from "../src/components/Chat.vue";



export default {
    name: "profilePage",  
    data(){
        return {
            profileUid: this.$route.params.id,
            profileObj: {},
            listed: [],
        }
    },

    components: {
        navBars,
        logIn,
        pageBody,
    },

    created(){
        this.readData();
    },
    
    methods: {

        async readData(){
            const docRef = doc(db, "profiles", this.profileUid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                this.profileObj = docSnap.data();
            } else {
            // doc.data() will be undefined in this case
                console.log("No such document!");
            }

            const q = query(collection(db, "images"), where("userid", "==", this.profileUid));

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                this.listed.push(doc.data());
            });

            // const auth = getAuth();
            // const uid = auth.currentUser.uid;
            // const email = auth.currentUser.email;
            // console.log(uid)
            // console.log(email)
        },         
    }
}


</script>

<style>
    

    
</style>