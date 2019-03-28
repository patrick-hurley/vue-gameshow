<template>
  <div>

    <h1>Bonus Round!</h1>

    <div v-if="complete">
        <p v-if="correct">You got it!</p>
        <p v-else>Bad luck, wrong cup</p>
        <button @click="$emit('gameOver')">Next question</button>
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
      },9000)
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
    animation-delay: 5.5s;
    animation-fill-mode: forwards;
}

.cup-area {
    width: 1000px;
    height: 300px;
    margin: 150px auto 50px;
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
    animation-duration: 3s;
}

.cup {
    position: absolute;
    left: 50px;
    width: 200px;
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
    left: 350px;
    animation-name: cup2;
}

#cup3 {
    left: 700px;
    animation-name: cup3;
}

.ball {
    position: absolute;
    bottom: 10px;
    left: 100px;
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
    25%{
        left: 350px;
    }
    50%{
        left: 0;
    }
    100%{
        left: 700px;
    }
}

@keyframes cup2 {
    0% {
        left: 350px;
    }
    25%{
        left: 0;
    }
    50%{
        left: 700px;
    }
    100%{
        left: 350px;
    }
}

@keyframes cup3 {
    0% {
        left: 700px;
    }
    25%{
        left: 700px;
    }
    50%{
        left: 350px;
    }
    100%{
        left: 0px;
    }
}

@keyframes correctCup {
    50% {
        transform: translateX(-200px) translateY(-200px) rotate(-50deg)
    }
}

</style>
