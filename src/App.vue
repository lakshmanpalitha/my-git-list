<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Header/>
    <Stargazers/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header/index.vue'
import Stargazers from './components/Stargazers/index.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Header,
    Stargazers
  }
}
</script>