<script lang="ts">
	import GithubBtn from '$lib/components/buttons/GithubBtn.svelte';
	import LinkedInBtn from '$lib/components/buttons/LinkedInBtn.svelte';
	import AuthorCard from '$lib/components/cards/AuthorCard.svelte';

	import iragcaIMG from '$lib/assets/authors/iragca.png';
	import daneIMG from '$lib/assets/authors/dane.jpg';
	import karylleIMG from '$lib/assets/authors/karylle.jpg';
	import usherIMG from '$lib/assets/authors/usher.jpg';

	let authors = [
		{
			name: 'Karylle Dela Cruz',
			badge: 'First Author',
			description:
				'John is the lead developer of the TRACE project, specializing in backend development and data analysis.',
			imageUrl: karylleIMG,
			slug: {
				github: 'kardcy',
				linkedin: 'karylle-dela-cruz-7601b3318'
			}
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
				'John is the lead developer of the TRACE project, specializing in backend development and data analysis.',
			imageUrl: usherIMG
		}
	];
</script>

<main class="bg-zinc-100 text-zinc-800">
	<section class="flex min-h-screen p-8">
		<div class="mx-auto flex flex-col items-center md:flex-row md:gap-24">
			<article class="mx-auto mt-16">
				<h1 class="mb-4 text-4xl font-bold">About us</h1>
				<p class="max-w-2xl text-justify">
					We are a team of four dedicated data science students from the University of Science and
					Technology of Southern Philippines. This project is our capstone endeavor, where we aim to
					leverage our skills to make a meaningful impact. Our focus is on developing innovative
					solutions to address the challenges posed by online extremism, particularly within the
					context of social media platforms like Twitter. Through this project, we aspire to
					contribute to a safer and more informed online community by identifying and mitigating
					extremist narratives.
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
