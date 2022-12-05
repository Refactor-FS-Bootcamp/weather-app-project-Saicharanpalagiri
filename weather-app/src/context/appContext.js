import React, { createContext, useState } from 'react'

export const MyContext=createContext();

// export const AppContextProvider=({children})=> {
//     const [selCities, setSelCities] = useState([
//         {
//           cities: "Blr"
//         }
//       ]);
    
//       const value = {
//         selCities,
//         setSelCities
//       };
//       return <MyContext.Provider value={value}>{children}</MyContext.Provider>
// }
