import matter from 'gray-matter';

const files = import.meta.glob('/content/news/*.md', {
	eager: true,
	query: '?raw',
	import: 'default'
});

export function getPosts() {
	return Object.entries(files)
		.map(([path, raw]) => {
			const { data, content } = matter(raw);

			const filename = path.split('/').pop();

			if (!filename) {
				throw new Error(`Invalid post path: ${path}`);
			}

			return {
				slug: filename.replace('.md', ''),
				title: data.title,
				date: data.date,
				content
			};
		})
		.sort((a, b) => {
			return new Date(b.date).getTime() - new Date(a.date).getTime();
		});
}
