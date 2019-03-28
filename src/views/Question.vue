<template>
  <div v-if="show">

    <QuestionDetail v-if="questionType == 'question'" v-on:selectAnswer="nextQuestion" :question="questions[currentQuestion-1]"></QuestionDetail>
    <Game1 v-if="questionType == 'game1'" v-on:gameOver="nextQuestion" :game="questions[currentQuestion-1]"></Game1>
    <Game2 v-if="questionType == 'game2'" v-on:gameOver="nextQuestion" :game="questions[currentQuestion-1]"></Game2>
    <Game3 v-if="questionType == 'game3'" v-on:gameOver="nextQuestion" :game="questions[currentQuestion-1]"></Game3>
     
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import QuestionDetail from '@/components/QuestionDetail'
import Game1 from '@/components/Game1'
import Game2 from '@/components/Game2'
import Game3 from '@/components/Game3'

export default {
  name: 'question',
  data(){
    return{
      show: true
    }
  },
  components: {
    QuestionDetail,
    Game1,
    Game2,
    Game3
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

