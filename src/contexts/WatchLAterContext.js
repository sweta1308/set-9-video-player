import { createContext, useContext, useState } from "react";

const LaterContext = createContext();

export const LaterProvier = ({children}) => {
    const [laterData, setLaterData] = useState([]);

    const handleLaterClick = (video) => {
        const findIndex = laterData.findIndex(({id}) => id === video.id)
        if (findIndex === -1) {
            setLaterData([...laterData, video])
        } else {
            setLaterData([...laterData])
        }
    }

    const handleRemoveLater = (video) => setLaterData(data => data.filter(({id}) => video.id!==id))
    return (
        <LaterContext.Provider value={{handleLaterClick, laterData, handleRemoveLater}}>
            {children}
        </LaterContext.Provider>
    )
}

export const useLater = () => useContext(LaterContext)