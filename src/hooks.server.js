
import * as db from '$lib/server/database';

export const handle = async ({ event, resolve }) => {
	const id = event.cookies.get('sessionid');

	if (!id) {
		return await resolve(event)
	}

  const user = db.getUser(id);

	if (user) {
		event.locals.user = user;
	}

	return await resolve(event)
}