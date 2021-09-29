const webpack = require("webpack");
const path = require("path");

module.exports =  {
  basePath: '/neokit-website',
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  }};
