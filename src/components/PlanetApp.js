import { useEffect, useState, createContext } from "react";
import { Header } from "./Header";
import { Loading } from "./Loading";
import { PlanetList } from "./PlanetList";
export const PlanetsContext = createContext()
export const PlanetApp = () => {
    const APILINK = "https://swapi.dev/api/planets/?page=1"
    const [currentData, setCurrentData] = useState({
        next: "",
        previous: "",
        planets: []
    })
    const [immutablePlanets, setImmutablePlanets] = useState([])
    const getPlanetsData = (link) => {
        fetch(link)
            .then(async response => {
                try {
                    const data = await response.json();
                    const { next, previous, results } = data
                    const fetchedData = {
                        next: next,
                        previous: previous,
                        planets: results
                    }
                    setCurrentData(fetchedData)
                    setImmutablePlanets(results)
                } catch (error) {
                    alert(error);
                }
            })
    }
    useEffect(() => {
        getPlanetsData(APILINK);
    }, [])
    return <>
        <PlanetsContext.Provider value={{ currentData, setCurrentData, immutablePlanets, setImmutablePlanets }}>
            <Header/>
            <PlanetList/>
        </PlanetsContext.Provider>
    </>
};


