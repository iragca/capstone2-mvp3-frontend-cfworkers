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
			badge: 'Lead Developer',
			description:
				'John is the lead developer of the TRACE project, specializing in backend development and data analysis.'
		},
		{
			name: 'Karylle Dela Cruz',
			badge: 'First Author',
			description:
				'John is the lead developer of the TRACE project, specializing in backend development and data analysis.'
		},
		{
			name: 'Chris Andrei Irag',
			badge: 'Lead Developer',
			description:
				'John is the lead developer of the TRACE project, specializing in backend development and data analysis.'
		}
	];
</script>

<main class="bg-zinc-100 text-zinc-800">
	<section
		class="flex min-h-screen flex-1 flex-col items-center justify-center gap-8 p-4 md:flex-row md:p-12"
	>
		<div class="h-12 md:h-0"></div>

		{#each authors as author}
			<AuthorCard name={author.name} badge={author.badge} description={author.description}>
				<LinkedInBtn url="https://linkedin.com" />
				<GithubBtn url="https://github.com" />
			</AuthorCard>
		{/each}
	</section>
</main>
