<script>
	import { onMount } from 'svelte';

	let videoEl;
	onMount(() => {
		if ('BarcodeDetector' in window) {
			getCamera(videoEl);
		} else {
		}
	});

	async function getCamera(video) {
		const camera = await navigator.mediaDevices.getUserMedia({
			video: {
				facingMode: {
					ideal: 'environment'
				}
			},
			audio: false
		});
		videoEl.srcObject = camera;
		await video.play();

		detectBarcode(video);
	}

	function detectBarcode(video) {
		const barcodeDetector = new BarcodeDetector({ formats: ['qr_code'] });

		window.setInterval(async () => {
			const barcodes = await barcodeDetector.detect(video);
			if (barcodes.length <= 0) {
				return;
			} else {
				window.location.pathname = `/charger/${barcodes[0].rawValue}`;
			}
		}, 1000);
	}
</script>

<video bind:this={videoEl} />
<div class="video-overlay" />

<style>
	div {
		position: absolute;
		top: 0;
		background-color: black;
		opacity: 0.6;
		width: 100%;
		height: 100%;
		clip-path: polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 50%, 25% 50%, 25% 100%, 100% 100%, 100% 0%);
	}
</style>
