import TextField from '@material-ui/core/TextField';
import React, { useContext, useEffect, useState } from "react"
import { PlanetsContext } from "./PlanetApp";
export const SearchBar = () => {
    const {setCurrentData, immutableData,setIsError,currentData} = useContext(PlanetsContext);
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
        resultArray.length === 0 ? setIsError(true) : setIsError(false)
        return resultArray;
    }
    useEffect(() => {
        setCurrentData({
            next:immutableData.next,
            previous: immutableData.previous,
            planets: filterData(immutableData.planets, searchParam)
        })
    }, [searchParam,currentData]);
    return (
        <div className="searchbar__container">
            <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAFP0lEQVR4Xu2bgVHVQBCGdytQK1AqUCoQKlAqUCpQKhAqECsQKhArECoQKxAqUCpY52cub/KSu+x/ySV575mbYVBySTZf/t3b29ypLK2TgC58ugksgByFLIAWQMOCyKKgsRRkZq9F5JWIPBWRvyJyKyIPqorfO9OyFWRmH0Tko4i8SFC4E5ErEbncBVhZgMzsq4i8z5AHYJ2q6mXGORvVlQbUA079QV1QZnYhIu/CSde1k/FvuO39HIqkAJnZgYj8KPBqAepYVesAVpc1M7ju5477TO6+LKDfHTGnDzeo5URVEdzXmpkh8COGPXcuDFWdj+2+LqBg8M+EsTciUqkBDwalPSGJAQ7UBBhNSBgZ8XeMlF5z3de7QNdxBlBK9vcY5psqMDMEcbgJHpJpUMFJrGMjLnnXwosCcAAr1hhApyLyKXLHM1XFsVULasNIBzXlNLjLUezhAnBck2lJVTInx/oUA9RDOU17ulwOrguXY90XqcVZXyj18xhAKRf7rqpvcbHMt+zZDTdBEF9rQZ1wIxbShaoeezfzjjOAuob4vRCYWRfw7KmORx9uDkguoKAQBL7YsIvYkRtvWEhQC+LSWirQAxLSiXP2ps1+LCDcAHOwqRtewGEBSADdSieYh2EBYciGilj/Z+7N9ikBCSrciyWmnhEUoOBmqeHeu0eJ4yUgXanqUa4xNKAACYa+zL1Jof4lIMFdo/PAlI25gFADwrxsrpaChHTjG2HUraruE/1WXXIBsYbk2JDbNwUJUxwm3YjmWaUUhJIH8qK5WwpSvaaUsjFLRbSCnFn9HMCiQdfMEGO8KsA+W3zLATRXLtQFv5VxmxlSEkDqGky+qCqmUG7LAYSa0FhZs2toR4dWTCGy7TtVxTTJbRQgM5t79PIepJUpExNoJI5u7YgFtAmjVxckZMrIcda+yTkFN2r6wQKaM4v21FMdb41sTjxqFfxiN2IBMSMD+yBj9osFbcTNWE39RlXdlGXXAAF+LGjHPOC/BZSKR815JDWSsQqyMf1ihGu3suVYoquq7vO7HWC8mW0bIJgd++qyluyWBLQtQbopxrUpRRjV4GooH2OpjvvtjlXQtgKKuVo16/9vg3RTRTFXQwaNIF1smN+GRDEV6zGqwdVW04qwWuWg+WV4SKK46VMNbyBslUYwqjElDzYGbfpk1QOE49n1aJxEAQpDferjIWPcJvS5VtXDXENyAG1zHKq4ZKsoB9AuuFm2imhAwc22NR+qe1aWinIBlVrMmRsKSvZfLdthLpoFaIdURJVbs0axinbBJcHMCxyrD70kJltBQUVYSvJmLOsnuC5VC+qloABozuUwpfhRbtZLQQHStgds6ht9b0ABkrd1oNTbHnIdLHaPfYqmRrNBgAIkZsHAkAccci5WuaJAFvuqQS1iGAxogyFhv9rj1q1UybhYyZV5hWa2SXO1tfhiZtGVcZMCCm8KdSO43ByLPWHCA9YvRT5Bp6ZIz7yFnUVcrK6wsNABkLw1Oowwc/u0dv6EQv2f2IUmV1ADFPwfbuft+8qFwPRHmbXaqYh0JFZ7xg7G1L7b1T2KK6hpfViGgnRgrtWxKaCrIN5FfHRAjTkcYhR++qoKe9QwzXncbTgw1lFlj8kANdwPKy7wA4lX8sf/68H9V20/PoCg2FX/MoFz+8Y6Sj2952JMEJiqj5lBkVATq0qAx0jX2i8bDeRTPcjY9wmgKheOpRlIAbD9c22XpGfXLC7mGTX0eFjJgYoD3BZKQXkjawtCZcNOAhoKuH7+AsihuQBaAA1zuEVBi4KGKegfOsQvZ4Nf8egAAAAASUVORK5CYII=" alt={"planet image"} />
            <TextField  onChange={handleSearchInput} id="searchbar__input" label="Search by name" variant="outlined" style={{marginRight: "25px"}}/>
        </div>
    )
}
