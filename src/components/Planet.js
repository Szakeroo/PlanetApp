export const Planet = ({ name, rotation, climate, gravity, created, url }) => {
    const dateFormater = (date) => {
        const unformatedDate = new Date(date)
        const validDate = unformatedDate.toLocaleDateString()
        return validDate
    }
    const capitalizeData = (data) => {
        if (typeof data !== "string") throw new Error("Tylko string")
        // const letterRegExp = /^[A-Za-z]+$/
        // const isWordALetter = letterRegExp.test(word)
        // if(!isWordALetter) throw new Error ("Tekst musi zawierać tylko litery")
        const words = data.split(", ")
        const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        return capitalizedWords.join(", ")
    }
    return (
        <>
            <li>
                <div className="planet__body">
                    <p className="planet__body--data">name: {capitalizeData(name)}</p>
                    <p className="planet__body--data">rotation: {rotation}</p>
                    <p className="planet__body--data">climate: {capitalizeData(climate)}</p>
                </div>
                <div className="planet__body">
                    <p className="planet__body--data">gravity: {gravity}</p>
                    <p className="planet__body--data">created: {dateFormater(created)}</p>
                    <a className="planet__body--link" href={url}>Visit Planet Page</a>
                </div>
            </li>
        </>
    )
}