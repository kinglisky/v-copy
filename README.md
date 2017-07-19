# Vcopy

A simple vue plugin use for copy.

`npm i vcopy --save`

```javascript
import Vue from 'vue'
import vcopy from 'vcopy'

Vue.use(vcopy, {
  // directive name
  name: 'copy',
  // success tip
  success: function () {
    alert('copy success')
  },
  // failure tip
  failure: function () {
    alert('copy failure')
  },
  // format copy content
  formater: function (v) {
    return String(v)
  }
})

```

```vue
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
```

[vcopy demo](https://codepen.io/kinglisky/pen/BZgZNZ)

