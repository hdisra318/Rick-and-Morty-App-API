import { useEffect, useState } from "react";

import Card from "../components/Card";
import Favorites from "../components/Favorites";


function MalePage({characters, favorites, setFavorites}) {

    const [maleCharacters, setMaleCharacters] = useState([])

    useEffect(() => {
        setMaleCharacters(characters.filter(character => {
            return character.gender === 'Male' ? character : null;
        }))
    }, [])

    function displayCards() {
    
        return maleCharacters.map((character, index) => {
            return <Card key={index} character={character} setFavorites={setFavorites}/>
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

export default MalePage;