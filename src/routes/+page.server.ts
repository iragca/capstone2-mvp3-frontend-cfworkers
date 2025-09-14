import type { PageServerLoad } from './$types';
import type { Actions } from './$types';
import type { InferenceRequest } from '$lib/types';
import { BACKEND_URL } from '$env/static/private';
import { fail } from '@sveltejs/kit';
import type { APIResponse } from '$lib/types/inference';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const username = formData.get('username') as string;
		const topK = formData.get('top-k');
		const strictUsername = formData.get('strict-username');

		const endpoint = `${BACKEND_URL}/inference`;

		function basicError(message: string) {
			return {
				success: false,
				error: message,
				username,
				topK,
				strictUsername
			};
		}

		if (username.length === 0) {
			return fail(400, basicError('Username is required'));
		}

		const body: InferenceRequest = {
			username: username,
			options: {
				top_k: topK ? parseInt(topK.toString()) : 10,
				strict_username: strictUsername === 'on' ? true : false
			}
		};

		try {
			const response = await fetch(endpoint, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(body)
			});

			if (!response.ok) {
				console.error('Error:', response.statusText);
				return { success: false, error: response.statusText };
			}

			const data: APIResponse = await response.json();
			console.log('Success:', data);
			return { success: true, data: data.data };
		} catch (error) {
			console.error('Fetch error:', error);
			return fail(500, basicError('Internal Server Error'));
		}
	}
} satisfies Actions;
