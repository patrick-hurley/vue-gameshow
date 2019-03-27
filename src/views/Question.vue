<template>
  <div v-if="show">
    <h1>This is question {{ currentQuestion }}</h1>
    <p>{{ score }}</p>
    <QuestionDetail v-if="questionType == 'question'" v-on:selectAnswer="nextQuestion" :question="questions[currentQuestion-1]"></QuestionDetail>
    <GameDetail v-if="questionType == 'game'" :game="questions[currentQuestion-1]"></GameDetail>
    <button @click="nextQuestion">Next Question</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import QuestionDetail from '@/components/QuestionDetail'
import GameDetail from '@/components/GameDetail'

export default {
  name: 'question',
  data(){
    return{
      show: true
    }
  },
  components: {
    QuestionDetail,
    GameDetail
  },
  methods: {
    ...mapActions([
      'increaseQuestion'
    ]),
    nextQuestion(){
      this.increaseQuestion();
      // Check if there are any more questions
      if(this.$store.state.currentQuestion <= this.$store.state.questions.length){
        this.$router.push('/question')
      }
      else {
        this.$router.push('/result')
      } 
    }
  },
  computed: {
    ...mapState([
       'currentQuestion',
       'questions',
       'score'
    ]),
    questionType(){
      return this.questions[this.currentQuestion-1].type;
    }
  },
  created(){
    if(this.$store.state.currentQuestion > this.$store.state.questions.length){
        this.$router.push('/')
        this.show = false
      }
  }
}
</script>

<style lang="scss" scoped>

</style>

