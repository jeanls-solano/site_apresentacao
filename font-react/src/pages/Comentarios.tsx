
import { useState } from "react";
import { Comentario } from "../components/Comentario";

export function Comentarios(){

    const [comentarios, setComentarios] = useState<string[]>([
        'bom d+ 1',
        'mec mano 2',
    ]);

    const [novoComentario, setNovoComentario] = useState<string>('')

    function createComentarios(novoComentario){
        return console.log(novoComentario)
        setComentarios([...comentarios, novoComentario ])
        
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
                <input type="text" name="novoComentario" value={novoComentario} onChange={(e) =>setNovoComentario(e.target.value)}/>
                <button type="submit" onClick={(x)=> setComentarios([...comentarios, novoComentario ])}>Adicionar</button>
                
            </div>
        </div>
    );

}