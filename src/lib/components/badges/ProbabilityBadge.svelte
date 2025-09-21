<script lang="ts">
	let { score, category }: { score: string; category: string } = $props();
</script>

<abbr title="Probability" class="no-underline ml-auto">
	{#if category === 'High'}
		<div class="badge badge-outline badge-error">{score}</div>
	{:else if category === 'Low'}
		<div class="badge badge-outline badge-success">{score}</div>
	{:else if category === 'Medium'}
		<div class="badge badge-outline badge-neutral">{score}</div>
	{/if}
</abbr>
