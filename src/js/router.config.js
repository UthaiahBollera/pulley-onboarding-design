import Home from "./views/home.js";
import List from "./views/help-list.js";

export default [
  {
    path: '/',
    view: Home,
    defaultRoute: true
  },
  {
    path: '/list',
    view: List
  }
];
