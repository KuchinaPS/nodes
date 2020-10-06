<template>
    <div class="main">
        <div class="delete-node">
            <div class="container">
                <slot>
                    <Search :input-focus="focus"></Search>
                </slot>
            </div>
            <div class="list-notes">
                <Note v-for="item in posts"
                      :key="item.id"
                      v-bind="item" :current-note="() => currentNode(item)"/>
            </div>
        </div>
        <newNote :node-item="currentNodeItem"></newNote>
    </div>

</template>

<script>
    import Search from "../components/Search";
    import Note from "../components/Note";
    import newNote from "../components/newNote";
    import {mapGetters, mapMutations} from "vuex";
    import {eventBus} from "../main.js";
    import { v4 as uuidv4 } from 'uuid';

    export default {
        name: "Archive",
        data() {
            return {
                focus: false,
                currentNodeItem: {},
            }
        },
        components: {
            Search,
            Note,
            newNote
        },
        computed: {
            ...mapGetters({
                posts: "allPosts",
            }),
        },
        methods: {
            ...mapMutations(["addPost"]),
            addItem: function () {
                eventBus.$emit('click-btn');
                const noteItem = {
                    header: "",
                    text: "",
                    id: uuidv4(), // 2^128
                };


                this.addPost(noteItem);
                this.currentNode(noteItem);
            },
            currentNode: function (item) {
                const currentNode = this.$store.getters.getNoteByKey;
                this.currentNodeItem = currentNode(item.id);
            }
        }
    }
</script>

<style scoped>
    .container {
        display: flex;
        padding-left: 15px;
        align-items: center;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .btn-create {
        border: none;
        background-image: url("../assets/compose_write_pen_pencil_writing_icon_133470.svg");
        background-size: contain;
        background-repeat: no-repeat;
        width: 33px;
        height: 33px;
        background-color: transparent;
        cursor: pointer;
        outline: none;
    }

    .list-notes {
        max-height: 300px;
        overflow-y: scroll;
    }
</style>