<template>
    <div class="container-fluid backdrop">
            
            <div class="row notTopNav">
                <div class="col-10 not-sidenav-parent">
                <slot></slot>
                </div>
            </div>
            
        </div>
</template>
<script>
export default {
    name: 'pageBody',
    // components: {
    // name: 'topNav'
    
    // }
}
</script>
<style>

    
</style>