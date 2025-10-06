export function formatTweet(text: string): string {
	return (
		text
			// Mentions → https://x.com/username
			.replace(
				/@(\w+)/g,
				`<a href="https://x.com/$1" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">@$1</a>`
			)
			// Hashtags → https://x.com/hashtag/hashtag
			.replace(
				/#(\w+)/g,
				`<a href="https://x.com/hashtag/$1" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">#$1</a>`
			)
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
	if (score > 0.70) {
		return 'High';
	} else if (score < 0.30) {
		return 'Low';
	} else {
		return 'Medium';
	}
}
