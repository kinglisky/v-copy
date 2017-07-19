<template>
  <div id="app">
    <textarea v-model="msg"></textarea>
    <button v-copy="msg">COPY</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your'
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 20px 18px;
}

textarea {
  width: 600px;
  height: 300px;
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 10px;
  line-height: 2;
}

button {
  padding: 10px 16px;
  display: block;
}

</style>
