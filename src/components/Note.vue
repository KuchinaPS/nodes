<template>
    <div class="note-item" @click="currentNote">
        <h1>{{header}}</h1>
        <p class="note-text">{{text}}</p>
        <button class="note-close"></button>
    </div>
</template>

<script>
    export default {
        name: "Note",
        props: {
            header: {
                type: String,
                required: true,
            },
            text: {
                type: String,
                required: true,
            },
            currentNote: {
                type: Function,
                required: true,
            }
        }
    }
</script>

<style scoped>
    .note-item{
        position: relative;
        padding: 10px;
        margin: 10px 15px;
        border: 1px solid #272b2d;
        border-radius: 5px;
        background-color: lavender;
        cursor: pointer;
    }
    .note-close{
        position: absolute;
        right: 10px;
        top: 5px;
        width: 10px;
        height: 15px;
        border: none;
        outline: none;
        cursor: pointer;
    }
    .note-close:hover{
      opacity: 0.6;
    }
    .note-close:before,
    .note-close:after{
        content: "";
        position: absolute;
        width: 2px;
        height: 12px;
        background-color: black;
        right: 5px;
        top: 0;
    }
    .note-close:before{
        transform: rotate(45deg);
    }
    .note-close:after{
        transform: rotate(-45deg);
    }
    .note-item h1 {
        font-size: 17px;
        margin: 0;
    }
    .note-item p{
        margin: 0;
        font-size: 13px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        padding: 2px;
    }
</style>