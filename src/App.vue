<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  body {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    background-image: linear-gradient(to left top, #051937, #003c5f, #006381, #008b98, #17b4a3);
    height: 100vh;
  }

  #app {
    position: relative;
    width: 800px;
    margin: 0 auto;
  }
  .container {
    margin-top: 50px;
    text-align: center;
    h1 {
      padding: 10px 20px;
      background: rgba(27, 199, 162, 0.932);
      display: inline-block;
    }
  }
  .instructions {
    color: white;
    font-size: 25px;
    margin-top: 30px;
    font-weight: 100;
  }
  .feedback {
    color: white;
    margin-bottom: 40px;
    p {
      font-size: 40px;
    }
  }
  .continue {
    padding: 10px 40px;
    background: rgba(255, 255, 255, 0.534);
    font-size: 30px;
    border: none;
    color: black;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    &:hover {
      background: rgba(255, 255, 255, 0.384);
    }
  }

</style>