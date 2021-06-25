import { useContext } from "react";
import { PlanetsContext } from "./PlanetApp";
import { Planet } from "./Planet";
export const PlanetList = () => {
    const { currentData } = useContext(PlanetsContext);

    return (
        <ul className="planets">
            {currentData.planets.map((planet, index) =>
                < Planet key={index} name={planet.name} rotation={planet.rotation_period} climate={planet.climate}
                    gravity={planet.gravity} created={planet.created} url={planet.url} />)}
        </ul>
    )
}