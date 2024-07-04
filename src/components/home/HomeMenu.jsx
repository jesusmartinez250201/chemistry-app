import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

{/**********
   * ICONS *
   *********/}
import chevronRight from '../../assets/img/icons/chevron-right.svg';
import chevronLeft from '../../assets/img/icons/chevron-left.svg';


{/***************
   * COMPONENTS *
   **************/}
import CrystallineStructure from './CrystallineStructure';
import PeriodicTable from './PeriodicTable/PeriodicTable';
import Bonds from './Bonds';
import Loading from '../Loading';

export default function HomeMenu() {
  const [currentMenuItem, setCurrentMenuItem] = useState(0);
  const $menuItemsContainer = useRef(), $menu = useRef();
  const [isLoaded, setIsLoaded] = useState(false);

  const menuItems = [
    <PeriodicTable />,
    <CrystallineStructure />,
    <Bonds />
  ];

  const fadeLeft = () => {
    //console.log($menuItemsContainer);
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
    //console.log($menuItemsContainer);
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

  const handleLoad = () => {
    setIsLoaded(true);
    $menu.current.classList.remove('hidden');
  }

  return (
    <>
      {/*****************
           * MENU SECTION *
           ****************/}
      <Loading visible={isLoaded} />
      <section id='menu' className='hidden' ref={$menu} onLoad={handleLoad}>
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
              || menuItems.at(currentMenuItem).type === Bonds)
              ? <Link to='/test' className='h-96 w-full'>{menuItems.at(currentMenuItem)}</Link>
              : <div className='w-full'><PeriodicTable /></div>
          }
        </div>

      </section>
      {/*********************
           * END MENU SECTION *
           ********************/}
    </>
  )
}