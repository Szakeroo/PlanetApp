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
            <li className="planet__container">
                <div className="planet__body">
                    <p className="planet__body--data"><b>Name:</b> {capitalizeData(name)}</p>
                    <p className="planet__body--data"><b>Rotation:</b> {rotation === "unknown" ? "No Data" : rotation}</p>
                    <p className="planet__body--data"><b>Climate:</b> {climate === "unknown" ? "No Data" : capitalizeData(climate)}</p>
                </div>
                <div className="planet__body">
                    <p className="planet__body--data"><b>Gravity:</b> {gravity === "unknown" ? "No Data" : gravity}</p>
                    <p className="planet__body--data"><b>Created:</b> {dateFormater(created)}</p>
                    <a className="planet__body--link" href={url}><b>Planet Page</b></a>
                </div>
            </li>
        </>
    )
}