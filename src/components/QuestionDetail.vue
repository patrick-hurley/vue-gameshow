<template>
  <div>
  
    <div class="score">£{{ score }}</div>

    <div class="question-container">  
      <p class="question">{{ question.question }}</p>
      <div @click="select('a')" class="answer">{{ question.a }}</div>
      <div @click="select('b')" class="answer">{{ question.b }}</div>
      <div @click="select('c')" class="answer">{{ question.c }}</div>
    </div>

  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'QuestionDetail',
  props: ['question'],
  methods: {
    select(answer){
      this.$emit('selectAnswer')
      if(this.question.answer == answer){
        this.$store.state.score+=500
      }
    }
  },
  computed: {
    ...mapState(['score'])
  }
}

</script>


<style scoped lang="scss">

h1 {
  color: white;
}

.question-container {
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  padding: 15px 50px 40px;
  border-radius: 20px;
  border: 5px solid white;
  margin-top: 160px;
}

.score {
    position: absolute;
    right: 0px;
    top: 70px;
    padding: 10px;
    width: 150px;
    font-size: 30px;
    text-align: center;
    color: yellow;
    border: 5px solid yellow;
  }

.question, .answer {
  background: rgba(255, 255, 255,0.4);
  border-radius: 10px;
  font-size: 25px;
}

.question {
  padding: 50px 30px;
}

.answer{
  width: 31%;
  box-sizing: border-box;
  padding: 30px;
  display: inline-block;
  cursor: pointer;
  &:not(:last-child){
    margin-right: 23px;
  }
  &:hover {
    background: rgb(141, 212, 209);
  }
}

</style>
