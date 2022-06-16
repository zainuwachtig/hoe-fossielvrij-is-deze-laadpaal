<script>
	import { onMount } from 'svelte';

	export let letItRain;
	export let itemName;
	export let itemAmount;
	export let itemEmoji;

	let item;

	const createItem = () => {
		const element = document.createElement('span');
		let itemContent = document.createTextNode(`${itemEmoji}`);
		addClassProperties(element);
		element.appendChild(itemContent);
		item.appendChild(element);
	};

	const addClassProperties = (element) => {
		let animationDelay = Math.random() * 14;
		element.style.setProperty('--animation-delay', `${animationDelay}s`);

		let startPositie = Math.floor(Math.random() * 95);
		element.style.setProperty('--startpositie', `${startPositie}%`);

		let fontSize = Math.floor(Math.random() * 200);
		element.style.fontSize = `${fontSize}%`;

		element.classList.add('vallende');
		item.classList.add('vergelijking-tonen');
	};

	letItRain = () => {
		for (let index = 0; index < itemAmount; index++) {
			createItem();
		}
	};
</script>

<div class="vergelijking" bind:this={item} on:click={letItRain}>
	<p>15.000g CO2 is</p>
	<h2><span>{itemAmount}</span> {itemName}</h2>
</div>

<style>
	.vergelijking {
		color: white;
		/* opacity: 0; */
		flex: 0 0 auto;
		width: 100%;
		scroll-snap-align: center;
		text-align: center;
		position: relative;
	}

	.vergelijking h2 {
		z-index: 10;
		position: relative;
	}
</style>
