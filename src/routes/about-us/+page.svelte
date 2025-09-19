<script lang="ts">
	import GithubBtn from '$lib/components/buttons/GithubBtn.svelte';
	import LinkedInBtn from '$lib/components/buttons/LinkedInBtn.svelte';
	import AuthorCard from '$lib/components/cards/AuthorCard.svelte';

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
			slug: {
				github: 'iragca',
				linkedin: 'chris-andrei-irag'
			}
		},
		{
			name: 'Dane Casey Casiño',
			description:
				'John is the lead developer of the TRACE project, specializing in backend development and data analysis.'
		},
		{
			name: 'Usher Raymond Abainza',
			description:
				'John is the lead developer of the TRACE project, specializing in backend development and data analysis.'
		}
	];
</script>

<main class="bg-zinc-100 text-zinc-800">
	<section
		class="flex min-h-screen flex-1 flex-row flex-wrap items-center justify-center gap-8 p-4 md:p-12"
	>
		{#each authors as author}
			<AuthorCard name={author.name} badge={author.badge} description={author.description}>
				{#if author.slug?.github}
					<GithubBtn slug={author.slug.github} />
				{/if}
				{#if author.slug?.linkedin}
					<LinkedInBtn slug={author.slug.linkedin} />
				{/if}
			</AuthorCard>
		{/each}
	</section>
</main>
