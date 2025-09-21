<script lang="ts">
	let { url }: { url: string } = $props();
</script>

<abbr title="Open in X / Twitter">
	<a
		href={url}
		class="mt-2 flex h-8 link flex-row items-center justify-center gap-2 text-zinc-500 hover:text-zinc-700"
		aria-label="Open Tweet"
		target="_blank"
		rel="noopener noreferrer"
		><i class="fa-solid fa-up-right-from-square"></i>
	</a>
</abbr>
