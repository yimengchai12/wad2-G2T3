<template>
    <logIn></logIn>
    <body>
        <navBars  :data="{'chatUserEmail': profileObj.email, 'chatUserName': profileObj.name, 'chatUserPhoto': listed[0].image}"></navBars>
        <pageBody>
            <div class="container-fluid text-light pt-5">
                <div class="row justify-content-between" style="height:max-content">
                    <div class="row col-xl-5 justify-content-center">
                        <div class="row justify-content-center">
                            <div class="row col-xl-7 p-0" style="height:170px; width:170px;">
                                <img
                                    style="height:inherit; width:inherit; object-fit:cover; border-radius: 50%; padding:0;"
                                    :src="profileObj.profilePicture">
                                </div>
                            <div class="row flex-column col-xl-6 p-1">
                                <h1 class="text-center">{{ profileObj.name }}</h1>
                                <span>
                                    <button class="register-on-hover py-1 px-2" style="height:fit-content; width:fit-content" @click="showChat">Message</button></span>
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


            <div class="row" id="artworkResult" style="display: flex; flex-direction: row; justify-content: left; align-items: center;">
                    <div v-for="imageobj in listed" :key="imageobj" class="col-lg-3 col-md-4 col-sm-12 colStyle">
                        <div class="card artworkCard" style="width: 18rem;">
                            <router-link :to="'/buy/' + imageobj.title"><img :src="imageobj.image" class="card-img-top gallery"></router-link>
                            <div class="card-body">
                                <router-link :to="'/buy/' + imageobj.title" style="text-decoration:none; color: #fffeee" class="cardtitle"><h4 class="cardtitle card-title text-start">{{imageobj.title}}</h4></router-link>
                                <h6>{{imageobj.artistName}}</h6>
                                <p class="card-text description">{{imageobj.details}}</p>
                                <h4>${{imageobj.price}}</h4>
                            </div>
                        </div>
                    </div>
                    </div>

        </pageBody>
    </body>
</template>
<script>
import pageBody from "../src/components/pageBody.vue"
import logIn from "../src/components/SignIn.vue"
import navBars from "../src/components/navBars.vue"

import { getAuth, } from "firebase/auth";
import { doc, getDoc, collection, query, where, getDocs} from "firebase/firestore";
import { db } from "../src/main.js";

// import imagePage from "./ImagePage.vue";
// import messageBox from "../src/components/Chat.vue";

// const auth = getAuth();
// const uid = auth.currentUser.uid;
// const email = auth.currentUser.email;
export default {
    name: "profilePage",  
    data(){
        return {
            profileUid: this.$route.params.id,
            profileObj: {},
            listed: [],
            currentUserEmail: "",
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

        async showChat(){
            var element = document.getElementById("chatbox");
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0;
            // document.getElementById('dropdownMenuButton1').click();
            element.classList.toggle("show");
        },

        async readData(){
            const docRef = doc(db, "profiles", this.profileUid);
            const docSnap = await getDoc(docRef);
            const auth = getAuth();

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
            
            const email = auth.currentUser.email;
            this.currentUserEmail = email;

            console.log(this.currentUserEmail);
        },
        
        
    }
}


</script>

<style scoped>
.pageHeader{
    color: white;
    text-align: left;
    padding-top: 20px;
}


/* NAR BAR sTART */
nav ul {
  list-style: none;
  text-align: center;
  margin-right: 80px;
}
nav ul li {
  display: inline-block;
}
nav ul li a {
  display: block;
  padding: 15px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  /* font-weight: 800; */
  margin: 0 10px;
  font-size: 20px;
  display: inline-block
}
nav ul li a,
nav ul li a:after,
nav ul li a:before {
  transition: all .5s;
}
nav ul li a:hover {
  color: rgb(228,36,116);
}
/* stroke */
nav.stroke ul li a,
nav.fill ul li a {
  position: relative;
}
nav.stroke ul li a:after,
nav.fill ul li a:after {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 0%;
  content: '.';
  color: transparent;
  background: rgb(228,36,116);
  height: 1px;
}
nav.stroke ul li a:hover:after {
  width: 100%;
}

nav.fill ul li a {
  transition: all 2s;
}

nav.fill ul li a:after {
  text-align: left;
  content: '.';
  margin: 0;
  opacity: 0;
}
nav.fill ul li a:hover {
  color: #023f1c;
  z-index: 1;
}
nav.fill ul li a:hover:after {
  z-index: -10;
  animation: fill 1s forwards;
  -webkit-animation: fill 1s forwards;
  -moz-animation: fill 1s forwards;
  opacity: 1;
}
/* NAR BAR END */



.colStyle{
    display: inline-flex;
    flex-direction: row;
    /* width: 20.5%; */
    flex-wrap: wrap;
    /* margin-right: 30px; */
    margin-top: 15px;
    width: 263px;
}
.gallery{
    height: 200px;
    width: 100%;
    object-fit: cover;

}
.artworkCard{
    background-color: rgb(32,23,43);
    color: white;
    text-align: left;
    height: 360px;
}
.card:hover{
    color: rgb(228,36,116);
    outline:1px solid rgb(228,36,116)
}
.description{
    font-size: 14px;
    white-space: nowrap; 
    width: 95%; 
    overflow: hidden;
    text-overflow: ellipsis; 
}
.artistCard{
    background-color: rgb(32,23,43);
    color: white;
    text-align: center;
    height: 340px;
    width: 100%;
}
.artistPic{
    border-radius: 100%;
    object-fit: cover;
    height: 227px;
    width: 100%;
    padding-bottom: 20px;
}
.navTab:hover{
    border-bottom: 0px;
}

.cardtitle:hover{
    color:rgb(228,36,116);
}
    

    
</style>