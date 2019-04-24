process.env.NODE_ENV = 'production';

const fs = require('fs-extra');
const paths = require('../config/paths');
const webpack = require('webpack');
const configFactory = require('../config/webpack.config');

// removes react-dev-utils/webpackHotDevClient.js at first in the array
let config = configFactory("production")


webpack(config).watch({
    poll:1000,//监测修改的时间(ms)
    aggregeateTimeout:500, //防止重复按键，500毫米内算按键一次
}, (err, stats) => {

  console.group("watch build")

  

  if (err) {
    console.error(err);
  } else {
    copyPublicFolder();
  }

  Object.keys( stats.compilation.assets).forEach((item)=>{
    console.info(item,stats.compilation.assets[item]._size)
  })
  

  console.groupEnd()

});

function copyPublicFolder() {
    fs.copySync(paths.appPublic, paths.appBuild, {
      dereference: true,
      filter: file => file !== paths.appHtml,
    });
  }