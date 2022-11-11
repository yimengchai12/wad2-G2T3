<template>
    <logIn></logIn>
    <registerUser></registerUser>
    <body>
        <navBars :data="{'chatUserEmail': 'Helper@gmail.com', 'chatUserName': 'Alexa Help', 'chatUserPhoto': 'https://media.istockphoto.com/id/1221348467/vector/chat-bot-ai-and-customer-service-support-concept-vector-flat-person-illustration-smiling.jpg?s=612x612&w=0&k=20&c=emMSOYb4jWIVQQBVpYvP9LzGwPXXhcmbpZHlE6wgR78='}"></navBars>
        <div></div>

        <pageBody>
            <div class="container" style="width: 90%;">

                <div class="row">
                    <h1 class="pageHeader">Search Results</h1>
                </div>

                <!-- nav bar -->
                <div class="row">
                    <section style="padding-top: 40px;">
                        <nav class="stroke">
                            <ul>
                                <li style="padding-right: 40px;"><a id="artworkNav" class="" href="#" @click="displayArtwork()">Artworks</a></li>
                                <li style="padding-left: 40px;"><a id="artistNav" class="" href="#" @click="displayArtist()">Artists</a></li>
                            </ul>
                        </nav>
                    </section>
                </div>

                
                <!-- Artwok Result -->
                <div class="row" id="artworkResult" style="display: flex; flex-direction: row; justify-content: left; align-items: center;" >

                    <div v-for="image in imagesObj" :key="image" class="col-lg-3 col-md-4 col-sm-12 colStyle" >
                        <router-link :to ="`/buy/` + image.title">
                            <div  class="card artworkCard" style="width: 18rem;">
                                <img :src="image.image" class="card-img-top gallery" >
                                <div class="card-body">
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

                    <div v-for="artist in artistObj" :key="artist" class="col-lg-3 col-md-4 col-sm-12 colStyle">
                        <router-link :to ="`/profile/` + artist.uid">
                            <div class="card artistCard" style="width: 18rem;">
                                <img :src="artist.profilePicture" class="artistPic">
                                <div class="card-body">
                                    <h4 class="card-title text-start">{{artist.name}}</h4>
                                    <p class="card-text description text-start">{{artist.bio}}</p>
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

            const images = query(collection(db, "images"), where("tags", "array-contains", this.search));

            const imagesSnapshot = await getDocs(images);
            imagesSnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                this.imagesObj.push(doc.data());
            });

            console.log(this.imagesObj)


            const artist = query(collection(db, "profiles"), where("name", "==", this.search));

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
            artistSelected.class = "navTab"
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
  transition: all .1s;
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
    width: 300px;
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
    height: 360px;
    width: 100%;
}
.artistPic{
    border-radius: 50%;
    object-fit: cover;
    height: 265px;
    width: 100%;
    padding-bottom: 20px;
}
.navTab:hover{
    border-bottom: 0px;
}

</style>