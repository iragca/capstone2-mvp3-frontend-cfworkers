<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
		name,
		description,
		badge = undefined,
		imageUrl = undefined
	} = $props<{
		children: Snippet;
		name: string;
		description: string;
		badge: string | undefined;
		imageUrl?: string | undefined;
	}>();
</script>

<li class="list-row w-fit flex">
	<div>
		<img
			class="size-10 rounded-box"
			src="https://img.daisyui.com/images/profile/demo/1@94.webp"
			alt={`author: ${name} `}
		/>
	</div>
	<div>
		<div>{name}</div>

		{#if badge}
			<div class="text-xs font-semibold uppercase opacity-60">{badge}</div>
		{/if}
	</div>

	<div class="ml-auto">
		{@render children?.()}
	</div>
</li>
