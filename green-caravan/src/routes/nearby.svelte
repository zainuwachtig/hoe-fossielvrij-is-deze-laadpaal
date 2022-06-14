<script context="module">
	// https://kit.svelte.dev/docs/loading
	export async function load({ fetch }) {
		const response = await fetch('api/ev.json');
		const data = await response.json();
		if (response.ok) {
			return {
				props: {
					data
				}
			};
		}

		return {
			status: response.status
		};
	}
</script>

<script>
	import { onMount } from 'svelte';
	export let data;

	// Dit is de standaard value
	let userLocation = { latitude: 52.370877, longtitude: 4.853705 };
	// let userLocation;

	function getLocation(userLocation) {
		navigator.geolocation.getCurrentPosition((position) => {
			userLocation = { latitude: position.coords.latitude, longtitude: position.coords.longitude };
			console.log(userLocation);
			return userLocation;
		});
	}

	async function sendLocation(userLocation) {
		// getLocation(userLocation);
		console.log(userLocation);
		const response = await fetch('api/ev.json', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userLocation)
		});
		data = await response.json();
	}

	// async function reverseGeocoding() {
	// 	await data.map((cs) => {
	// 		fetch(
	// 			`https://api.mapbox.com/geocoding/v5/mapbox.places/${cs.coordinates.longitude},${cs.coordinates.latitude}.json?access_token=pk.eyJ1IjoiYnV0dHoxIiwiYSI6ImNsNDVka2UwcTAwMzEzaWxnbDQ2cTZwMmYifQ.0pMJC9U0PPpu8m0krUrkVA`
	// 		)
	// 			.then((response) => response.json())
	// 			.then((data) => {
	// 				cs.name = `${data.features[0].text} ${data.features[0].address}`;
	// 				console.log(cs);
	// 			});
	// 		console.log(data);
	// 	});
	// }

	// https://svelte.dev/tutorial/onmount -> zodat eerst de DOM wordt geladen, anders werkt navigator niet.
	onMount(() => {
		getLocation(userLocation);
	});
</script>

<section>
	<p>Om de laadpalen in de buurt te vinden, hebben we eerst je locatie nodig. Klik hieronder om toegang te geven tot je locatie.</p>
	<button on:click={() => sendLocation(userLocation)}>Geef toegang</button>
</section>
<ul>
	{#each data as cs}
		<li>
			<p>{cs.name}</p>
			<a href="/">{[cs.coordinates.latitude, cs.coordinates.longitude]}</a>
		</li>
	{/each}
</ul>

<style>
	section {
		width: 90%;
		margin: 0 auto;
		border: 2px solid #e7e7e7;
		border-radius: 0.5rem;
		padding: 1rem;
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	button {
		background-color: var(--primary-color);
		color: white;
		padding: 1em 4em;
		margin-top: 1rem;
		border-radius: 2em;
		border: none;
		-webkit-box-shadow: 0 5px 20px #4bcb8d66;
		box-shadow: 0 5px 20px #4bcb8d66;
		transition: 0.2s;
	}

	button:hover,
	button:focus {
		opacity: 0.8;
		transition: 0.2s;
	}
</style>
