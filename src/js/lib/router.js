class Router {
  constructor (routeConfig = [], mountDoc) {
    this.routes = routeConfig;
    this.mountDoc = mountDoc;
    this.handleEvents();
    this.renderMatchedView();
  }
  
  navigateTo(path) {
    history.pushState(null, null, path);
    this.renderMatchedView();
  }

  handleEvents() {
    //Handled when browser back button is clicked.
    window.addEventListener('popstate', (state) => {
      this.navigateTo(state.target.location.pathname);
    });
    //Handling all the router links
    document.addEventListener('DOMContentLoaded', () => {
      document.body.addEventListener('click', (e) => {
        if (e.target.matches("[data-link]")) {
          e.preventDefault();
          this.navigateTo(e.target.getAttribute('href'));
        }
      }, true);
    });
  }

  async renderMatchedView() {
    //Test each route for potential match
    const potentialMatches = this.routes.map((route) => {
      return {
        ...route,
        isMatch: location.pathname == route.path
      };
    });
    let matchedRoute = potentialMatches.find(potentialMatch => potentialMatch.isMatch);
    if (!matchedRoute) {
      matchedRoute = potentialMatches.find(potentialMatch => potentialMatch.defaultRoute);
    }
    this.mountDoc.innerHTML = "";
    //Render route specific view
    this.mountDoc.appendChild(new matchedRoute.view().getHtml());
  };
};

export default Router;