<script lang="ts">
	import UserOfTweet from '../other/UserOfTweet.svelte';

	import type { User } from '$lib/types/nodes';

	import type { ScoredTweet } from '$lib/types';
	import CommentBadge from '../badges/CommentBadge.svelte';
	import RepostBadge from '../badges/RepostBadge.svelte';
	import LikesBadge from '../badges/LikesBadge.svelte';
	import ViewsBadge from '../badges/ViewsBadge.svelte';
	import OpenTweetBadge from '../badges/OpenTweetBadge.svelte';
	import ProbabilityBadge from '../badges/ProbabilityBadge.svelte';

	import { categorizeScore, formatTweet } from '$lib/utils/tweet';

	let { item: tweet }: { item: ScoredTweet } = $props();

	let user = tweet.node.user_id as User;
</script>

<li class="card gap-2 bg-zinc-100 p-4">
	<div class="flex">
		<UserOfTweet {user} />
		<ProbabilityBadge score={tweet.score.toFixed(3)} category={categorizeScore(tweet.score)} />
	</div>
	<p>{@html formatTweet(tweet.node.text)}</p>
	<div class="flex justify-around">
		<CommentBadge num={tweet.node.reply_count ?? 0} />
		<RepostBadge num={tweet.node.retweet_count ?? 0} />
		<LikesBadge num={tweet.node.favorite_count ?? 0} />
		<ViewsBadge num={tweet.node.views ?? 0} />
		<OpenTweetBadge url={tweet.node.status_link} />
	</div>
</li>
