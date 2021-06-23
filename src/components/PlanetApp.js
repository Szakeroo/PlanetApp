
import { useEffect, useState, createContext } from "react";
import { PaginationButton } from "./Button";
import { Header } from "./Header";
import { Loading } from "./Loading";
import { PlanetList } from "./PlanetList";
export const PlanetsContext = createContext()
export const PlanetApp = () => {
    const APILINK = "https://swapi.dev/api/planets/"
    const [currentData, setCurrentData] = useState({
        next: null,
        previous: null,
        planets: []
    })
    const isPreviousPageAvalible = currentData.previous
    const isNextPageAvalible = currentData.next
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
                        planets: results.sort(sortPlanetByName)
                    }
                    setCurrentData(fetchedData)
                    setImmutablePlanets(results)
                } catch (error) {
                    alert(error);
                }
            })
    }
    const sortPlanetByName = (planet1, planet2) => {
        const firstPlanetName = planet1.name.toLowerCase();
        const secondPlanetName = planet2.name.toLowerCase();
        let compared = 0;
        if (firstPlanetName > secondPlanetName) {
            compared = 1;
        } else if (firstPlanetName < secondPlanetName){
            compared = -1;
        }
        return compared;
    }
    useEffect(() => {
        getPlanetsData(APILINK);
    }, [])
    return <>
        <PlanetsContext.Provider value={{ currentData, setCurrentData, immutablePlanets, setImmutablePlanets }}>
            <Header />
            <PlanetList />
            <div className="pagination__wrapper">
            {isPreviousPageAvalible && <PaginationButton func={getPlanetsData} link={currentData.previous} text={"Previous"} ></PaginationButton >}
            {isNextPageAvalible && <PaginationButton func={getPlanetsData} link={currentData.next} text={"Next"} ></PaginationButton >}
            </div>
        </PlanetsContext.Provider>
    </>
};


