import sonic2 from '../assets/OOTy.gif'
import sonic from '../assets/sonic.gif'
import goku from '../assets/goku.gif'

export function Hero(props:{text?: string;}){
    return  ( <img src={props.text}></img> )
}