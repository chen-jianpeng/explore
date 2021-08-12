module.exports = {
  chainWebpack: (config) => {
    config
      .plugin("env")
      .use(require.resolve("webpack/lib/ProvidePlugin"), [
        { _join: ["lodash", "join"] },
      ]);
  },
};
