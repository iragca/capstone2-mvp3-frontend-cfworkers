<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, name, badge, description } = $props<{
		children: Snippet;
		name: string;
		badge: string;
		description: string;
	}>();
</script>

<div class="card w-96 bg-base-100 shadow-sm">
	<figure>
		<img
			src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
			alt="Shoes"
		/>
	</figure>
	<div class="card-body">
		<h2 class="card-title">
			{name}
			{#if badge}
				<div class="badge badge-primary">{badge}</div>
			{/if}
		</h2>
		<p>
			{description}
		</p>
		<div class="card-actions justify-end">
			{@render children?.()}
		</div>
	</div>
</div>
