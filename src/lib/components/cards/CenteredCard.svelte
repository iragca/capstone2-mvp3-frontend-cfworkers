<script lang="ts">
	interface Props {
		title: string;
		description: string;
		imageUrl?: string;
		button_text?: string;
	}

	let { title, description, imageUrl, button_text }: Props = $props();
</script>

<div class="card w-64 bg-base-100 shadow-sm text-zinc-800 border border-zinc-400">
	{#if imageUrl}
		<figure class="px-10 pt-10">
			<img src={imageUrl} alt="Shoes" class="rounded-xl w-24" />
		</figure>
	{/if}
	<div class="card-body items-center text-center">
		<h2 class="card-title font-extrabold">{title}</h2>
		<p>{description}</p>

		{#if button_text}
			<div class="card-actions">
				<button class="btn btn-primary">{button_text}</button>
			</div>
		{/if}
	</div>
</div>
