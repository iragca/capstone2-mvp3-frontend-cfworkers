<script lang="ts">
	import BaseBadge from './BaseBadge.svelte';
	let { num }: { num: number } = $props();
</script>

<BaseBadge>
	<i class="fa-regular fa-heart"></i>{num}
</BaseBadge>
