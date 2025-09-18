<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/trace-bg.svg';

	import Navbar from '$lib/components/navigation/Navbar.svelte';
	import Footer from '$lib/components/navigation/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>TRACE - Capstone 2</title>
</svelte:head>

<Navbar />
{@render children?.()}
<Footer />
