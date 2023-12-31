<script lang="ts">
	import '../../app.css';
	import Githubicon from "./icons/githubicon.svelte"
</script>
<title>Cream</title>
<body>
	<nav class="bg-emerald-500 border-gray-200 sm:px-4 py-2  dark:bg-gray-900">	
		<div class="bg-emerald-500 container flex flex-wrap justify-start items-center mx-auto">
			<a href="/" class="nav-item">
				<img src="/favicon.png" height="30" width="37" alt=""/>
			</a>
			<a href="/docs" class="nav-item ml-[38%]">Docs</a>
			<a href="/about" class="nav-item ml-[2%]">About</a>
			<a href="/stdlib" class="nav-item ml-[2%]">Stdlib</a>	
			<a href="https://github.com/tm-ahad/cream" class="nav-item ml-[2%]">
				<big>
					<Githubicon/>
				</big>
			</a>	
		</div>
	</nav>
</body>