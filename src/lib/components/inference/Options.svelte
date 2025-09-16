<fieldset class="fieldset bg-base-100 border-base-300 rounded-box border p-4">
	<legend class="fieldset-legend text-zinc-800">Options</legend>
	<label class="floating-label mb-2" for="top-k">
		<span>Top K</span>
		<input type="number" id="top-k" name="top-k" placeholder="10" min="1" max="30" class="input mb-1 border-base-300" />
		<p class="label">Top <i>K</i> posts to display.</p>
	</label>

	<label class="label" for="descending">
		<input type="checkbox" id="descending" name="descending" checked={true} class="checkbox checkbox-neutral" />
		Descending
	</label>
</fieldset>
