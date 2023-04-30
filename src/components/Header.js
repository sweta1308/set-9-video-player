import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>   ||
            <NavLink to='/videos'>Videos</NavLink>  ||
            <NavLink to='/liked'>Liked Videos</NavLink>  ||
            <NavLink to='/watch-later'>Watch Later</NavLink>
        </nav>
    )
}