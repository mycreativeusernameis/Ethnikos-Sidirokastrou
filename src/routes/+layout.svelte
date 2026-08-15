<script>
	let { children } = $props();

	import { PUBLIC_COMING_SOON } from '$env/static/public';
	import CommingSoonGuard from '../components/CommingSoonGuard.svelte';

	const commingSoon = PUBLIC_COMING_SOON === 'false';
</script>

{#if !commingSoon}
	<CommingSoonGuard />
{:else}
	{@render children()}
{/if}
