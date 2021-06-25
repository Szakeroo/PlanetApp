import TextField from '@material-ui/core/TextField';
import React, { useContext, useEffect, useState } from "react";
import { PlanetsContext } from "./PlanetApp";
export const SearchBar = () => {
    const { setCurrentData, immutableData, setIsError, currentData } = useContext(PlanetsContext);
    const [searchParam, setSearchParam] = useState("");

    const handleSearchInput = (event) => {
        setSearchParam(event.target.value);
    }
    const filterData = (array, param) => {
        const resultArray = []
        array.forEach((planet) => {
            if (planet.name.toLowerCase().includes(param.toLowerCase())) {
                resultArray.push(planet);
            }
        })
        resultArray.length === 0 ? setIsError(true) : setIsError(false);
        return resultArray;
    }
    // useEffect(() => {
    //     setCurrentData({
    //         next:immutableData.next,
    //         previous: immutableData.previous,
    //         planets: filterData(immutableData.planets, searchParam)
    //     })
    // }, [searchParam,currentData]); tutaj sie wywala filtrowanie po nowo pobranej liście 
    // wyłączyć to mozna usuwając currentData z dependiencji , ale wtedy utracimy filter na odrazu pobranej tablicy.
    useEffect(() => {
        setCurrentData(prevState => ({ ...prevState, planets: filterData(immutableData.planets, searchParam) }));
    }, [searchParam]);


    return (
        <div className="searchbar__container">
            <TextField onChange={handleSearchInput} id="searchbar__input" label="Search by name" variant="outlined" style={{ marginRight: "25px", color: 'white' }} />
        </div>
    )
}
