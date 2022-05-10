import React, { createContext, useState } from "react";

import { BingoCard } from "../features/play/types";

interface AppContextProps {
    items: BingoCard[];
}

export const AppContext = createContext<AppContextProps>({
    items: []
});

const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [items] = useState<BingoCard[]>([
        { id: 1, content: "Racist remark" },
        { id: 2, content: "Dad sneezes" },
        { id: 3, content: "Dog farts" },
        { id: 4, content: "Thanks Obama" },
        { id: 0, content: "FREE", activated: true },
        { id: 5, content: "Mentions sinners" },
        { id: 6, content: "Overcooked meat" },
        { id: 7, content: "Something sexist" },
        { id: 8, content: "Mentions 'Arabs'" }
    ]);
    return <AppContext.Provider value={{ items }}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
