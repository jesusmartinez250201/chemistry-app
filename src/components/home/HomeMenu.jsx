import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import PeriodicTable from '../PeriodicTable/PeriodicTable';
import Bonds from './Bonds';
import BohrModel from './BohrModel';
import CrystallineStructure from './CrystallineStructure';

export default function HomeMenu() {
  const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]

  return (
    <>
      <div className='w-full' style={{ backgroundColor: colorPalette.background }}>
        <Navbar />
        <div className='mt-10'>
          <PeriodicTable />
          <div className='flex flex-wrap justify-center w-19/20 max-w-[1200px] mx-auto pt-3 w850:mt-4 w1200:justify-evenly xl:mt-7'
            style={{ backgroundColor: colorPalette.background }}>
            <span className='w-9/20 max-w-[370px] mx-0.5 my-3 h-72'>
              <Link draggable={false} to={'Bonds'}><Bonds /></Link>
            </span>
            <span className='w-9/20 max-w-[370px] mx-0.5 my-3 h-72'>
              <Link draggable={false} to={'BohrModel'}><BohrModel /></Link>
            </span>
            <span className='w-9/20 max-w-[370px] mx-0.5 my-3 h-72 mb-10 '>
              <Link draggable={false} to={'CrystallineStructure'}><CrystallineStructure /></Link>
            </span>
          </div>
        </div>
      </div>
      <style>{`
        body::-webkit-scrollbar {
          width: 10px;
        }

        body::-webkit-scrollbar-track {
          background: ${colorPalette.scrollbarTrack};
        }

        body::-webkit-scrollbar-thumb {
          background: ${colorPalette.scrollbarThumb};
          border-radius: 6px;
        }

        body::-webkit-scrollbar-thumb:hover {
          background: ${colorPalette.scrollbarThumbHover};
        }
      `}
      </style>
    </>
  )
}