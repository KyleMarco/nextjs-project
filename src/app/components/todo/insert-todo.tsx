"use client"
import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent, MouseEvent, useCallback, useState } from "react";
import { useRouter } from 'next/navigation';
import { getSession } from 'next-auth/react';

// type ITodoAttributes = {
//     id: string;
//     title: string;
//     author: string;
//     content: string;
//     date: string;
//   }

const InsertTodo = () => {
    const router = useRouter();
    const [formData, setFormData] = useState(() => ({
        id: '',
        title: '',
        author: '',
        content: '',
        date: new Date().toString(),
    }))

    const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const uuid = uuidv4();
        const session = await getSession();

        await fetch('/api/todos', { 
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...formData, id: uuid, author: session?.user?.name })
        }).then((res) => {
            if (res.status === 200) {
                router.push('/todo');
            }
        })
    };

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }, [formData]);

    const { title, author, content } = formData;

    return (
        <>
            <span>Title: <input type="text" name="title" className="bg-white text-black" onChange={handleChange} value={title} /></span>
            <span>Author: <input type="text" name="author" className="bg-white text-black" onChange={handleChange} value={author} /></span>
            <span>Content: <textarea name="content" className="bg-white text-black" onChange={handleChange} value={content}/></span>
            <button className="bg-white text-black" onClick={handleClick}> Create new Todo </button>
        </>
    )
};

export default InsertTodo;