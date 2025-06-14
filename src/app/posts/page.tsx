import { Button } from "@/components/button";

interface PostsProps {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface ResponseProps {
    posts: PostsProps[];
}

// SERVER COMPONENTS
export default async function PostsPage() {

    const response = await fetch('https://dummyjson.com/posts');
    const data: ResponseProps = await response.json();


    async function handleFetchPosts() {
        'use server'

        const response = await fetch('https://dummyjson.com/posts');
        const data: ResponseProps = await response.json();

        console.log(data)
    }

    async function handleSearchUser(formData: FormData) {
        'use server'

        const userId = formData.get('userId')

        const response = await fetch(`https://dummyjson.com/posts/user/${userId}`);
        const data: ResponseProps = await response.json();

        console.log(userId)
    }


    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-center font-bold mt-9 text-6xl">Todos os Posts</h1>

            <button onClick={handleFetchPosts}>
                Buscar posts
            </button>

            <form className="flex gap-2 my-4" action={handleSearchUser}>
                <input
                    type="text"
                    placeholder="ID do Usuário"
                    className="border border-gray-200 p-2"
                    name="userId"
                />

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                    Buscar usuário
                </button>
            </form>

            <div className="flex flex-col gap-4 mx-2">
                {data.posts.map(post => (
                    <div key={post.id} className="bg-gray-200 p-4 rounded-md flex flex-col gap-2">
                        <h2 className="text-2xl font-bold">{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}