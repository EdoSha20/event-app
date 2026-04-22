import pool from '$lib/server/db.js';
import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
	if (!locals.user) redirect(303, '/login');

	const [rows] = await pool.execute(
		'SELECT e.id as id, c.name as category_name, e.name as name from events e LEFT JOIN categories c ON e.category_id = c.id'
	);

	return {
		events: rows
	};
}
