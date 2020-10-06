<template>
    <button @click="click" class="btn"></button>
</template>

<script>
    export default {
        name: "btn",
        props: {
            click: {
                type: Function,
                required:false,
                default: () => {}
            }
        },
    }
</script>

<style scoped>

</style>