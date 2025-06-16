
export default function DetailPost({
    params
}: {
    params: Promise<{ id: string }>
}) {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-center font-bold mt-9 text-6xl">Post</h1>
        </div>
    );
}