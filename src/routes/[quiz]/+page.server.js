export async function load({ fetch, params }) {
	const response = await fetch('data.json');
	const data = await response.json();
	const filteredData = data.quizzes.filter((quiz) => quiz.title.toLowerCase() === params.quiz)[0];
	return filteredData;
}
