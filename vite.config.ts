import { sveltekit } from '@sveltejs/kit/vite';
import type { ViteDevServer } from 'vite';
import { defineConfig } from 'vite';

const routes = [' /', ' /docs', ' /about']

const middleWare = () => {
	return  {
		name: "middleware",
		configureServer(server: ViteDevServer) {
			server.middlewares.use((req, _, next) => {
				console.log("Incoming request", req.originalUrl)
				next()
			})
		}
	}
}

export default defineConfig({
	plugins: [sveltekit(), middleWare()],
});
