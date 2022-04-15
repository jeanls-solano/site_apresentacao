type PropriedadesComentarios = {
    text: string;
}


export function Comentario(props: PropriedadesComentarios){
    return(
        <h3>{props.text}</h3>
    );
}