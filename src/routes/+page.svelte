<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Response } from '$lib/types/inference';

	import Display from '$lib/components/display/Display.svelte';
	import Inference from '$lib/components/inference/Inference.svelte';

	import CenteredCard from '$lib/components/cards/CenteredCard.svelte';
	import Error from '$lib/components/alerts/Error.svelte';
	import SvgIcon from '$lib/components/SVGIcon.svelte';

	import traceSVG from '$lib/assets/trace.svg?raw';
	import arrowForwardSVG from '$lib/assets/material/arrow_forward.svg?raw';

	import searchIMG from '$lib/assets/flaticon/search.png';
	import policyIMG from '$lib/assets/flaticon/policy.png';
	import influenceIMG from '$lib/assets/flaticon/influence.png';
	import Sample from '$lib/components/graph/HeroGraph.svelte';

	let graph_container: HTMLDivElement;
	let { data, form } = $props<{ data: any; form: Response }>();
</script>

<main class="bg-zinc-800">
	<section
		class="hero flex min-h-screen items-center justify-center"
		title="hero section"
		id="home"
	>
		<div class="hero-content flex flex-col gap-12 md:flex-row">
			<div class="max-w-md">
				<div class="mb-4">
					<SvgIcon size="5rem">{@html traceSVG}</SvgIcon>
				</div>
				<h1 class="text-7xl font-black">TRACE</h1>
				<p class="py-6">
					Textual and Relational Analysis of Community Extremism in BLM Twitter Using BERT and GNNs
				</p>
				<button class="btn btn-primary" onclick={() => goto('#inference')}
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
				<Sample />
			</div>
		</div>
	</section>

	<section class="gap-12 bg-zinc-100" title="about">
		<div class="items-center justify-center space-y-8 p-4 text-center sm:p-2 md:space-y-12 md:p-8">
			<h2
				class="mx-auto max-w-fit bg-[url('custom/yellow-splash-art.png')] bg-cover bg-center p-4 text-3xl font-extrabold text-zinc-800"
			>
				About TRACE
			</h2>
			<p class="mx-auto max-w-4xl text-zinc-600">
				Online extremism is a growing challenge in the digital age, especially during times of
				political and social movements. This project introduces a hybrid BERT-GNN framework designed
				to detect extremist narratives and uncover relational patterns in <b>Black Lives Matter</b>
				discussions on <b>X, formerly Twitter</b>. Our system bridges text classification and
				network analysis to provide actionable insights for researchers, policymakers, and advocacy
				groups.
			</p>
			<g class="flex flex-col items-center gap-4 md:flex-row md:justify-center">
				<CenteredCard
					title="Researchers"
					imageUrl={searchIMG}
					description="Analyze extremist discourse trends with classification results and interaction graphs."
				/>
				<CenteredCard
					title="Policy Analysts"
					imageUrl={policyIMG}
					description="Identify extremist clusters, influential accounts, and risky narratives for policy insights."
				/>
				<CenteredCard
					title="Citizen / Journalists"
					imageUrl={influenceIMG}
					description="Understand extremist influence patterns through clear, visualized networks."
				/>
			</g>
		</div>
	</section>

	<!-- Inference -->
	<section class="bg-gray-100 p-4 text-zinc-800" title="inference">
		<div class="mx-auto mb-24 max-w-4xl space-y-8">
			<h2 class="text-3xl font-bold" id="inference">Inference</h2>
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
		</div>
	</section>
</main>
