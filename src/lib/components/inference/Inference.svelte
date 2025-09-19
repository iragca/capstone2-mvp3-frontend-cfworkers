<script lang="ts">
	import Options from './Options.svelte';
</script>

<fieldset class="fieldset w-xs rounded-box border border-base-300 bg-base-200 p-4">
	<label class="label font-bold text-zinc-800" for="username">X / Twitter handle</label>
	<input type="text" class="input" id="username" name="username" placeholder="elonmusk" required />
	<Options />
	<button class="btn mt-4 btn-primary" type="submit">Submit</button>
</fieldset>
