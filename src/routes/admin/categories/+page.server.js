import pool from '$lib/server/db.js';
import { redirect } from '@sveltejs/kit';
export async function load({ locals }) {
	if (!locals.user) redirect(303, '/login');

	const [rows] = await pool.execute('SELECT * FROM categories');

	return {
		categories: rows
	};
}

export const actions = {
	delete: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get('id');

		await pool.execute('DELETE FROM categories WHERE id = ?', [id]);

		return {
			success: true
		};
	}
};
