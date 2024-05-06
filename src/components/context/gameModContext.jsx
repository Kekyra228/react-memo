import React, { useState } from "react"

export const GameModContext = React.createContext(null);

export function EasyModSelecting({children}) {
   
    const [isEasyMod, setEasyMod] = useState(false)

    function openEasyMod() {
      setEasyMod((isEasyMod)=>!isEasyMod)
    }

 return <GameModContext.Provider value={{isEasyMod, openEasyMod}}>
            {children}
        </GameModContext.Provider>
        
}
