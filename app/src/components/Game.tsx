import { useState } from 'react'
import './game.css'
import { Img } from './Img'

export function Game(){
    return (
        <div className='titulo'>
            <h1 >Game</h1>
            <div className='game-board'>
                <Img/>              
            </div>
        </div>
    )
}