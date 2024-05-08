import React from 'react'

export default function Favorites({favorites}) {

    return (
        <div className='bg-slate-800 p-5 flex flex-col items-center gap-5'>
            <h2 className='text-2xl text-white font-bold'>Favoritos</h2>

            <div className='flex flex-row gap-4'>
                {favorites.map((fav, index) => {
                    return <img src={fav.image} 
                            width={60}
                            height={60}
                            alt='character image' 
                            className='rounded-full hover:scale-110' 
                            key={index}
                        />
                })}
            </div>
        </div>
    )
}
