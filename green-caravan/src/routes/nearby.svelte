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
