import logo from "../assets/planet.svg"
export const Header = () => {
    return(
        <div className="header">
            <h1 className="header__text">Telestrada</h1>
            <img className="header__logo" src={logo} alt="planet"/>
        </div>
    )
}