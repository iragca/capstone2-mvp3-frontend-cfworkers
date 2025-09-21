<script lang="ts">
	import type { User } from '$lib/types/nodes';
	import UserOfTweet from '../other/UserOfTweet.svelte';
	let { user }: { user: User } = $props();
</script>

<div class="card w-full bg-base-100 shadow-sm">
	<figure class="flex h-24 min-h-24 justify-center">
		{#if user.profile_banner_url != ''}
			<img src={user.profile_banner_url} alt="User banner" class="h-32 w-full object-cover" />
		{:else}
			<div class="h-32 w-full bg-zinc-900"></div>
		{/if}
	</figure>
	<div class="flex flex-row p-4 pb-0">
		<UserOfTweet {user} />
		<div class="mb-auto ml-auto card-actions">
			<a
				href={`https://x.com/${user.username}`}
				target="_blank"
				rel="noopener noreferrer"
				class="btn btn-secondary"
			>
				<svg
					aria-label="X logo"
					width="16"
					height="12"
					viewBox="0 0 300 271"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill="currentColor"
						d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"
					/>
				</svg>
				View Profile
			</a>
		</div>
	</div>
	<div class="flex h-full flex-col p-4 pt-0 text-sm">
		{#if user.description}
			<p class="mt-2 mb-2">{user.description}</p>
		{/if}

		<div aria-label="metadata" class="mt-auto flex flex-col gap-2">
			<div aria-label="user metrics">
				<div class="flex flex-row gap-4">
					{#if user.follower_count !== undefined}
						<p class="text-zinc-500">
							<span class="font-bold text-zinc-800">{user.follower_count.toLocaleString()}</span>
							Followers
						</p>
					{/if}
					{#if user.following_count !== undefined}
						<p class="text-zinc-500">
							<span class="font-bold text-zinc-800">{user.following_count.toLocaleString()}</span>
							Following
						</p>
					{/if}
					{#if user.number_of_tweets !== undefined}
						<p class="text-zinc-500">
							<span class="font-bold text-zinc-800">{user.number_of_tweets.toLocaleString()}</span>
							Tweets
						</p>
					{/if}
				</div>
			</div>

			<div aria-label="userinformation" class="flex flex-row gap-4">
				{#if user.location}
					<p class="text-zinc-500">
						<i class="fa-solid fa-location-dot mr-1"></i>
						{user.location}
					</p>
				{/if}
				{#if user.creation_date}
					<p class="text-zinc-500">
						<i class="fa-regular fa-calendar-days mr-1"></i>
						Joined {new Date(user.creation_date).toLocaleDateString(undefined, {
							year: 'numeric',
							month: 'long'
						})}
					</p>
				{/if}
			</div>
		</div>
	</div>
</div>
