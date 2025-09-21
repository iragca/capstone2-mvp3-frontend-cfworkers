<script lang="ts">
	import BaseBadge from './BaseBadge.svelte';
	let { num }: { num: number } = $props();
</script>

<BaseBadge tooltip="Reposts">
	<i class="fa-solid fa-retweet"></i>{num}
</BaseBadge>
