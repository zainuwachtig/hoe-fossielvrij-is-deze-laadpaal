<script context="module">
	export async function load({ fetch, params }) {
		const id = params.id;
		const res = await fetch(`/chargers/${id}.json`);
		const charger = await res.json();

		if (res.ok) {
			return {
				props: {
					charger
				}
			};
		}

		return {
			status: res.status,
			error: new Error('Failed to fetch charger')
		};
	}
</script>

<script>
	export let charger;
</script>

<div>
	<h1>Laadpaal: {charger.uid}</h1>
	<span>{charger.address.streetAndNumber}</span>
	<span>Oparator: {charger.operatorName}</span>
</div>

<style>
	span {
		display: block;
	}
</style>
