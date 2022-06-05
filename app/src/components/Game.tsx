import { useState } from 'react'
import './game.css'
import { Hero } from './Hero'
import { Img } from './Img'

export function Game(){

    const pipe = document.querySelector('.pipe-run');

    function startGame(){
        document.querySelector('.pipe')?.classList.add('pipe-run')

        setInterval(() =>{
            const pipePosition = pipe?.getBoundingClientRect().left;
            // 228.40625
            if(pipePosition >= 228.40625){
                console.log("ok")
            }
        },10)
    }

    function heroJump(){
        
            setTimeout(() =>{
                document.querySelector('.hero')?.classList.remove('jump')
            }, 1000);
    }

    return (
        <div className='titulo'>
            <button onClick={(e) =>{startGame()}}>Start</button>
            <div className='game-board' >
                <div className="hero">
                    <Hero/>
                </div>
                <div className="pipe">
                    <Img/>     
                </div>         
            </div>
            <button onClick={(e) =>{heroJump()}}>JUMP</button>
        </div>
    )
}