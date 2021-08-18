const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  chainWebpack: (config) => {
    //设置别名
    config.resolve.alias.set("@", resolve("src"));
    config.resolve.alias.set("@utils", resolve("src/utils"));
    config.resolve.alias.set("@components", resolve("src/components"));
    config.resolve.alias.set("@assets", resolve("src/assets"));
  },
  devServer: { 
    open: true,
    // proxy: {
    //   '/api': {
    //     target: '',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': 'api'
    //     }
    //   }
    // }
  }  //打开浏览器窗口
};
