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

                    <div class="carou-border backdrop col-4 d-none d-lg-inline-block">
                        <div class="d-flex justify-content-center">
                            
                            <div class="vertical-center text-start p-4"> 
                                <h1><div class="input-wrapper">
                                    <input aria-label="Ask us anything">
                                    <span class="placeholder"></span>
                                </div></h1>
                                <p>Created by an artificial intelligence program to the Colorado State Fair competition.
                                    The stunning image depicts royalty in front of a massive window, invoking foreign
                                    grandeur. The name of the art piece translates to “Space Opera Theater.”</p>
                                <router-link to="/buy" class="btn pl-4 glow-on-hover" role="button">
                                    View
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="backdrop height-inherit col-8 d-none d-lg-inline-block" style="vertical-align:top; ">
                        <div class="vertical-center" style="height:inherit">
                            <img style="height:100%; width:auto;"
                                src="https://static01.nyt.com/images/2022/09/01/business/00roose-1/merlin_212276709_3104aef5-3dc4-4288-bb44-9e5624db0b37-superJumbo.jpg?quality=75&auto=webp" />
                        </div>
                    </div>
                    <div class="row d-lg-none">
                        <div>
                            <div class="text-start p-4" style="height:max-content;">
                                <h1>Théâtre D’opéra Spatial</h1>
                                <p>Created by an artificial intelligence program to the Colorado State Fair competition.
                                    The stunning image depicts royalty in front of a massive window, invoking foreign
                                    grandeur. The name of the art piece translates to “Space Opera Theater.”</p>
                                <router-link to="/buy" class="btn pl-4 glow-on-hover" role="button">
                                    View
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="row d-lg-none">
                        <div class="backdrop p-0" style="vertical-align:bottom">
                            <img style="width:100%; height:100%; vertical-align:bottom; border-radius: 20px;"
                                src="https://static01.nyt.com/images/2022/09/01/business/00roose-1/merlin_212276709_3104aef5-3dc4-4288-bb44-9e5624db0b37-superJumbo.jpg?quality=75&auto=webp" />
                        </div>
                    </div>

                </div>

                <div class="carousel-item" style="overflow:hidden;">

                    <div class="carou-border backdrop col-4 d-none d-lg-inline-block">
                        <div class="d-flex justify-content-center">
                            <div class="vertical-center text-start p-4">
                                <div class="input-wrapper2">
                                    <input aria-label="Ask us anything">
                                    <span class="placeholder"></span>
                                </div> 
                                <p>Some representative placeholder content for the first slide.</p>
                                <router-link to="/buy" class="btn pl-4 glow-on-hover" role="button">
                                    View
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="backdrop height-inherit col-8 d-none d-lg-inline-block" style="vertical-align:top; ">
                        <div class="vertical-center" style="height:inherit">
                            <img style="height:100%; width:auto;" src="../assets/carousel_1.gif" />
                        </div>
                    </div>
                    <div class="row d-lg-none">
                        <div>
                            <div class="text-start p-4" style="height:max-content;">

                                <h1>Second Slide!</h1>
                                <p>Some representative placeholder content for the first slide.</p>
                                <router-link to="/buy" class="btn pl-4 glow-on-hover" role="button">
                                    View
                                </router-link>
                            </div>

                        </div>
                    </div>
                    <div class="row d-lg-none">
                        <div class="backdrop p-0" style="vertical-align:bottom">
                            <img style="height:100%; width:100%; vertical-align:bottom;  border-radius: 20px;"
                                src="../assets/carousel_1.gif" />
                        </div>
                    </div>

                </div>


                <div class="carousel-item" style="overflow:hidden;">

                    <div class="carou-border backdrop col-4 d-none d-lg-inline-block">
                        <div class="d-flex justify-content-center">
                            <div class="vertical-center text-start p-4">
                                
                                <h1><div class="input-wrapper3">
                                    <input aria-label="Ask us anything">
                                    <h1 class="placeholder"></h1>
                                </div> </h1>
                                <p>Some representative placeholder content for the first slide.</p>
                                <router-link to="/buy" class="btn pl-4 glow-on-hover" role="button">
                                    View
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="backdrop height-inherit col-8 d-none d-lg-inline-block" style="vertical-align:top; ">
                        <div class="vertical-center" style="height:inherit">
                            <img style="height:100%; width:auto;" src="../assets/carousel_3.gif" />
                        </div>
                    </div>
                    <div class="row d-lg-none">
                        <div>
                            <div class="text-start p-4" style="height:max-content;">
                                
                                <h1>Third one!</h1>
                                <p>Some representative placeholder content for the first slide.</p>
                                <router-link to="/buy" class="btn pl-4 glow-on-hover" role="button">
                                    View
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="row d-lg-none">
                        <div class="backdrop p-0" style="vertical-align:bottom">
                            <img style="height:100%; width:100%; vertical-align:bottom; border-radius: 20px;"
                                src="../assets/carousel_3.gif" />
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
<style scoped lang="scss">
@import '../assets/css/typed.scss';

.input-wrapper {
    margin-top:-70px;
    display: block;
    // font-family: monospace;
    font-size: 80%;
    width: 100%;

    >input,
    >.placeholder {
        display: block;
        appearance: none;
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: none;
    }

    >.placeholder {
        color: #fffeee;
        pointer-events: none;
        @include typed("Théâtre D’opéra Spatial",
            (type:0.1,pause-typed: 10),
            (caret-width: 2px,
                caret-space: 2px)
                );
    }

    >input {

        &:focus,
        &:active {
            +.placeholder {
                display: none;
            }
        }
    }
}

.input-wrapper2 {
    margin-top:-70px;
    display: block;
    // font-family: monospace;
    font-size: 255%;
    width: 50%;

    >input,
    >.placeholder {
        display: block;
        appearance: none;
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: none;
    }

    >.placeholder {
        color: #fffeee;
        pointer-events: none;
        @include typed("Second Slide!",
            (type:0.1,pause-typed: 10),
            (caret-width: 2px,
                caret-space: 2px)
                );
    }

    >input {

        &:focus,
        &:active {
            +.placeholder {
                display: none;
            }
        }
    }
}

.input-wrapper3 {
    margin-top:-70px;
    display: block;
    // font-family: monospace;
    font-size: 100%;
    width: 100%;

    >input,
    >.placeholder {
        display: block;
        appearance: none;
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: none;
    }

    >.placeholder {
        color: #fffeee;
        pointer-events: none;
        @include typed("Third one!",
            (type:0.1,pause-typed: 10),
            (caret-width: 2px,
                caret-space: 2px)
                );
    }

    >input {

        &:focus,
        &:active {
            +.placeholder {
                display: none;
            }
        }
    }
}


h1 {
    font-size: 3vw;
    font-weight: bold;
}

@media screen and (max-width: 576px) {
    h1 {
        font-size: 7vw;
        font-weight: bold;

    }

    p {
        font-size: 3vw;
    }
}
</style>

