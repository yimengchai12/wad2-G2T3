<template>
    <topNav :data="data" ></topNav>
    <sideNav></sideNav>
</template>
<script>
import sideNav from "./sideNav.vue"
import topNav from "./topNav.vue"
export default {
    name: 'navBars',
    components: {
        topNav,
        sideNav
    
    },
    props:["data"],
    
}
</script>
<style>

    
</style>