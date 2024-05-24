import { createContext, useContext, useEffect, useMemo, useState } from "react";
import useDataFetch from "../hooks/useDataFetch";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [people, peopleAreLoading] = useDataFetch("people");
    const [planets, planetsAreLoading] = useDataFetch("planets");
    const [species, speciesAreLoading] = useDataFetch("species");
    const [starships, starshipsAreLoading] = useDataFetch("starships");
    const [favorites, setFavorites ] = useState ([]);

    useEffect (() => {
        const FavLS = localStorage.getItem('favorites');

        if (FavLS) {
            setFavorites(JSON.parse(FavLS));
            return;
        }
    }, []);

    const isLoading = useMemo(() => {
        return peopleAreLoading || planetsAreLoading || speciesAreLoading || starshipsAreLoading
    },[peopleAreLoading, planetsAreLoading, speciesAreLoading, starshipsAreLoading]);

    const addToFav = (uid, name) => setFavorites(prev => {
        localStorage.setItem('favorites', JSON.stringify([...prev, {uid, name}]));
        return [...prev, {uid, name}]
        });

    const removeFav = (uid) =>
     setFavorites((prev) => {
        const newFavs = prev.filter((favorite) => favorite.uid !== uid);
        localStorage.setItem('favorites', JSON.stringify(newFavs));
        return newFavs;
    });

    const store = {
        people,
        planets, 
        species, 
        starships, 
        isLoading,
        favorites
    };

    const actions = {
        addToFav,
        removeFav
    };
        
    return <AppContext.Provider value={{store, actions}}>{children}</AppContext.Provider>
}

const useAppContext =() => useContext(AppContext);

export default useAppContext;