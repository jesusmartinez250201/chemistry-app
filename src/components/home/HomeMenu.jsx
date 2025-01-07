import { Link } from 'react-router-dom';
import PeriodicTable from '../PeriodicTable/PeriodicTable';
import Bonds from './Bonds';
import BohrModel from './BohrModel';
import CrystallineStructure from './CrystallineStructure';
import { colorPalettes } from '../utils/ColorPalettes.json';
import { useEffect } from 'react';

export default function HomeMenu() {
  const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]

  useEffect(() => {
    window.data.store.set('colorPalettes', colorPalettes)
  }, [])

  return (
    <>
      <div className='w-full' style={{ backgroundColor: colorPalette.background }}>
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
    </>
  )
}