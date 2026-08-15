import { getPosts } from '$lib/content/posts';

export const prerender = true;

export function load() {
	const posts = getPosts();

	return {
		posts
	};
}
