<template>
    <div class="row">
        <div class="headerfixed">
            <header>
                    <div class="col-2">

                    </div>
                    <div class="col">
                        <div class="input-group d-flex justify-content-center pt-3">
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
</style>