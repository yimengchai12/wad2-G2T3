<template>
    <logIn></logIn>
    <registerUser></registerUser>
    <body>
        <navBars :data="{'chatUserEmail': 'Helper@gmail.com', 'chatUserName': 'Alexa Help', 'chatUserPhoto': 'https://media.istockphoto.com/id/1221348467/vector/chat-bot-ai-and-customer-service-support-concept-vector-flat-person-illustration-smiling.jpg?s=612x612&w=0&k=20&c=emMSOYb4jWIVQQBVpYvP9LzGwPXXhcmbpZHlE6wgR78='}"></navBars>
        <div></div>

        <pageBody>
            <div class="container-fluid" style="width: 100%;">

                <div class="row">
                    <h1 class="pageHeader">Search Results</h1>
                </div>

                <!-- nav bar -->
                <div class="row p-0">
                    <section style="padding-top: 40px; padding-left: 0px; padding-right:0px">
                        <nav class="stroke">
                            <ul style="padding:0px; margin:0px">
                                <li class="nav-item d-inline-block" style="padding-right: 20px;cursor: pointer;"><a id="artworkNav" @click="displayArtwork()">Artworks</a></li> 
                                <li class="nav-item d-inline-block" style="padding-left: 20px;cursor: pointer;"><a id="artistNav" @click="displayArtist()">Artists</a></li>
                            </ul>
                        </nav>
                    </section>
                </div>

                <!-- Artwok Result -->
                <div class="row" id="artworkResult" style="display: flex; flex-direction: row; justify-content: left; align-items: center;" >

                    <div v-for="image in imagesObj" :key="image" class="col-lg-3 col-md-4 col-sm-12 colStyle" >
                        <router-link :to ="`/buy/` + image.title" style='text-decoration:none'>
                            <div  class="card artworkCard" style="width: 18rem;">
                                <img :src="image.image" class="card-img-top gallery" >
                                <div class="card-body text-start">
                                    <h4 class="card-title text-start">{{image.title}}</h4>
                                    <h6>{{image.artistName}}</h6>
                                    <p class="card-text description">{{image.details}}</p>
                                    <h4>${{image.price}}</h4>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>


                <!-- Artist Result -->
                <div class="row" id="artistResult">

                    <div v-for="artist in artistObj" :key="artist" class="col-lg-2 col-md-3 col-sm-12 colStyle">
                        <router-link :to ="`/profile/` + artist.uid" style='text-decoration:none'>
                            <div class="card artistCard row" style="width: 14rem;">
                                <div style="width:170px; height:170px;">
                                    <img class="horizontal-center mt-3" :src="artist.profilePicture" style="height:inherit; width:inherit; object-fit:cover; border-radius: 50%;">
                                </div>
                                <div class="card-body text-start mt-3">
                                    <h4 class="card-title text-start">{{artist.name}}</h4>
                                    <p class="card-text description text-start text-muted">{{artist.bio}}</p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    
                    
                    

                   
                </div>

            </div>


        </pageBody>

    </body>
</template>


<script>
import pageBody from "../src/components/pageBody.vue"
import logIn from "../src/components/SignIn.vue"
// import registerUser from "../src/components/RegisterPage.vue"
import navBars from "../src/components/navBars.vue"

import { collection, query, where, getDocs} from "firebase/firestore";
import { db } from "../src/main.js";


export default {
    name: "searchResult", 
    components: {
        navBars,
        logIn, 
        // registerUser,
        pageBody,
    },
    data(){
        return{
            search: this.$route.params.search,
            artistObj: [], 
            imagesObj: [],
        }
    },

    created(){
        console.log(this.search)
        this.readData();
    },

    methods:{

        async readData(){

            const images = query(collection(db, "images"), where("tagslower", "array-contains", this.search.toLowerCase()));

            const imagesSnapshot = await getDocs(images);
            imagesSnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                this.imagesObj.push(doc.data());
            });

            console.log(this.imagesObj)


            const artist = query(collection(db, "profiles"), where("namelower", "==", this.search.toLowerCase()));

            const artistSnapshot = await getDocs(artist);
            artistSnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                this.artistObj.push(doc.data());
            });

            console.log(this.artistObj)

        },
        
        displayArtist() {
            var artwork = document.getElementById("artworkResult")
            var artist = document.getElementById("artistResult")
            artwork.style.display = "none"
            artist.style.display = "flex"
            var artworkSelected = document.getElementById("artworkNav")
            var artistSelected = document.getElementById("artistNav")
            artistSelected.style = "border-bottom: 1px solid rgb(228,36,116); color:rgb(228,36,116)"
            artworkSelected.style = "color: white"
        },
        displayArtwork() {
            var artwork = document.getElementById("artworkResult")
            var artist = document.getElementById("artistResult")
            artwork.style.display = "flex"
            artist.style.display = "none"
            var artworkSelected = document.getElementById("artworkNav")
            var artistSelected = document.getElementById("artistNav")
            artworkSelected.style = "border-bottom: 1px solid rgb(228,36,116); color:rgb(228,36,116)"
            artistSelected.style = "color: white"
        }
    },
    mounted(){
            var artwork = document.getElementById("artworkResult")
            var artist = document.getElementById("artistResult")
            artwork.style.display = "flex"
            artist.style.display = "none"
            var artworkSelected = document.getElementById("artworkNav")
            var artistSelected = document.getElementById("artistNav")
            artworkSelected.style = "border-bottom: 1px solid rgb(228,36,116); color:rgb(228,36,116)"
            artistSelected.style = "color: white"
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
    /* width: 263px; */
}
.gallery{
    height: 200px;
    width: 100%;
    object-fit: cover;

}
.artworkCard{
    background-color: rgb(32,23,43);
    color: white;
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
    /* text-align: center; */
    height: 300px;
    width: 100%;
}
.artistPic{
    object-fit: cover;
    height: 170px;
    width: 170px;
    padding-bottom: 20px;
    text-align: center;

}
.navTab:hover{
    border-bottom: 0px;
}

</style>