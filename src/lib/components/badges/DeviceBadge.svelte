<script lang="ts">
	let { device }: { device: string } = $props();
</script>

<span class="text-zinc-500 text-sm">
	{@html device}
</span>
