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

	// Dit is de standaard value voor de post route -> werkt niet met json.stringify?
	let userLocation = { latitude: 52.370877, longitude: 4.853705 };

	function getLocation() {
		navigator.geolocation.getCurrentPosition((position) => {
			let userLocation = { latitude: position.coords.latitude, longtitude: position.coords.longitude };
			console.log(userLocation);
		});
	}

	async function sendLocation(userLocation) {
		const response = await fetch('api/ev.json', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			// Dit verstuurt wel naar de server als ik het als object er in zet, maar krijg undefined als ik userLocation doe?
			body: JSON.stringify({ userLocation })
		});
		const locationJSON = await response.json();
		console.log('hij verstuurt naar de server');
	}

	// https://svelte.dev/tutorial/onmount -> zodat eerst de DOM wordt geladen, anders werkt navigator niet.
	onMount(() => {
		getLocation();
	});

	export let data;
</script>

<button on:click={sendLocation} value="Geef toegang">Geef toegang</button>
<ul>
	{#each data as cs}
		<li>
			<a href="/">{[cs.coordinates.latitude, cs.coordinates.longitude]}</a>
		</li>
	{/each}
</ul>
