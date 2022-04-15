type PropriedadesComentarios = {
    text: string;
}


export function Comentario(props: PropriedadesComentarios){
    return(
        <li>{props.text}</li>
    );
}