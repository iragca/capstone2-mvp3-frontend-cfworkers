<script lang="ts">
	import Inference from './inference/Inference.svelte';
	import type { Response } from '$lib/types/inference';
	import Display from './display/Display.svelte';
	import SvgIcon from '$lib/components/SVGIcon.svelte';
	import arrowForwardSVG from '$lib/assets/material/arrow_forward.svg?raw';
	import Error from '$lib/components/alerts/Error.svelte';

	let graph_container: HTMLDivElement;
	let { data, form } = $props<{ data: any; form: Response }>();
</script>

<main class="space-y-20 bg-zinc-800">
	<section class="hero flex min-h-screen items-center justify-center" title="hero section">
		<div class="hero-content flex flex-col gap-12 md:flex-row">
			<div class="max-w-md">
				<h1 class="text-7xl font-black">TRACE</h1>
				<p class="py-6">
					Textual and Relational Analysis of Community Extremism in BLM Twitter Using BERT and GNNs
				</p>
				<button class="btn btn-primary"
					>Try the Model

					<SvgIcon size="2em">
						{@html arrowForwardSVG}
					</SvgIcon>
				</button>
			</div>
			<div
				class="flex flex-1 items-center justify-center rounded-lg bg-gray-100"
				bind:this={graph_container}
			>
				<span class="text-gray-400">[ Graph Illustration ]</span>
			</div>
		</div>
	</section>

	<section class="mx-auto grid gap-12 bg-zinc-100 md:grid-cols-2" title="about">
		<div class="items-center justify-center space-y-8 p-8 text-center">
			<h2 class="text-3xl font-bold font-extrabold text-zinc-800">About TRACE</h2>
			<p class="text-gray-600">
				Online extremism is a growing challenge in the digital age, especially during times of
				political and social movements. This project introduces a hybrid BERT-GNN framework designed
				to detect extremist narratives and uncover relational patterns in <b>Black Lives Matter</b>
				discussions on <b>X, formerly Twitter</b>. Our system bridges text classification and
				network analysis to provide actionable insights for researchers, policymakers, and advocacy
				groups.
			</p>
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
			<div class="card grid flex-1 place-items-center rounded-box bg-base-300">
				{#if form && form.success}
					<Display tweets={form.data} />
				{:else if form && form.error}
					<Error message={form.error} />
				{/if}
			</div>
		</div>
	</section>
</main>
