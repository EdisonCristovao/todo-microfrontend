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
//   name: "@ec/todo-list",
//   app: () => System.import("@ec/todo-list"),
//   activeWhen: (location) => location.pathname === "/list",
// });

start({
  urlRerouteOnly: true,
});
