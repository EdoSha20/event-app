import pool from '$lib/server/db.js';

export async function load({ params }) {

  let eventId = params.id;

  const [rows] = await pool.execute('SELECT * FROM events WHERE id= ?' , [eventId]);

  if (rows.length === 0){
    return {
      status: 404,
      error: new Error('Event not found')
    }
  }

  return {
    event: rows[0]
  };
}