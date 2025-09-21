export type HateSpeechClass = '0' | '1' | '2' | '';
export interface User {
	/** Unique identifier of the user. */
	user_id: string;

	/** Username/handle of the user. */
	username?: string;

	/** Display name of the user. */
	name?: string;

	/** Number of followers. */
	follower_count?: number;

	/** Number of accounts this user follows. */
	following_count?: number;

	/** Number of likes/favorites. */
	favourites_count?: number;

	/** Number of lists this user is a member of. */
	listed_count?: number;

	/** Number of tweets the user has posted. */
	number_of_tweets?: number;

	/** Whether the account is private. */
	is_private?: boolean;

	/** Whether the account has a standard verification badge. */
	is_verified?: boolean;

	/** Whether the account has a Twitter Blue verification. */
	is_blue_verified?: boolean;

	/** Whether the account is identified as a bot. */
	bot?: boolean;

	/** User-provided location string. */
	location?: string;

	/** Profile description (bio). */
	description: string;

	/** URL of the user’s profile image. */
	profile_image_url?: string;

	/** URL of the user’s profile banner image. */
	profile_banner_url?: string;

	/** Fetch status of this user’s profile. */
	status?: 'fetched' | 'not fetched' | 'fetching' | '';

	/** Date the account was created (ISO format preferred). */
	creation_date?: string;

	/** Number of “friends” (usually equivalent to following). */
	friends?: number;
}

export interface Tweet {
	/** Unique identifier of the tweet */
	tweet_id: string;

	/** Raw tweet text content */
	text: string;

	/** Direct URL to the tweet */
	status_link: string;

	/** Identifier of the authoring user */
	user_id: string | User;

	/** Whether the tweet is flagged as extremist */
	is_extremist?: boolean;

	/** Whether the tweet has been annotated */
	is_annotated?: boolean;

	/** URL of the tweet this one replies to */
	in_reply_to_status_link?: string;

	/** ID of the tweet this one replies to */
	in_reply_to_status_id?: string;

	/** Number of bookmarks */
	bookmark_count: number;

	/** Number of views (impressions) */
	views?: number;

	/** Number of retweets */
	retweet_count: number;

	/** Number of likes */
	favorite_count: number;

	/** Number of replies */
	reply_count: number;

	/** Number of quote tweets */
	quote_count: number;

	/** ID of the root conversation this tweet belongs to */
	conversation_id: string;

	/** ID of the retweeted tweet if applicable */
	retweet_status_id?: string;

	/** ID of the quoted tweet if applicable */
	quoted_status_id?: string;

	/** Community note attached to the tweet */
	community_note?: string;

	/** ISO language code of the tweet text */
	language: string;

	/** Client/application used to post the tweet */
	source?: string;

	/** Timestamp of creation (ISO format recommended) */
	creation_date: string;

	/** Whether the tweet contains a BLM-related hashtag */
	has_blm_hashtag: boolean;

	/** Whether replies have been fetched */
	fetched_replies?: boolean;

	/** Whether this is a reply to a BLM-related tweet */
	is_reply_to_blm?: boolean;

	/**
	 * Hate speech classification:
	 * "0" = not hateful,
	 * "1" = mildly hateful,
	 * "2" = highly hateful,
	 * "" = unset
	 */
	is_hateful?: HateSpeechClass;
}
