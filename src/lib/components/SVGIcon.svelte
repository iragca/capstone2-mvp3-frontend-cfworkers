<script lang="ts">
	import { type Snippet } from 'svelte';

	let {
		children,
		size = '1em',
		alt,
		color = 'var(--color-primary-content)'
	}: {
		children: Snippet;
		size?: string;
		alt?: string | undefined;
		color?: string;
	} = $props();

	const colorStyle = `color: ${color};`;
</script>

<div class="svg-icon" aria-label={alt} style="width: {size}; height: {size};">
	{@render children()}
</div>

<style>
	.svg-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		align-self: center;
		transition: color 0.1s ease;
		padding: 0;
		overflow: visible;
	}
</style>
