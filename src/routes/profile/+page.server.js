import { redirect } from "@sveltejs/kit";

export const load = ({ locals }) => {
  const { user } = locals;

  if(!user) {
    throw redirect(302, '/login')
  }

  return { user };
}

export const actions = {
	logout: async ({ cookies, locals }) => {
		cookies.delete('sessionid', { path: '/' });
		locals.user = null;

    throw redirect(303, '/login')
	}
};