import { fail, redirect } from '@sveltejs/kit';

import * as db from '$lib/server/database.js';

export const load = async ({ locals }) => {
	if (locals.user) {
		throw redirect(302, '/profile')
	}
}

export const actions = {
	register: async ({ request }) => {
		const form = await request.formData();

		const params = {
      telegramId: form.get('id'),
      password: form.get('password'),
    };

		if (db.hasUser(params.telegramId)) {
			return fail(400, {
        error: true,
        message: 'User already exists',
      });
		}

		const token = crypto.randomUUID();

		db.saveUser({
			...params,
			token,
		});

		return {
			success: true,
			token,
		}
	},
};
