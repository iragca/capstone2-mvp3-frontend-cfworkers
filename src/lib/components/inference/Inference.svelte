<script lang="ts">
	import Options from './Options.svelte';

	let { loading } = $props<{ loading: boolean }>();
</script>

<fieldset class="fieldset w-xs rounded-box border border-base-300 bg-zinc-300 p-4">
	<label class="label font-bold text-zinc-800" for="username">X / Twitter handle</label>
	<input type="text" class="input" id="username" name="username" placeholder="elonmusk" required />
	<Options />
	<button class="btn mt-4 btn-primary" type="submit">{loading ? 'Loading...' : 'Submit'}</button>
</fieldset>
