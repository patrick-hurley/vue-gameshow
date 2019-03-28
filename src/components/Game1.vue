<template>
  <div>
    <h1>Bonus Round!</h1>
    
    <div v-if="complete">
       <p v-if="winner">Good job. 1 point to you.</p>
       <p v-else>Bad luck, you didn't catch it in time</p>
       <button @click="$emit('gameOver')">Continue</button>
    </div>
    <div v-else>
      <p>{{ game.instruction }}</p>
      <p>{{ timeRemaining }}</p>
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
  .slippery-dot {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: red;
    cursor: pointer;
    animation: runAway 5s infinite; 
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
