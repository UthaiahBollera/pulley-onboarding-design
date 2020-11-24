import Router from "./src/js/lib/router.js";
import routerConfig from "./src/js/router.config.js";
const mountDoc = document.querySelector('#app');
var router = new Router(routerConfig, mountDoc);
export default {};
