<template>
    <div>
        <h1>Welcome to the Vue Gameshow</h1>
        <router-link to="/question">Start</router-link>
    </div>
</template>

<script>

    export default {
        mounted(){
            this.$store.state.currentQuestion = 1;
            this.$store.state.score = 0;
        }
    }
</script>

<style lang="scss" scoped>

</style>