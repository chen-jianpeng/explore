import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import * as Sentry from "@sentry/vue";
// import { Integrations } from "@sentry/tracing";

Vue.config.productionTip = false;

// Sentry.init({
//   Vue,
//   dsn: "https://45a2589c7899404fabcb3a87a71226cd@o952126.ingest.sentry.io/5901397",
//   integrations: [
//     new Integrations.BrowserTracing({
//       routingInstrumentation: Sentry.vueRouterInstrumentation(router),
//       tracingOrigins: ["localhost", "192.168.255.10", /^\//],
//     }),
//   ],
//   // Set tracesSampleRate to 1.0 to capture 100%
//   // of transactions for performance monitoring.
//   // We recommend adjusting this value in production
//   tracesSampleRate: 1.0,
// });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
