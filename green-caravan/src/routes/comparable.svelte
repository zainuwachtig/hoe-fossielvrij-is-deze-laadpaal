<script>
	import { onMount } from 'svelte';

	const createItem = (container, emoji) => {
		const element = document.createElement('span');
		let itemContent = document.createTextNode(`${emoji}`);
		addClassProperties(element);
		element.appendChild(itemContent);
		container.appendChild(element);
	};

	const addClassProperties = (element) => {
		let animationDelay = Math.random() * 14;
		element.style.setProperty('--animation-delay', `${animationDelay}s`);

		let startPositie = Math.floor(Math.random() * 95);
		element.style.setProperty('--startpositie', `${startPositie}%`);

		let fontSize = Math.floor(Math.random() * 200);
		element.style.fontSize = `${fontSize}%`;

		element.classList.add('vallende');
		document.querySelector('.vergelijking').classList.add('vergelijking-tonen');
	};

	const letItRain = (itemAmount, emoji) => {
		// Buiten de functie zodat die niet de hele tijd die query selector hoeft te doen (performance)
		const container = document.querySelector('.vergelijking');

		for (let index = 0; index < itemAmount; index++) {
			createItem(container, emoji);
		}
	};

	onMount(() => {
		// document.querySelector('body').addEventListener('click', letItRain(1072, '🚬'));
		letItRain(1072, '🚬');
	});
</script>

<div class="main">
	<p>Hoeveel CO2 komt er vrij?</p>
	<h1>Laadpaal</h1>
	<p>Bij het opladen van je elektrische auto komen er fossiele brandstoffen vrij. Waar valt dat mee te vergelijken?</p>
	<section class="rain">
		<div class="vergelijking">
			<p>15.000g CO2 is</p>
			<h2>1.072 sigaretten</h2>
		</div>
		<div class="vergelijking">
			<p>15.000g CO2 is</p>
			<h2>1.072 theetjes</h2>
		</div>
		<div class="vergelijking">
			<p>15.000g CO2 is</p>
			<h2>3 uur douchen</h2>
		</div>
	</section>
</div>

<style>
	.main {
		background-color: var(--primary-color);
		height: 100vh;
		padding-top: 3rem;
	}

	.rain {
		height: 70%;
		margin-top: 1rem;
		display: flex;
		overflow-x: scroll;
	}

	h1,
	h2,
	p {
		color: white;
		text-align: center;
		width: 90%;
		margin: 0 auto;
	}

	p:first-of-type {
		opacity: 0.6;
		font-size: 18px;
	}

	.vergelijking {
		/* position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%); */
		z-index: 10;
		color: white;
		opacity: 0;
		flex: 0 0 auto;
		width: 100%;
	}
</style>
