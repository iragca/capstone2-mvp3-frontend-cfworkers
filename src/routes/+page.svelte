<script lang="ts">
	import Inference from './inference/Inference.svelte';
	import type { Response } from '$lib/types/inference';
	import Display from './display/Display.svelte';

	let graph_container: HTMLDivElement;
	let { data, form } = $props<{ data: any; form: Response }>();
</script>

<main class="space-y-20 p-8">
	<section class="hero flex min-h-screen items-center justify-center bg-base-200">
		<div class="hero-content flex flex-col gap-12 md:flex-row">
			<div class="max-w-md">
				<h1 class="text-5xl font-bold">Hello there</h1>
				<p class="py-6">
					Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
					exercitationem quasi.
				</p>
				<button class="btn btn-primary">Start Inference</button>
			</div>
			<div
				class="flex flex-1 items-center justify-center rounded-lg bg-gray-100"
				bind:this={graph_container}
			>
				<span class="text-gray-400">[ Graph Illustration ]</span>
			</div>
		</div>
	</section>

	<section class="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
		<div class="space-y-4">
			<h2 class="text-3xl font-bold">Study Details</h2>
			<p class="text-gray-600">Some description about the study goes here.</p>
			<div class="flex h-40 items-center justify-center rounded-lg bg-gray-100 text-gray-400">
				[ Chart ]
			</div>
			<div class="flex h-24 items-center justify-center rounded-lg bg-gray-100 text-gray-400">
				[ Diagram ]
			</div>
		</div>
		<div class="space-y-4">
			<div class="flex h-32 items-center justify-center rounded-lg bg-gray-100 text-gray-400">
				[ Sidebar Content ]
			</div>
			<div class="flex h-32 items-center justify-center rounded-lg bg-gray-100 text-gray-400">
				[ Extra Details ]
			</div>
		</div>
	</section>

	<!-- Inference -->
	<section class="mx-auto max-w-4xl space-y-8">
		<h2 class="text-3xl font-bold">Inference</h2>
		<div class="items-top flex w-full flex-row">
			<Inference />
			<div class="divider divider-horizontal"></div>
			<div class="card grid h-20 w-32 place-items-center rounded-box bg-base-300">
				{#if form && form.success}
					<Display tweets={form.data} />
				{/if}
			</div>
		</div>
	</section>
</main>
