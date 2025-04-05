
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const todos = await sql`SELECT * FROM todos;`;
    return NextResponse.json({ todos }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const { id, title, content, date, author } = await request.json();

  try {
    // SQL query to insert a new todo
    await sql`INSERT INTO todos (id, author, title, content, date) VALUES (${id}, ${author}, ${title}, ${content}, ${date});`;
    return NextResponse.json({ message: 'Todo successfully inserted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const { id } = await request.json();

  try {
    // SQL query to delete a todo
    await sql`DELETE from todos WHERE id=${id}`;
    return NextResponse.json({ message: 'Todo successfully deleted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

