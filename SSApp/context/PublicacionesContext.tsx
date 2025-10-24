import React, { createContext, useState, ReactNode , useContext} from 'react';

export type Publicacion = {
    username: string; 
    deporte: string;
    campos: { [key: string]: string };
    image: string | null;
    tags: string[];
    fecha: string;
};

type PublicacionesContextType = {
    publicaciones: Publicacion[];
    agregarPublicacion: (publicacion: Publicacion) => void;
    eliminarPublicacion: (publicacion: Publicacion) => void;
};

const PublicacionesContext = createContext<PublicacionesContextType | undefined>(undefined);

export const usePublicaciones = () => {
    const context = useContext(PublicacionesContext);
    if (!context) throw new Error('usePublicaciones debe usarse dentro de PublicacionesProvider');
    return context; 
};

export const PublicacionesProvider = ({children}: {children: ReactNode}) => {
    const [publicaciones, setPublicaciones] = useState<Publicacion[]>([]);
    
    const agregarPublicacion = (publicacion: Publicacion) => {
        setPublicaciones(prev => [publicacion, ...prev]);
    };

    const eliminarPublicacion = (publicacionAEliminar: Publicacion) => {
        setPublicaciones(prev => 
            prev.filter(publicacion => 
                !(publicacion.username === publicacionAEliminar.username &&
                  publicacion.deporte === publicacionAEliminar.deporte &&
                  publicacion.fecha === publicacionAEliminar.fecha &&
                  publicacion.image === publicacionAEliminar.image)
            )
        );
    };

    return (
        <PublicacionesContext.Provider value={{ publicaciones, agregarPublicacion, eliminarPublicacion }}>
            {children}
        </PublicacionesContext.Provider>
    );
};