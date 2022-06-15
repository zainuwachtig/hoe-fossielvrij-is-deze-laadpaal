// Dit is de standaardvalue voor als de gebruiker nog geen toegang heeft gegeven
let userLocation = { latitude: 52.835358, longtitude: 6.897585 };

const reverseGeocoding = async (data) => {
	const newData = await data.map(async (cs) => {
		const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${cs.coordinates.longitude},${cs.coordinates.latitude}.json?access_token=pk.eyJ1IjoiYnV0dHoxIiwiYSI6ImNsNDVka2UwcTAwMzEzaWxnbDQ2cTZwMmYifQ.0pMJC9U0PPpu8m0krUrkVA`;
		const response = await fetch(url);
		const geocodingData = await response.json();

		cs.name = `${geocodingData.features[0].text} ${geocodingData.features[0].address}`;
		// console.log(cs);
		return cs;
	});

	return Promise.all(newData);
};

export const get = async () => {
	const url = `https://ui-map.shellrecharge.com/api/map/v2/markers/${userLocation.longtitude - 0.05}/${userLocation.longtitude + 0.05}/${userLocation.latitude - 0.05}/${userLocation.latitude + 0.05}/15`;
	const response = await fetch(url);
	let data = await response.json();
	data = await reverseGeocoding(data).then((result) => {
		return result;
	});

	if (response.ok) {
		// console.log(data);
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
