const { environment } = require('@rails/webpacker')

const webpack = require('webpack')
const dotenv = require('dotenv')

const dotenvFiles = [
  `.env.${process.env.NODE_ENV}.local`,
  '.env.local',
  `.env.${process.env.NODE_ENV}`,
  '.env'
]
dotenvFiles.forEach((dotenvFile) => {
  dotenv.config({ path: dotenvFile, silent: true })
})

environment.plugins.insert(
  "Environment",
  new webpack.EnvironmentPlugin(process.env)
)

environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
    jQuery: 'jquery/src/jquery'
  })
)

const responsiveLoader = {
  test: /\.(jpe?g|png)$/i,
  loader: 'responsive-loader',
  options: {
    adapter: require('responsive-loader/sharp')
  }
};

// Insert json loader at the end of list
environment.loaders.prepend('responsiv-loader', responsiveLoader);

module.exports = environment
