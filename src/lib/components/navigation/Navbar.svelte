<script lang="ts">
	import SvgIcon from '../SVGIcon.svelte';
	import logo from '$lib/assets/trace.svg?raw';
</script>

<div class="fixed z-10 navbar bg-zinc-800">
	<div class="flex-1">
		<a class="btn gap-4 text-xl normal-case btn-ghost" href="/#home">
			<SvgIcon size="2rem">{@html logo}</SvgIcon>
			TRACE
		</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			<li><a href="/about-us">About Us</a></li>
			<li><a href="/study">Study Details</a></li>
			<li><a href="/#inference">Inference</a></li>
		</ul>
	</div>
</div>
