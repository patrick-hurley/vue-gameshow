<template>
    <div class="container">
        <h1>Vue Gameshow</h1>
        <div class="intro">
            <img class="logo" src="../assets/logo.png" alt="vue-logo"/>
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
        margin: 0 auto 40px;
        padding: 27px;
        border: 5px dotted white;
        @media only screen and (min-width: 701px){
            width: 500px;
        }
        @media only screen and (max-width: 700px){
            margin-left: 10px;
            margin-right: 10px;
        }
        p {
            margin: 0;
        }
        }
        p.sub {
            font-size: 18px;
            margin-top:10px;
        }
        .logo {
            width: 150px;
            margin: 0 auto;
        }

</style>