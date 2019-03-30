<template>
  <div class="container">
        
    <h1 class="title">Bonus Round!</h1>
    
    <div v-if="complete">
      <div class="feedback">
        <p v-if="winner">Good job. £1000 to you.</p>
        <p v-else>Bad luck, you didn't catch it in time</p>
      </div>
      <button class="continue" @click="$emit('gameOver')">Continue</button>
    </div>
    <div v-else>
      <p class="instructions">{{ game.instruction }}</p>
      <p class="clock">{{ timeRemaining }}</p>
      <div @click="gotIt" class="slippery-dot"></div>
    </div>
    
  </div>


</template>

<script>

export default {
  name: 'GameDetail',
  data(){
    return{
      timeRemaining: 10,
      complete: false,
      winner: false
    }
  },
  props: ['game'],
  methods: {
    gotIt: function(){
      this.$store.state.score+=1000;
      this.winner = true;
      this.complete = true;
    } 
  },
  created(){
    setInterval(()=>{
      this.timeRemaining--;
      if(this.timeRemaining == 0){
        this.complete = true; 
      }
    }, 1000);
  }
}

</script>


<style scoped lang="scss">

  .game-container {
    margin-top: 50px;
    text-align: center;
  }
  .title {
    padding: 10px 20px;
    background: rgba(27, 199, 162, 0.932);
    display: inline-block;
  }
  .instructions {
    color: white;
    font-size: 25px;
    margin-top: 0;
    font-weight: 100;
  }
  .clock {
    margin-top: 0;
    font-size: 60px;
    color: white;
    font-weight: 100;
  }
  .slippery-dot {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: yellow;
    cursor: pointer;
    animation: runAway 5s infinite; 
  }
  .feedback {
    color: white;
    font-size: 25px;
    margin-bottom: 40px;
  }

  @keyframes runAway {
    0% {
      top: 100px;
      left: 100px;
    }
    25% {
      top: 400px;
      left: 400px;
    }
    50% {
      top: 700px;
      left: 200px;
    }
    75% {
      top: 300px;
      left: 900px;
    }
    100% {
      top: 100px;
      left: 100px;
    }
  }

</style>
