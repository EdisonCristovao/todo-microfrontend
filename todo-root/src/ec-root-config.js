import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });
registerApplication({
  name: "@ec/todo-header",
  app: () => System.import("@ec/todo-header"),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@ec/navbar",
//   app: () => System.import("@ec/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
