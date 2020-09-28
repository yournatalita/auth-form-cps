const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const nodeEnv = process.env.NODE_ENV;
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

const dev = nodeEnv !== 'production';
const withImages = require('next-images');

const baseUrl = process.env.API_URL;
const siteUrl = process.env.SITE_URL;
const domain = process.env.DOMAIN;

const config = {
  webpack: config => {
    config.devtool = 'eval-source-map';
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    config.plugins.push(
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/
      })
    );
    return config;
  },
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: true,
    url: false,
    modules: true,
    localIdentName: dev ? '[name]__[local]___[hash:base64:5]' : '[hash:base64:5]'
  },
  publicRuntimeConfig: {
    baseUrl,
    siteUrl,
    domain,
  }
};

module.exports = withImages(config);