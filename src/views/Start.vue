<template>
    <div class="container">
        <h1>Welcome to the Vue Gameshow</h1>
        <div class="intro">
            <p>Welcome to the VueGameshow.</p>
            <p>The only game show where you don't actually win any money</p>
        </div>
        <router-link to="/question" class="continue">Start</router-link>
        
    </div>
</template>

<script>

    export default {
        created(){
            this.$store.state.currentQuestion = 1;
            this.$store.state.score = 0;
        }
    }
</script>

<style lang="scss" scoped>

    .intro {
        color: white;
        font-size: 30px;
        font-weight: 100;
        width: 500px;
        margin: 0 auto 40px;
        padding: 27px;
        border: 5px dotted white;
        p {
            margin-top: 15px;
        }
    }

</style>