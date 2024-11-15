<script>
	let { icon, title, index, focusAction, correctAnswer, incorrectlySelected, disabled } = $props();
	let ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
</script>

<button
	class="alert flex focus:outline focus:outline-primary {correctAnswer
		? 'outline outline-success'
		: ''} {incorrectlySelected ? 'outline outline-error' : ''}"
	onfocus={focusAction}
	{disabled}
>
	{#if icon}
		<img src={icon} alt={title + '-Icon'} />
	{:else}
		<span>{ABC[index]}</span>
	{/if}
	<span>{title}</span>
</button>
