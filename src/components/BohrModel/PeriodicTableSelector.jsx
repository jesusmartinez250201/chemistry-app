import { useState, useEffect } from 'react';

export default function PeriodicTableSelector({ onSelectElement }) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [label, setLabel] = useState('');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseEnter = (elementName) => {
    setLabel(elementName);
  };

  const handleMouseLeave = () => {
    setLabel('');
  };

  return (
    <>
      <div className="grid grid-cols-18 gap-0.5 w-full">
        {/* FIRST ROW */}
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-hydrogen hover:bg-hydrogen-hover" onMouseEnter={() => handleMouseEnter('Hidrógeno')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(1)}></button>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-noble-gas hover:bg-noble-gas-hover" onMouseEnter={() => handleMouseEnter('Helio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(2)}></button>

        {/* SECOND ROW */}
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-alkali-metal hover:bg-alkali-metal-hover" onMouseEnter={() => handleMouseEnter('Litio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(3)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-alkaline-earth-metal hover:bg-alkaline-earth-metal-hover" onMouseEnter={() => handleMouseEnter('Berilio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(4)}></button>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-metalloid hover:bg-metalloid-hover" onMouseEnter={() => handleMouseEnter('Boro')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(5)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-no-metal hover:bg-no-metal-hover" onMouseEnter={() => handleMouseEnter('Carbono')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(6)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-no-metal hover:bg-no-metal-hover" onMouseEnter={() => handleMouseEnter('Nitrógeno')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(7)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-no-metal hover:bg-no-metal-hover" onMouseEnter={() => handleMouseEnter('Oxígeno')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(8)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-halogen hover:bg-halogen-hover" onMouseEnter={() => handleMouseEnter('Flúor')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(9)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-noble-gas hover:bg-noble-gas-hover" onMouseEnter={() => handleMouseEnter('Neón')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(10)}></button>

        {/* THIRD ROW */}
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-alkali-metal hover:bg-alkali-metal-hover" onMouseEnter={() => handleMouseEnter('Sodio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(11)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-alkaline-earth-metal hover:bg-alkaline-earth-metal-hover" onMouseEnter={() => handleMouseEnter('Magnesio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(12)}></button>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-other-metal hover:bg-other-metal-hover" onMouseEnter={() => handleMouseEnter('Aluminio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(13)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-metalloid hover:bg-metalloid-hover" onMouseEnter={() => handleMouseEnter('Silicio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(14)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-no-metal hover:bg-no-metal-hover" onMouseEnter={() => handleMouseEnter('Fósforo')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(15)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-no-metal hover:bg-no-metal-hover" onMouseEnter={() => handleMouseEnter('Azufre')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(16)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-halogen hover:bg-halogen-hover" onMouseEnter={() => handleMouseEnter('Cloro')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(17)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-noble-gas hover:bg-noble-gas-hover" onMouseEnter={() => handleMouseEnter('Argón')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(18)}></button>

        {/* FOURTH ROW */}
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-alkali-metal hover:bg-alkali-metal-hover" onMouseEnter={() => handleMouseEnter('Potasio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(19)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-alkaline-earth-metal hover:bg-alkaline-earth-metal-hover" onMouseEnter={() => handleMouseEnter('Calcio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(20)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Escandio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(21)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Titanio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(22)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Vanadio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(23)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Cromo')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(24)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Manganeso')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(25)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Hierro')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(26)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Cobalto')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(27)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Níquel')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(28)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Cobre')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(29)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Zinc')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(30)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-other-metal hover:bg-other-metal-hover" onMouseEnter={() => handleMouseEnter('Galio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(31)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-metalloid hover:bg-metalloid-hover" onMouseEnter={() => handleMouseEnter('Germanio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(32)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-metalloid hover:bg-metalloid-hover" onMouseEnter={() => handleMouseEnter('Arsénico')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(33)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-no-metal hover:bg-no-metal-hover" onMouseEnter={() => handleMouseEnter('Selenio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(34)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-halogen hover:bg-halogen-hover" onMouseEnter={() => handleMouseEnter('Bromo')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(35)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-noble-gas hover:bg-noble-gas-hover" onMouseEnter={() => handleMouseEnter('Kriptón')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(36)}></button>

        {/* FIFTH ROW */}
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-alkali-metal hover:bg-alkali-metal-hover" onMouseEnter={() => handleMouseEnter('Rubidio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(37)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-alkaline-earth-metal hover:bg-alkaline-earth-metal-hover" onMouseEnter={() => handleMouseEnter('Estroncio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(38)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Itrio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(39)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Circonio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(40)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Niobio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(41)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Molibdeno')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(42)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Tecnecio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(43)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Rutenio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(44)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Rodio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(45)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Paladio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(46)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Plata')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(47)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Cadmio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(48)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-other-metal hover:bg-other-metal-hover" onMouseEnter={() => handleMouseEnter('Indio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(49)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-other-metal hover:bg-other-metal-hover" onMouseEnter={() => handleMouseEnter('Estaño')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(50)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-metalloid hover:bg-metalloid-hover" onMouseEnter={() => handleMouseEnter('Antimonio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(51)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-metalloid hover:bg-metalloid-hover" onMouseEnter={() => handleMouseEnter('Telurio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(52)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-halogen hover:bg-halogen-hover" onMouseEnter={() => handleMouseEnter('Yodo')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(53)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-noble-gas hover:bg-noble-gas-hover" onMouseEnter={() => handleMouseEnter('Xenón')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(54)}></button>

        {/* SIXTH ROW */}
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-alkali-metal hover:bg-alkali-metal-hover" onMouseEnter={() => handleMouseEnter('Cesio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(55)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-alkaline-earth-metal hover:bg-alkaline-earth-metal-hover" onMouseEnter={() => handleMouseEnter('Bario')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(56)}></button>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-no-element"></span>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Hafnio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(72)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Tantalio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(73)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Wolframio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(74)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Renio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(75)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Osmio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(76)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Iridio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(77)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Platino')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(78)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Oro')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(79)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Mercurio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(80)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-other-metal hover:bg-other-metal-hover" onMouseEnter={() => handleMouseEnter('Talio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(81)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-other-metal hover:bg-other-metal-hover" onMouseEnter={() => handleMouseEnter('Plomo')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(82)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-other-metal hover:bg-other-metal-hover" onMouseEnter={() => handleMouseEnter('Bismuto')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(83)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-metalloid hover:bg-metalloid-hover" onMouseEnter={() => handleMouseEnter('Polonio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(84)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-halogen hover:bg-halogen-hover" onMouseEnter={() => handleMouseEnter('Astato')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(85)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-noble-gas hover:bg-noble-gas-hover" onMouseEnter={() => handleMouseEnter('Radón')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(86)}></button>

        {/* SEVENTH ROW */}
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-alkali-metal hover:bg-alkali-metal-hover" onMouseEnter={() => handleMouseEnter('Francio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(87)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-alkaline-earth-metal hover:bg-alkaline-earth-metal-hover" onMouseEnter={() => handleMouseEnter('Radio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(88)}></button>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-no-element"></span>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Rutherfordio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(104)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Dubnio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(105)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Seaborgio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(106)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Bohrio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(107)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Hassio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(108)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Meitnerio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(109)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Darmstatio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(110)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Roentgenio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(111)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-transition-metal hover:bg-transition-metal-hover" onMouseEnter={() => handleMouseEnter('Copernicio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(112)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-other-metal hover:bg-other-metal-hover" onMouseEnter={() => handleMouseEnter('Nihonio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(113)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-other-metal hover:bg-other-metal-hover" onMouseEnter={() => handleMouseEnter('Flerovio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(114)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-other-metal hover:bg-other-metal-hover" onMouseEnter={() => handleMouseEnter('Moscovio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(115)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-other-metal hover:bg-other-metal-hover" onMouseEnter={() => handleMouseEnter('Livermorio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(116)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-halogen hover:bg-halogen-hover" onMouseEnter={() => handleMouseEnter('Tenesino')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(117)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-noble-gas hover:bg-noble-gas-hover" onMouseEnter={() => handleMouseEnter('Oganesón')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(118)}></button>


        {/* EIGHTH ROW */}
        <span className="h-1 col-span-1 text-center bg-transparent"></span>
        <span className="h-1 col-span-1 text-center bg-transparent"></span>
        <span className="h-1 col-span-1 text-center bg-transparent"></span>
        <span className="h-1 col-span-1 text-center bg-transparent"></span>
        <span className="h-1 col-span-1 text-center bg-transparent"></span>
        <span className="h-1 col-span-1 text-center bg-transparent"></span>
        <span className="h-1 col-span-1 text-center bg-transparent"></span>
        <span className="h-1 col-span-1 text-center bg-transparent"></span>
        <span className="h-1 col-span-1 text-center bg-transparent"></span>
        <span className="h-1 col-span-1 text-center bg-transparent"></span>
        <span className="h-1 col-span-1 text-center bg-transparent"></span>
        <span className="h-1 col-span-1 text-center bg-transparent"></span>
        <span className="h-1 col-span-1 text-center bg-transparent"></span>
        <span className="h-1 col-span-1 text-center bg-transparent"></span>
        <span className="h-1 col-span-1 text-center bg-transparent"></span>
        <span className="h-1 col-span-1 text-center bg-transparent"></span>
        <span className="h-1 col-span-1 text-center bg-transparent"></span>
        <span className="h-1 col-span-1 text-center bg-transparent"></span>

        {/* NINTH ROW */}
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-lanthanide hover:bg-lanthanide-hover" onMouseEnter={() => handleMouseEnter('Lantano')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(57)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-lanthanide hover:bg-lanthanide-hover" onMouseEnter={() => handleMouseEnter('Cerio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(58)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-lanthanide hover:bg-lanthanide-hover" onMouseEnter={() => handleMouseEnter('Praseodimio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(59)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-lanthanide hover:bg-lanthanide-hover" onMouseEnter={() => handleMouseEnter('Neodimio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(60)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-lanthanide hover:bg-lanthanide-hover" onMouseEnter={() => handleMouseEnter('Prometio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(61)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-lanthanide hover:bg-lanthanide-hover" onMouseEnter={() => handleMouseEnter('Samario')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(62)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-lanthanide hover:bg-lanthanide-hover" onMouseEnter={() => handleMouseEnter('Europio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(63)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-lanthanide hover:bg-lanthanide-hover" onMouseEnter={() => handleMouseEnter('Gadolinio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(64)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-lanthanide hover:bg-lanthanide-hover" onMouseEnter={() => handleMouseEnter('Terbio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(65)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-lanthanide hover:bg-lanthanide-hover" onMouseEnter={() => handleMouseEnter('Disprosio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(66)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-lanthanide hover:bg-lanthanide-hover" onMouseEnter={() => handleMouseEnter('Holmio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(67)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-lanthanide hover:bg-lanthanide-hover" onMouseEnter={() => handleMouseEnter('Erbio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(68)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-lanthanide hover:bg-lanthanide-hover" onMouseEnter={() => handleMouseEnter('Tulio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(69)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-lanthanide hover:bg-lanthanide-hover" onMouseEnter={() => handleMouseEnter('Iterbio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(70)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-lanthanide hover:bg-lanthanide-hover" onMouseEnter={() => handleMouseEnter('Lutecio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(71)}></button>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>

        {/* TENTH ROW */}
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-actinide hover:bg-actinide-hover" onMouseEnter={() => handleMouseEnter('Actinio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(89)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-actinide hover:bg-actinide-hover" onMouseEnter={() => handleMouseEnter('Torio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(90)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-actinide hover:bg-actinide-hover" onMouseEnter={() => handleMouseEnter('Protactinio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(91)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-actinide hover:bg-actinide-hover" onMouseEnter={() => handleMouseEnter('Uranio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(92)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-actinide hover:bg-actinide-hover" onMouseEnter={() => handleMouseEnter('Neptunio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(93)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-actinide hover:bg-actinide-hover" onMouseEnter={() => handleMouseEnter('Plutonio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(94)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-actinide hover:bg-actinide-hover" onMouseEnter={() => handleMouseEnter('Americio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(95)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-actinide hover:bg-actinide-hover" onMouseEnter={() => handleMouseEnter('Curio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(96)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-actinide hover:bg-actinide-hover" onMouseEnter={() => handleMouseEnter('Berkelio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(97)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-actinide hover:bg-actinide-hover" onMouseEnter={() => handleMouseEnter('Californio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(98)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-actinide hover:bg-actinide-hover" onMouseEnter={() => handleMouseEnter('Einstenio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(99)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-actinide hover:bg-actinide-hover" onMouseEnter={() => handleMouseEnter('Fermio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(100)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-actinide hover:bg-actinide-hover" onMouseEnter={() => handleMouseEnter('Mendelevio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(101)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-actinide hover:bg-actinide-hover" onMouseEnter={() => handleMouseEnter('Nobelio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(102)}></button>
        <button className="h-5 2xl:h-8 col-span-1 text-center bg-actinide hover:bg-actinide-hover" onMouseEnter={() => handleMouseEnter('Laurencio')} onMouseLeave={handleMouseLeave} onClick={() => onSelectElement(103)}></button>
        <span className="h-5 2xl:h-8 col-span-1 text-center bg-transparent"></span>
      </div>
      {label && (
        <div
          style={{
            position: 'fixed',
            top: Math.min(cursorPosition.y + 10, window.innerHeight - 30), // Adjust the top position
            left: Math.min(cursorPosition.x + 10, window.innerWidth - 90), // Adjust the left position
            backgroundColor: 'white',
            padding: '5px',
            borderRadius: '5px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            color: 'black'
          }}
        >
          {label}
        </div>
      )}
    </>
  )

}