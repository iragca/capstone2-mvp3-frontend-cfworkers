<script lang="ts">
	import { goto } from '$app/navigation';

	import evaluationIMG from '$lib/assets/flaticon/evaluation.png';
	import sortingIMG from '$lib/assets/flaticon/sorting.png';
	import network from '$lib/assets/flaticon/global-network.png';
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

<main class="bg-zinc-800 text-zinc-800">
	<section class="hero min-h-screen bg-amber-300">
		<div class="hero-content flex-col sm:gap-12 md:gap-24 lg:flex-row">
			<img
				src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
				class="max-w-2xl rounded-lg shadow-2xl"
				alt="hero"
			/>
			<div>
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
	<section class="min-h-screen gap-12 bg-zinc-100" title="about">
		<div class="items-left justify-left space-y-8 p-4 text-left sm:p-2 md:space-y-12 md:p-8">
			<h1
				class="max-w-fit bg-[url('custom/yellow-splash-art.png')] bg-cover bg-center p-4 text-3xl font-extrabold text-zinc-800"
			>
				Objectives
			</h1>
			<ul
				class="mx-auto flex w-fit justify-center gap-8 overflow-x-auto rounded-box bg-base-100 shadow-md"
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
</main>
