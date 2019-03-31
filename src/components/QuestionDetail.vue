<template>
  <div>
    <div class="score">£{{ score }}</div>
    <div class="answer-feedback" v-show="answered">{{ feedback }}</div>
    <div class="question-container">  
      <p class="question">{{ question.question }}</p>
      <button @click="select('a')" class="answer" :class="(answerIsA && answered)? classObject:''" :disabled="answered">{{ question.a }}</button>
      <button @click="select('b')" class="answer" :class="(answerIsB && answered)? classObject:''" :disabled="answered">{{ question.b }}</button>
      <button @click="select('c')" class="answer" :class="(answerIsC && answered)? classObject:''" :disabled="answered">{{ question.c }}</button>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import { setTimeout } from 'timers';

export default {
  name: 'QuestionDetail',
  data(){
    return {
      answered: false,
      feedback: '',
      correct: false,
      answerIsA: false,
      answerIsB: false,
      answerIsC: false
    }
  },
  props: ['question'],
  methods: {
    select(answer){
      if(this.question.answer == answer){
        this.$store.state.score+=500;
        this.correct = true;
        this.feedback = 'Correct.'
      }
      else {
        this.feedback = 'Wrong answer.'
      }
      switch (this.question.answer) {
        case 'a':
          this.answerIsA = true;
          break;

        case 'b':
          this.answerIsB = true;
          break;

        case 'c':
          this.answerIsC = true;
          break;
      }
      this.answered = true
      setTimeout(()=>{
        this.$emit('selected')
      }, 3000)
    }
  },
  computed: {
    ...mapState(['score']),
    classObject: function(){
      return {
        flashCorrect: this.correct,
        flashIncorrect: !this.correct
      }
    }
  },
  mounted () {
    window.scroll(0,0)
  }
}

</script>


<style scoped lang="scss">

  .question-container {
    position: relative;
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    padding: 15px 50px 40px;
    border-radius: 20px;
    border: 5px solid white;
    margin-top: 120px;
    background-color:rgba(255, 255, 255, 0.473);
    @media only screen and (max-width: 800px){
      margin-top: 30px;
      padding: 0px 10px 40px;
    }
  }

  .score {
    position: absolute;
    right: 0px;
    top: 20px;
    padding: 10px;
    width: 150px;
    font-size: 30px;
    font-weight: 100;
    text-align: center;
    color: yellow;
    border: 5px solid yellow;
    @media only screen and (max-width: 800px){
      position: relative; 
      margin-bottom: 10px;
      width: 100%;
      box-sizing: border-box;
    }
  }

  .answer-feedback{
    position: absolute;
    left: 0px;
    top: 20px;
    width: 300px;
    padding: 10px;
    font-size: 30px;
    font-weight: 100;
    text-align: center;
    color: white;
    border: 5px dotted white;
    @media only screen and (max-width: 800px){
      position: relative; 
      margin-bottom: 10px;
      width: 100%;
      box-sizing: border-box;
    }
  }

  .question, .answer {
    background: rgba(17, 88, 105, 0.808);
    color: white;
    border-radius: 10px;
    font-size: 25px;
    font-weight: 100;
    
  }

  .question {
    padding: 50px 30px;
  }

  .answer{
    width: 30%;
    box-sizing: border-box;
    padding: 30px;
    display: inline-block;
    text-align: left;
    border: none;
    cursor: pointer;
    @media only screen and (max-width: 800px){
      width: 100%;
      margin-bottom: 10px;
    }
    &:not(:last-child){
      margin-right: 28px;
    }
    &:hover {
      background: rgb(40, 145, 139);
    }
  }

  .flashCorrect {
    animation: flashCorrect .7s;
    animation-iteration-count: 4;
  }

  @keyframes flashCorrect {
    50% {
      background-color: rgba(27, 199, 162, 0.932);
    }
  }

  .flashIncorrect {
    animation: flashIncorrect .7s;
    animation-iteration-count: 4;
  }

  @keyframes flashIncorrect {
    50% {
      background-color: orange;
    }
  }

</style>
