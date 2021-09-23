const withImages = require("next-images");
const webpack = require("webpack");
const path = require("path");

module.exports =  {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  }};
