import matter from 'gray-matter';

export const prerender = true;

const content = import.meta.glob('/content/settings/*.md', {
	eager: true,
	query: '?raw',
	import: 'default'
});

export function load() {
	const raw = content['/content/settings/header.md'];

	const { data } = matter(raw);

	return {
		header: data
	};
}
