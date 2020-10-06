<template>
    <form action="#">
        <label for="search">
            <btn :click="() => {}" class="btn-search"></btn>
            <input @focus="inputFocus" id="search" type="text" class="search">
        </label>
    </form>
</template>

<script>
    import btn from "./btn";
    //Можно так еще import btn from "@/btn";
    export default {
        name: "Search",
        props: {
            inputFocus: {
                type: Boolean,
                default: false
            }
        },
        components: {
            btn,
        },
    }
</script>

<style scoped>
    .btn-search {
        border: none;
    }

    label {
        position: relative;
    }

    .btn-search {
        position: absolute;
        background-image: url("../assets/searchmagnifierinterfacesymbol1_79893.svg");
        background-size: contain;
        background-repeat: no-repeat;
        width: 20px;
        height: 20px;
        background-color: transparent;
        left: 6px;
        top: 0;
        cursor: pointer;
        outline: none;
    }

    .search {
        padding: 5px 10px 5px 30px;
        border-radius: 5px;
    }

</style>
