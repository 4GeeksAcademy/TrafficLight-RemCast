import { useState, useEffect } from "react";
import { getDataFetch } from "../services/getDataFetch";


const useDataFetch = (targetResource) => {
    const [resources, setResources] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect (() => {
        const localStorageResources = localStorage.getItem(targetResource);

        if (localStorageResources) {
            setResources(JSON.parse(localStorageResources));
            setIsLoading(false);
            return;
        }
        
       getDataFetch(targetResource)
        .then ((res) => {
            setResources(res);
            localStorage.setItem(targetResource, JSON.stringify(res));
            setIsLoading(false);
        })
        .catch ((err) => console.log(err));
    }, []);

    return [
        resources,
        isLoading,
    ];
};

export default useDataFetch;