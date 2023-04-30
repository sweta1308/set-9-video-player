import { NavLink } from "react-router-dom"

export const Home = () => {
    return (
        <>
            <h1>Welcome to Video Library</h1>
            <h3>To browse all videos, click the below button or go to the videos page.</h3>
            <button><NavLink to='/videos' style={{color: 'black', textDecoration: 'none'}}>Explore Videos</NavLink></button>
        </>
    )
}