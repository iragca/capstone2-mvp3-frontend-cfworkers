<script lang="ts">
	import BaseBadge from './BaseBadge.svelte';
	let { num }: { num: number } = $props();
</script>

<BaseBadge tooltip="Replies">
	<i class="fa-regular fa-comment"></i>{num}
</BaseBadge>
