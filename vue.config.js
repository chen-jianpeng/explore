module.exports = {
  chainWebpack: (config) => {
    // 单纯这样没有做到按需引入
    // config
    //   .plugin("join")
    //   .use(require.resolve("webpack/lib/ProvidePlugin"), [
    //     { _join: ["lodash", "join"] },
    //   ]);

    config
      .plugin("DllReferencePlugin")
      .use(require.resolve("webpack/lib/DllReferencePlugin"), [
        {
          context: __dirname,
          manifest: require("./public/dll/vue.manifest.json"),
        },
        {
          context: __dirname,
          manifest: require("./public/dll/sentry.manifest.json"),
        },
      ]);
  },
};
