<script lang="ts">
	let { date }: { date: string } = $props();

	const formatted_time = new Date(date).toLocaleTimeString('en-US', {
		hour: '2-digit',
		minute: '2-digit'
	});

	const formatted_date = new Date(date).toLocaleDateString('en-US', {
		month: 'short', // 'Jun'
		day: 'numeric' // '7'
	});
</script>

<span class="text-sm text-zinc-500">
	{formatted_time}
	{formatted_date}
</span>
