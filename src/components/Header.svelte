<script lang="ts">
	type NavItem = {
		label: string;
		url: string;
	};

	let {
		content
	}: {
		content: {
			logo: string;
			navigation: NavItem[];
		};
	} = $props();

	console.log(content);
</script>

<header>
	<!-- <a href="/">{content.logo}</a>

	<nav>
		{#each content.navigation as item}
			<a href={item.url}>{item.label}</a>
		{/each}
	</nav> -->
</header>
