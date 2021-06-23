
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
                        planets: results
                    }
                    setCurrentData(fetchedData)
                    setImmutablePlanets(results)
                } catch (error) {
                    alert(error);
                }
            })
    }
    const handlePagination  = (link) => {
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
            <Header />
            <PlanetList />
            {isNextPageAvalible && <PaginationButton func={handlePagination} link={currentData.next} text={"Next"} ></PaginationButton >}
            {isPreviousPageAvalible && <PaginationButton func={handlePagination} link={currentData.previous} text={"Previous"} ></PaginationButton >}
        </PlanetsContext.Provider>
    </>
};


