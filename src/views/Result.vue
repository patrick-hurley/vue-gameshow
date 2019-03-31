<template>
    <div class="container">
        <h1>The results are in.</h1>
            <p class="results">You won £{{ score }}.</p>
            <p class="sort-of">(sort of)</p> 
        <router-link to="/" class="continue">Play again</router-link>
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['score'])
    }
}
</script>

<style lang="scss" scoped>
    .results {
        font-size: 50px;
        color: white;
        margin-bottom: 0;
    }
    .sort-of {
        font-size: 30px;
        color: white;
        margin: 10px 0 70px;
    }
</style>