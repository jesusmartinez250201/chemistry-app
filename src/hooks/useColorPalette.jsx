import { useContext } from "react";
import { ColorPaletteContext } from "../components/context/ColorPaletteContext";

export const useColorPalette = () => useContext(ColorPaletteContext);