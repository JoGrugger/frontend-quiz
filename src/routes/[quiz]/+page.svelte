<script>
	import { page } from '$app/stores';
	import ListItem from '$lib/components/ListItem.svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	let { data } = $props();
	let currentQuestion = $state(0);
	let selectedAnswer = $state('');
	let score = $state(0);

	let submitted = $state(false);
	let showModal = $state(false);
	const progress = tweened(10, {
		duration: 400,
		easing: cubicOut
	});

	function handleSubmit() {
		submitted = true;
		data.questions[currentQuestion].selectedAnswer = selectedAnswer;
		if (selectedAnswer === data.questions[currentQuestion].answer) {
			score++;
		}
	}

	function submitOrShowModal() {
		if (!selectedAnswer) {
			showModal = true;
		} else {
			handleSubmit();
		}
	}

	function nextQuestion() {
		submitted = false;
		currentQuestion++;
		selectedAnswer = '';
		let percentage = ((currentQuestion + 1) / data.questions.length) * 100;
		progress.set(percentage);
		showModal = false;
	}
</script>

<progress class="progress progress-primary w-56" value={$progress} max="100"></progress>

{#if currentQuestion < data.questions.length}
	{#each data.questions as question, index (question.question)}
		{#if index === currentQuestion}
			<p>Question {index + 1} of {data.questions.length}</p>
			<h2>{question.question}</h2>
			{#each question.options as option, index (option)}
				{#key submitted}
					<ListItem
						title={option}
						{index}
						correctAnswer={question.selectedAnswer && question.answer === option}
						incorrectlySelected={question.selectedAnswer === option && question.answer !== option}
						focusAction={() => (selectedAnswer = option)}
						disabled={submitted}
					></ListItem>
				{/key}
			{/each}
		{/if}
	{/each}

	{#if !submitted}
		<button class="btn btn-primary" onclick={submitOrShowModal}>Submit</button>

		{#if showModal}
			<div class="modal modal-open">
				<div class="modal-box">
					<h3 class="font-bold text-lg">Bitte wähle eine Antwort!</h3>
					<p class="py-4">Du musst eine Antwort auswählen, bevor du fortfährst.</p>
					<div class="modal-action">
						<button class="btn" onclick={() => (showModal = false)}>OK</button>
					</div>
				</div>
			</div>
		{/if}
	{:else}
		<button class="btn btn-primary" onclick={nextQuestion}>Next Question</button>
	{/if}
{:else}
	<h2>Game Over!</h2>
	<p>You scored {score} out of {data.questions.length} points!</p>
	<button class="btn btn-primary" onclick={() => window.location.reload()}>Play again!</button>
{/if}
