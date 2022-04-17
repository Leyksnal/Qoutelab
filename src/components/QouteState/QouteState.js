import React, {createContext, useEffect, useState} from 'react'


export const QouteContext = createContext();

export const QouteState = ({children})=>{

    const [qouteFrame, setQouteFrame] = useState([])

    return(
        <QouteContext.Provider value={{qouteFrame, setQouteFrame}}>{children}</QouteContext.Provider>
    )
}
