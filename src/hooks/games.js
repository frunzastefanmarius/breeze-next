
import useSWR from "swr"
import axios from "@/lib/axios"


const fetcher = (url) => axios.get(url).then(res=>res.data)
export const userGames = () => {
    const{ data:games,error } = userSWR('/api/games', fetcher)

    console.log(games)
    return {games,error}
}