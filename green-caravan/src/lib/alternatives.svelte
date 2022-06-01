<script context="module">
	// https://kit.svelte.dev/docs/loading
	export async function load({ fetch }) {
		const url = `https://ui-map.shellrecharge.com/api/map/v2/markers/${userLocation.longitude - 0.05}/${userLocation.longitude + 0.05}/${userLocation.latitude - 0.05}/${userLocation.latitude + 0.05}/15`;
		const response = await fetch(url);
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
</script>
