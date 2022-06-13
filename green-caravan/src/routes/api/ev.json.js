// Dit is de standaardvalue voor als de gebruiker nog geen toegang heeft gegeven
let userLocation = { latitude: 52.835358, longtitude: 6.897585 };
export const get = async () => {
	const url = `https://ui-map.shellrecharge.com/api/map/v2/markers/${userLocation.longtitude - 0.05}/${userLocation.longtitude + 0.05}/${userLocation.latitude - 0.05}/${userLocation.latitude + 0.05}/15`;
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
	let userLocation = await request.json();
	console.log(userLocation);

	const url = `https://ui-map.shellrecharge.com/api/map/v2/markers/${userLocation.longtitude - 0.03}/${userLocation.longtitude + 0.03}/${userLocation.latitude - 0.03}/${userLocation.latitude + 0.03}/15`;
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
