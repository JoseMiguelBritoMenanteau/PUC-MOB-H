import { useContext, createContext, useState, createElement, ReactNode } from "react";

interface ContextType {
    username: string;
    setUsername: (valor: string) => void
}


const AppContext = createContext<ContextType | undefined>(undefined);

interface ProviderProps {
    children: ReactNode;
}

export const AppProvider: React.FC<ProviderProps> = ({children}) => {
    const [username, setUsername] = useState<string>('');

    const value = { username, setUsername };

    return <AppContext.Provider value = {value}>{children}</AppContext.Provider>;

};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error('useAppContext debe usarse dentro de AppProvider');
    return context;
}






