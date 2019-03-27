import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const questionList = [{
  question: 'Question 1: Blah',
  a: 'answer1',
  b: 'answer2',
  c: 'answer3',
  correctAnswer: 'a'
},
{
  question: 'Question 2: Blah',
  a: 'answer1',
  b: 'answer2',
  c: 'answer3',
  correctAnswer: 'b'
},
{
  question: 'Question 3: Blah',
  a: 'answer1',
  b: 'answer2',
  c: 'answer3',
  correctAnswer: 'c'
}];

export default new Vuex.Store({
  state: {
    currentQuestion: 0,
    questions: questionList
    
  },
  mutations: {
    
  },
  actions: {
    
  }
})
