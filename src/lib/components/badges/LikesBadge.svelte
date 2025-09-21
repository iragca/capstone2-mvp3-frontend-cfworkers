<script lang="ts">
	import BaseBadge from './BaseBadge.svelte';
	let { num }: { num: number } = $props();
</script>

<BaseBadge tooltip="Likes">
	<i class="fa-regular fa-heart"></i>{num}
</BaseBadge>
