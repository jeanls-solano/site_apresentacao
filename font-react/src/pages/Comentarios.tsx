
import { useState } from "react";
import { Comentario } from "../components/Comentario";

export function Comentarios(){

    const [comentarios, setComentarios] = useState<String[]>([
        'bom d+ 1',
        'mec mano 2',
    ]);

    function createComentarios(){

    }

    return(
        <div>
            <div>
                <h1>Como o React é bom</h1>
            </div>
            <div>
                {comentarios.map(comentario =>{
                    return <Comentario text={comentario}/>
                })}
            </div>  
            <div>
                <h2>Criar novo comentário</h2>
                <input type="text" />
                <button type="submit" onClick={createComentarios}>Enviar</button>
            </div>
        </div>
    );

}