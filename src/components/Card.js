
export default function Card({character, setFavorites=null, favorites=null}) {

    const {name, image, gender, status, species} = character;

    return (
        <div className="bg-slate-800 p-3 rounded-lg text-center hover:bg-slate-600 hover:scale-105">
            <img 
                src={image}
                alt="character image"
                className="rounded mx-auto"
            />


            {/* Character info */}
            <div className="flex flex-center flex-col gap-4 p-3 text-white">
                <h4 className="text-xl font-bold">{name}</h4>

                <p className="text-lg">Estatus: <span className={status === 'Alive' ? 'text-green-500' : 'text-red-500'}>{status}</span></p>
                <p className="text-lg">Género: {gender}</p>
                <p className="text-lg">Especie: {species}</p>
            </div>

            {/* Add to Favorites */}
            <button onClick={() => setFavorites([...favorites, character])} type="button" className="bg-blue-900 hover:bg-blue-700 text-white p-3 text-md rounded-lg mt-3">Añadir a Favoritos</button>

        </div>
    )
}
