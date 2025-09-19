/**
 * Wrap @mentions and #hashtags in <span> elements
 * @param text - The tweet text
 * @returns string - HTML string with wrapped spans
 */
export function formatTweet(text: string): string {
	return (
		text
			// Wrap mentions (@username)
			.replace(/(@\w+)/g, `<span class="text-blue-600">$1</span>`)
			// Wrap hashtags (#hashtag)
			.replace(/(#\w+)/g, `<span class="text-blue-600">$1</span>`)
	);
}

/**
 * Categorizes a numerical score into 'High', 'Medium', or 'Low' based on predefined thresholds.
 *
 * @param score - The numerical score to categorize, expected to be between 0 and 1.
 * @returns A string representing the category:
 * - 'High' if the score is greater than 0.65,
 * - 'Low' if the score is less than 0.35,
 * - 'Medium' otherwise.
 */
export function categorizeScore(score: number): string {
	if (score > 0.65) {
		return 'High';
	} else if (score < 0.35) {
		return 'Low';
	} else {
		return 'Medium';
	}
}
