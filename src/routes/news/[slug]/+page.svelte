<script lang="ts">
	import type { Post } from '../../../types/types';

	let { data }: { data: { post: Post } } = $props();
</script>

<article>
	<h1>{data.post.title}</h1>

	<p>{data.post.date}</p>

	<div>
		{data.post.content}
	</div>
</article>
