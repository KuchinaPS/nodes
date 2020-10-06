<template>
    <div class="navigation">
        <ul>
            <li class="navigation_item navigation_item_notes"><router-link to="/">Notes</router-link></li>
            <li class="navigation_item navigation_item_archive"><router-link to="/archive">Archive</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Navigation"
    }
</script>

<style scoped>
    .navigation {
        background-color: #272b2d;
        min-width: 200px;
    }
    ul{
        list-style: none;
    }
    .navigation_item{
        padding: 20px;
    }
    .navigation_item > a {
        color: #ffffff;
        text-decoration: none;
    }
    .navigation_item{
        position: relative;
    }
    .navigation_item a:before{
        content: "";
        position: absolute;
        width: 30px;
        height: 30px;
        top: 12px;
        left: -17px;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .navigation_item_notes a:before{
        background-image: url("../assets/note_icon-icons.com_56797.svg");
    }
    .navigation_item_archive a:before{
        background-image: url("../assets/archive_box_icon_143056.svg");
    }
    .navigation_item_trash a:before{
        background-image: url("../assets/trash_bin_icon-icons.com_67981.svg");
    }
</style>