import pool from '$lib/server/db.js';

export async function load() {

  const [rows] = await pool.execute('SELECT e.id as id, c.name as category_name, e.name as name from events e LEFT JOIN categories c ON e.category_id = c.id');

  return {
    events: rows
  };
}

export const actions = {

    delete: async ({request}) => {
      const formData = await request.formData();
      const id = formData.get("id");


      await pool.execute('DELETE FROM events WHERE id = ?', [id]);
      return{
        success: true
      }
    }

}