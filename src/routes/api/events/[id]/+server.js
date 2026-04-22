import pool from '$lib/server/db.js';

export async function GET({ params }) {
	const id = params.id;
	const [rows] = await pool.query('SELECT * FROM events WHERE id=?', [id]);

	if (rows.length === 0) {
		return Response.json({ message: 'Event not found' }, { status: 404 });
	}
	return Response.json(rows[0]);
}

export async function DELETE({ params }) {
	const id = params.id;
	const [result] = await pool.query('DELETE FROM events WHERE id=?', [id]);

	if (result.affectedRows == 0) {
		return Response.json({ message: 'Event not found' }, { status: 404 });
	}
	return Response.json({ message: 'Event is deleted!' });
}

export async function PUT({ params, request }) {
	const id = params.id;
	const { name, description, startdate, starttime } = await request.json();

	const [result] = await pool.query(
		'UPDATE events SET name=?, description=?, startdate=?, starttime=? WHERE id=?',
		[name, description, startdate, starttime, params.id]
	);

	if (result.affectedRows === 0) {
		return Response.json({ message: 'Event not found' }, { status: 404 });
	}

	return Response.json({ message: 'Event is updated!' });
}
