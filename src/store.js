import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const questionList = [{
  type: 'question',
  question: 'In which country was the Caesar salad invented?',
  a: 'Mexico',
  b: 'Spain',
  c: 'England',
  answer: 'a'
},
{
  type: 'question',
  question: 'How long did the 100 years war last?',
  a: '100 years',
  b: '113 years',
  c: '116 years',
  answer: 'c'
},
{ 
  type: 'game1',
  instruction: 'Click the ball before the time runs out.'
},
{
  type: 'question',
  question: 'After which animal are the Canary Islands named?',
  a: 'Rabbits',
  b: 'Dogs',
  c: 'Sheep',
  answer: 'b'
},
{
  type: 'question',
  question: 'What colour to do you get when you mix red and white?',
  a: 'Orange',
  b: 'Pink',
  c: 'Brown',
  answer: 'b'
},
{ 
  type: 'game2',
  instruction: 'Press the button to start, and then press again after you think 10 seconds have passed. You need to be within half a second to win.'
},
{
  type: 'question',
  question: 'What is the singular of Scampi?',
  a: 'Scamp',
  b: 'Scampo',
  c: 'Scampi',
  answer: 'b'
},
{
  type: 'question',
  question: 'What color are aircraft black boxes?',
  a: 'Orange',
  b: 'Black',
  c: 'Yellow',
  answer: 'a'
},
{ 
  type: 'game3',
  instruction: 'Click on the cup covering the ball'
}];

export default new Vuex.Store({
  state: {
    currentQuestion: 1,
    questions: questionList,
    score: 0
  },
  mutations: {
    INCREASE_QUESTION: function(state) {
      state.currentQuestion++;
    }
  },
  actions: {
    increaseQuestion: ({commit}) => {
      commit('INCREASE_QUESTION')
    }
  }
})
