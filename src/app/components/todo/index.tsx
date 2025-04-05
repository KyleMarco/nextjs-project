"use client"
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

type ITodoAttributes = {
  id: string;
  title: string;
  author: string;
  content: string;
  date: string;
}

const Todo = () => {
    const [rows, setRows] = useState<ITodoAttributes[]>([]);

    const handleDelete = useCallback(async(id: string) => {
        await fetch(`http://localhost:3000/api/todos`, 
            { 
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id })
            }
        ).then((res) => {
            if (res.status === 200) {
                setRows((currentRows) => currentRows.filter((row) => row.id !== id));
            }
        });
    }, []);

    useEffect(() => {
        const fetchRows = async () => {
            const { todos: { rows: fetchRows } } = await fetch('http://localhost:3000/api/todos', { method: 'GET' }).then((resp) => resp.json());
            setRows(fetchRows);
        };

        fetchRows();
    }, []);

    

    return (
        <div className="flex flex-col justify-center gap-4">
            {rows.length ? rows.map(({ id, title, author, content, date }: ITodoAttributes) => (
                <div key={id}>
                    <h1>{title}</h1>
                    <h1>{author}</h1>
                    <p>{content}</p>
                    <h1>{date}</h1>
                    <button onClick={() => handleDelete(id)}> Delete </button>
                </div>
            )) : <h1>Empty Todo List</h1>}
            <Link href="/todo/insert"> Insert new ToDo </Link>
        </div>
    )
};

export default Todo;