<script>
	import '../app.css';
	import 'iconify-icon';

	let theme = 'dark';

	function switchTheme() {
		theme = theme === 'dark' ? 'light' : 'dark';
	}
</script>

<div data-theme={theme} class="min-h-screen p-4">
	<div class="flex justify-end">
		<div class="flex gap-1">
			<iconify-icon icon="lucide-sun" class="text-2xl"></iconify-icon>
			<input
				type="checkbox"
				class="toggle border-none bg-white [--tglbg:#a729f5] hover:bg-white"
				checked="checked "
				on:click={switchTheme}
			/>
			<iconify-icon icon="lucide-moon" class="text-2xl"></iconify-icon>
		</div>
	</div>
	<slot />
</div>
