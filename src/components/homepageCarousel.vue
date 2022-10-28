<template>

    <div class="d-flex justify-content-center">
        <div id="carouselExampleCaptions" class="carousel slide homepageCarou" data-bs-ride="carousel"
            data-bs-interval="7000">
            <!-- <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div> -->
            <div class="carousel-inner">
                <div class="carousel-item active" style="overflow:hidden;">
                   
                        <div class="carou-border height-inherit backdrop col-4 d-none d-lg-inline-block">
                            <div class="d-flex justify-content-center" >
                                <div class="vertical-center text-start w-25">
                                    <h1>Cyberpunk era</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, temporibus aliquam repudiandae id nisi, animi commodi corrupti libero distinctio veniam nemo quae sint repellat eos! Impedit voluptatem aut ipsa dolorum?</p>
                                    <router-link to="/collection" class="btn pl-4 glow-on-hover" role="button">
                                        Collection
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div class="backdrop height-inherit col-8 d-none d-lg-inline-block">
                            <div class="vertical-center" style="height:inherit;">
                            <img style="height:100%;" src="../assets/carousel_1.gif" />
                            </div>
                        </div>
                        <div class="row d-lg-none">
                            <div>
                                <div class="text-start p-4" style="height:max-content;">
                                    <h1>Cyberpunk era</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, temporibus aliquam repudiandae id nisi, animi commodi corrupti libero distinctio veniam nemo quae sint repellat eos! Impedit voluptatem aut ipsa dolorum?</p>
                                    <router-link to="/collection" class="btn pl-4 glow-on-hover" role="button">
                                        Collection
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div class="row d-lg-none">
                            <div class="backdrop p-0" style="vertical-align:bottom">
                                <img style="width:100%; height:100%; vertical-align:bottom; border-radius: 20px;" src="../assets/carousel_1.gif" />
                            </div>
                        </div>
                    
                </div>

                <div class="carousel-item" style="overflow:hidden;">
                   
                   <div class="carou-border backdrop col-4 d-none d-lg-inline-block">
                       <div class="d-flex justify-content-center">
                           <div class="vertical-center text-start w-25">
                               <h1>Second slide label</h1>
                               <p>Some representative placeholder content for the first slide.</p>
                               <router-link to="/collection" class="btn pl-4 glow-on-hover" role="button">
                                   Collection
                               </router-link>
                           </div>
                       </div>
                   </div>
                   <div class="backdrop height-inherit col-8 d-none d-lg-inline-block"  style="vertical-align:top; ">
                    <div class="vertical-center" style="height:inherit">
                       <img style="height:auto; width:768px" src="../assets/carousel_2.gif" />
                    </div>
                   </div>
                   <div class="row d-lg-none">
                       <div>
                           <div class="text-start p-4" style="height:max-content;">
                            
                               <h1>Second slide label</h1>
                               <p>Some representative placeholder content for the first slide.</p>
                               <router-link to="/collection" class="btn pl-4 glow-on-hover" role="button">
                                   Collection
                               </router-link>
                           </div>
                        
                       </div>
                   </div>
                   <div class="row d-lg-none">
                       <div class="backdrop p-0" style="vertical-align:bottom">
                           <img style="height:100%; width:100%; vertical-align:bottom;  border-radius: 20px;"  src="../assets/carousel_2.gif" />
                       </div>
                   </div>
               
           </div>


           <div class="carousel-item" style="overflow:hidden;">
                   
                   <div class="carou-border backdrop col-4 d-none d-lg-inline-block">
                       <div class="d-flex justify-content-center">
                           <div class="vertical-center text-start w-25">
                               <h1>Third slide label</h1>
                               <p>Some representative placeholder content for the first slide.</p>
                               <router-link to="/collection" class="btn pl-4 glow-on-hover" role="button">
                                   Collection
                               </router-link>
                           </div>
                       </div>
                   </div>
                   <div class="backdrop height-inherit col-8 d-none d-lg-inline-block" style="vertical-align:top;">
                    <div class="vertical-center" style="height:inherit">
                       <img style="height:100%;" src="../assets/carousel_3.gif" />
                    </div>
                   </div>
                   <div class="row d-lg-none">
                       <div>
                           <div class="text-start p-4" style="height:max-content;">
                               <h1>Third slide label</h1>
                               <p>Some representative placeholder content for the first slide.</p>
                               <router-link to="/collection" class="btn pl-4 glow-on-hover" role="button">
                                   Collection
                               </router-link>
                           </div>
                       </div>
                   </div>
                   <div class="row d-lg-none">
                       <div class="backdrop p-0" style="vertical-align:bottom">
                           <img style="height:100%; width:100%; vertical-align:bottom; border-radius: 20px;" src="../assets/carousel_3.gif" />
                       </div>
                   </div>
               
           </div>



            </div>
            <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
             -->
            <div class="carousel-indicators" style="transform: translate(0px, 40px);">
                <button type="button" style="height: 4px; width:100px; border:none; border-radius:10px;"
                    data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true"
                    aria-label="Slide 1"></button>
                <button type="button" style="height: 4px; width:100px; border:none; border-radius:10px;"
                    data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" style="height: 4px; width:100px; border:none; border-radius:10px;"
                    data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
               
            </div>
        </div>

    </div>
</template>


<script>



export default {
    name: 'homepageCarousel',
    components: {

    },


}


</script>
<style scoped>


h1 {
    font-size:380%;
    font-weight: bold;
}

@media screen and (max-width: 576px) {
    h1 {
    font-size:250%;
    font-weight: bold;
}
    p {
        font-size:90%;
    }
}
</style>

