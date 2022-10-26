<template>
    <div class="container-fluid p-0">
        <div class="d-flex">
            <h1>Popular</h1>
        </div>
        <div class="d-flex">
            <div class="card homepageListing" style="width: 14rem;">
                <img src="#" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'homepageListing',
    components: {
    },
    data() {
        return {

        }
    },
    methods: {

    },

    beforeMount() {

    }
}
</script>
<style> 

.homepageListing {
    background-color: #120c18;
    outline: 1px solid #25192f;
    border-radius: 10px;
}


</style>