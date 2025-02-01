import { useContext } from 'react';
import FullScreenContext from '../components/context/fullScreenContext';

const useFullScreen = () => useContext(FullScreenContext);

export default useFullScreen;