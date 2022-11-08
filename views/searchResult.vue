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
}
.gallery{
    height: 200px;
    width: 100%;
    object-fit: cover;
}
.card{
    background-color: rgb(32,23,43);
    color: white;
    text-align: left;
}
.card:hover{
    color: rgb(228,36,116);
    outline:1px solid rgb(228,36,116)
}
.description{
    font-size: 14px;
}

</style>


<template>
    <logIn></logIn>
    <registerUser></registerUser>
    <body>
        <navBars></navBars>
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
                                <li style="padding-right: 40px;"><a href="#">Artworks</a></li>
                                <li style="padding-left: 40px;"><a href="#">Artists</a></li>
                            </ul>
                        </nav>
                    </section>
                </div>

                <div class="row" style="display: flex; flex-direction: row; justify-content: left; align-items: center;">

                    <div class="col-lg-3 col-md-4 col-sm-12 colStyle">
                        <div class="card" style="width: 18rem;">
                            <img src="https://firebasestorage.googleapis.com/v0/b/wad2-6e92f.appspot.com/o/images%2Ftest%203.jfif?alt=media&token=934c5859-1dbe-42cd-a4b7-62f2bf3a9bb8" class="card-img-top gallery">
                            <div class="card-body">
                                <h4 class="card-title">Ocean Waves</h4>
                                <h6>ChaiMeng</h6>
                                <p class="card-text description">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <h4>$1232</h4>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-4 col-sm-12 colStyle">
                        <div class="card" style="width: 18rem;">
                            <img src="https://firebasestorage.googleapis.com/v0/b/wad2-6e92f.appspot.com/o/images%2Ftest2.jpg?alt=media&token=04a84243-44d4-4ae3-b331-af5764e3940b" class="card-img-top gallery">
                            <div class="card-body">
                                <h4 class="card-title">Card title</h4>
                                <h6>ChaiMeng</h6>
                                <p class="card-text description">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <h4>$1232</h4>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-4 col-sm-12 colStyle">
                        <div class="card" style="width: 18rem;">
                            <img src="https://firebasestorage.googleapis.com/v0/b/wad2-6e92f.appspot.com/o/images%2Ftestupload1.jfif?alt=media&token=672349a6-a852-4725-9b5b-df172318296b" class="card-img-top gallery">
                            <div class="card-body">
                                <h4 class="card-title">Card title</h4>
                                <h6>ChaiMeng</h6>
                                <p class="card-text description">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <h4>$1232</h4>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-4 col-sm-12 colStyle">
                        <div class="card" style="width: 18rem;">
                            <img src="https://firebasestorage.googleapis.com/v0/b/wad2-6e92f.appspot.com/o/images%2Ftest1.jfif?alt=media&token=b703bb9a-a012-4114-a202-e8aaa84b5d03" class="card-img-top gallery">
                            <div class="card-body">
                                <h4 class="card-title">Card title</h4>
                                <h6>ChaiMeng</h6>
                                <p class="card-text description">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <h4>$1232</h4>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-4 col-sm-12 colStyle">
                        <div class="card" style="width: 18rem;">
                            <img src="https://firebasestorage.googleapis.com/v0/b/wad2-6e92f.appspot.com/o/images%2Ftestupload%203.jfif?alt=media&token=e59daeb0-0a42-4a67-bbc1-acda6b19ec4a" class="card-img-top gallery">
                            <div class="card-body">
                                <h4 class="card-title">Card title</h4>
                                <h6>ChaiMeng</h6>
                                <p class="card-text description">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <h4>$1232</h4>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-4 col-sm-12 colStyle">
                        <div class="card" style="width: 18rem;">
                            <img src="https://firebasestorage.googleapis.com/v0/b/wad2-6e92f.appspot.com/o/images%2Ftestuplaod%205.jfif?alt=media&token=80cb6bd7-0925-4f12-97e7-eccc851e188e" class="card-img-top gallery">
                            <div class="card-body">
                                <h4 class="card-title">Card title</h4>
                                <h6>ChaiMeng</h6>
                                <p class="card-text description">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <h4>$1232</h4>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-4 col-sm-12 colStyle">
                        <div class="card" style="width: 18rem;">
                            <img src="https://firebasestorage.googleapis.com/v0/b/wad2-6e92f.appspot.com/o/images%2Ftest%203.jfif?alt=media&token=934c5859-1dbe-42cd-a4b7-62f2bf3a9bb8" class="card-img-top gallery">
                            <div class="card-body">
                                <h4 class="card-title">Card title</h4>
                                <h6>ChaiMeng</h6>
                                <p class="card-text description">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <h4>$1232</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- content -->
                <!-- <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 m-0 px-1">
                        <img
                        src="https://firebasestorage.googleapis.com/v0/b/wad2-6e92f.appspot.com/o/images%2Ftest%203.jfif?alt=media&token=934c5859-1dbe-42cd-a4b7-62f2bf3a9bb8"
                        class="w-100 shadow-1-strong rounded mb-2 imageGallery"
                        alt=""
                        />

                        <img
                        src="https://firebasestorage.googleapis.com/v0/b/wad2-6e92f.appspot.com/o/images%2Ftest2.jpg?alt=media&token=04a84243-44d4-4ae3-b331-af5764e3940b"
                        class="w-100 shadow-1-strong rounded mb-2 imageGallery"
                        alt=""
                        />
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 m-0 px-1">
                        <img
                        src="https://firebasestorage.googleapis.com/v0/b/wad2-6e92f.appspot.com/o/images%2Ftestupload1.jfif?alt=media&token=672349a6-a852-4725-9b5b-df172318296b"
                        class="w-100 shadow-1-strong rounded mb-2 imageGallery"
                        alt=""
                        />

                        <img
                        src="https://firebasestorage.googleapis.com/v0/b/wad2-6e92f.appspot.com/o/images%2Ftest1.jfif?alt=media&token=b703bb9a-a012-4114-a202-e8aaa84b5d03"
                        class="w-100 shadow-1-strong rounded mb-2 imageGallery"
                        alt=""
                        />
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 m-0 px-1">
                        <img
                        src="https://firebasestorage.googleapis.com/v0/b/wad2-6e92f.appspot.com/o/images%2Ftestuplaod%205.jfif?alt=media&token=80cb6bd7-0925-4f12-97e7-eccc851e188e"
                        class="w-100 shadow-1-strong rounded mb-2 imageGallery"
                        alt=""
                        />

                        <img
                        src="https://firebasestorage.googleapis.com/v0/b/wad2-6e92f.appspot.com/o/images%2Ftestupload%203.jfif?alt=media&token=e59daeb0-0a42-4a67-bbc1-acda6b19ec4a"
                        class="w-100 shadow-1-strong rounded mb-2 imageGallery"
                        alt=""
                        />
                    </div>
                </div> -->


                <!-- <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 m-0 px-1">
                        <img class="imageGallery" src="https://firebasestorage.googleapis.com/v0/b/wad2-6e92f.appspot.com/o/images%2Ftest%203.jfif?alt=media&token=934c5859-1dbe-42cd-a4b7-62f2bf3a9bb8" alt="">
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 m-0 px-1">
                        <img class="imageGallery" src="https://firebasestorage.googleapis.com/v0/b/wad2-6e92f.appspot.com/o/images%2Ftest2.jpg?alt=media&token=04a84243-44d4-4ae3-b331-af5764e3940b" alt="">
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 m-0 px-1">
                        <img class="imageGallery" src="https://firebasestorage.googleapis.com/v0/b/wad2-6e92f.appspot.com/o/images%2Ftestupload1.jfif?alt=media&token=672349a6-a852-4725-9b5b-df172318296b" alt="">
                    </div> 
                </div> -->
            </div>


        </pageBody>

    </body>
</template>


<script>
import pageBody from "../src/components/pageBody.vue"
import logIn from "../src/components/SignIn.vue"
import registerUser from "../src/components/RegisterPage.vue"
import navBars from "../src/components/navBars.vue"

export default {
    name: "searchResult", 
    components: {
        navBars,
        logIn, 
        registerUser,
        pageBody,
    },
}

</script>