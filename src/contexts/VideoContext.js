import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch";

const VideoContext = createContext();

export const VideoProvider = ({children}) => {
    const [videoData, setVideoData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        (async() => {
            try {
                const {data, status} = await fakeFetch('https://example.com/api/videos');
                if (status === 200) {
                    setVideoData(data.videos);
                    setIsLoading(false)
                }
            } catch ({status, message}) {
                if (status === 404) {console.log(message)}
            }
            
        })()
    }, [])
    
    return (
        <VideoContext.Provider value={{videoData, isLoading}}>
            {children}
        </VideoContext.Provider>
    )
}

export const useVideos = () => useContext(VideoContext)