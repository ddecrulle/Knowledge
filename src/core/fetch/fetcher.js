export const fetcher = (url, method, body) => {
	const headers = {
		Accept: 'application/json, text/plain, */*',
		'Content-Type': 'application/json',
	};
	return fetch(url, {
		headers: headers,
		method,
		body: body ? JSON.stringify(body) : null,
	})
		.then((r) => {
			console.log(r);
			if (r.ok) return r.json();
			throw new Error('API failed');
		})
		.catch((e) => {
			console.log(e);
			throw new Error(`Fetch error for ${url}`);
		});
};
