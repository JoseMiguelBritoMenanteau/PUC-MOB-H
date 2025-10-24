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


























