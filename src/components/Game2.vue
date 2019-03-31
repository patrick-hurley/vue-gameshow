<template>
  <div class="container">

    <h1>Bonus Round</h1>
    
    <div v-if="complete">
      <div class="feedback">
        <p class="final-time">{{ finalTime }}</p>
        <p v-if="success">Nice. £1000 to you.</p>
        <p v-else>Nope.</p>
      </div>  
      <button class="continue" @click="$emit('gameOver')">Continue</button>
    </div>
    <div v-else>
      <p class="instructions">{{ game.instruction }}</p>
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
          this.$store.state.score+=1000;
          this.success = true;
        } 
        this.complete = true;
    }
  },
  mounted () {
    window.scroll(0,0)
  }
}

</script>


<style scoped lang="scss">

.timer {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 40px auto;
  font-size: 30px;
  background: rgba(255, 255, 255, 0.24);
  color: white;
  font-weight: 100;
  border: 3px solid white;
  outline: none;
  cursor: pointer;
  &:hover{
    background: teal;
    color: white;
  }
}

.final-time {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 100px;
}
  

</style>
