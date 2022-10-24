<template>
    
    <div class="row">
        <div class="headerfixed">
            <header>
                    <div class="col-2 float-left">
                        <a href="/" class="navbar-brand text-light vertical-center">
                            <div class="display-5 font-weight-bold">Homepage</div>
                        </a>
                    </div>
                    <div class="col-10">
                        <div class="d-flex justify-content-center center">
                            <div class="form-outline">
                                <input type="search" id="form1" class="form-control rounded-pill" style="width:500px; background-color:#20172b; border-color: #20172b;" placeholder="Search collections and creations" />
                            </div>
                        </div>
                    </div>
            </header>
        </div>
    </div>
</template>
<script>
export default {
    name: 'topNav',
    // components: {
    // name: 'topNav'
    
    // }
}
</script>
<style>
    header {
        height: 80px;
        background-color: #120c18;
    }
    .headerfixed {
        position:fixed;
        z-index: 99;
        padding:0;

    }

    .center {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    }

    .vertical-center {
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    margin-left: 0;
    }

    .move-left {
    left:0%;
    
    margin-left: 0;
    }
</style>