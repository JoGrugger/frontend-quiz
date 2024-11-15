export async function load({ fetch }) {
	const response = await fetch('data.json');
	// console.log(response);
	const data = await response.json();
	// console.log(data);
	return data;
}
