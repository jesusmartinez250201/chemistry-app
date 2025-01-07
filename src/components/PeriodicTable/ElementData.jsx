import { useState, useEffect } from 'react';
import { useParams, NavLink, useLocation } from 'react-router-dom';
import parse from 'html-react-parser';
import { Table } from '../utils/ElementsData.json';
import useElementImage from '../../hooks/useElementInage';
import ElementLinkIcon from '../Icons/ElementLinkIcon';

const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]

export default function ElementData() {
  const { atomicNumber } = useParams(),
    currentLocation = useLocation(),
    currentElementNumber = parseInt(currentLocation.pathname.split('/')[2]),
    [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight }),
    data = Table.Row.find(el => parseInt(el.Cell[0]) === parseInt(atomicNumber)).Cell,
    elementLinks = [],
    element = {
      atomicNumber: data[0],
      symbol: data[1],
      name: data[2],
      atomicMass: data[3],
      cpkHexColor: data[4],
      electronicConfiguration: parse(data[5]),
      electronegativity: data[6],
      atomicRadius: data[18],
      ionizationEnergy: data[8],
      electronAffinity: data[9],
      oxidationStates: data[10],
      standardState: data[11],
      meltingPoint: data[12],
      boilingPoint: data[13],
      density: data[14],
      groupBlock: data[15],
      yearDiscovered: data[16],
      description: parse(data[17]),
      image: useElementImage(data[0]),
      singleCovalentRadius: data[19],
      doubleCovalentRadius: data[20],
      tripleCovalentRadius: data[21],
      ionicRadius: data[22],
      metallicRadius: data[23],
      vanDerWaalsRadius: data[7],
      crystalStructure: data[24],
    }

  window.scrollTo(0, 0);

  for (let i = 0; i < 118; i++) {
    elementLinks.push(
      <button key={i} value={Table.Row[i].Cell[0]}
      disabled={(currentElementNumber === i + 1)}
        className='unselectable stroke-2 my-2 transition-all element-link w850:w-full'
        style={{ stroke: colorPalette.text, color: (currentElementNumber === i + 1) ? colorPalette.buttonHover : colorPalette.text, fontWeight: (currentElementNumber === i + 1) ? 'bold' : 'normal' }}>
        <NavLink draggable={false} to={`/element/${Table.Row[i].Cell[0]}`}
          className='w850:flex w850:justify-between w850:items-center w850:pr-2'>
          {Table.Row[i].Cell[2]}
          {
            windowSize.width >= 850 && (
              <ElementLinkIcon className='w-6 h-auto inline-block' 
              style={{ strokeWidth: (currentElementNumber === i + 1) ? 3 : 2, stroke: (currentElementNumber === i + 1) ? colorPalette.buttonHover : colorPalette.text }} />
            )
          }
        </NavLink>
      </button>
    );
  }

  useEffect(() => {

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <section id='element-data'
        className='justify-between flex flex-wrap px-7 md:px-8 flex-grow
        w850:h-full w850:pl-4 w850:pr-0 w850:no-scrollbar w850:overflow-y-hidden
        xl:pl-5'
        style={{ backgroundColor: colorPalette.background }}>

        {/* OTROS ELEMENTOS */}
        <article id='other-elements'
          className='w-full order-last pb-7
          w850:pt-4 w850:w-1/5 w850:order-first w850:overflow-y-scroll w850:scrollbar w850:h-full
          xl:w-1/6'>
          <span
            className='block w850:pl-0 text-4xl border-b pb-2 mb-2 w850:text-base w850:border-0 w850:mb-1'
            style={{ borderColor: colorPalette.lines3d }}>
            <b style={{ color: colorPalette.textTitles }}>Otros elementos</b>
          </span>
          <div id='elements-list' className='w-full px-1 flex flex-col flex-wrap h-[700px] w850:block w850:h-auto w850:px-0'>
            {elementLinks}
          </div>
        </article>

        {/* DESCRIPCION */}
        <article id='element-description' className='w-full overflow-y-scroll w850:w-3/5 order-first w850:order-2 w850:border-x w850:px-3 xl:w-2/3 h-full'
          style={{ borderColor: colorPalette.lines3d }}>
          <div className='flex justify-between w-full border-b pb-3 mb-2 mt-4'
            style={{ borderColor: colorPalette.lines3d }}>
            {element.image}
            <h1 className='self-end font-bold text-5xl md:text-6xl w850:text-4xl lg:text-5xl xl:text-6xl'
              style={{ color: colorPalette.textTitles }}>
              {element.name}
            </h1>
          </div>
          <div className='text-justify mb-5' style={{ color: colorPalette.text }}>
            {element.description}
          </div>
          <div className={`flex justify-between w-full w850:px-2 w850:mb-4 ${(currentElementNumber === 1) ? 'flex-row-reverse' : ''}`}>
            {
              currentElementNumber > 1 && (
                <NavLink to={`/element/${currentElementNumber - 1}`}
                  className='nextprev text-xl transition-all float-left'
                  style={{ stroke: colorPalette.text, color: colorPalette.text }}>
                  <span className="block">Elemento anterior</span>
                  <ElementLinkIcon className='w-12 h-auto inline-block rotate-180 float-left' />
                </NavLink>
              )
            }
            {
              currentElementNumber < 118 && (
                <NavLink to={`/element/${currentElementNumber + 1}`}
                  className='nextprev text-xl transition-all float-right'
                  style={{ stroke: colorPalette.text, color: colorPalette.text }}>
                  <span className="block">Siguiente elemento</span>
                  <ElementLinkIcon className='w-12 h-auto inline-block float-right' />
                </NavLink>
              )
            }
          </div>
        </article>

        {/* PROPIEDADES */}
        <article id='properties' className='w-full order-2 w850:pt-4 w850:w-1/5 w850:order-last xl:w-1/6 h-full w850:overflow-y-scroll w850:scrollbar pb-7'>
          <span className='block w850:pl-4 text-4xl border-b pb-2 mb-2 w850:text-base w850:border-0 w850:mb-1'
            style={{ borderColor: colorPalette.lines3d }}>
            <b style={{ color: colorPalette.textTitles }}>Propiedades</b>
          </span>
          <div className='flex justify-between px-10 md:px-8 w850:flex-col w850:pl-6 w850:h-full w850:justify-start mb-5'>
            <div className='w850:text-xs lg:text-sm'>
              <div className='mb-1' style={{ color: colorPalette.text }}><b className='block' style={{ color: colorPalette.textTitles }}>Numero atomico: </b>{element.atomicNumber}</div>
              <div className='mb-1' style={{ color: colorPalette.text }}><b className='block' style={{ color: colorPalette.textTitles }}>Simbolo: </b>{element.symbol}</div>
              <div className='mb-1' style={{ color: colorPalette.text }}><b className='block' style={{ color: colorPalette.textTitles }}>Masa atomica: </b>{element.atomicMass}u</div>
              <div className='mb-1' style={{ color: colorPalette.text }}><b className='block' style={{ color: colorPalette.textTitles }}>Configuracion electronica: </b>{element.electronicConfiguration}</div>
              <div className='mb-1' style={{ color: colorPalette.text }}><b className='block' style={{ color: colorPalette.textTitles }}>Electronegatividad: </b>{element.electronegativity ? `${element.electronegativity}` : '--------'}</div>
              <div className='mb-1' style={{ color: colorPalette.text }}><b className='block' style={{ color: colorPalette.textTitles }}>Radio atomico: </b>{element.atomicRadius ? `${element.atomicRadius}pm` : '--------'}</div>
              <div className='mb-1' style={{ color: colorPalette.text }}><b className='block' style={{ color: colorPalette.textTitles }}>Radio covalente con enlace simple: </b>{element.singleCovalentRadius ? `${element.singleCovalentRadius}pm` : '--------'}</div>
              <div className='mb-1' style={{ color: colorPalette.text }}><b className='block' style={{ color: colorPalette.textTitles }}>Radio covalente con enlace doble: </b>{element.doubleCovalentRadius ? `${element.doubleCovalentRadius}pm` : '--------'}</div>
              <div className='mb-1' style={{ color: colorPalette.text }}><b className='block' style={{ color: colorPalette.textTitles }}>Radio covalente con enlace triple: </b>{element.tripleCovalentRadius ? `${element.tripleCovalentRadius}pm` : '--------'}</div>
              <div className='mb-1' style={{ color: colorPalette.text }}><b className='block' style={{ color: colorPalette.textTitles }}>Radio ionico: </b>{element.ionicRadius ? `${element.ionicRadius}pm` : '--------'}</div>
              <div className='mb-1' style={{ color: colorPalette.text }}><b className='block' style={{ color: colorPalette.textTitles }}>Radio metalico: </b>{element.metallicRadius ? `${element.metallicRadius}pm` : '--------'}</div>
              <div className='mb-1' style={{ color: colorPalette.text }}><b className='block' style={{ color: colorPalette.textTitles }}>Radio de Van der Waals: </b>{element.vanDerWaalsRadius ? `${element.vanDerWaalsRadius}pm` : '--------'}</div>
              <div className='mb-1' style={{ color: colorPalette.text }}><b className='block' style={{ color: colorPalette.textTitles }}>Energia de Ionizacion: </b>{element.ionizationEnergy ? `${element.ionizationEnergy}eV` : '--------'}</div>
            </div>
            <div className='w850:text-xs lg:text-sm w850:pb-6'>
              <div className='mb-1' style={{ color: colorPalette.text }}><b className='block' style={{ color: colorPalette.textTitles }}>Afinidad electronica: </b>{element.electronAffinity ? `${element.electronAffinity}` : '--------'}</div>
              <div className='mb-1' style={{ color: colorPalette.text }}><b className='block' style={{ color: colorPalette.textTitles }}>Estado de oxidacion: </b>{element.oxidationStates ? `${element.oxidationStates}` : '--------'}</div>
              <div className='mb-1' style={{ color: colorPalette.text }}><b className='block' style={{ color: colorPalette.textTitles }}>Estado estandar: </b>{element.standardState ? `${element.standardState}` : '--------'}</div>
              <div className='mb-1' style={{ color: colorPalette.text }}><b className='block' style={{ color: colorPalette.textTitles }}>Punto de fusion: </b>{element.meltingPoint ? `${Math.round(element.meltingPoint - 273.15)}°C` : '--------'}</div>
              <div className='mb-1' style={{ color: colorPalette.text }}><b className='block' style={{ color: colorPalette.textTitles }}>Punto de ebullicion: </b>{element.boilingPoint ? `${Math.round(element.boilingPoint - 273.15)}°C` : '--------'}</div>
              <div className='mb-1' style={{ color: colorPalette.text }}><b className='block' style={{ color: colorPalette.textTitles }}>Densidad: </b>{element.density ? <span>{`${element.density}g/cm`}<sup>3</sup></span> : '--------'}</div>
              <div className='mb-1' style={{ color: colorPalette.text }}><b className='block' style={{ color: colorPalette.textTitles }}>Categoria: </b>{element.groupBlock ? `${element.groupBlock}` : '--------'}</div>
              <div className='mb-1' style={{ color: colorPalette.text }}><b className='block' style={{ color: colorPalette.textTitles }}>Año de descubrimiento: </b>{element.yearDiscovered ? `${element.yearDiscovered}` : '--------'}</div>
              <div className='mb-1' style={{ color: colorPalette.text }}><b className='block' style={{ color: colorPalette.textTitles }}>Estructura cristalina: </b>{element.crystalStructure ? `${element.crystalStructure}` : '--------'}</div>
            </div>
          </div>
        </article>
      </section>
      <style>{`

        @media (min-width: 850px) {
          #content::-webkit-scrollbar {
            display: none;
          }
          body::-webkit-scrollbar {
            display: none;
          }
          #other-elements::-webkit-scrollbar, #properties::-webkit-scrollbar {
            width: 8px;
          }
          #other-elements::-webkit-scrollbar-thumb, #properties::-webkit-scrollbar-thumb {
            background: ${colorPalette.scrollbarThumb};
            border: none;
            border-radius: 6px;
          }
          #other-elements::-webkit-scrollbar-track, #properties::-webkit-scrollbar-track {
            background: ${colorPalette.scrollbarTrack};
          }
          #other-elements::-webkit-scrollbar-thumb:hover, #properties::-webkit-scrollbar-thumb:hover {
            background: ${colorPalette.scrollbarThumbHover};
          }
          #element-description::-webkit-scrollbar {
            width: 8px;
          }
          #element-description::-webkit-scrollbar-thumb {
            background: ${colorPalette.scrollbarThumb};
            border: none;
            border-radius: 6px;
          }
          #element-description::-webkit-scrollbar-track {
            background: ${colorPalette.scrollbarTrack};
          }
          #element-description::-webkit-scrollbar-thumb:hover {
            background: ${colorPalette.scrollbarThumbHover};
          }
        }

        @media (max-width: 850px) {
          #element-description::-webkit-scrollbar {
            display: none;
          }
        }
        
        
        .element-link:hover {
          color: '${colorPalette.buttonHover};'
          font-weight: bold;
          stroke-width: 3;
        }

        .nextprev:hover {
          color: ${colorPalette.buttonHover};
          font-weight: bold;
          stroke-width: 2;
        }
      `}
      </style>
    </>
  );
}