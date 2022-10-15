<template>
    <div>
        <nav class="navbar navbar-expand d-flex flex-column align-item-start" id="sideNav">
            <a href="#" class="navbar-brand text-light mt-5">
                <div class="display-5 font-weight-bold"></div>
            </a>
            <ul class="navbar-bar d-flex flex-column mt-5 w-100">
                <li class="nav-item w-100">
                    <a class="nav-link text-light pl-4">Marketplace</a>
                </li>
                <li class="nav-item dropdown w-100">
                    <a class="nav-link dropdown-toggle text-light pl-4" id="creators_dropdown" role="button" data-toggle="dropdown" aria-expanded="false">Creators</a>
                    <ul class="dropdown-menu w-100" aria-labelledby="creators_dropdown">
                        <li><a href="#" class="dropdown-item text-light pl-4 p-2">Create Listing</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'sideNav'
}
</script>
<style scoped>
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;

    }

    body {
        min-height: 100vh;
        background-color: white;
    }

    .navbar {
        width: 250px;
        height: 100vh;
        position: fixed;
        /* margin-left: -300px; */
        background-color: #7952B3;
        transition: 0.3s ease;
    }

    .nav-link {
        font-size: 1.25em;

    }

    /* .nav-link:active,
    .nav-link:focus, */
    .nav-link:hover{
        background-color: #ffffff26;
    }

    .dropdown-menu{
        background-color: #7952B3;
    }

    /* .dropdown-item:active,
    .dropdown-item:focus, */
    .dropdown-item:hover{
        background-color: #ffffff26;
    }
</style>