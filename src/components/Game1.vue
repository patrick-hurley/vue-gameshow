<template>
  <div class="container full-height">
        
    <h1 class="title">Bonus Round</h1>
    
    <div v-if="complete">
      <div class="feedback">
        <p v-if="winner">Got it. £1000 to you.</p>
        <p v-else>You didn't catch it in time.</p>
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
    // setInterval(()=>{
    //   this.timeRemaining--;
    //   if(this.timeRemaining == 0){
    //     this.complete = true; 
    //   }
    // }, 1000);
  },
  mounted () {
    window.scroll(0,0)
  }
}

</script>


<style scoped lang="scss">

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
    animation: runAway 4s infinite; 
  }

.full-height {
  height: 100vh !important;
}

@keyframes runAway {
  0% {
    top: 10%;
    left: 10%;
  }
  25% {
    top: 40%;
    left: 40%;
  }
  50% {
    top: 70%;
    left: 20%;
  }
  75% {
    top: 30%;
    left: 90%;
  }
  100% {
    top: 10%;
    left: 10%;
  }
}

</style>
