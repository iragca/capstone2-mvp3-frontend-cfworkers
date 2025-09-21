<script lang="ts">
	let { children, tooltip } = $props();
</script>

<abbr title={tooltip} class="no-underline">
	<div class="mt-2 flex h-8 flex-row items-center justify-center gap-2 text-zinc-500">
		{@render children()}
	</div>
</abbr>
