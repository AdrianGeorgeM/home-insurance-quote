const API_URL = 'http://localhost:3001';

export const fetchQuote = async () => {
	try {
		const response = await fetch(`${API_URL}/quote`);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return response.json();
	} catch (error) {
		console.error('Fetching quote failed:', error);
	}
};

export const fetchAddons = async () => {
	try {
		const response = await fetch(`${API_URL}/addons`);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return response.json();
	} catch (error) {
		console.error('Fetching addons failed:', error);
	}
};
