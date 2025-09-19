<script lang="ts">
	let { children } = $props();
</script>

<div class="mt-2 flex h-8 flex-row items-center justify-center gap-2 text-zinc-500">
	{@render children()}
</div>
