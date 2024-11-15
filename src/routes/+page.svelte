<script>
	import ListItem from '$lib/components/ListItem.svelte';
	export let data;
</script>

<h1>Welcome to the <strong class="text-primary">Frontend Quiz!</strong></h1>
<p>Pick a subject to get started.</p>

<div class="flex flex-col gap-4">
	{#each data.quizzes as quiz, index (quiz.title)}
		<a href="/{quiz.title.toLowerCase()}"><ListItem title={quiz.title} {index} /></a>
	{/each}
</div>
