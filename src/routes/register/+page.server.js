import { fail, redirect } from '@sveltejs/kit';
import pool from '$lib/server/db.js';
import { hashPassword, createSession } from '$lib/server/auth';

export const actions = {
	register: async ({ request, cookies }) => {
		const form = await request.formData();
		const username = form.get('username');
		const password = form.get('password');

		if (!username || !password) {
			return fail(400, { error: 'Bitte alle Felder ausfüllen.' });
		}

		let result;

		try {
			const [rows] = await pool.execute(
				'INSERT INTO users (username, password_hash) VALUES (?, ?)',
				[username, await hashPassword(password)]
			);

			result = rows;
		} catch (err) {
			console.log(err);
			if (err.code === 'ER_DUP_ENTRY') {
				return fail(400, { error: 'Username is already taken!' });
			}

			return fail(500, { error: 'Database error' });
		}

		const sessionId = await createSession(result.insertId);

		cookies.set('session', sessionId, {
			path: '/',
			maxAge: 60 * 60 * 24 * 30
		});

		throw redirect(303, '/admin/events');
	}
};
