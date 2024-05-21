import { useState, useEffect, useRef } from 'react';

{/**********
   * ICONS *
   *********/}
import chevronRight from '../../assets/img/icons/chevron-right.svg';
import chevronLeft from '../../assets/img/icons/chevron-left.svg';

{/***************
   * COMPONENTS *
   **************/}
import CrystallineStructure from './CrystallineStructure';
import PeriodicTable from './PeriodicTable';
import Molecules from './Molecules';

export default function HomeMenu() {
    const [currentMenuItem, setCurrentMenuItem] = useState(0);
    const $menuItemsContainer = useRef(null);

    const menuItems = [
      <CrystallineStructure />,
      <PeriodicTable />,
      <Molecules />
    ];
  
    useEffect(() => {
      console.log('currentMenuItem:', currentMenuItem);
    }, [currentMenuItem])
  
    const fadeLeft = () => {
      console.log($menuItemsContainer);
      $menuItemsContainer.current?.classList.add('animate-fadeOutLeft');
      $menuItemsContainer.current.onanimationend = () => {
        if (currentMenuItem === 0) {
          setCurrentMenuItem(menuItems.length - 1);
        } else {
          setCurrentMenuItem(currentMenuItem - 1);
        }
        $menuItemsContainer.current?.classList.remove('animate-fadeOutLeft');
        $menuItemsContainer.current?.classList.add('animate-fadeInRight');
        $menuItemsContainer.current.onanimationend = () => {
          $menuItemsContainer.current?.classList.remove('animate-fadeInRight');
        }
      }
    }

    const fadeRight = () => {
      console.log($menuItemsContainer);
      $menuItemsContainer.current?.classList.add('animate-fadeOutRight');
      $menuItemsContainer.current.onanimationend = () => {
        if (currentMenuItem === menuItems.length - 1) {
          setCurrentMenuItem(0);
        } else {
          setCurrentMenuItem(currentMenuItem + 1);
        }
        $menuItemsContainer.current?.classList.remove('animate-fadeOutRight');
        $menuItemsContainer.current?.classList.add('animate-fadeInLeft');
        $menuItemsContainer.current.onanimationend = () => {
          $menuItemsContainer.current?.classList.remove('animate-fadeInLeft');
        }
      }
    }

    return (
      <>
        {/*****************
           * MENU SECTION *
           ****************/}
        <section id='menu'>
          <div>
            <button onClick={fadeLeft}>
            <img className='w-20 inline' src={chevronLeft} alt="left arrow" />
            </button>
            <button onClick={fadeRight}>
            <img className='w-20 inline' src={chevronRight} alt="right arrow" />
            </button>
          </div>
  
          {/*************
           * MENU ITEMS *
           **************/}
          <div id='menu-items-container' ref={$menuItemsContainer} className='flex justify-center overflow-hidden'>
            {/*<button>{menuItems.at(currentMenuItem)}</button>*/}
            {
              (menuItems.at(currentMenuItem).type === CrystallineStructure
              ||  menuItems.at(currentMenuItem).type === Molecules)
              ? <button className='h-96 w-full'>{menuItems.at(currentMenuItem)}</button>
              : <div className='w-full'><PeriodicTable/></div>
            }
          </div>
            
        </section>
        {/*********************
           * END MENU SECTION *
           ********************/}
      </>
    )
}