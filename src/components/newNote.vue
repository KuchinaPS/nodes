<template>
    <div class="newNote">
        <div class="contain">
            <input ref="email" type="text" v-model="header">
            <textarea name="note" v-model="text"></textarea>
        </div>
    </div>
</template>

<script>
    import {mapMutations} from "vuex";
    import {eventBus} from "../main.js";

    export default {
        name: "newNote",
        props: {
            nodeItem: {
                type: Object,
                required: true,
            },
        },
        data() {
            return {
                nodeItemObj: {
                    header: "",
                    test: ""
                }
            }
        },
        mounted() {
            eventBus.$on("click-btn", this.setFocus);
        },
        watch: {
            nodeItem(val) {
                this.nodeItemObj = {...val};
            },
        },
        computed: {
            ...mapMutations["updateNote"],
            header: {
                get() {
                    return this.nodeItemObj.header;
                },
                set(value) {
                    this.nodeItemObj.header = value;
                    this.$store.commit('updateNote', this.nodeItemObj);
                },
            },
            text: {
                get() {
                    return this.nodeItemObj.text;
                },
                set(value) {
                    this.nodeItemObj.text = value;
                    this.$store.commit('updateNote', this.nodeItemObj);
                },
            },

        },
        methods: {
            setFocus() {
                this.$refs.email.focus();
            }
        }

    }
</script>

<style scoped>
    .newNote {
        max-width: 422px;
    }

    .contain {
        display: flex;
        flex-direction: column;
        height: 100%;
        min-width: 400px;
    }

    .contain input {
        margin: 20px 20px 10px;
        border: none;
        font-size: 28px;
        outline: none;
    }

    textarea {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 20px;
        font-size: 16px;
        border: none;
        outline: none;
        resize: none;
    }
</style>