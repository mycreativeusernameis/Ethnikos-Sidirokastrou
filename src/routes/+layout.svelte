<script>
	let { data, children } = $props();
</script>

<header>
	<img src={data.header.logo} alt="Logo" />

	<nav>
		{#each data.header.navigation as item}
			<a href={item.url}>{item.label}</a>
		{/each}
	</nav>
</header>

{@render children()}
