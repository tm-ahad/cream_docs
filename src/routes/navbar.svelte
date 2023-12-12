<script lang="ts">
	import '../app.css';
</script>
<title>Cream</title>
<body>
	<nav class="bg-emerald-500 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">	
		<div class="bg-emerald-500 container flex flex-wrap justify-start items-center mx-auto">
			<button
				data-cozllapse-toggle="navbar-default"
				type="button"
				class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				aria-controls="navbar-default"
				aria-expanded="false"
			>
			</button>
			<div class="relative">
				<input type="text" placeholder="Search..." class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal">
				<div class="absolute inset-y-0 right-0 flex items-center">
				  <button type="submit" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r-lg">
					Search
				  </button>
				</div>
			</div>
			<a href="/" class="nav-item">Home</a>
			<a href="/docs" class="nav-item">Docs</a>
			<a href="/about" class="nav-item" >About</a>	
		</div>
	</nav>
</body>