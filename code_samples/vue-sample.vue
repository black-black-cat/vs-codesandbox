<template>
  <div>
    <div class="title">{{name}}</div>
  </div>
</template>

<script>
const foo = () => {
  let a = 3
}
function bar () {
  let b = 99
  return Math.pow(b)
}
const dumb = {
  run () {
    let words = 'Hello World!'
    return words
  }
}
export default {
  data () {
    return {
      name: ''
    }
  },
  methods: {
    init () {
      this.name = 'Lucy'
    },
    run (target = {}) {
      let {x, y} = target
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
