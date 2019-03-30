<template>
  <div class="container">

    <h1>Bonus Round!</h1>

    <div v-if="complete">
        <div class="feedback">
            <p v-if="correct">Correct. £1000 to you.</p>
            <p v-else>Bad luck. Wrong cup.</p>
        </div>
        <button class="continue" @click="$emit('gameOver')">Continue</button>
    </div>

    <div v-else>
        <div class="cup-area">
            <div class="cup-container" id="cup1">
                <div class="ball"></div>
                <img v-on="{ click: inProgress ? selectCorrectCup : null }" class="cup" src="../assets/cup.png" alt="cup"/>
                
            </div>
            <div class="cup-container" id="cup2">
                <img v-on="{ click: inProgress ? selectWrongCup : null }" class="cup" src="../assets/cup.png" alt="cup"/>
            </div>
            <div class="cup-container" id="cup3">
                <img v-on="{ click: inProgress ? selectWrongCup : null }" class="cup" src="../assets/cup.png" alt="cup"/>
            </div>
        </div>
        <p class="instructions">{{ game.instruction }}</p>
    </div>


  </div>
</template>

<script>

export default {
  name: 'Game3',
  data(){
    return{
        inProgress: false,
        complete: false,
        correct: false
    }
  },
  props: ['game'],
  methods: {
      selectCorrectCup(){
          this.$store.state.score+=1000;
          this.correct = true;
          this.complete = true;
      },
      selectWrongCup(){
          this.complete = true;
      }
  },
  created(){
      setTimeout(()=>{
          this.inProgress = true;
      },8000)
  }
}

</script>


<style scoped lang="scss">

.instructions {
    font-size: 30px;
    text-align: center;
    opacity: 0;
    animation-name: fade;
    animation-duration: 1s;
    animation-delay: 8s;
    animation-fill-mode: forwards;
}

.cup-area {
    width: 800px;
    height: 300px;
    margin: 80px auto 0px;
    position: relative;
}

.cup-container {
    position: absolute;
    top: 0;
    width: 300px;
    height: 300px;
    display: inline-block;
    margin-right: 25px;
    animation-fill-mode: forwards;
    animation-delay: 3.5s;
    animation-duration: 5s;
}

.cup {
    position: absolute;
    left: 50px;
    width: 150px;
    z-index: 1;
    cursor: pointer;
}

#cup1 {
    left: 0;
    animation-name: cup1;
    img.cup {
            animation: correctCup 2s;
            animation-delay: 1s;
        }
}

#cup2 {
    left: 275px;
    animation-name: cup2;
}

#cup3 {
    left: 550px;
    animation-name: cup3;
}

.ball {
    position: absolute;
    bottom: 80px;
    left: 90px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: yellow;
    border: 3px solid grey;
    z-index: 0;
}

@keyframes fade {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes cup1 {
    0% {
        left: 0;
    }
    12%{
        left: 275px;
    }
    24%{
        left: 550px;
    }
    36%{
        left: 0px;
    }
    48% {
        left: 0px;
    }
    60% {
        left: 275px;
    }
    72% {
        left: 275px;
    }
    84% {
        left: 550px;
    }
    100% {
        left: 0px;
    }
}

@keyframes cup2 {
    0% {
        left: 275px;
    }
    12%{
        left: 0;
    }
    24%{
        left: 0;
    }
    36%{
        left: 550px;
    }
    48% {
        left: 275px;
    }
    60% {
        left: 0;
    }
    72% {
        left: 550px;
    }
    84% {
        left: 275px;
    }
    100% {
        left: 275px;
    }
}

@keyframes cup3 {
    0% {
        left: 550px;
    }
    12%{
        left: 550px;
    }
    24%{
        left: 275px;
    }
    36%{
        left: 275px;
    }
    48% {
        left: 550px;
    }
    60% {
        left: 550px;
    }
    72% {
        left: 0;
    }
    84% {
        left: 0;
    }
    100% {
        left: 550px;
    }
}

@keyframes correctCup {
    50% {
        transform: translateX(-100px) translateY(-100px) rotate(-30deg)
    }
}

</style>
