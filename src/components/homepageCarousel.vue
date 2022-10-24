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
                    <img src="#" class="d-inline-block img-fluid carouimg" style="width:60%" alt="...">
                </div>
                <div class="carousel-item">
                    <div class="d-none d-md-inline-block" style="width:40%;">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                    <router-link to="/collection" class="btn pl-4 glow-on-hover" role="button">Collection</router-link>
                    </div>
                    <img src="../assets/idp.jpg" class="d-inline-block img-fluid carouimg" style="width:60%" alt="...">
                </div>
                <div class="carousel-item">
                    <div class="d-none d-md-inline-block" style="width:40%;">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                    <router-link to="/collection" class="btn pl-4 glow-on-hover" role="button">Collection</router-link>
                    </div>
                    <img src="../assets/idp.jpg" class="d-inline-block img-fluid carouimg" style="width:60%" alt="...">
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
    .homepageCarou {
        background-color: #120c18;
        height: 600px;
        outline: 1px solid #25192f;
        border-radius: 20px;
        width: 65vw;
        margin-top: 1px;
    }

    .carousel-inner {
        align-items: center;
    }
    .carouimg {
        height:600px;

    }

    #carouselExampleCaptions {
        position:relative;
    }
    .btn {
        background-color:#e42474;
        color: #fefffe;
    }


    .glow-on-hover {
    width: 100px;
    height: 100%;
    border: none;
    outline: none;
    color:  #fefffe;
    background: #e42474;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    }
    .glow-on-hover:before {
    content: '';
    background: linear-gradient(45deg, #e42474, #7a00ff, #ff00c8);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
    }

    .glow-on-hover:active {
        color: #e42474;
    }

    .glow-on-hover:active:after {
        background: transparent;
    }

    .glow-on-hover:hover:before {
        opacity: 1;
    }

    .glow-on-hover:after {
        z-index: -1;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: #e42474;
        left: 0;
        top: 0;
        border-radius: 10px;
    }

    @keyframes glowing {
        0% { background-position: 0 0; }
        50% { background-position: 400% 0; }
        100% { background-position: 0 0; }
    }

    .cc1 {
        background-image: url("../assets/idp.jpg");
        background-size:contain;
        background-repeat: no-repeat;
        background-position: right;
        border-radius: 15px;
    }
</style>

