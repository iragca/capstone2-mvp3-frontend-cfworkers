<script lang="ts">
	import UserOfTweet from '../other/UserOfTweet.svelte';

	import type { User } from '$lib/types/tweets';

	import type { ScoredTweet } from '$lib/types';
	import CommentBadge from '../badges/CommentBadge.svelte';
	import RepostBadge from '../badges/RepostBadge.svelte';
	import LikesBadge from '../badges/LikesBadge.svelte';
	import ViewsBadge from '../badges/ViewsBadge.svelte';
	import OpenTweetBadge from '../badges/OpenTweetBadge.svelte';
	import ProbabilityBadge from '../badges/ProbabilityBadge.svelte';

	import { categorizeScore, formatTweet } from '$lib/utils/tweet';
	import DateBadge from '../badges/DateBadge.svelte';
	import DeviceBadge from '../badges/DeviceBadge.svelte';

	let { item }: { item: ScoredTweet } = $props();

	let user = item.tweet.user_id as User;
</script>

<li class="card gap-2 bg-zinc-100 p-4">
	<div class="flex">
		<UserOfTweet {user} />
		<ProbabilityBadge score={item.score.toFixed(3)} category={categorizeScore(item.score)} />
	</div>
	<p>{@html formatTweet(item.tweet.text)}</p>

	<div class="mt-2">
		<DateBadge date={item.tweet.creation_date} />

		{#if item.tweet.source !== undefined && item.tweet.source !== '' && item.tweet.source !== null}
			<span class="text-sm text-zinc-500">•</span>
			<DeviceBadge device={item.tweet.source} />
		{/if}
	</div>
	<div class="h-0.5 bg-zinc-200"></div>
	<div class="flex justify-around">
		<CommentBadge num={item.tweet.reply_count ?? 0} />
		<RepostBadge num={item.tweet.retweet_count ?? 0} />
		<LikesBadge num={item.tweet.favorite_count ?? 0} />
		<ViewsBadge num={item.tweet.views ?? 0} />

		<OpenTweetBadge url={item.tweet.status_link} />
	</div>
</li>
