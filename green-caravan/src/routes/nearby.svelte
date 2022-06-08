<script context="module">
	// https://kit.svelte.dev/docs/loading
	export async function load({ fetch }) {
		let userLocation = { latitude: 52.0779193, longitude: 4.7562881 };
		const url = `https://ui-map.shellrecharge.com/api/map/v2/markers/${userLocation.longitude - 0.05}/${userLocation.longitude + 0.05}/${userLocation.latitude - 0.05}/${userLocation.latitude + 0.05}/15`;
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, OPTIONS'
			},
			mode: 'cors'
		});
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
	import SearchBar from '../lib/searchBar.svelte';

	let userLocation;

	function getLocation() {
		navigator.geolocation.getCurrentPosition((position) => {
			let userLocation = { latitude: position.coords.latitude, longtitude: position.coords.longitude };
			console.log(userLocation);
		});
	}

	// https://svelte.dev/tutorial/onmount -> zodat eerst de DOM wordt geladen, anders werkt navigator niet.
	onMount(() => {
		getLocation();
	});

	export let data;
</script>

<SearchBar />
<ul>
	{#each data as cs}
		<li>
			<a href="/">{cs.operatorName}</a>
		</li>
	{/each}
</ul>
