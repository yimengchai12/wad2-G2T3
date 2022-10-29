<template>
    <logIn></logIn>
    <registerUser></registerUser>

    <body>
        <navBars></navBars>

        <div></div>

        <pageBody>
                <div class="row">
                    <div class="col col-sm-12 col-md-6 col-lg-6 m-3">
                        <div class="row">
                            <img id="collectionImg" v-bind:src="collectionImg"
                                alt="" class="img-fluid rounded" />
                                <div class="row">
                                    <div class="col text-center"><a href="">Save</a></div>
                                    <div class="col text-center"><a href="">Share</a></div>
                                </div>
                        </div>
                    </div>
                    <div class="col col-sm-12 col-md-5 col-lg-5 mr-1 mt-5">
                            <h3>{{collectionName}}</h3>
                            <h4>SGD ${{collectionPrice}}</h4>
                        
                        <div class="row mt-5">
                            <div class="col">
                                <input type="button" class="btn btn-success form-control" value="Buy" />
                            </div>
                           
                        </div>
                    </div>
                </div>
                <h5 class="text-start mt-3">About the Collection</h5>
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


export default {
    name: "buyPage",
    components: {
        navBars,
        logIn,
        registerUser,
        pageBody,
    },
    data(){
        return{
            collectionImg : "https://i.pinimg.com/736x/7c/a8/f4/7ca8f44a0becf8b639dd15895c94cdc3--pastel-artwork-pastel-paintings.jpg",
            collectionName: "Green ray, 2022",
            collectionPrice: "2000",
            collectionTitle: "Mama Project",
            collectionTitleImg: "https://media.moddb.com/images/members/5/4550/4549205/duck.jpg",
            collectionDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo unde consecteturs ullam?",
            artistImg: "https://media.moddb.com/images/members/5/4550/4549205/duck.jpg",
            artistName: "Paul Thumb",
            artistDesc: "Welcome to my Art!"

        }
    },

    methods: {
    },
};
</script>

<style>
.backdrop {
    background-color: #08090d;
}

.notTopNav {
    margin-top: 80px;
}

.sidenav-parent {
    position: fixed;
}

body {
    font-family: Tahoma, sans-serif;
}

.thumbnail {
    width: 30px;
    height: 30px;
}

h3,h4, h5{
    color: white;
}

table{
    width: 95%;
    margin-bottom: 10px;
}


table, tr, td, th {
  border: 1px solid rgb(230, 230, 230);
  text-align: left;
  color: white;
  padding: 8px;
}

a{
    color: white;
}

hr{
    height:2px;
    border-width:0;
    width: 90%;
    color:gray;
    background-color:gray
}

</style>
