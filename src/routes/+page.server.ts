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

		const endpoint = `${BACKEND_URL}/inference`;

		function basicError(message: string) {
			return {
				success: false,
				error: message,
				username,
				topK
			};
		}

		if (username.length === 0) {
			return fail(400, basicError('Username is required'));
		}

		const body: InferenceRequest = {
			username: username,
			options: {
				top_k: topK ? parseInt(topK.toString()) : 10,
			}
		};
		console.log(body)

		try {
			const response = await fetch(endpoint, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(body)
			});
			console.log(response.status)
			const data: APIResponse = await response.json();

			if (!response.ok) {
				console.error('Error:', data.detail);
				return fail(response.status, basicError(data.detail ?? response.statusText));
			}

			console.log('Success:', data);
			return { success: true, data: data.data };
		} catch (error) {
			console.error('Fetch error:', error);
			return fail(500, basicError('Internal Server Error'));
		}
	}
} satisfies Actions;
