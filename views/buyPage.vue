<template>
    <logIn></logIn>
    <registerUser></registerUser>

    
    <body>
        <navBars></navBars>
        <pageBody class="mt-5 pt-3">
            
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-6">
                        <div class="row flex-column px-1">
                            <img id="collectionImg" v-bind:src="collectionImg"
                                alt="" class="row img-fluid p-0" style="max-height:70vh; width:100%;object-fit: scale-down; outline: 1px solid #25192f ;border-radius:20px;"/>  
                        </div>
                        <div class="row justify-content-center mt-3 mb-3">
                                    <div class="col-2 text-center"><a href="#" class="like"><i class="bi bi-heart me-2"></i>Like</a></div>
                                    <div class="col-2 text-center"><a href="#" class="share"><i class="bi bi-share me-2"></i>Share</a></div>
                        </div> 
                        
                    </div>
                    <div class="col-sm-12 col-md-5 col-lg-5 pe-5 text-start">
                            <h3>{{collectionName}}</h3>
                            <h5 style="color:grey; font-style:italic; font-weight:normal; font-size:100%">{{collectionDate}}</h5>
                            <h5 style="color:grey; font-style:italic; font-weight:normal; font-size:100%">{{artistName}}</h5>
                            <h5 style="color:grey; font-style:italic; font-weight:normal; font-size:100%" class="mt-4">{{dimension}}</h5>
                        <div class="row mt-3">
                            <hr class="my-3" style="width:100%">
                            <h1 class="mb-3" style="font-weight:normal">SGD {{collectionPrice}}</h1>
                                <a class="rounded-pill signin-on-hover light-text py-2 px-3 mx-1 text-center" style="text-decoration:none; width:100%; height:auto;">Purchase</a>
                        </div>
                    </div>
                </div>
                
                <h2 class="text-start pt-5">About the Artwork</h2>
                <hr>
                <table>
                    <th class="d-flex">
                        <img class="thumbnail img-fluid rounded" v-bind:src="collectionTitleImg" alt="">
                        <h4 style="margin-left: 10px">{{collectionTitle}}</h4>
                    </th>
                    <tr>
                        <td>
                            {{collectionDesc}}
                            
                        </td>
                    </tr>
                </table>

                <table class="mt-3 ">
                    <th class="d-flex">
                        <img class="thumbnail img-fluid rounded-circle" v-bind:src="artistImg" alt="">
                        <h4 style="margin-left: 10px">{{artistName}}</h4>
                    </th>
                    <tr>
                        <td>
                            {{artistDesc}}
                        </td>
                    </tr>
                </table>
            
        </pageBody>
    </body>
</template>

<script>
import logIn from "../src/components/SignIn.vue";
import registerUser from "../src/components/RegisterPage.vue";
import navBars from "../src/components/navBars.vue";
import pageBody from "../src/components/pageBody.vue";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../src/main.js";

export default {
    name: "buyPage",
    props: {
        // title: String,
        // userid: String,
        // email: String, 
        // listDate: String,
        // price: String,
        // details: String,
        // tags: Array,
        // image: String
    },
    components: {
        navBars,
        logIn,
        registerUser,
        pageBody,

    },
    data(){
        return{
            buyDescription: {},
            title: this.$route.params.id,
            collectionImg : "",
            collectionName: "",
            collectionDate: "",
            collectionPrice: "",
            collectionTitle: "",
            collectionTitleImg: "",
            collectionDesc: "",
            artistImg: "",
            artistName: "",
            artistDesc: "",
            
        }
    },
    computed: {
        dimension() {
        var img = new Image()
        img.src = this.collectionImg
        var img_width =img.width;
        var img_height = img.height;
        var str = `${img_width}x${img_height}px`
        // var img_height = this.collectionImg.height;
        return str
        }
    },

    created(){
        this.readData();
    },

    methods: {
        async readData(){
            const docRef = doc(db, "images", this.title);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                this.buyDescription = docSnap.data();
                this.collectionImg = this.buyDescription.image
                this.collectionName = this.buyDescription.title
                this.collectionDate = this.buyDescription.listDate
                this.artistName = this.buyDescription.artistName
                this.collectionTitle = this.buyDescription.email
                this.collectionPrice = this.buyDescription.price

            } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            }
        
        },
    }
};
</script>

<style scoped>

.thumbnail {
    width: 30px;
    height: 30px;
}

h1, h2, h3, h5{
    color: white;
}

table{
    width: 95%;
    margin-bottom: 10px;
}


table, tr, td, th {
  border: 1px solid #25192f;
  text-align: left;
  color: white;
  padding: 8px;
}

a{
    color: white;
    text-decoration: none;
}

.like:hover, .share:hover{
    color:#e42474;
    
}

</style>
