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
    <div className='flex flex-col w-full h-full mt-16
        w800:mt-0
        xl:flex-row xl:justify-center xl:mx-10 xl:items-center'
      style={{ backgroundColor: colorPalette.background }}>
      <div className='order-first xl:order-last mb-14 w-full
      xl:my-auto xl:w-4/5 xl:px-10'>
        <PeriodicTable />
      </div>
      <div id='3d-menu' className='
        flex flex-wrap justify-center w-19/20 max-w-[1300px] mx-auto text-2xl
          w850:mt-4 
          w1200:justify-evenly 
          xl:mt-0 xl:flex-col xl:order-first xl:w-auto xl:text-xl'>
        <span className='w-9/20 max-w-[370px] mx-0.5 my-3 h-52
          xl:w-65 xl:h-[23vh]'>
          <Link className='' draggable={false} to={'Bonds'}><Bonds /></Link>
        </span>
        <span className='w-9/20 max-w-[370px] mx-0.5 my-3 h-52
          xl:w-65 xl:h-[23vh]'>
          <Link draggable={false} to={'BohrModel'}><BohrModel /></Link>
        </span>
        <span className='w-9/20 max-w-[370px] mx-0.5 my-3 h-52
          xl:w-65 xl:h-[23vh]'>
          <Link draggable={false} to={'CrystallineStructure'}><CrystallineStructure /></Link>
        </span>
      </div>
    </div>
  )
}