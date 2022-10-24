<template>
    
    <div class="d-flex justify-content-center">
        <div id="carouselExampleCaptions" class="carousel slide homepageCarou" data-bs-ride="false">
            <!-- <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div> -->
            <div class="carousel-inner">
                <div class="carousel-item active cc1" >
                    <div class="d-none d-md-inline-block " style="width:40%;">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                    <router-link to="/collection" class="btn pl-4 glow-on-hover" role="button">Collection</router-link>
                    </div>
                    
                </div>
                <div class="carousel-item cc1">
                    <div class="d-none d-md-inline-block" style="width:40%;">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                    <router-link to="/collection" class="btn pl-4 glow-on-hover" role="button">Collection</router-link>
                    </div>
                    
                </div>
                <div class="carousel-item cc1">
                    <div class="d-none d-md-inline-block" style="width:40%;">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                    <router-link to="/collection" class="btn pl-4 glow-on-hover" role="button">Collection</router-link>
                    </div>
                    
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            <div class="carousel-indicators" style="transform: translate(0px, 40px);">
                <button type="button" style = "height: 4px; width:100px; border:none; border-radius:10px;" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" style = "height: 4px; width:100px; border:none; border-radius:10px;" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" style = "height: 4px; width:100px; border:none; border-radius:10px;" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
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
<style>
    
</style>

