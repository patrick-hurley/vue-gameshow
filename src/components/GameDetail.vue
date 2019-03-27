<template>
  <div>
    <p>{{ game.instruction }}</p>
    <div @click="gotIt" class="slippery-dot"></div>
  </div>
</template>

<script>

export default {
  name: 'GameDetail',
  props: ['game'],
  methods: {
    gotIt(){
      alert('Hurrah. Slippery fucker');
    }
  } 
}

</script>


<style scoped lang="scss">
  .slippery-dot {
    position: absolute;
    width: 50px;
    height: 50px;
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
