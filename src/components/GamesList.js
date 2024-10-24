'use client'

import { useGames } from '@/hooks/games'



export const GamesList = ()=>{
    const { games } = useGames()
    return(
        <div>
            <h1>GamesList</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {games?.map((game) => (
                    <div key={game.id} className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-xl font-semibold mb-2">{game.name}</h2>
                        <div className="flex justify-between">
                            <button
                                //onClick={() => handleJoin(game.id)}
                                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                                Join
                            </button>
                            <button
                                //onClick={() => handleLeave(game.id)}
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                                Leave
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}