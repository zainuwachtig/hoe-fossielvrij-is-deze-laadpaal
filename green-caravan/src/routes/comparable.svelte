<script>
	import { onMount } from 'svelte';

	const createItem = (container) => {
		const element = document.createElement('span');
		let itemContent = document.createTextNode('🚬');
		element.classList.add('vallende');
		element.appendChild(itemContent);
		container.appendChild(element);

		// Deze class moet na 1 seconde gegeven worden, zodat ze bovenaan beginnen
		setTimeout(addClassProperties(element), 3000);
	};

	const addClassProperties = (element) => {
		// let valAfstand = Math.floor(Math.random() * 100);
		// element.style.setProperty('--valafstand', `${valAfstand}px`);

		let animationDelay = Math.random() * 14;
		element.style.setProperty('--animation-delay', `${animationDelay}s`);

		let startPositie = Math.floor(Math.random() * 95);
		element.style.setProperty('--startpositie', `${startPositie}%`);

		let fontSize = Math.floor(Math.random() * 200);
		element.style.fontSize = `${fontSize}%`;

		document.querySelector('.vergelijking').classList.add('vergelijking-tonen');
	};

	const letItRain = () => {
		// Buiten de functie zodat die niet de hele tijd die query selector hoeft te doen (performance)
		const container = document.querySelector('.rain');
		let itemAmount = 1072;

		for (let index = 0; index < itemAmount; index++) {
			createItem(container);
		}
	};

	onMount(() => {
		// document.querySelector('body').addEventListener('click', letItRain);
		letItRain();
	});
</script>

<div class="main bubble">
	<p>Hoeveel CO2 komt er vrij?</p>
	<h1>Laadpaal</h1>
	<p>Bij het opladen van je elektrische auto komen er fossiele brandstoffen vrij. Waar valt dat mee te vergelijken?</p>
	<section class="rain">
		<div class="vergelijking">
			<p>15.000g CO2 is</p>
			<h2>1.072 sigaretten</h2>
		</div>
	</section>
</div>

<style>
	.bubble {
		/* background-color: var(--primary-color); */
		height: 100vh;
		padding-top: 3rem;
	}

	.bubble::before {
		position: absolute;
		content: '';
		width: 120%;
		height: 100%;
		inset: 0 0 0 -10%;
		background-color: var(--primary-color);
		z-index: -1;
		transition: 0.5s;
	}

	h1,
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
		position: absolute;
		z-index: 10;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		color: white;
		opacity: 0;
	}
</style>
