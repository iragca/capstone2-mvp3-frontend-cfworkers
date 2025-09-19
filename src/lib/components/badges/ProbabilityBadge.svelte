<script lang="ts">
	let { score, category }: { score: string; category: string } = $props();
</script>

{#if category === 'High'}
	<div class="ml-auto badge badge-outline badge-error">{score}</div>
{:else if category === 'Low'}
	<div class="ml-auto badge badge-outline badge-success">{score}</div>
{:else if category === 'Medium'}
	<div class="ml-auto badge badge-outline badge-neutral">{score}</div>
{/if}
