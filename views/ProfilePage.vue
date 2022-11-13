<template>
    <logIn></logIn>

    <body>
        <navBars :data="{'chatUserEmail': 'Helper@gmail.com', 'chatUserName': 'Alexa Help', 'chatUserPhoto': 'https://media.istockphoto.com/id/1221348467/vector/chat-bot-ai-and-customer-service-support-concept-vector-flat-person-illustration-smiling.jpg?s=612x612&w=0&k=20&c=emMSOYb4jWIVQQBVpYvP9LzGwPXXhcmbpZHlE6wgR78='}"></navBars>
        <pageBody>
            <div class="container-fluid text-light pt-5">

                <!-- new profile page design -->
                <div class="row">

                    <div class="col-lg-3 col-md-12" style="justify-content: left; margin: auto;">
                        <img style="height:200px; width:200px; object-fit:cover; border-radius: 50%; padding:0;" :src="profileObj.profilePicture">
                    </div>

                    <div class="col-lg-9 col-md-12" style="padding-top: 30px;">
                        <h1 class="text-lg-start text-md-center">{{ profileObj.name }}
                            <span class="d-lg-inline-block d-block px-2" style="padding-top: 10px;">
                                <router-link to='/editprofile' style="justify-content: end;">
                                    <button class="register-on-hover btn" style="height:fit-content; width:fit-content">Edit Profile</button>
                                </router-link>
                            </span>
                        </h1>
                        
                        <h5 class="text-lg-start text-md-center" style="color:rgb(228,36,116)">{{ profileObj.email }}</h5>
                        <h6 class="text-lg-start text-md-center" style="padding-bottom: 20px;">Creations: {{listed.length}}</h6>
                        <p class="text-lg-start light-text text-md-center">{{ profileObj.bio }}</p>
                        
                    </div>
                </div>
                


                <div class="row">
                    <section style="padding-top: 30px; padding-left: 0px; padding-right:0px">
                        <nav class="stroke">
                            <ul style="padding:0px; margin:0px">
                                <li class="nav-item d-inline-block" style="padding-right: 10px; cursor: pointer;"><a id="creationNav" @click="showCreations()">Creations</a></li>
                                <li class="nav-item d-inline-block" style="padding-left: 10px; cursor: pointer;"><a id="purchaseNav" @click="showPurchased()">Purchases</a></li>
                            </ul>
                        </nav>
                    </section>
                </div>

                
                <div v-if="listed.length != 0" class="row" id="artworkResult" style="display: flex; flex-direction: row; justify-content: left; align-items: center;">
                    <div v-for="imageobj in listed" :key="imageobj" class="col-lg-3 col-md-4 col-sm-12 colStyle">
                        <div  class="card artworkCard" style="width: 18rem;border-radius: 15px;">
                            <router-link :to="'/buy/' + imageobj.title"><img :src="imageobj.image" class="card-img-top gallery" style="border-radius: 15px;"></router-link>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                <router-link :to="'/buy/' + imageobj.title" style="text-decoration:none; color: #fffeee" class="cardtitle"><h4 class="cardtitle card-title text-start">{{imageobj.title}}</h4></router-link>

                                <span>
                                    <div class="dropdown">
                                    <button role="button" style="background-color:transparent; border:none" data-bs-toggle="dropdown" aria-expanded="false"><i class="light-text bi bi-three-dots-vertical"></i></button>
                                    <ul style="background-color:rgb(32,23,43); border:1px solid #32263f;" class="dropdown-menu">
                                    <li class="dropdown-item light-text text-center text-danger" role="button" @click="deleteData(imageobj.title)"><span>Remove</span></li>
                                </ul>
                                
                                
                                </div>
                                </span>
                            </div>

                                
                                
                                <!-- <h6>{{imageobj.artistName}}</h6> -->
                                <p class="card-text description">{{imageobj.details}}</p>
                                <h4>${{imageobj.price}}</h4>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="row" id="artworkResult">
                    <h5 class="text-muted" style="margin-top: 70px; margin-bottom: 60px;">No Creations</h5>
                </div>


                <!-- bought -->
                <div v-if="bought.length != 0" class="row" id="purchaseResult" style="display: none; flex-direction: row; justify-content: left; align-items: center;">
                    <div v-for="imageobj in bought" :key="imageobj" class="col-lg-3 col-md-4 col-sm-12 colStyle">
                        <div  class="card artworkCard" style="width: 18rem; border-radius: 15px;">
                            <router-link :to="'/buy/' + imageobj.title"><img :src="imageobj.image" class="card-img-top gallery" style="border-radius: 15px;"></router-link>
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                <router-link :to="'/buy/' + imageobj.title" style="text-decoration:none; color: #fffeee" class="cardtitle"><h4 class="cardtitle card-title text-start">{{imageobj.title}}</h4></router-link>

                                <!-- <span>
                                    <div class="dropdown">
                                    <button role="button" style="background-color:transparent; border:none" data-bs-toggle="dropdown" aria-expanded="false"><i class="light-text bi bi-three-dots-vertical"></i></button>
                                    <ul style="background-color:rgb(32,23,43); border:1px solid #32263f;" class="dropdown-menu">
                                    <li class="dropdown-item light-text text-center text-danger" role="button" @click="deleteData(imageobj.title)"><span>Remove</span></li>
                                </ul>
                                
                                
                                </div>
                                </span> -->
                            </div>

                                
                                
                                <h6 style="color: rgb(228,36,116)">{{imageobj.artistName}}</h6>
                                <p class="card-text description">{{imageobj.details}}</p>
                                <h4>${{imageobj.price}}</h4>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="row" id="purchaseResult">
                    <h5 class="text-muted" style="margin-top: 70px; margin-bottom: 60px;">You have not purchased anything :(</h5>
                </div>












                </div> <!-- end of container -->



                
            



        </pageBody>
    </body>
</template>
<script>
import pageBody from "../src/components/pageBody.vue"
import logIn from "../src/components/SignIn.vue"
import navBars from "../src/components/navBars.vue"

import { getAuth, updateProfile } from "firebase/auth";
import { doc, updateDoc, getDoc, collection, query, where, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "../src/main.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// import imagePage from "./ImagePage.vue";
// import messageBox from "../src/components/Chat.vue";

const auth = getAuth();
const uid = auth.currentUser.uid;
const email = auth.currentUser.email;


export default {
    name: "profilePage",
    data() {
        return {
            profileObj: {
                profilePicture:'https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif',
            },
            profilebought: [],
            bought: [],
            listed: [],
            profile: {
                name: null,
                phone: null,
                bio: null,
                profilePicture: null,
                email: email,
                listedImages: [],
            },
        }
    },

    components: {
        navBars,
        logIn,
        pageBody,
    },

    created() {
        this.readData();
    },
    // mounted() {
    //     // console.log("HI")
    //     // console.log(this.listed)},
    // }
    methods: {
        showPurchased(){
            console.log("check")
            var purchaseNav = document.getElementById("purchaseNav")
            var creationNav = document.getElementById("creationNav")
            purchaseNav.style = "border-bottom: 1px solid rgb(228,36,116); color:rgb(228,36,116)"
            creationNav.style = "color: white"

            var creationShow = document.getElementById("artworkResult")
            creationShow.style.display = "none"
            var purchaseShow = document.getElementById("purchaseResult")
            purchaseShow.style.display = "flex"
        },
        showCreations(){
            console.log("check")
            var purchaseNav = document.getElementById("purchaseNav")
            var creationNav = document.getElementById("creationNav")
            purchaseNav.style = "color: white"
            creationNav.style = "border-bottom: 1px solid rgb(228,36,116); color:rgb(228,36,116)"

            var creationShow = document.getElementById("artworkResult")
            creationShow.style.display = "flex"
            var purchaseShow = document.getElementById("purchaseResult")
            purchaseShow.style.display = "none"
        },
        async deleteData(d) {
            await deleteDoc(doc(db, "images", d));
            window.location.reload(true)
        },

        updateProfile() {
            if (this.profile.name == null) {
                this.profile.name = this.profileObj.name;
            }
            if (this.profile.profilePicture == null) {
                this.profile.profilePicture = this.profileObj.profilePicture;
            }
            if (this.profile.listedImages.length == 0) {
                this.profile.listedImages = this.profileObj.listedImages;
            }
            if (this.profile.bio == null) {
                this.profile.bio = this.profileObj.bio;
            }

            const profileRef = doc(db, "profiles", uid);

            // Set the "capital" field of the city 'DC'
            updateDoc(profileRef, this.profile);


            if (this.profile.name != null) {
                updateProfile(auth.currentUser, {
                displayName: this.profile.name, photoURL: this.profile.profilePicture}).then(() => {
                    // console.log("Profile updated!");
                })
            }

            this.reset();
            // window.location.href = '/profile'

        },

        reset() {
            Object.assign(this.$data, this.$options.data.apply(this))
        },

        async readData() {
            const docRef = doc(db, "profiles", uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                // console.log("Document data:", docSnap.data());
                this.profileObj = docSnap.data();
                this.profilebought = docSnap.data().bought;
            } else {
                // doc.data() will be undefined in this case
                // console.log("No such document!");
            }

            const q = query(collection(db, "images"), where("userid", "==", uid));

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                this.listed.push(doc.data());
            });

            for (let i = 0; i < this.profilebought.length; i++) {
                const buy = query(collection(db, "images"), where("title", "==", this.profilebought[i]));

                const buySnapshot = await getDocs(buy);
                buySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                    this.bought.push(doc.data());
                });
            }

        },

        uploadImage(e) {
            let file = e.target.files[0];
            const storage = getStorage();
            const storageRef = ref(storage, 'profiles/' + file.name);

            const metadata = {
                contentType: 'image/jpeg/png/jpg',
            };

            const uploadTask = uploadBytesResumable(storageRef, file, metadata);

            uploadTask.on('state_changed',
                (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    // const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    // console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            // console.log('Upload is paused');
                            break;
                        case 'running':
                            // console.log('Upload is running');
                            break;
                    }

                    getDownloadURL(ref(storage, 'profiles/' + file.name)).then((url) => {
                        this.profile.profilePicture = url;
                        // console.log(url);
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
            );
        }
    },
    mounted(){
        var purchaseNav = document.getElementById("purchaseNav")
        var creationNav = document.getElementById("creationNav")
        purchaseNav.style = "color: white"
        creationNav.style = "border-bottom: 1px solid rgb(228,36,116); color:rgb(228,36,116)"

        var creationShow = document.getElementById("artworkResult")
        creationShow.style.display = "flex"
        var purchaseShow = document.getElementById("purchaseResult")
        purchaseShow.style.display = "none"
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
    background-color: rgb(18,12,24);
    outline: 1px solid #25192f;
    border-radius: 15px;
    color: white;
    text-align: left;
    height: 360px;
}
.card:hover{
    background-color: rgb(32,23,43)
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
.dropdown-item:active,
.dropdown-item:focus,
.dropdown-item:hover {
    background-color: #25192f;
    border-radius: 5px;
}
.btn:hover{
    color: white;
}

.card-title {
  /* white-space: nowrap; */
  overflow: hidden;
  /* text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  max-width: 200px;
  -webkit-box-orient: vertical; */
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>