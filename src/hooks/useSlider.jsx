import { useContext } from 'react';
import SliderContext from '../components/context/SliderContext';

const useSlider = () => useContext(SliderContext);

export default useSlider;