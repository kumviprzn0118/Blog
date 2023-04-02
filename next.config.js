/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const webpack = require('webpack');

module.exports = {
  ...nextConfig,
  webpack: (config) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
      })
    );
    return config;
  },
};
