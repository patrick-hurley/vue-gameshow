<template>
  <div>
    <h1>Bonus Round!</h1>
    <p>{{ game.instruction }}</p>
    <p>{{ timeRemaining }}</p>
    <div @click="gotIt" class="slippery-dot"></div>
  </div>
</template>

<script>

export default {
  name: 'GameDetail',
  data(){
    return{
      timeRemaining: 10
    }
  },
  props: ['game'],
  methods: {
    gotIt: function(){
      this.$store.state.score++;
      this.$emit('gameOver')
    } 
  },
  created(){
    setInterval(()=>{
      this.timeRemaining--;
      if(this.timeRemaining == 0){
        this.$emit('gameOver') 
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
