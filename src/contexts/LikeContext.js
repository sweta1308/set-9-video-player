import { createContext, useContext, useState } from "react";

const LikeContext = createContext();

export const LikeProvier = ({children}) => {
    const [likeData, setLikeData] = useState([]);

    const handleLikeClick = (video) => {
        const findIndex = likeData.findIndex(({id}) => id === video.id)
        if (findIndex === -1) {
            setLikeData([...likeData, video])
        } else {
            setLikeData([...likeData])
        }
    }

    const handleUnlike = (video) => setLikeData(data => data.filter(({id}) => video.id!==id))
    return (
        <LikeContext.Provider value={{handleLikeClick, likeData, handleUnlike}}>
            {children}
        </LikeContext.Provider>
    )
}

export const useLike = () => useContext(LikeContext)