<script>
	import { base } from '$app/paths';

	const year = new Date().getFullYear();

	const socials = [
		{
			name: 'Facebook',
			href: 'https://www.facebook.com/ethnikosfc1928',
			path: 'M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z'
		},
		{
			name: 'YouTube',
			href: 'https://www.youtube.com/@%CE%95%CE%B8%CE%BD%CE%B9%CE%BA%CF%8C%CF%82%CE%A3%CE%B9%CE%B4%CE%B7%CF%81%CE%BF%CE%BA%CE%AC%CF%83%CF%84%CF%81%CE%BF%CF%85',
			path: 'M23.5 6.75a3.02 3.02 0 0 0-2.12-2.14C19.51 4.1 12 4.1 12 4.1s-7.51 0-9.38.51A3.02 3.02 0 0 0 .5 6.75 31.6 31.6 0 0 0 0 12.5a31.6 31.6 0 0 0 .5 5.75 3.02 3.02 0 0 0 2.12 2.14c1.87.51 9.38.51 9.38.51s7.51 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12.5a31.6 31.6 0 0 0-.5-5.75ZM9.6 16.02V8.98l6.27 3.52-6.27 3.52Z'
		}
	];
</script>

<div class="page">
	<div class="stripes" aria-hidden="true"></div>
	<div class="vignette" aria-hidden="true"></div>

	<main class="content">
		<div class="crest-wrap">
			<div class="crest-glow" aria-hidden="true"></div>
			<div class="crest-plate" aria-hidden="true"></div>
			<img src={`${base}/media/ethnikos.png`} alt="Έμβλημα Εθνικού Σιδηροκάστρου" class="crest" />
		</div>

		<p class="eyebrow">Ποδοσφαιρικός Σύλλογος&nbsp;&middot;&nbsp;Σιδηρόκαστρο</p>

		<h1 class="club-name">
			ΕΘΝΙΚΟΣ
			<span class="club-name-sub">ΣΙΔΗΡΟΚΑΣΤΡΟΥ</span>
		</h1>

		<div class="est" aria-hidden="true">
			<span class="est-line"></span>
			<span class="est-text">Ίδρυση&nbsp;1928</span>
			<span class="est-line"></span>
		</div>

		<h2 class="coming-soon">Έρχεται σύντομα</h2>
		<p class="tagline">Η νέα ιστοσελίδα του συλλόγου χτίζεται.<br />Σύντομα κοντά σας.</p>

		<nav class="socials" aria-label="Σύνδεσμοι κοινωνικών δικτύων">
			{#each socials as s}
				<a
					class="social-link"
					href={s.href}
					aria-label={s.name}
					target="_blank"
					rel="noopener noreferrer"
				>
					<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
						<path d={s.path} />
					</svg>
				</a>
			{/each}
		</nav>
	</main>

	<div class="pitch-arc" aria-hidden="true"></div>

	<footer class="footer">
		<p>&copy; {year} Εθνικός Σιδηροκάστρου</p>
	</footer>
</div>

<style>
	/* If this component lives inside a larger app, prefer loading these
     fonts once in your global <head> instead of per-component. */
	@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap');

	:global(html),
	:global(body) {
		margin: 0;
		padding: 0;
	}

	.page {
		--navy: #10254e;
		--navy-deep: #081633;
		--royal: #2359a6;
		--white: #ffffff;
		--brass: #c6a568;
		--mist: rgba(255, 255, 255, 0.86);

		position: relative;
		min-height: 100vh;
		width: 100%;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: radial-gradient(
			120% 90% at 50% -10%,
			var(--royal) 0%,
			var(--navy) 45%,
			var(--navy-deep) 100%
		);
		color: var(--white);
		font-family: 'Inter', system-ui, sans-serif;
		text-align: center;
		padding: 3rem 1.5rem 2.5rem;
		box-sizing: border-box;
	}

	/* Signature element: a slow-drifting jersey pinstripe, echoing the crest */
	.stripes {
		position: absolute;
		inset: -10%;
		background-image: repeating-linear-gradient(
			90deg,
			transparent 0,
			transparent 46px,
			rgba(255, 255, 255, 0.07) 46px,
			rgba(255, 255, 255, 0.07) 68px
		);
		animation: drift 26s linear infinite;
		pointer-events: none;
	}

	@keyframes drift {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-114px);
		}
	}

	.vignette {
		position: absolute;
		inset: 0;
		background: radial-gradient(60% 50% at 50% 38%, transparent 0%, rgba(4, 10, 26, 0.55) 100%);
		pointer-events: none;
	}

	.content {
		position: relative;
		z-index: 2;
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 40rem;
		animation: rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
	}

	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(14px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.crest-wrap {
		position: relative;
		width: clamp(150px, 26vw, 208px);
		margin-bottom: 2rem;
	}

	/* Soft medallion plate: without this the navy crest sits directly on
     navy stripes and disappears. The plate gives it a spotlit surface
     to stand on so the blue reads crisp instead of blending away. */
	.crest-plate {
		position: absolute;
		inset: -14%;
		border-radius: 50%;
		background: radial-gradient(
			circle at 50% 42%,
			#fdfeff 0%,
			#eef3fb 46%,
			rgba(238, 243, 251, 0) 72%
		);
		box-shadow: 0 18px 46px rgba(3, 9, 24, 0.55);
		z-index: 0;
	}

	.crest-glow {
		position: absolute;
		inset: -38%;
		background: radial-gradient(circle, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0) 62%);
		animation: floodlight 4.5s ease-in-out infinite;
		z-index: 0;
	}

	@keyframes floodlight {
		0%,
		100% {
			opacity: 0.5;
			transform: scale(0.96);
		}
		50% {
			opacity: 0.9;
			transform: scale(1.06);
		}
	}

	.crest {
		position: relative;
		z-index: 1;
		width: 82%;
		height: auto;
		display: block;
		margin: 9% auto 0;
		filter: drop-shadow(0 6px 14px rgba(8, 20, 45, 0.35));
	}

	.eyebrow {
		margin: 0 0 0.6rem;
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.72rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--mist);
	}

	.club-name {
		margin: 0;
		font-family: 'Bebas Neue', 'Inter', sans-serif;
		line-height: 0.95;
		font-size: clamp(2.6rem, 8vw, 4.2rem);
		letter-spacing: 0.03em;
		color: var(--white);
	}

	.club-name-sub {
		display: block;
		font-size: clamp(1.15rem, 3.4vw, 1.7rem);
		letter-spacing: 0.14em;
		color: var(--mist);
		margin-top: 0.2rem;
	}

	.est {
		display: flex;
		align-items: center;
		gap: 0.85rem;
		margin: 1.5rem 0 1.75rem;
		width: 100%;
		max-width: 20rem;
	}

	.est-line {
		flex: 1;
		height: 1px;
		background: linear-gradient(90deg, transparent, var(--brass), transparent);
	}

	.est-text {
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.78rem;
		letter-spacing: 0.12em;
		color: var(--brass);
		white-space: nowrap;
	}

	.coming-soon {
		margin: 0 0 0.6rem;
		font-family: 'Bebas Neue', 'Inter', sans-serif;
		font-size: clamp(1.6rem, 4.6vw, 2.2rem);
		letter-spacing: 0.05em;
		color: var(--white);
	}

	.tagline {
		margin: 0 0 2.1rem;
		font-size: 0.98rem;
		line-height: 1.55;
		color: var(--mist);
	}

	.socials {
		display: flex;
		gap: 0.9rem;
	}

	.social-link {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.6rem;
		height: 2.6rem;
		border-radius: 999px;
		border: 1px solid rgba(255, 255, 255, 0.28);
		color: var(--white);
		background: rgba(255, 255, 255, 0.06);
		transition:
			background 0.2s ease,
			transform 0.2s ease,
			border-color 0.2s ease;
	}

	.social-link:hover {
		background: rgba(255, 255, 255, 0.16);
		border-color: rgba(255, 255, 255, 0.5);
		transform: translateY(-2px);
	}

	.social-link:focus-visible {
		outline: 2px solid var(--brass);
		outline-offset: 3px;
	}

	/* Faint halfway-line center circle grounding the page on a pitch */
	.pitch-arc {
		position: absolute;
		bottom: -18vw;
		left: 50%;
		width: 60vw;
		height: 60vw;
		max-width: 640px;
		max-height: 640px;
		transform: translateX(-50%);
		border: 1px solid rgba(255, 255, 255, 0.14);
		border-radius: 50%;
		pointer-events: none;
		z-index: 1;
	}

	.footer {
		position: relative;
		z-index: 2;
		margin-top: 2.75rem;
	}

	.footer p {
		margin: 0;
		font-size: 0.75rem;
		letter-spacing: 0.04em;
		color: rgba(255, 255, 255, 0.5);
	}

	@media (max-width: 420px) {
		.page {
			padding: 2.25rem 1.25rem 2rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.stripes,
		.crest-glow,
		.content {
			animation: none;
		}
	}
</style>
