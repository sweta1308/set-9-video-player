import { NavLink } from "react-router-dom";
import { useVideos } from "../contexts/VideoContext"
import { useLike } from "../contexts/LikeContext";
import { useLater } from "../contexts/WatchLAterContext";

export const Videos = () => {
    const {videoData, isLoading} = useVideos();
    const {handleLikeClick, likeData} = useLike();
    const {handleLaterClick, laterData} = useLater();
    return (
        <>
            <h1>Videos</h1>
            {isLoading && <h3>Loading Videos....</h3>}
            <ul>
                {videoData.map((video) => {
                    const {id, title, thumbnail} = video;
                    const findLike = likeData.find(like => like.id === video.id);
                    const findLater = laterData.find(data => data.id === video.id)
                    return(
                    <li key={id}>
                        <img src={thumbnail} alt={title} />
                        <h3>{title}</h3>
                        <NavLink to={`/watch/${id}`}>Watch Here</NavLink><br />
                        <button onClick={() => handleLikeClick(video)}>{findLike ? 'Liked' : 'Like'}</button><br />
                        <button onClick={() => handleLaterClick(video)}>{findLater ? 'Added' : 'Add'} to Watch Later</button>
                    </li>
                )})}
            </ul>
        </>
    )
}