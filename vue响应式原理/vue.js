class Vue {
  constructor(options) {
    this.$data = options.data
    this.$options = options

    new Observe(this)

    new Compile(this)
  }
}
