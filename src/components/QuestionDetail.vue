<template>
  <div>
    
    <div class="question-container">  
      <p class="question">{{ question.question }}</p>
      <div @click="select('a')" class="answer">{{ question.a }}</div>
      <div @click="select('b')" class="answer">{{ question.b }}</div>
      <div @click="select('c')" class="answer">{{ question.c }}</div>
    </div>

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

h1 {
  color: white;
}

.question-container {
  width: 700px;
  padding: 30px 50px 40px;
  margin: 20vh auto 0;
  border-radius: 20px;
  border: 5px solid white;
}

.question, .answer {
  background: rgba(255, 255, 255,0.4);
  border-radius: 10px;
}

.question {
  padding: 50px 30px;
}

.answer{
  width: 32%;
  box-sizing: border-box;
  padding: 30px;
  display: inline-block;
  cursor: pointer;
  &:not(:last-child){
    margin-right: 14px;
  }
  &:hover {
    background: rgb(141, 212, 209);
  }
}

</style>
