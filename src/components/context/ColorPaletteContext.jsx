import React, { createContext } from 'react';
import { selected, colorPalettes } from '../utils/ColorPalettes.json';

export const ColorPaletteContext = createContext();

export const ColorPaletteProvider = ({ children }) => {
    const colorPalette = colorPalettes[selected];
    
    return (
        <ColorPaletteContext.Provider value={{ colorPalette }}>
        {children}
        </ColorPaletteContext.Provider>
    );
}