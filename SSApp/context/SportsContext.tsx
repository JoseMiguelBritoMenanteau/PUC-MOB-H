import React, {createContext, useState, useContext, ReactNode, useCallback} from 'react';




interface Sport {
    id: string;
    deporte: string;
    campos: { [key: string]: string };
    image: string | null;
    tags: string[];
    fecha: string;
    username: string;
}

interface SportsContextType {
    sports: Sport[];
    addSport: (sportData: Omit<Sport, 'id' | 'username'>, username: string) => void
}

const SportContext = createContext<SportsContextType | undefined>(undefined);

interface SportsProviderProps {
    children: ReactNode;
}

export const SportsProvider: React.FC<SportsProviderProps> = ({children}) => {
    const [sports, setSports] = useState<Sport[]>([]);

    const nextSportId = useRef(1);

    const addSport = useCallback((sportData: Omit<Sport, 'id' | 'username'>, username: string)) => {
        const  newId = nextActivityId.current
    }
    

    return;
}

























