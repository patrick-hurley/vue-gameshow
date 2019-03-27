<template>
    <div>
        <h1>The results are in.</h1>
        <p>You scored: {{ score }}</p>
        <router-link to="/">Play again</router-link>
    </div>
</template>

<style lang="scss" scoped>

</style>

<script>

import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState(['score'])
    }
}
</script>
