export function getFavorites(){
    const fav = localStorage.getItem("favorites")
    return fav ? JSON.parse(fav) : []
}

export function toggleFavorite(id: number){
    const favorites = getFavorites()

    if(favorites.includes(id)){
        const updated = favorites.filter((f:number)=>f!==id)
        localStorage.setItem("favorites",JSON.stringify(updated))
    }
    else {
        favorites.push(id)
        localStorage.setItem("favorites",JSON.stringify(favorites))
    }
}

export function isFavorite(id:number){
    const favorites = getFavorites()
    return favorites.includes(id)
}