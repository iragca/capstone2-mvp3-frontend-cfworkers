<script lang="ts">
	import { goto } from '$app/navigation';

	import evaluationIMG from '$lib/assets/flaticon/evaluation.png';
	import sortingIMG from '$lib/assets/flaticon/sorting.png';
	import network from '$lib/assets/flaticon/global-network.png';

	import analysisIMG from '$lib/assets/flaticon/analysis.png';
	import databaseIMG from '$lib/assets/flaticon/data-server.png';
	import cogsIMG from '$lib/assets/flaticon/cogs.png';
	import layerIMG from '$lib/assets/flaticon/layer.png';
	import HeroGraph from '$lib/components/graph/HeroGraph.svelte';
</script>

{#snippet objective(number, imageUrl, title, description)}
	<li class="items-left flex max-w-xs flex-col gap-8 p-4">
		<div class="flex justify-between">
			<div class="text-4xl font-thin tabular-nums opacity-30">0{number}</div>
			<img class="size-28 rounded-box" src={imageUrl} alt="objective: {title}" />
		</div>
		<div class="flex flex-col gap-2">
			<div class="text-2xl font-bold">{title}</div>
			<div class="text-md opacity-90">
				{description}
			</div>
		</div>
	</li>
{/snippet}

{#snippet methodology(imageUrl, title, description)}
	<li class="items-left flex max-w-xs flex-col p-8">
		<img class="mx-auto size-32 rounded-box" src={imageUrl} alt="objective: {title}" />
		<svg width="100%" height="40" xmlns="http://www.w3.org/2000/svg" class="mt-8 overflow-visible">
			<!-- Circle 1 -->
			<circle cx="5%" cy="25" r="10" fill="black" />
			<!-- Line 1 -->
			<line x1="5%" y1="25" x2="100%" y2="25" stroke="black" stroke-width="1" />
		</svg>
		<div class="flex flex-col gap-2">
			<div class="text-2xl font-bold">{title}</div>
			<div class="text-md opacity-90">
				{description}
			</div>
		</div>
	</li>
{/snippet}

<main class="bg-zinc-800 text-zinc-800">
	<section class="hero min-h-screen bg-amber-300">
		<div class="hero-content flex-col sm:gap-12 md:gap-24 lg:flex-row">
			<div class="flex flex-1 items-center justify-center rounded-lg bg-gray-100">
				<HeroGraph lightmode={true} />
			</div>
			<div class="p-8">
				<h1 class="text-5xl font-bold">Background</h1>
				<p class="max-w-2xl py-6">
					Online extremist narratives can polarize communities and amplify misinformation.
					Traditional detection methods often overlook the relational dynamics of online discourse.
					This study introduces a hybrid BERT-GNN model that combines linguistic features with
					network structures to identify extremist content and map influence within BLM Twitter
					conversations.
				</p>
				<button class="btn btn-secondary" onclick={() => goto('/#inference')}
					>Try the Model
				</button>
			</div>
		</div>
	</section>
	<section class="min-h-screen gap-12 bg-zinc-100" title="objectives">
		<div class="items-left justify-left space-y-8 p-4 text-left sm:p-2 md:space-y-12 md:p-8">
			<h1
				class="max-w-fit bg-[url('/custom/yellow-splash-art.png')] bg-cover bg-center p-4 text-3xl font-extrabold text-zinc-800"
			>
				Objectives
			</h1>
			<ul
				class="mx-auto flex w-fit flex-col justify-center gap-8 overflow-x-auto rounded-box bg-base-100 p-4 shadow-md md:flex-row"
			>
				{@render objective(
					1,
					sortingIMG,
					'Develop and validate a tweet classification pipeline.',
					'Manually labeled tweets (Extremist / Non-extremist) were used to fine-tune a BERT model to produce robust content labels across the dataset.'
				)}
				{@render objective(
					2,
					network,
					'Construct and train a GNN for link prediction.',
					'Construct a social graph of users and labeled tweets and train a GNN to predict which user–tweet pairs are likely to form engagement links.'
				)}
				{@render objective(
					3,
					evaluationIMG,
					'Evaluate model performance and robustness.',
					'Measure performance with metrics and run ablation studies to compare GNN configurations.'
				)}
			</ul>
		</div>
	</section>
	<section class="min-h-screen gap-12 bg-amber-300" title="methodology">
		<div class="items-left justify-left space-y-8 p-4 text-left sm:p-2 md:space-y-12 md:p-8">
			<h1 class="mx-auto max-w-fit p-4 text-3xl font-extrabold text-zinc-800">Methodology</h1>
			<ul
				class="mx-auto flex w-fit flex-col justify-center gap-8 overflow-x-auto rounded-box bg-transparent md:flex-row"
			>
				{@render methodology(
					databaseIMG,
					'Data Collection',
					'Collect data using RapidAPI APIs or scraping tools like Tweety'
				)}
				{@render methodology(
					cogsIMG,
					'Data Preprocessing',
					'Clean and preprocess the collected data to ensure quality and consistency.'
				)}
				{@render methodology(
					layerIMG,
					'BERT-GNN',
					'Use the BERT model to output labels then feed them into the GNN for training and link prediction.'
				)}
				{@render methodology(
					analysisIMG,
					'Evaluation & Deployment',
					'Evaluate the model performance and deploy it for real-time analysis.'
				)}
			</ul>
		</div>
	</section>
	<section
		class="flex min-h-screen flex-col items-center justify-center gap-8 pt-8 pb-8"
		title="results"
	>
		<h1 class="max-w-fit p-4 text-3xl font-extrabold text-zinc-300">Results</h1>
		<div
			class="max-w-2xl overflow-x-auto rounded-box border border-base-content/5 bg-base-100 p-4 pr-8 pl-8 shadow-md"
		>
			<table class="table">
				<!-- head -->
				<thead>
					<tr class="text-zinc-800">
						<th></th>
						<th>Accuracy</th>
						<th>Precision</th>
						<th>Recall</th>
						<th>F1 Score</th>
						<th>PR AUC</th>
					</tr>
				</thead>
				<tbody>
					<!-- row 1 -->
					<tr>
						<th>GCN</th>
						<td>0.71</td>
						<td>0.471</td>
						<td>0.567</td>
						<td>0.508</td>
						<td>0.758</td>
					</tr>
					<!-- row 2 -->
					<tr>
						<th>GraphSAGE</th>
						<td>0.887</td>
						<td>0.815</td>
						<td>0.999</td>
						<td>0.898</td>
						<td>0.925</td>
					</tr>
				</tbody>
			</table>
		</div>
		<p class="max-w-2xl px-8 text-justify text-zinc-300">
			The GraphSAGE model achieved the highest overall performance, with an accuracy of 0.887,
			F1-score of 0.898, and PR-AUC of 0.925, indicating strong capability in correctly identifying
			both positive and negative links within the graph. Its recall score of 0.999 suggests that
			nearly all true positive links were successfully detected, though the slightly lower precision
			(0.815) indicates a modest number of false positives. This behavior implies that GraphSAGE
			effectively generalizes the contextual and relational features learned from the BERT
			HateXplain embeddings, capturing fine-grained semantic cues and user–tweet relationships
			within the network.
		</p>
	</section>
</main>
