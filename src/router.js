import Vue from 'vue'
import Router from 'vue-router'
import Start from './views/Start.vue'
import Question from './views/Question.vue'
import Result from './views/Result.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start
    },
    {
      path: '/question',
      name: 'question',
      component: Question
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    }
  ]
})
