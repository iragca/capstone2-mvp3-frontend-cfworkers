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

<div class="card w-fit flex-col md:flex-row flex-1 bg-base-100 shadow-sm">
	<figure class="aspect-square w-40 min-w-40 max-w-40 mx-auto ">
		<img
			src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
			alt="Shoes"
			class="w-full aspect-square not-only:rounded-lg object-cover"
		/>
	</figure>

	<div class="card-body">
		<h2 class="card-title w-fit text-nowrap flex-col md:flex-row">
			{name}
			{#if badge}
				<div class="badge text-nowrap badge-primary">{badge}</div>
			{/if}
		</h2>
		<div class="flex md:flex-row flex-col justify-between gap-4 w-fit">
			<p class="max-w-2/3 text-sm text-zinc-600">
				{description}
			</p>
			<div class="card-actions justify-left">
				{@render children?.()}
			</div>
		</div>
	</div>
</div>
