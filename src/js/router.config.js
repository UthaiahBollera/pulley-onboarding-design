import Home from "./views/home.js";
import List from "./views/help-list.js";

export default [
  {
    path: '/pulley-onboarding-design/',
    view: Home,
    defaultRoute: true
  },
  {
    path: '/pulley-onboarding-design/list',
    view: List
  }
];
