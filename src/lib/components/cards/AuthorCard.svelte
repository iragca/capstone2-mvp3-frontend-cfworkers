<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		name,
		badge = undefined,
		description
	} = $props<{
		children: Snippet;
		name: string;
		badge: string | undefined;
		description: string;
	}>();
</script>

<div class="card w-140 max-w-180 min-w-100 flex-row bg-base-100 shadow-sm">
	<figure class="aspect-square w-40">
		<img
			src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
			alt="Shoes"
			class="h-full w-full rounded-lg object-cover"
		/>
	</figure>

	<div class="card-body">
		<h2 class="card-title">
			{name}
			{#if badge}
				<div class="badge text-nowrap badge-primary">{badge}</div>
			{/if}
		</h2>
		<div class="flex flex-row justify-between">
			<p class="max-w-2/3 text-sm text-zinc-600">
				{description}
			</p>
			<div class="card-actions justify-end">
				{@render children?.()}
			</div>
		</div>
	</div>
</div>
