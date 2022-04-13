<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!--引入组件 -->
    <el-button size="mini" type="primary" @click="click">test-btn</el-button>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'App',
    components: {
      HelloWorld
    },
    methods:{
      click(){
        alert(1)
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
