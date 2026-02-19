import pool from '$lib/server/db.js';

export async function load() {

  const [rows] = await pool.execute('SELECT e.id as id, c.name as category_name, e.name as name from events e LEFT JOIN categories c ON e.category_id = c.id');

  return {
    events: rows
  };
}