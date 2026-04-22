import pool from './db.js';
import bcrypt from 'bcrypt';
import { randomUUID } from 'crypto';

export async function hashPassword(password) {
	return bcrypt.hash(password, 10);
}

export async function verifyPassword(password, hash) {
	return bcrypt.compare(password, hash);
}

export async function createSession(userId) {
	const sessionId = randomUUID();
	const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

	await pool.execute('INSERT INTO sessions(id, user_id, expires_at) VALUES (?, ?, ?)', [
		sessionId,
		userId,
		expiresAt
	]);

	return sessionId;
}

export async function validateSession(sessionId) {
	const [rows] = await pool.execute(
		`SELECT u.id, u.username, u.role
         FROM sessions s
         JOIN users u ON s.user_id = u.id
         WHERE s.id = ? AND s.expires_at > NOW()`,
		[sessionId]
	);

	return rows[0] ?? null;
}

export async function invalidateSession(sessionId) {
	await pool.execute('DELETE FROM sessions WHERE id = ?', [sessionId]);
}
