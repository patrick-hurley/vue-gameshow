<template>
  <div>
    <h1>Question number {{ $store.state.currentQuestion }}</h1>
    <p>{{ question.question }}</p>
   
    <div @click="select('a')" class="answer">{{ question.a }}</div>
    <div @click="select('b')" class="answer">{{ question.b }}</div>
    <div @click="select('c')" class="answer">{{ question.c }}</div>

  </div>
</template>

<script>

export default {
  name: 'QuestionDetail',
  props: ['question'],
  methods: {
    select(answer){
      this.$emit('selectAnswer')
      if(this.question.answer == answer){
        this.$store.state.score++
      }
    }
  }
}

</script>


<style scoped lang="scss">

.answer{
  width: 300px;
  padding: 30px;
  border: 1px solid grey;
  cursor: pointer;
  margin-bottom: 20px;
  &:hover {
    background: rgb(141, 212, 209);
  }
}

</style>
