<template>
  <div>
    <p>{{ question.question }}</p>
    <p>{{ question.a }}</p>
    <p>{{ question.b }}</p>
    <p>{{ question.c }}</p>
  </div>
</template>

<script>

export default {
  name: 'QuestionDetail',
  props: ['question'],
}

</script>


<style scoped lang="scss">

</style>
