export const get = async () => {
	let userLocation = { latitude: 52.835358, longitude: 6.897585 };
	const url = `https://ui-map.shellrecharge.com/api/map/v2/markers/${userLocation.longitude - 0.05}/${userLocation.longitude + 0.05}/${userLocation.latitude - 0.05}/${userLocation.latitude + 0.05}/15`;
	const response = await fetch(url);
	const data = await response.json();

	if (response.ok) {
		console.log(data);
		return {
			status: 200,
			body: data
		};
	}

	return {
		status: response.status
	};
};

// https://www.youtube.com/watch?v=J5sJJr4cNWs
export const post = async ({ request }) => {
	const userLocation = await request.json();
	console.log(userLocation);

	const url = `https://ui-map.shellrecharge.com/api/map/v2/markers/${userLocation.longitude - 0.01}/${userLocation.longitude + 0.01}/${userLocation.latitude - 0.01}/${userLocation.latitude + 0.01}/15`;
	const response = await fetch(url);
	const data = await response.json();

	if (response.ok) {
		console.log(data);
		return {
			status: 200,
			body: data
		};
	}

	return {
		status: response.status
	};
};
