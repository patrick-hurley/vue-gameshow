<template>
  <div>

    <h1>Bonus Round!</h1>

    <div class="cup-area">
        <div class="cup-container" id="cup1">
            <div class="ball"></div>
            <img v-on="{ click: complete ? selectCup : null }" class="cup" src="../assets/cup.png" alt="cup"/>
            
        </div>
        <div class="cup-container" id="cup2">
            <img class="cup" src="../assets/cup.png" alt="cup"/>
        </div>
        <div class="cup-container" id="cup3">
            <img class="cup" src="../assets/cup.png" alt="cup"/>
        </div>
    </div>


  </div>
</template>

<script>

export default {
  name: 'Game3',
  data(){
    return{
        complete: false
    }
  },
  props: ['game'],
  methods: {
      selectCup(){
          alert('you picked it')
      }
  },
  created(){
      setTimeout(()=>{
          this.complete = true;
      },5000)
  }
}

</script>


<style scoped lang="scss">
  
.cup-area {
    width: 1000px;
    margin: 150px auto;
    position: relative;
}

.cup-container {
    position: absolute;
    top: 0;
    width: 300px;
    height: 300px;
    border: 2px solid;
    display: inline-block;
    margin-right: 25px;
    animation-fill-mode: forwards;
    animation-delay: 6s;
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
            animation: correctCup 3s;
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
    0% {
        transform: translateX(0) translateY(0)
    }
    50% {
        transform: translateX(-200px) translateY(-200px) rotate(-50deg)
    }
    100% {
        transform: translateX(0) translateY(0)
    }
}

</style>
