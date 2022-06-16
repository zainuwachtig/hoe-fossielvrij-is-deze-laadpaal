<script>
	import { onMount } from 'svelte';
	import Comparison from '../lib/comparison.svelte';
</script>

<div class="main">
	<p>Hoeveel CO2 komt er vrij?</p>
	<h1>Laadpaal</h1>
	<p>Bij het opladen van je elektrische auto komen er fossiele brandstoffen vrij. Waar valt dat mee te vergelijken?</p>
	<section class="rain">
		<Comparison itemAmount={1072} itemName={'sigaretten'} itemEmoji={'🚬'} />
		<Comparison itemAmount={653} itemName={'theetjes'} itemEmoji={'🫖'} />
		<Comparison itemAmount={180} itemName={'minuten douchen'} itemEmoji={'🚿'} />
		<Comparison itemAmount={60} itemName={'km vliegen'} itemEmoji={'✈️'} />
		<Comparison itemAmount={1500} itemName={'plastic tasjes'} itemEmoji={'🛍'} />
	</section>
</div>

<style>
	.main {
		background-color: var(--primary-color);
		height: 100%;
		padding-top: 3rem;
	}

	.rain {
		height: 78%;
		margin-top: 1rem;
		display: flex;
		overflow-x: scroll;
		scroll-snap-type: x mandatory;
	}

	h1,
	p {
		color: white;
		text-align: center;
		width: 90%;
		margin: 0 auto;
	}

	h1 {
		margin: 0.5rem auto 0.75rem auto;
	}

	p:first-of-type {
		opacity: 0.6;
		font-size: 18px;
	}
</style>
