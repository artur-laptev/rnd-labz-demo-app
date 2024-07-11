import { fail, redirect } from '@sveltejs/kit';

import * as db from '$lib/server/database.js';

export const load = async ({ locals }) => {
	if (locals.user) {
		throw redirect(302, '/profile')
	}
}

export const actions = {
	login: async ({ request }) => {
		const data = await request.formData();

		const user = db.getUserWithPassword({
      telegramId: data.get('id'),
      password: data.get('password'),
    });

    if (!user) {
      return fail(400, {
        error: true,
        message: 'Telegram ID or password not valid',
      });
    }

		return {
      success: true,
      isTokenRequired: true,
      id: user.telegramId,
    };
	},

  validateToken: async ({ cookies, request }) => {
		const data = await request.formData();

    const id = data.get('id');

		const isTokenValid = db.validateUserToken({
      telegramId: id,
      token: data.get('token')
    });

    if (!isTokenValid) {
      cookies.delete('sessionid', { path: '/' });

      throw redirect(303, '/signup');
    }

    cookies.set('sessionid', id, { path: '/' });

		throw redirect(303, '/profile');
	},
};
