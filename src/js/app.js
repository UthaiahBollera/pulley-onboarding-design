import Router from "./lib/router.js";
import routerConfig from "./router.config.js";
const mountDoc = document.querySelector('#app');
var router = new Router(routerConfig, mountDoc);
export default {};
