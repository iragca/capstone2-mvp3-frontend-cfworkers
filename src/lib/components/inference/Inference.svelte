<script lang="ts">
	import Options from './Options.svelte';
</script>

<form
	method="POST"
>
	<fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
		<label class="label text-zinc-800 font-bold" for="username">X / Twitter handle</label>
		<input
			type="text"
			class="input"
			id="username"
			name="username"
			placeholder="elonmusk"
			required
		/>
		<Options />
		<button class="btn btn-primary mt-4" type="submit">Submit</button>
	</fieldset>
</form>
