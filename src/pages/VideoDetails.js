import { useParams } from "react-router"
import { useVideos } from "../contexts/VideoContext";
import { NavLink } from "react-router-dom";

export const VideoDetails = () => {
    const {videoID} = useParams();
    const {videoData} = useVideos();

    const video = videoData.find(video => video.id === Number(videoID))
    return (
        <>
            <h2>{video?.title}</h2>
            <img src={video?.thumbnail} alt={video?.title} />
            <h3>{video?.title}</h3>
            <p><strong>Description: </strong>{video?.description}</p>
            <p>Duration: {video?.duration}</p>
            <a href={video?.url}>Watch</a><br />
            <NavLink to='/videos'>See All</NavLink>
        </>
    )
}