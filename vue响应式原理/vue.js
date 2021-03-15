class Vue {
  constructor(options) {
    this.$options = options
    this.$data = options.data
    this.$el = options.el

    new Observer(this, this.$data)

    new Compile(this, this.$el)
  }
}