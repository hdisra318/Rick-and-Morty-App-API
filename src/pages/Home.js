import { useEffect, useState } from "react";

import Card from "../components/Card";
import Favorites from "../components/Favorites";

const Home = ({characters, favorites, setFavorites}) => {

    function displayCards() {

        const filterCharacters = character => {
    
            let found = false
    
            favorites.forEach(fav => {
                if(fav && fav.name === character.name)
                    found = true
            })
    
            return found ? null : character; 
        }
    
        const newCharacters = characters.filter(filterCharacters);
    
        return newCharacters.map((character, index) => {
            return <Card character={character} setFavorites={setFavorites} favorites={favorites} key={index} />
        })
    }

    function displayFavoriteCards() {
        if(favorites !== []) {
            return favorites.map((character, index) => {

                return <Card key={index} setFavorites={setFavorites} character={character} />
            })
        }
    }

    return (
        <main className="bg-slate-700 h-full">
            

            {/* Favorites */}
            <Favorites favorites={favorites} />

            {/* Searchbar */}



            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-5 mb-0 pb-5">
                {displayFavoriteCards()}
                {displayCards()}
            </div>
            

        </main>
    );
}


export default Home;