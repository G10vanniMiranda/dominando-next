'use client';

import { useEffect, useState } from "react";

export default function PageTeste() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data.posts));
    }, []);

    return (
        <div className="flex flex-col items-center justify-center gap-4">

            <h1 className="text-center font-bold mt-9 text-6xl">
                Pagina Teste
            </h1>

            <div className="flex flex-col gap-4 mx-2">
                {posts.map((post: any) => (
                    <div key={post.id} className="bg-gray-200 p-4 rounded-md flex flex-col gap-2">
                        <h2 className="text-2xl font-bold">{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}