
'use client'
import React, { createContext, useState } from 'react';

export const uesContext = createContext({})

const AddPlan = ({children}) => {

    const [plan, setPlan] = useState([])
    const [save, setSave] = useState([])
    const shared = {
        plan,
        setPlan,
        save,
        setSave
    }

    return <uesContext.Provider value={shared}>{children}</uesContext.Provider>
};

export default AddPlan;