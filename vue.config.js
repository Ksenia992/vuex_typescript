module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/scss/lib/_lib.scss";'
      }
    }
  }
}
