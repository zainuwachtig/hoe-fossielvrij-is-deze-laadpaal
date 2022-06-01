<script context="module">
	let longitude = 4.907986;
	let latitude = 52.3591831;

	// https://kit.svelte.dev/docs/loading
	export async function load({ fetch }) {
		const url = `https://ui-map.shellrecharge.com/api/map/v2/markers/${longitude - 0.05}/${longitude + 0.05}/${latitude - 0.05}/${latitude + 0.05}/15`;
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
	export let data;
	// import Forecast from '$lib/forecast.svelte';
</script>

<h1>Welcome</h1>
<ul>
	{#each data as cs}
		<li>
			<a href="/">{cs.operatorName}</a>
		</li>
	{/each}
</ul>
