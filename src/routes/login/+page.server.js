import { fail, redirect } from '@sveltejs/kit';
import pool from '$lib/server/db.js';
import { verifyPassword, createSession } from '$lib/server/auth';

export const actions = {
	login: async ({ request, cookies }) => {
		const form = await request.formData();
		const username = form.get('username');
		const password = form.get('password');

		if (!username || !password) {
			return fail(400, { error: 'Bitte alle Felder ausfüllen.' });
		}

		// user holen
		const [rows] = await pool.execute('SELECT * FROM users WHERE username = ?', [username]);

		if (rows.length === 0) {
			return fail(400, { error: 'User nicht gefunden' });
		}

		const user = rows[0];

		// password check
		const valid = await verifyPassword(password, user.password_hash);

		if (!valid) {
			return fail(400, { error: 'Falsches Passwort' });
		}

		// session erstellen
		const sessionId = await createSession(user.id);

		cookies.set('session', sessionId, {
			path: '/',
			maxAge: 60 * 60 * 24 * 30
		});

		throw redirect(303, '/admin/events');
	}
};
