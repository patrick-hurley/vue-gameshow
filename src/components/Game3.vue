<template>
  <div class="container">

    <h1>Bonus Round</h1>

    <div v-if="complete">
        <div class="feedback">
            <p v-if="correct">Correct. £1000 to you.</p>
            <p v-else>Wrong cup.</p>
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
        <p class="late-instructions">{{ game.instruction }}</p>
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
  },
  mounted () {
    window.scroll(0,0)
  }
}

</script>


<style scoped lang="scss">

.late-instructions {
  font-size: 35px;
  text-align: center;
  opacity: 0;
  color: white;
  margin-top: 20px;
  animation-name: fade;
  animation-duration: 1s;
  animation-delay: 8s;
  animation-fill-mode: forwards;
}

.cup-area {
  position: relative;
  @media only screen and (min-width: 801px){
    width: 800px;
  }
  height: 280px;
  margin: 80px auto 0px;
  @media only screen and (max-width: 800px){
    margin: 0 auto;
    height: 200px;
  }
}

.cup-container {
  position: absolute;
  top: 0;
  height: 300px;
  display: inline-block;
  margin-right: 25px;
  animation-fill-mode: forwards;
  animation-delay: 3.5s;
  animation-duration: 5s;
  @media only screen and (max-width: 800px){
    transform: scale(0.4);
    width: 80px;
  }
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
  left: 35%;
  animation-name: cup2;
}

#cup3 {
  left: 70%;
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
    left: 38%;
  }
  24%{
    left: 70%;
  }
  36%{
    left: 0;
  }
  48% {
    left: 0;
  }
  60% {
    left: 35%;
  }
  72% {
    left: 35%;
  }
  84% {
    left: 70%;
  }
  100% {
    left: 0;
  }
}

@keyframes cup2 {
  0% {
    left: 35%;
  }
  12%{
    left: 0;
  }
  24%{
    left: 0;
  }
  36%{
    left: 70%;
  }
  48% {
    left: 35%;
  }
  60% {
    left: 0;
  }
  72% {
    left: 70%;
  }
  84% {
    left: 35%;
  }
  100% {
    left: 35%;
  }
}

@keyframes cup3 {
  0% {
    left: 70%;
  }
  12%{
    left: 70%;
  }
  24%{
    left: 35%;
  }
  36%{
    left: 35%;
  }
  48% {
    left: 70%;
  }
  60% {
    left: 70%;
  }
  72% {
    left: 0;
  }
  84% {
    left: 0;
  }
  100% {
    left: 70%;
  }
}

@keyframes correctCup {
  50% {
    transform: translateX(-100px) translateY(-100px) rotate(-30deg)
  }
}

</style>
