<script lang="ts">
	import { faker } from '@faker-js/faker';
	import type { User } from '$lib/types/nodes';
	import verifiedIMG from '$lib/assets/flaticon/verified.png';

	let { user }: { user: User } = $props();
</script>

<div class="flex h-fit flex-row gap-4">
	<img src={faker.image.avatarGitHub()} alt="Profile" class="mb-2 h-12 w-12 rounded-full" />
	<div class="mb-2 flex flex-col">
		<span class="font-bold">
			<a
				href={`https://x.com/${user.username}`}
				target="_blank"
				rel="noopener noreferrer"
				class="hover:underline"
			>
				{user.name}
			</a>
			{#if user.is_blue_verified}
				<img src={verifiedIMG} alt="Verified" class="inline h-4 w-4" />
			{/if}
		</span>

		<span class="font text-zinc-500">
			<a
				href={`https://x.com/${user.username}`}
				target="_blank"
				rel="noopener noreferrer"
				class="hover:underline"
			>
				@{user.username}</a
			></span
		>
	</div>
</div>
