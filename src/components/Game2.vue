<template>
  <div>

    <h1>Bonus Round 2</h1>
    <p>{{ game.instruction }}</p>
    <p v-show="finalTime!=0"></p>

    <div v-if="complete">
        <p>{{ finalTime }}</p>
        <button @click="$emit('gameOver')">Next question</button>
    </div>
    <div v-else>
        <button v-show="!started" @click="startTimer" class="timer">Start</button>
        <button v-show="started" @click="stopTimer" class="timer">Press again after 10 seconds</button>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Game2',
  data(){
    return{
      started: false,
      complete: false,
      timer: 0,
      finalTime: 0,
    }
  },
  props: ['game'],
  methods: {
      startTimer(){
        this.started = true;
        setInterval(()=>{
            this.timer+=10;
        }, 10);
      },
      stopTimer(){
          this.finalTime = this.timer/1000;
          this.complete = true;
      }
  }
}

</script>


<style scoped lang="scss">

.timer {
    width: 300px;
    padding: 50px;
    margin: 10px auto;
    font-size: 25px;
    background: white;
    border: 3px solid grey;
    cursor: pointer;
    &:hover{
        background: teal;
        color: white;
    }
}
  

</style>
