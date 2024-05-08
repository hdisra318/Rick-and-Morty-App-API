import { useState, useEffect } from "react";

import Card from "../components/Card";
import Favorites from "../components/Favorites";

export default function FemalePage({characters, favorites, setFavorites}) {

    const [femaleCharacters, setFemaleCharacters] = useState([])

    useEffect(() => {
        setFemaleCharacters(characters.filter(character => {
            return character.gender === 'Female' ? character : null;
        }))
    }, [])

    function displayCards() {
    
        return femaleCharacters.map((character, index) => {
            return <Card key={index} character={character} setFavorites={setFavorites} />
        })
    }


    return (
        <div>

            {/* Favorites */}
            <Favorites favorites={favorites} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-5 mb-0 pb-5">

                {displayCards()}
            </div>
        </div>
    )
}
