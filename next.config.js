const withCSS = require('@zeit/next-css');
const withVideos = require('next-videos');
const withUnitTests = require('./src/utils/withUnitTests');

module.exports = withCSS(withVideos(withUnitTests()));
