<script lang="ts">
	import type { ScoredTweetList } from '$lib/types';
	import TweetCard from '../cards/TweetCard.svelte';
	let { tweets }: { tweets: ScoredTweetList } = $props<{ tweets: ScoredTweetList }>();
</script>

{#if tweets}
	<ul class="flex flex-col gap-4 p-4 bg-zinc-200 rounded-sm">
		{#each tweets as item}
			<TweetCard {item} />
		{/each}
	</ul>
{:else}
	<p>No results yet.</p>
{/if}
