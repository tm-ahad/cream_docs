class Router {
	routes = {};
	defaultRoute = {
		refresh: true,
		handler: () => {}
	};
	constructor() {
		window.__CREAM__.router = {
			routes: {},
			defaultRoute: this.defaultRoute
		};
	}
	setHandle(path, handler, refresh) {
		this.routes[path] = {
			handler,
			refresh
		};
	}
	setDefaultHandler(handler, refresh) {
		this.defaultRoute = {
			refresh,
			handler
		};
	}
	serve(location = window.location) {
		const pathname = location.pathname;
		const query = new URLSearchParams(location.search);
		const route = this.routes[pathname] ?? this.defaultRoute;
		if (route.refresh) document.body.replaceChildren();
		route.handler({ ctx: {
			params: [],
			path: pathname,
			query: Object.fromEntries(query)
		} });
		window.addEventListener('popstate', () => this.serve());
	}
	static visit(path) {
		history.pushState({}, '', path);
		if (window.__CREAM__.router) {
			window.__CREAM__.router.serve(window.location);
		}
	}
}
export { Router };
