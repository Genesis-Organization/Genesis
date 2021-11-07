module.exports = {
  pwa: {
    name: 'Genesis',
    themeColor: '#3EA08B',
    appleMobileWebAppCapable: 'yes',
    workboxPluginMode: 'GenerateSW',
  },
  configureWebpack: {
    devServer: {
      historyApiFallback: true,
    },
  },
  devServer: {
    port: 4000,
    host: 'localhost',
  },
}
