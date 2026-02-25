import pool from '$lib/server/db.js';

export async function GET() {
    const [rows]=await pool.query('SELECT * from events');
    return Response.json(rows);
    
}


export async function POST({request}) {
     const {name, description, startdate, starttime}=await request.json();
     const [result]=await pool.query('INSERT INTO events (name, description, startdate, starttime) VALUES (?,?,?, ?)', [name,description, startdate, starttime]);

     return Response.json({"message": "Event created"}, { status:201 });


}