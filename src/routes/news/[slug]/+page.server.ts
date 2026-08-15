import { error } from '@sveltejs/kit';
import { getPosts } from '$lib/content/posts';
export const prerender = true;

export function entries() {
	return getPosts().map((post) => ({
		slug: post.slug
	}));
}

export function load({ params }) {
	const post = getPosts().find((post) => post.slug === params.slug);

	if (!post) {
		error(404, 'News article not found');
	}

	return { post };
}
