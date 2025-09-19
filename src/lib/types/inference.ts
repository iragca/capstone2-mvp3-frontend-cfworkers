import type { Tweet } from './nodes';
interface InferenceOptions {
	top_k: number;
}

interface InferenceRequest {
	username: string;
	options: InferenceOptions;
}

type ScoredTweet = {
	node: Tweet;
	score: number;
};
type ScoredTweetList = ArrayLike<ScoredTweet>;

interface Response {
	success: boolean;
	data: ScoredTweetList;
}

interface APIResponse {
	message: string;
	data: ScoredTweetList;
	detail?: string;
}

export type {
	InferenceRequest,
	InferenceOptions,
	Response,
	ScoredTweet,
	ScoredTweetList,
	APIResponse
};
