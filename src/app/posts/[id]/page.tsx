
export default async function DetailPost({
    params
}: {
    params: Promise<{ id: string }>
}) {

    const { id } = await params;

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-center font-bold mt-9 text-6xl">Detalhes do Post: {id}</h1>
        </div>
    );
}