<script lang="ts">
	import type { Post } from '../../types/types';

	let { data }: { data: { posts: Post[] } } = $props();
	// svelte-ignore state_referenced_locally
</script>

<h1>News</h1>

{#each data.posts as post (post.title)}
	<a href={`/news/${post.slug}`}>
		<h2>{post.title}</h2>
		<p>{post.date}</p>
		<p>{post.content}</p>
	</a>
{/each}
