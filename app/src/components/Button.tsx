import './game.css'

export function Button(props:{text?: string;}){
    return <button className="button-start-game">{props.text ?? 'Default'}</button>
}