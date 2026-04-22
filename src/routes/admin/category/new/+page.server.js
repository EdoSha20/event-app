import pool from '$lib/server/db.js';
import { redirect } from '@sveltejs/kit';

export const actions = {
	create: async ({ request, locals }) => {
		if (!locals.user) redirect(303, '/login');
		const formData = await request.formData();
		const name = formData.get('name');

		if (!name) {
			return { error: true };
		}

		await pool.execute('INSERT INTO categories (name) VALUES (?)', [name]);

		throw redirect(303, '/admin/categories');
	}
};
