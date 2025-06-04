'use client';

import { useState } from "react";

export function Button() {
    const [name, setName] = useState('Mi7anda');

    function handleChangeName() {
        setName("Giovanni Miranda");
    }

    return (
        <div>
            <button onClick={handleChangeName} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Alterar nome
            </button>

            <h3>Nome: {name}</h3>
        </div>
    );
}