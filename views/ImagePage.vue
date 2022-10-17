<template>
    <h3>Add Photos</h3>
    <div>
        <div class="image" >
            <div class="form-group">
                <input type="text" placeholder="Title" v-model="title" class="form-control">
            </div>

            <div class="form-group">
                <input type="text" placeholder="Details" v-model="details" class="form-control">
            </div>

            <div class="form-group">
                <input type="text" placeholder="Tag" v-model="tag" class="form-control">
            </div>

            <div class="form-group">
                <input type="text" placeholder="Details" v-model="details" class="form-control">
            </div>

            <div class="form-group">
                <input type="file" placeholder="Upload files" class="form-control">
            </div>

            <div>

            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "imagePage",

    data() {
        return {
            details: "",
            tag: "",
            title: "",
        }
    },

}
</script>

