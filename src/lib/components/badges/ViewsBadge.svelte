<script lang="ts">
	import BaseBadge from './BaseBadge.svelte';
	let { num }: { num: number } = $props();
</script>

<BaseBadge tooltip="Views">
	<i class="fa-solid fa-chart-simple"></i>{num}
</BaseBadge>
