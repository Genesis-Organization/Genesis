import {ProjectOptions} from '@vue/cli-service'

const vueConfig: ProjectOptions = {
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

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true,
    },
  },
}

module.exports = vueConfig