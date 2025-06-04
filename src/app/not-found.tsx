import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-center font-bold mt-9 text-6xl">Página 404 não encontrada!</h1>

            <p>Essa pagina que tentou acessar não existe!</p>

            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-8 py-2 px-4 rounded" href="./">
                Voltar para Home
            </Link>
        </div>
    );
}