<template>
  <div>

    <h1>Bonus Round!</h1>
    
    <div v-if="complete">
        <p>{{ finalTime }}</p>
        <p v-if="success">You did it! 1 point to you.</p>
        <p v-else>Bad luck... so close.</p>
        <button @click="$emit('gameOver')">Next question</button>
    </div>
    <div v-else>
        <p>{{ game.instruction }}</p>
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
      success: false,
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
          let timeAway = 10000 - this.timer;
          if(timeAway >= -500 && timeAway <= 500){
            this.$store.state.score++;
            this.success = true;
          } 
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
