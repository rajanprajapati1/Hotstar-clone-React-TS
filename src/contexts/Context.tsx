import React, { createContext, useContext, useState } from 'react'

interface Props {}
const NewContext = createContext<Props | undefined>(undefined);
{/*  @ts-ignore */}
const MyContextProvider: React.FC = ({ children  }) => {
    const [Loading, SetLoading] = useState<Boolean>(false);
    return (
        <NewContext.Provider value={{ Loading, SetLoading }}>
            {children }
        </NewContext.Provider>
    )
}


const CustomHooks = ()=>{
   const context = useContext(NewContext);
   if(!context){
    throw new Error('useMyContext must be used within a MyContextProvider');
   }else{
    return context
   }
}

export {MyContextProvider ,CustomHooks};