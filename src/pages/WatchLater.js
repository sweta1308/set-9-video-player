import { NavLink } from "react-router-dom";
import { useLater } from "../contexts/WatchLAterContext";

export const WatchLater = () => {
    const {laterData, handleRemoveLater} = useLater();
    return (
        <>
            <h1>Watch Later</h1>
            {laterData.length === 0 && <h2>Nothing added to Watch Later</h2>}
            <ul>
                {laterData.map((later) => {
                    const {id, title, thumbnail} = later
                    return(
                    <li key={id}>
                        <img src={thumbnail} alt={title} />
                        <h3>{title}</h3>
                        <NavLink to={`/watch/${id}`}>Watch Here</NavLink><br />
                        <button onClick={() => handleRemoveLater(later)}>Remove from Watch Later</button>
                    </li>
                )})}
            </ul>
        </>
    )
}