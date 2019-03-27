<template>
  <div>
    <h1>This is a question</h1>
    <QuestionDetail question="What's the capital of France?"></QuestionDetail>
    <router-link to="/game">Next question</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import QuestionDetail from '@/components/QuestionDetail'

export default {
  name: 'question',
  components: {
    QuestionDetail
  }
}
</script>

<style lang="scss" scoped>

</style>

