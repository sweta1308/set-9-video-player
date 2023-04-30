import { useLike } from "../contexts/LikeContext";
import { NavLink } from "react-router-dom";

export const LikedVideos = () => {
    const {likeData, handleUnlike} = useLike();
    console.log(likeData)
    return (
        <>
            <h1>Liked Videos</h1>
            {likeData.length === 0 && <h2>No Liked Videos</h2>}
            <ul>
                {likeData.map((like) => {
                    const {id, title, thumbnail} = like
                    return (
                    <li key={id}>
                        <img src={thumbnail} alt={title} />
                        <h3>{title}</h3>
                        <NavLink to={`/watch/${id}`}>Watch Here</NavLink><br />
                        <button onClick={() => handleUnlike(like)}>Unlike</button>
                    </li>
                )})}
            </ul>
        </>
    )
}