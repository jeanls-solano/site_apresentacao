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

    return(
        <React.Fragment>
            <h1>Menu</h1>
            <form className='game-hero' onSubmit={selectHero}>
                <button onClick={(e) => setHero("sonic2")}>hero 1</button>
                <button onClick={(e) => setHero("sonic")}>hero 2</button>
                    <button onClick={(e) => setHero("goku")}>hero 3</button>
            </form>
            {selectedHero ? <Hero text={hero}/> : null}
            <Game/>
        </React.Fragment>
    )

}