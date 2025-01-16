import Element from './Element';

export default function PeriodicTable() {
  const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]

  return (
    <div id='periodic-table' className="periodic w-19/20 max-w-[1000px] mx-auto mt-0
      xl:my-0" >
      <style>{
        `@media (max-height: 680px) and (max-width: 600px) {
            #periodic-table {
              margin-top: 9vh;
              margin-bottom: 10vh;
            }
          }`
      }</style>
      <div className="periodic-row">
        <Element
          atomicNumber={1}
          type='hydrogen'
          atomicMass={1.008}
          symbol='H'
          name='Hidrógeno'
          elecConf={<>1s<sup>1</sup></>}
        />
        <div className="cell empty"></div>
        <div className="cell empty"></div>
        <div className="cell empty"></div>
        <div className="cell empty"></div>
        <div className="cell empty"></div>
        <div className="cell empty"></div>
        <div className="cell empty"></div>
        <div className="cell empty"></div>
        <div className="cell empty"></div>
        <div className="cell empty"></div>
        <div className="cell empty"></div>
        <div className="cell empty"></div>
        <div className="cell empty"></div>
        <div className="cell empty"></div>
        <div className="cell empty"></div>
        <div className="cell empty"></div>
        <Element
          atomicNumber={2}
          type='nobleGas'
          atomicMass={4.003}
          symbol='He'
          name='Helio'
          elecConf={<>1s<sup>2</sup></>}
        />
      </div>
      <div className="periodic-row">
        <Element
          atomicNumber={3}
          type='alkalineMetal'
          atomicMass={6.94}
          symbol='Li'
          name='Litio'
          elecConf={<>1s<sup>2</sup>2s<sup>1</sup></>}
        />
        <Element
          atomicNumber={4}
          type='alkalineEarthMetal'
          atomicMass={9.012}
          symbol='Be'
          name='Berilio'
          elecConf={<>1s<sup>2</sup>2s<sup>2</sup></>}
        />
        <div className="cell"></div>
        <div className="cell"></div>
        <Element
          atomicNumber={26}
          type='transitionMetal'
          atomicMass={55.85}
          symbol='Fe'
          name='Hierro'
          elecConf={<>[Ar]4s<sup>2</sup>3d<sup>6</sup></>}
          isLegend={true}
        />
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <Element
          atomicNumber={5}
          type='metalloid'
          atomicMass={10.81}
          symbol='B'
          name='Boro'
          elecConf={<>1s<sup>2</sup>2s<sup>2</sup>2p<sup>1</sup></>}
        />
        <Element
          atomicNumber={6}
          type='nonMetal'
          atomicMass={12.01}
          symbol='C'
          name='Carbono'
          elecConf={<>1s<sup>2</sup>2s<sup>2</sup>2p<sup>2</sup></>}
        />
        <Element
          atomicNumber={7}
          type='nonMetal'
          atomicMass={14.01}
          symbol='N'
          name='Nitrógeno'
          elecConf={<>1s<sup>2</sup>2s<sup>2</sup>2p<sup>3</sup></>}
        />
        <Element
          atomicNumber={8}
          type='nonMetal'
          atomicMass={16}
          symbol='O'
          name='Oxígeno'
          elecConf={<>1s<sup>2</sup>2s<sup>2</sup>2p<sup>4</sup></>}
        />
        <Element
          atomicNumber={9}
          type='halogen'
          atomicMass={19}
          symbol='F'
          name='Flúor'
          elecConf={<>1s<sup>2</sup>2s<sup>2</sup>2p<sup>5</sup></>}
        />
        <Element
          atomicNumber={10}
          type='nobleGas'
          atomicMass={20.18}
          symbol='Ne'
          name='Neón'
          elecConf={<>1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup></>}
        />
      </div>
      <div className="periodic-row">
        <Element
          atomicNumber={11}
          type='alkalineMetal'
          atomicMass={22.99}
          symbol='Na'
          name='Sodio'
          elecConf={<>[Ne]3s<sup>1</sup></>}
        />
        <Element
          atomicNumber={12}
          type='alkalineEarthMetal'
          atomicMass={24.31}
          symbol='Mg'
          name='Magnesio'
          elecConf={<>[Ne]3s<sup>2</sup></>}
        />
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <Element
          atomicNumber={13}
          type='otherMetal'
          atomicMass={26.98}
          symbol='Al'
          name='Aluminio'
          elecConf={<>[Ne]3s<sup>2</sup>3p<sup>1</sup></>}
        />
        <Element
          atomicNumber={14}
          type='metalloid'
          atomicMass={28.09}
          symbol='Si'
          name='Silicio'
          elecConf={<>[Ne]3s<sup>2</sup>3p<sup>2</sup></>}
        />
        <Element
          atomicNumber={15}
          type='nonMetal'
          atomicMass={30.97}
          symbol='P'
          name='Fósforo'
          elecConf={<>[Ne]3s<sup>2</sup>3p<sup>3</sup></>}
        />
        <Element
          atomicNumber={16}
          type='nonMetal'
          atomicMass={32.06}
          symbol='S'
          name='Azufre'
          elecConf={<>[Ne]3s<sup>2</sup>3p<sup>4</sup></>}
        />
        <Element
          atomicNumber={17}
          type='halogen'
          atomicMass={35.45}
          symbol='Cl'
          name='Cloro'
          elecConf={<>[Ne]3s<sup>2</sup>3p<sup>5</sup></>}
        />
        <Element
          atomicNumber={18}
          type='nobleGas'
          atomicMass={39.95}
          symbol='Ar'
          name='Argón'
          elecConf={<>[Ne]3s<sup>2</sup>3p<sup>6</sup></>}
        />
      </div>
      <div className="periodic-row">
        <Element
          atomicNumber={19}
          type='alkalineMetal'
          atomicMass={39.1}
          symbol='K'
          name='Potasio'
          elecConf={<>[Ar]4s<sup>1</sup></>}
        />
        <Element
          atomicNumber={20}
          type='alkalineEarthMetal'
          atomicMass={40.08}
          symbol='Ca'
          name='Calcio'
          elecConf={<>[Ar]4s<sup>2</sup></>}
        />
        <Element
          atomicNumber={21}
          type='transitionMetal'
          atomicMass={44.96}
          symbol='Sc'
          name='Escandio'
          elecConf={<>[Ar]4s<sup>2</sup>3d<sup>1</sup></>}
        />
        <Element
          atomicNumber={22}
          type='transitionMetal'
          atomicMass={47.88}
          symbol='Ti'
          name='Titanio'
          elecConf={<>[Ar]4s<sup>2</sup>3d<sup>2</sup></>}
        />
        <Element
          atomicNumber={23}
          type='transitionMetal'
          atomicMass={50.94}
          symbol='V'
          name='Vanadio'
          elecConf={<>[Ar]4s<sup>2</sup>3d<sup>3</sup></>}
        />
        <Element
          atomicNumber={24}
          type='transitionMetal'
          atomicMass={52}
          symbol='Cr'
          name='Cromo'
          elecConf={<>[Ar]4s<sup>1</sup>3d<sup>5</sup></>}
        />
        <Element
          atomicNumber={25}
          type='transitionMetal'
          atomicMass={54.94}
          symbol='Mn'
          name='Manganeso'
          elecConf={<>[Ar]4s<sup>2</sup>3d<sup>5</sup></>}
        />
        <Element
          atomicNumber={26}
          type='transitionMetal'
          atomicMass={55.85}
          symbol='Fe'
          name='Hierro'
          elecConf={<>[Ar]4s<sup>2</sup>3d<sup>6</sup></>}
        />
        <Element
          atomicNumber={27}
          type='transitionMetal'
          atomicMass={58.93}
          symbol='Co'
          name='Cobalto'
          elecConf={<>[Ar]4s<sup>2</sup>3d<sup>7</sup></>}
        />
        <Element
          atomicNumber={28}
          type='transitionMetal'
          atomicMass={58.69}
          symbol='Ni'
          name='Níquel'
          elecConf={<>[Ar]4s<sup>2</sup>3d<sup>8</sup></>}
        />
        <Element
          atomicNumber={29}
          type='transitionMetal'
          atomicMass={63.55}
          symbol='Cu'
          name='Cobre'
          elecConf={<>[Ar]4s<sup>1</sup>3d<sup>10</sup></>}
        />
        <Element
          atomicNumber={30}
          type='transitionMetal'
          atomicMass={65.39}
          symbol='Zn'
          name='Zinc'
          elecConf={<>[Ar]4s<sup>2</sup>3d<sup>10</sup></>}
        />
        <Element
          atomicNumber={31}
          type='otherMetal'
          atomicMass={69.72}
          symbol='Ga'
          name='Galio'
          elecConf={<>[Ar]4s<sup>2</sup>3d<sup>10</sup>4p<sup>1</sup></>}
        />
        <Element
          atomicNumber={32}
          type='metalloid'
          atomicMass={72.64}
          symbol='Ge'
          name='Germanio'
          elecConf={<>[Ar]4s<sup>2</sup>3d<sup>10</sup>4p<sup>2</sup></>}
        />
        <Element
          atomicNumber={33}
          type='metalloid'
          atomicMass={74.92}
          symbol='As'
          name='Arsénico'
          elecConf={<>[Ar]4s<sup>2</sup>3d<sup>10</sup>4p<sup>3</sup></>}
        />
        <Element
          atomicNumber={34}
          type='nonMetal'
          atomicMass={78.96}
          symbol='Se'
          name='Selenio'
          elecConf={<>[Ar]4s<sup>2</sup>3d<sup>10</sup>4p<sup>4</sup></>}
        />
        <Element
          atomicNumber={35}
          type='halogen'
          atomicMass={79.90}
          symbol='Br'
          name='Bromo'
          elecConf={<>[Ar]4s<sup>2</sup>3d<sup>10</sup>4p<sup>5</sup></>}
        />
        <Element
          atomicNumber={36}
          type='nobleGas'
          atomicMass={83.79}
          symbol='Kr'
          name='Kriptón'
          elecConf={<>[Ar]4s<sup>2</sup>3d<sup>10</sup>4p<sup>6</sup></>}
        />
      </div>
      <div className="periodic-row">
        <Element
          atomicNumber={37}
          type='alkalineMetal'
          atomicMass={85.47}
          symbol='Rb'
          name='Rubidio'
          elecConf={<>[Kr]5s<sup>1</sup></>}
        />
        <Element
          atomicNumber={38}
          type='alkalineEarthMetal'
          atomicMass={87.62}
          symbol='Sr'
          name='Estroncio'
          elecConf={<>[Kr]5s<sup>2</sup></>}
        />
        <Element
          atomicNumber={39}
          type='transitionMetal'
          atomicMass={88.91}
          symbol='Y'
          name='Itrio'
          elecConf={<>[Kr]4d<sup>1</sup>5s<sup>2</sup></>}
        />
        <Element
          atomicNumber={40}
          type='transitionMetal'
          atomicMass={91.22}
          symbol='Zr'
          name='Zirconio'
          elecConf={<>[Kr]4d<sup>2</sup>5s<sup>2</sup></>}
        />
        <Element
          atomicNumber={41}
          type='transitionMetal'
          atomicMass={92.91}
          symbol='Nb'
          name='Niobio'
          elecConf={<>[Kr]4d<sup>4</sup>5s<sup>1</sup></>}
        />
        <Element
          atomicNumber={42}
          type='transitionMetal'
          atomicMass={95.96}
          symbol='Mo'
          name='Molibdeno'
          elecConf={<>[Kr]4d<sup>5</sup>5s<sup>1</sup></>}
        />
        <Element
          atomicNumber={43}
          type='transitionMetal'
          atomicMass={98}
          symbol='Tc'
          name='Tecnecio'
          elecConf={<>[Kr]4d<sup>5</sup>5s<sup>2</sup></>}
        />
        <Element
          atomicNumber={44}
          type='transitionMetal'
          atomicMass={101.1}
          symbol='Ru'
          name='Rutenio'
          elecConf={<>[Kr]4d<sup>7</sup>5s<sup>1</sup></>}
        />
        <Element
          atomicNumber={45}
          type='transitionMetal'
          atomicMass={102.9}
          symbol='Rh'
          name='Rodio'
          elecConf={<>[Kr]4d<sup>8</sup>5s<sup>1</sup></>}
        />
        <Element
          atomicNumber={46}
          type='transitionMetal'
          atomicMass={106.4}
          symbol='Pd'
          name='Paladio'
          elecConf={<>[Kr]4d<sup>10</sup></>}
        />
        <Element
          atomicNumber={47}
          type='transitionMetal'
          atomicMass={107.9}
          symbol='Ag'
          name='Plata'
          elecConf={<>[Kr]4d<sup>10</sup>5s<sup>1</sup></>}
        />
        <Element
          atomicNumber={48}
          type='transitionMetal'
          atomicMass={112.4}
          symbol='Cd'
          name='Cadmio'
          elecConf={<>[Kr]4d<sup>10</sup>5s<sup>2</sup></>}
        />
        <Element
          atomicNumber={49}
          type='otherMetal'
          atomicMass={114.8}
          symbol='In'
          name='Indio'
          elecConf={<>[Kr]4d<sup>10</sup>5s<sup>2</sup>5p<sup>1</sup></>}
        />
        <Element
          atomicNumber={50}
          type='otherMetal'
          atomicMass={118.7}
          symbol='Sn'
          name='Estaño'
          elecConf={<>[Kr]4d<sup>10</sup>5s<sup>2</sup>5p<sup>2</sup></>}
        />
        <Element
          atomicNumber={51}
          type='metalloid'
          atomicMass={121.8}
          symbol='Sb'
          name='Antimonio'
          elecConf={<>[Kr]4d<sup>10</sup>5s<sup>2</sup>5p<sup>3</sup></>}
        />
        <Element
          atomicNumber={52}
          type='metalloid'
          atomicMass={127.6}
          symbol='Te'
          name='Telurio'
          elecConf={<>[Kr]4d<sup>10</sup>5s<sup>2</sup>5p<sup>4</sup></>}
        />
        <Element
          atomicNumber={53}
          type='halogen'
          atomicMass={126.9}
          symbol='I'
          name='Yodo'
          elecConf={<>[Kr]4d<sup>10</sup>5s<sup>2</sup>5p<sup>5</sup></>}
        />
        <Element
          atomicNumber={54}
          type='nobleGas'
          atomicMass={131.3}
          symbol='Xe'
          name='Xenón'
          elecConf={<>[Kr]4d<sup>10</sup>5s<sup>2</sup>5p<sup>6</sup></>}
        />
      </div>
      <div className="periodic-row">
        <Element
          atomicNumber={55}
          type='alkalineMetal'
          atomicMass={132.9}
          symbol='Cs'
          name='Cesio'
          elecConf={<>[Xe]6s<sup>1</sup></>}
        />
        <Element
          atomicNumber={56}
          type='alkalineEarthMetal'
          atomicMass={137.3}
          symbol='Ba'
          name='Bario'
          elecConf={<>[Xe]6s<sup>2</sup></>}
        />
        <Element
          type='lanthanide'
          symbol='57-71'
          name='Lantánidos'
        />
        <Element
          atomicNumber={72}
          type='transitionMetal'
          atomicMass={178.5}
          symbol='Hf'
          name='Hafnio'
          elecConf={<>[Xe]4f<sup>14</sup>5d<sup>2</sup>6s<sup>2</sup></>}
        />
        <Element
          atomicNumber={73}
          type='transitionMetal'
          atomicMass={180.9}
          symbol='Ta'
          name='Tantalio'
          elecConf={<>[Xe]4f<sup>14</sup>5d<sup>3</sup>6s<sup>2</sup></>}
        />
        <Element
          atomicNumber={74}
          type='transitionMetal'
          atomicMass={183.9}
          symbol='W'
          name='Wolframio'
          elecConf={<>[Xe]4f<sup>14</sup>5d<sup>4</sup>6s<sup>2</sup></>}
        />
        <Element
          atomicNumber={75}
          type='transitionMetal'
          atomicMass={186.2}
          symbol='Re'
          name='Renio'
          elecConf={<>[Xe]4f<sup>14</sup>5d<sup>5</sup>6s<sup>2</sup></>}
        />
        <Element
          atomicNumber={76}
          type='transitionMetal'
          atomicMass={190.2}
          symbol='Os'
          name='Osmio'
          elecConf={<>[Xe]4f<sup>14</sup>5d<sup>6</sup>6s<sup>2</sup></>}
        />
        <Element
          atomicNumber={77}
          type='transitionMetal'
          atomicMass={192.2}
          symbol='Ir'
          name='Iridio'
          elecConf={<>[Xe]4f<sup>14</sup>5d<sup>7</sup>6s<sup>2</sup></>}
        />
        <Element
          atomicNumber={78}
          type='transitionMetal'
          atomicMass={195.1}
          symbol='Pt'
          name='Platino'
          elecConf={<>[Xe]4f<sup>14</sup>5d<sup>9</sup>6s<sup>1</sup></>}
        />
        <Element
          atomicNumber={79}
          type='transitionMetal'
          atomicMass={197}
          symbol='Au'
          name='Oro'
          elecConf={<>[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>1</sup></>}
        />
        <Element
          atomicNumber={80}
          type='transitionMetal'
          atomicMass={200.5}
          symbol='Hg'
          name='Mercurio'
          elecConf={<>[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup></>}
        />
        <Element
          atomicNumber={81}
          type='otherMetal'
          atomicMass={204.38}
          symbol='Tl'
          name='Talio'
          elecConf={<>[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>1</sup></>}
        />
        <Element
          atomicNumber={82}
          type='otherMetal'
          atomicMass={207.2}
          symbol='Pb'
          name='Plomo'
          elecConf={<>[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>2</sup></>}
        />
        <Element
          atomicNumber={83}
          type='otherMetal'
          atomicMass={209}
          symbol='Bi'
          name='Bismuto'
          elecConf={<>[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>3</sup></>}
        />
        <Element
          atomicNumber={84}
          type='metalloid'
          atomicMass={209}
          symbol='Po'
          name='Polonio'
          elecConf={<>[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>4</sup></>}
        />
        <Element
          atomicNumber={85}
          type='halogen'
          atomicMass={210}
          symbol='At'
          name='Astato'
          elecConf={<>[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>5</sup></>}
        />
        <Element
          atomicNumber={86}
          type='nobleGas'
          atomicMass={222}
          symbol='Rn'
          name='Radón'
          elecConf={<>[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>6</sup></>}
        />
      </div>
      <div className="periodic-row">
        <Element
          atomicNumber={87}
          type='alkalineMetal'
          atomicMass={223}
          symbol='Fr'
          name='Francio'
          elecConf={<>[Rn]7s<sup>1</sup></>}
        />
        <Element
          atomicNumber={88}
          type='alkalineEarthMetal'
          atomicMass={226}
          symbol='Ra'
          name='Radio'
          elecConf={<>[Rn]7s<sup>2</sup></>}
        />

        <Element
          type='actinide'
          symbol='89-103'
          name='Actínidos'
        />
        <Element
          atomicNumber={104}
          type='transitionMetal'
          atomicMass={265}
          symbol='Rf'
          name='Rutherfordio'
          elecConf={<>[Rn]7s<sup>2</sup>5f<sup>14</sup>6d<sup>2</sup></>}
        />
        <Element
          atomicNumber={105}
          type='transitionMetal'
          atomicMass={268}
          symbol='Db'
          name='Dubnio'
          elecConf={<>[Rn]7s<sup>2</sup>5f<sup>14</sup>6d<sup>3</sup></>}
        />
        <Element
          atomicNumber={106}
          type='transitionMetal'
          atomicMass={271}
          symbol='Sg'
          name='Seaborgio'
          elecConf={<>[Rn]7s<sup>2</sup>5f<sup>14</sup>6d<sup>4</sup></>}
        />
        <Element
          atomicNumber={107}
          type='transitionMetal'
          atomicMass={270}
          symbol='Bh'
          name='Bohrio'
          elecConf={<>[Rn]7s<sup>2</sup>5f<sup>14</sup>6d<sup>5</sup></>}
        />
        <Element
          atomicNumber={108}
          type='transitionMetal'
          atomicMass={277}
          symbol='Hs'
          name='Hassio'
          elecConf={<>[Rn]7s<sup>2</sup>5f<sup>14</sup>6d<sup>6</sup></>}
        />
        <Element
          atomicNumber={109}
          type='transitionMetal'
          atomicMass={276}
          symbol='Mt'
          name='Meitnerio'
          elecConf={<>[Rn]7s<sup>2</sup>5f<sup>14</sup>6d<sup>7</sup></>}
        />
        <Element
          atomicNumber={110}
          type='transitionMetal'
          atomicMass={281}
          symbol='Ds'
          name='Darmstadio'
          elecConf={<>[Rn]7s<sup>2</sup>5f<sup>14</sup>6d<sup>9</sup></>}
        />
        <Element
          atomicNumber={111}
          type='transitionMetal'
          atomicMass={280}
          symbol='Rg'
          name='Roentgenio'
          elecConf={<>[Rn]7s<sup>1</sup>5f<sup>14</sup>6d<sup>10</sup></>}
        />
        <Element
          atomicNumber={112}
          type='transitionMetal'
          atomicMass={285}
          symbol='Cn'
          name='Copernicio'
          elecConf={<>[Rn]7s<sup>2</sup>5f<sup>14</sup>6d<sup>10</sup></>}
        />
        <Element
          atomicNumber={113}
          type='otherMetal'
          atomicMass={284}
          symbol='Nh'
          name='Nihonio'
          elecConf={<>[Rn]7s<sup>2</sup>5f<sup>14</sup>6d<sup>10</sup>7p<sup>1</sup></>}
        />
        <Element
          atomicNumber={114}
          type='otherMetal'
          atomicMass={289}
          symbol='Fl'
          name='Flerovio'
          elecConf={<>[Rn]7s<sup>2</sup>5f<sup>14</sup>6d<sup>10</sup>7p<sup>2</sup></>}
        />
        <Element
          atomicNumber={115}
          type='otherMetal'
          atomicMass={288}
          symbol='Mc'
          name='Moscovio'
          elecConf={<>[Rn]7s<sup>2</sup>5f<sup>14</sup>6d<sup>10</sup>7p<sup>3</sup></>}
        />
        <Element
          atomicNumber={116}
          type='otherMetal'
          atomicMass={293}
          symbol='Lv'
          name='Livermorio'
          elecConf={<>[Rn]7s<sup>2</sup>5f<sup>14</sup>6d<sup>10</sup>7p<sup>4</sup></>}
        />
        <Element
          atomicNumber={117}
          type='halogen'
          atomicMass={294}
          symbol='Ts'
          name='Teneso'
          elecConf={<>[Rn]7s<sup>2</sup>5f<sup>14</sup>6d<sup>10</sup>7p<sup>5</sup></>}
        />
        <Element
          atomicNumber={118}
          type='nobleGas'
          atomicMass={295}
          symbol='Og'
          name='Oganesón'
          elecConf={<>[Rn]7s<sup>2</sup>5f<sup>14</sup>6d<sup>10</sup>7p<sup>6</sup></>}
        />
      </div>
      <div className="periodic-row"></div>
      <div className="periodic-row">
        <div className="cell"></div>
        <div className="cell"></div>
        <Element
          atomicNumber={57}
          type='lanthanide'
          atomicMass={138.9}
          symbol='La'
          name='Lantano'
          elecConf={<>[Xe]6s<sup>2</sup>5d<sup>1</sup></>}
        />
        <Element
          atomicNumber={58}
          type='lanthanide'
          atomicMass={140.1}
          symbol='Ce'
          name='Cerio'
          elecConf={<>[Xe]6s<sup>2</sup>4f<sup>1</sup>5d<sup>1</sup></>}
        />
        <Element
          atomicNumber={59}
          type='lanthanide'
          atomicMass={140.9}
          symbol='Pr'
          name='Praseodimio'
          elecConf={<>[Xe]6s<sup>2</sup>4f<sup>3</sup></>}
        />
        <Element
          atomicNumber={60}
          type='lanthanide'
          atomicMass={144.2}
          symbol='Nd'
          name='Neodimio'
          elecConf={<>[Xe]6s<sup>2</sup>4f<sup>4</sup></>}
        />
        <Element
          atomicNumber={61}
          type='lanthanide'
          atomicMass={145}
          symbol='Pm'
          name='Prometio'
          elecConf={<>[Xe]6s<sup>2</sup>4f<sup>5</sup></>}
        />
        <Element
          atomicNumber={62}
          type='lanthanide'
          atomicMass={150.4}
          symbol='Sm'
          name='Samario'
          elecConf={<>[Xe]6s<sup>2</sup>4f<sup>6</sup></>}
        />
        <Element
          atomicNumber={63}
          type='lanthanide'
          atomicMass={152}
          symbol='Eu'
          name='Europio'
          elecConf={<>[Xe]6s<sup>2</sup>4f<sup>7</sup></>}
        />
        <Element
          atomicNumber={64}
          type='lanthanide'
          atomicMass={157.2}
          symbol='Gd'
          name='Gadolinio'
          elecConf={<>[Xe]6s<sup>2</sup>4f<sup>7</sup>5d<sup>1</sup></>}
        />
        <Element
          atomicNumber={65}
          type='lanthanide'
          atomicMass={158.9}
          symbol='Tb'
          name='Terbio'
          elecConf={<>[Xe]6s<sup>2</sup>4f<sup>9</sup></>}
        />
        <Element
          atomicNumber={66}
          type='lanthanide'
          atomicMass={162.5}
          symbol='Dy'
          name='Disprosio'
          elecConf={<>[Xe]6s<sup>2</sup>4f<sup>10</sup></>}
        />
        <Element
          atomicNumber={67}
          type='lanthanide'
          atomicMass={164.9}
          symbol='Ho'
          name='Holmio'
          elecConf={<>[Xe]6s<sup>2</sup>4f<sup>11</sup></>}
        />
        <Element
          atomicNumber={68}
          type='lanthanide'
          atomicMass={167.3}
          symbol='Er'
          name='Erbio'
          elecConf={<>[Xe]6s<sup>2</sup>4f<sup>12</sup></>}
        />
        <Element
          atomicNumber={69}
          type='lanthanide'
          atomicMass={168.9}
          symbol='Tm'
          name='Tulio'
          elecConf={<>[Xe]6s<sup>2</sup>4f<sup>13</sup></>}
        />
        <Element
          atomicNumber={70}
          type='lanthanide'
          atomicMass={173}
          symbol='Yb'
          name='Iterbio'
          elecConf={<>[Xe]6s<sup>2</sup>4f<sup>14</sup></>}
        />
        <Element
          atomicNumber={71}
          type='lanthanide'
          atomicMass={175}
          symbol='Lu'
          name='Lutecio'
          elecConf={<>[Xe]4f<sup>14</sup>5d<sup>1</sup>6s<sup>2</sup></>}
        />
        <div className="cell"></div>
      </div>
      <div className="periodic-row">
        <div className="cell"></div>
        <div className="cell"></div>
        <Element
          atomicNumber={89}
          type='actinide'
          atomicMass={227}
          symbol='Ac'
          name='Actinio'
          elecConf={<>[Rn]7s<sup>2</sup>6d<sup>1</sup></>}
        />
        <Element
          atomicNumber={90}
          type='actinide'
          atomicMass={232}
          symbol='Th'
          name='Torio'
          elecConf={<>[Rn]7s<sup>2</sup>6d<sup>2</sup></>}
        />
        <Element
          atomicNumber={91}
          type='actinide'
          atomicMass={231}
          symbol='Pa'
          name='Protactinio'
          elecConf={<>[Rn]7s<sup>2</sup>5f<sup>2</sup>6d<sup>1</sup></>}
        />
        <Element
          atomicNumber={92}
          type='actinide'
          atomicMass={238}
          symbol='U'
          name='Uranio'
          elecConf={<>[Rn]7s<sup>2</sup>5f<sup>3</sup>6d<sup>1</sup></>}
        />
        <Element
          atomicNumber={93}
          type='actinide'
          atomicMass={237}
          symbol='Np'
          name='Neptunio'
          elecConf={<>[Rn]7s<sup>2</sup>5f<sup>4</sup>6d<sup>1</sup></>}
        />
        <Element
          atomicNumber={94}
          type='actinide'
          atomicMass={244}
          symbol='Pu'
          name='Plutonio'
          elecConf={<>[Rn]7s<sup>2</sup>5f<sup>6</sup></>}
        />
        <Element
          atomicNumber={95}
          type='actinide'
          atomicMass={243}
          symbol='Am'
          name='Americio'
          elecConf={<>[Rn]7s<sup>2</sup>5f<sup>7</sup></>}
        />
        <Element
          atomicNumber={96}
          type='actinide'
          atomicMass={247}
          symbol='Cm'
          name='Curio'
          elecConf={<>[Rn]7s<sup>2</sup>5f<sup>7</sup>6d<sup>1</sup></>}
        />
        <Element
          atomicNumber={97}
          type='actinide'
          atomicMass={247}
          symbol='Bk'
          name='Berkelio'
          elecConf={<>[Rn]7s<sup>2</sup>5f<sup>9</sup></>}
        />
        <Element
          atomicNumber={98}
          type='actinide'
          atomicMass={251}
          symbol='Cf'
          name='Californio'
          elecConf={<>[Rn]7s<sup>2</sup>5f<sup>10</sup></>}
        />
        <Element
          atomicNumber={99}
          type='actinide'
          atomicMass={252}
          symbol='Es'
          name='Einstenio'
          elecConf={<>[Rn]7s<sup>2</sup>5f<sup>11</sup></>}
        />
        <Element
          atomicNumber={100}
          type='actinide'
          atomicMass={257}
          symbol='Fm'
          name='Fermio'
          elecConf={<>[Rn]7s<sup>2</sup>5f<sup>12</sup></>}
        />
        <Element
          atomicNumber={101}
          type='actinide'
          atomicMass={258}
          symbol='Md'
          name='Mendelevio'
          elecConf={<>[Rn]7s<sup>2</sup>5f<sup>13</sup></>}
        />
        <Element
          atomicNumber={102}
          type='actinide'
          atomicMass={259}
          symbol='No'
          name='Nobelio'
          elecConf={<>[Rn]7s<sup>2</sup>5f<sup>14</sup></>}
        />
        <Element
          atomicNumber={103}
          type='actinide'
          atomicMass={262}
          symbol='Lr'
          name='Laurencio'
          elecConf={<>[Rn]5f<sup>14</sup>7s<sup>2</sup></>}
        />
        <div className="cell"></div>
      </div>
      <div id='legend'
        className='flex absolute top-4 left-9/25 text-2xs 
          md:left-10/25 w850:top-7 
          w850:text-xs 
          lg:left-9/25 lg:text-sm lg:top-10
          w1200:left-10/25 w1200:top-10 w1200:text-xs 
          xl:left-19/50 unselectable'>
        <div className='flex flex-col items-start w-24 w850:mr-2 lg:w-auto'>
          <div className='flex items-center mb-0.5'>
            <span className='type-1 w-4 h-4'></span>
            <span className='ml-1 flex-1 leading-3 lg:leading-4'
              style={{ color: colorPalette.text }}
            >Metales alcalinos
            </span>
          </div>
          <div className='flex items-center my-0.5'>
            <span className='type-2 w-4 h-4'></span>
            <span className='ml-1'
              style={{ color: colorPalette.text }}>
              Alcalinotérreos</span>
          </div>
          <div className='flex items-center my-0.5'>
            <span className='type-3 w-4 h-4'></span>
            <span className='ml-1' style={{ color: colorPalette.text }}>
              Otros metales
            </span>
          </div>
          <div className='flex items-center my-0.5'>
            <span className='type-4 w-4 h-4'></span>
            <span className='ml-1 flex-1 leading-3 lg:leading-4 lg:flex-1'
              style={{ color: colorPalette.text }}>
              Metales de transición
            </span>
          </div>
          <div className='flex items-center my-0.5'>
            <span className='type-5 w-4 h-4'></span>
            <span className='ml-1'
              style={{ color: colorPalette.text }}>
              Lantánidos
            </span>
          </div>
        </div>

        <div className='flex flex-col items-start w-24 lg:w-28 w1200:w-auto'>
          <div className='flex items-center my-0.5'>
            <span className='type-6 w-4 h-4'></span>
            <span className='ml-1'
              style={{ color: colorPalette.text }}>
              Actínidos
            </span>
          </div>
          <div className='flex items-center my-0.5'>
            <span className='type-7 w-4 h-4'></span>
            <span className='ml-1'
              style={{ color: colorPalette.text }}>
              Metaloides
            </span>
          </div>
          <div className='flex items-center my-0.5'>
            <span className='type-8 w-4 h-4'></span>
            <span className='ml-1'
              style={{ color: colorPalette.text }}>
              No metales
            </span>
          </div>
          <div className='flex items-center my-0.5'>
            <span className='type-9 w-4 h-4'></span>
            <span className='ml-1'
              style={{ color: colorPalette.text }}>
              Halógenos
            </span>
          </div>
          <div className='flex items-center my-0.5'>
            <span className='type-10 w-4 h-4'></span>
            <span className='ml-1 lg:flex-1 lg:leading-4'
              style={{ color: colorPalette.text }}>
              Gases nobles
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}