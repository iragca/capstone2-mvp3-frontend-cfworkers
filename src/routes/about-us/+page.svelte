<script lang="ts">
	import GithubBtn from '$lib/components/buttons/GithubBtn.svelte';
	import LinkedInBtn from '$lib/components/buttons/LinkedInBtn.svelte';
	import AuthorCard from '$lib/components/cards/AuthorCard.svelte';

	import iragcaIMG from '$lib/assets/authors/iragca.png';
	import daneIMG from '$lib/assets/authors/dane.jpg';

	let authors = [
		{
			name: 'Karylle Dela Cruz',
			badge: 'First Author',
			description:
				'John is the lead developer of the TRACE project, specializing in backend development and data analysis.'
		},
		{
			name: 'Chris Andrei Irag',
			description:
				'John is the lead developer of the TRACE project, specializing in backend development and data analysis.',
			imageUrl: iragcaIMG,
			slug: {
				github: 'iragca',
				linkedin: 'chris-andrei-irag'
			}
		},
		{
			name: 'Dane Casey Casiño',
			description:
				'John is the lead developer of the TRACE project, specializing in backend development and data analysis.',
			imageUrl: daneIMG,
			slug: {
				github: 'Danecash',
				linkedin: 'dane-casey-c-casino-305760364'
			}
		},
		{
			name: 'Usher Raymond Abainza',
			description:
				'John is the lead developer of the TRACE project, specializing in backend development and data analysis.'
		}
	];
</script>

<main class="bg-zinc-100 text-zinc-800">
	<section class="flex min-h-screen p-8">
		<div class="mx-auto flex flex-col items-center md:flex-row md:gap-24">
			<article class="mx-auto mt-16">
				<h1 class="mb-4 text-4xl font-bold">About Us</h1>
				<p class="max-w-2xl text-justify">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry's standard dummy text ever since the 1500s, when an unknown printer took
					a galley of type and scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting, remaining essentially
					unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
					Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
					PageMaker including versions of Lorem Ipsum.
				</p>
			</article>
			<ul class="list mt-16 h-fit rounded-box bg-base-100 shadow-md">
				<li class="p-4 pb-2 text-xs tracking-wide opacity-60">Authors</li>
				{#each authors as author}
					<AuthorCard
						name={author.name}
						description={author.description}
						badge={author.badge}
						imageUrl={author.imageUrl}
					>
						{#if author.slug?.github}
							<GithubBtn slug={author.slug.github} />
						{/if}
						{#if author.slug?.linkedin}
							<LinkedInBtn slug={author.slug.linkedin} />
						{/if}
					</AuthorCard>
				{/each}
			</ul>
		</div>
	</section>
</main>
