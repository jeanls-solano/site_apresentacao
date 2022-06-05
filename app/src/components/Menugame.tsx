import { Game } from "./Game";
import { useState } from 'react'
import { Hero } from "./Hero"
import React from "react";

export function Menugame(){
    const [selectedHero, setSelectedHero] = useState(false)
    const [hero, setHero] = useState("");

    function selectHero(){
        setSelectedHero(true)
    }
    useState(() =>{
        selectHero
    })
    

    return(
        <React.Fragment>
            <h1>Menu</h1>
            <form className='game-hero' onSubmit={selectHero}>
                <button onClick={(e) => selectHero()}>hero 1</button>
                <button onClick={(e) => selectHero()}>hero 2</button>
                <button onClick={(e) => selectHero()}>hero 3</button>
            </form>
            <Game/>
        </React.Fragment>
    )

}
// {selectedHero ? <Game/> : null}