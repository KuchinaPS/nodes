<template>
    <div id="app">
        <div class="main">
            <Navigation></Navigation>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>    /*    <Note  v-for="(item, i) in notes" - в этом месте долен быть всегда уникальный ключ , или строка или число , а ты передавала объект
            лучшие практики используют uuid (Guid) например https://www.npmjs.com/package/vue-uuid , для того чтобы virtual dom корректно обновлял состояние
            в случае если у тебя песочница , можешь передавать просто индекс элемента в данном случае i
            :key="i"
        v-bind="item"></Note>*/

    import Navigation from "./components/Navigation";
    // import Search from "./components/Search";
    // import btn from "./components/btn";
    // import Note from "./components/Note";
    // import newNote from "./components/newNote";
    // import Main from "./components/Main";
    // import {mapGetters, mapMutations} from "vuex";
    // import {eventBus} from "./main.js";
    // import { v4 as uuidv4 } from 'uuid';

    export default {
        name: "App",
        data() {
        },
        components: {
            Navigation,
        },

    };
</script>

<style>
    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: #272b2d;
        font-family: 'Open Sans', sans-serif;
    }

    .main {
        display: flex;
        justify-content: center;
    }

    /*.main > div {*/
    /*    border: 1px solid black;*/
    /*    max-width: 300px;*/
    /*}*/


</style>
