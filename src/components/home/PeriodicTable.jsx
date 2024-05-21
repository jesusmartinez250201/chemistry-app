import React, { useState, useEffect } from 'react';

export default function CrystallineStructure() {

    return (
        <>
        <h2 className='overflow-hidden'>Tabla Periodica</h2>
        <div className="periodic w-full">
  <div className="periodic-row">
    <div className="cell">
      <div className="element type-4 cat-3">
      <div className="masa">1.00794</div>
        <div className="at_num">1</div>
        <div className="ener">1312.0</div>
        <div className="elec">2.20</div>
        <div className="estad"> 
          <li>+1</li>
          <li>-1</li>
        </div>
        <div className="symbol">H</div>
        <div className="at_details">Hidrógeno<br/>1s<sup>1</sup></div>
      </div>
    </div>
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
    <div className="cell">
      <div className="element type-2 cat-3">
      <div className="masa">4.002602</div>
        <div className="at_num">2</div>
        <div className="ener">2372.3</div>
        <div className="elec"></div>
        <div className="estad"> 
          <li></li>
          <li></li>
        </div>
        <div className="symbol">He</div>
        <div className="at_details">Helio<br/>1s<sup>2</sup></div>
      </div>
    </div>
  </div>
  <div className="periodic-row">
    <div className="cell">
      <div className="element type-2 cat-3">
        <div className="masa">6.941</div>
        <div className="at_num">3</div>
        <div className="symbol">Li</div>
        <div className="ener">520.0</div>
        <div className="elec">0.98</div>
        <div className="estad"> 
          <li>+1</li>
          <li>-1</li>
        </div>
        <div className="at_details">lithium<br/>1s<sup>2</sup>2s<sup>1</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element type-5 cat-2">
        <div className="masa">9.012182</div>
        <div className="at_num">4</div>
        <div className="ener">899.5</div>
        <div className="elec">1.57</div>
        <div className="estad"> 
          <li>+2</li>
          <li></li>
        </div>
        <div className="symbol">Be</div>
        <div className="at_details">Berilio<br/>1s<sup>2</sup>2s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell"></div>
    <div className="cell"></div>
    <div className="cell">
    <div className="cell1">
        <div className="element">
      <div className="masa">55.845</div>
        <div className="at_num">26</div>
        <div className="ener">762.5</div>
        <div className="elec">1.83</div>
        <div className="estad"> 
          <li>+6</li>
          <li>+5</li>
          <li>+4</li>
          <li>+3</li>
          <li>+2</li>
          <li>+1</li>
          <li>-1</li>
          <li>-2</li>
        </div>
        <div className="symbol">Fe</div>
        <div className="at_details">Hierro<br/>[Ar]3d<sup>6</sup>4s<sup>2</sup></div>
      </div>
      </div>
    </div>
    <div className="cell"></div>
    <div className="cell"></div>
    <div className="cell"></div>
    <div className="cell"></div>
    <div className="cell"></div>
    <div className="cell"></div>
    <div className="cell"></div>
    <div className="cell">
      <div className="element">
        <div className="masa">10.811</div>
        <div className="at_num">5</div>
        <div className="ener">800.6</div>
        <div className="elec">2.04</div>
        <div className="estad"> 
          <li>+3</li>
          <li>+2</li>
          <li>+1</li>
        </div>
        <div className="symbol">B</div>
        <div className="at_details">Boro<br/>1s<sup>2</sup>
        2s<sup>2</sup>2p<sup>1</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
        <div className="masa">12.0107</div>
        <div className="at_num">6</div>
        <div className="ener">1086.5</div>
        <div className="elec">2.55</div>
        <div className="estad"> 
          <li>+4</li>
          <li>+3</li>
          <li>+2</li>
          <li>+1</li>
          <li>-1</li>
          <li>-2</li>
          <li>-3</li>
          <li>-4</li>
        </div>
        <div className="symbol">C</div>
        <div className="at_details">Carbono<br/>1s<sup>2</sup>
        2s<sup>2</sup>2p<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
        <div className="masa">14.0067</div>
        <div className="at_num">7</div>
        <div className="ener">1402.3</div>
        <div className="elec">3.04</div>
        <div className="estad"> 
          <li>+5</li>
          <li>+4</li>
          <li>+3</li>
          <li>+2</li>
          <li>+1</li>
          <li>-1</li>
          <li>-2</li>
          <li>-3</li>
        </div>
        <div className="symbol">N</div>
        <div className="at_details">Nitrógeno<br/>1s<sup>2</sup>
        2s<sup>2</sup>2p<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
        <div className="masa">15.9994</div>
        <div className="at_num">8</div>
        <div className="ener">1313.9</div>
        <div className="elec">3.44</div>
        <div className="estad"> 
          <li>+2</li>
          <li>+1</li>
          <li>-1</li>
          <li>-2</li>
        </div>
        <div className="symbol">O</div>
        <div className="at_details">Oxígeno<br/>1s<sup>2</sup>
        2s<sup>2</sup>2p<sup>4</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
        <div className="masa">18.998403</div>
        <div className="at_num">9</div>
        <div className="ener">1681.0</div>
        <div className="elec">3.98</div>
        <div className="estad"> 
          <li>-1</li>
          <li></li>
        </div>
        <div className="symbol">F</div>
        <div className="at_details">Flúor<br/>1s<sup>2</sup>
        2s<sup>2</sup>2p<sup>5</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
        <div className="masa">20.1797</div>
        <div className="at_num">10</div>
        <div className="ener">2080.7</div>
        <div className="elec"></div>
        <div className="estad"> 
          <li></li>
          <li></li>
        </div>
        <div className="symbol">Ne</div>
        <div className="at_details">Neón<br/>1s<sup>2</sup>
        2s<sup>2</sup>2p<sup>6</sup></div>
      </div>
    </div>
  </div>
  <div className="periodic-row">
    <div className="cell">
      <div className="element">
        <div className="masa">22.98976</div>
        <div className="at_num">11</div>
        <div className="ener">495.8</div>
        <div className="elec">0.93</div>
        <div className="estad"> 
          <li>+1</li>
          <li>-1</li>
        </div>
        <div className="symbol">Na</div>
        <div className="at_details">Sodio<br/>[Ne]3s<sup>1</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
        <div className="masa">24.3050</div>
        <div className="at_num">12</div>
        <div className="ener">737.7</div>
        <div className="elec">1.31</div>
        <div className="estad"> 
          <li>+2</li>
          <li>+1</li>
        </div>
        <div className="symbol">Mg</div>
        <div className="at_details">Magnesia<br/>[Ne]3s<sup>2</sup></div>
      </div>
    </div>
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
    <div className="cell">
      <div className="element">
      <div className="masa">26.98153</div>
        <div className="at_num">13</div>
        <div className="ener">577.5</div>
        <div className="elec">1.61</div>
        <div className="estad"> 
          <li>+3</li>
          <li>+1</li>
        </div>
        <div className="symbol">Al</div>
        <div className="at_details">Aluminio<br/>[Ne]3s<sup>2</sup>3p<sup>1</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">28.0855</div>
        <div className="at_num">14</div>
        <div className="ener">786.5</div>
        <div className="elec">1.90</div>
        <div className="estad"> 
          <li>+4</li>
          <li>+3</li>
          <li>+2</li>
          <li>+1</li>
          <li>-1</li>
          <li>-2</li>
          <li>-3</li>
          <li>-4</li>
        </div>
        <div className="symbol">Si</div>
        <div className="at_details">Silicon<br/>[Ne]3s<sup>2</sup>3p<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">30.97696</div>
        <div className="at_num">15</div>
        <div className="ener">1011.8</div>
        <div className="elec">2.19</div>
        <div className="estad"> 
          <li>+5</li>
          <li>+4</li>
          <li>+3</li>
          <li>+2</li>
          <li>+1</li>
          <li>-1</li>
          <li>-2</li>
          <li>-3</li>
        </div>
        <div className="symbol">P</div>
        <div className="at_details">Fósforo<br/>[Ne]3s<sup>2</sup>3p<sup>3</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">32.065</div>
        <div className="at_num">16</div>
        <div className="ener">999.6</div>
        <div className="elec">2.58</div>
        <div className="estad"> 
          <li>+6</li>
          <li>+5</li>
          <li>+4</li>
          <li>+3</li>
          <li>+2</li>
          <li>+1</li>
          <li>-1</li>
          <li>-2</li>
        </div>
        <div className="symbol">S</div>
        <div className="at_details">Azufre<br/>[Ne]3s<sup>2</sup>3p<sup>4</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">35.453</div>
        <div className="at_num">17</div>
        <div className="ener">1251.2</div>
        <div className="elec">3.16</div>
        <div className="estad"> 
          <li>+7</li>
          <li>+6</li>
          <li>+5</li>
          <li>+4</li>
          <li>+3</li>
          <li>+2</li>
          <li>+1</li>
          <li>-1</li>
        </div>
        <div className="symbol">Cl</div>
        <div className="at_details">Cloro<br/>[Ne]3s<sup>2</sup>3p<sup>5</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">39.948</div>
        <div className="at_num">18</div>
        <div className="ener">1520.6</div>
        <div className="elec"></div>
        <div className="estad"> 
          <li></li>
          <li></li>
        </div>
        <div className="symbol">Ar</div>
        <div className="at_details">Aegón<br/>[Ne]3s<sup>2</sup>3p<sup>6</sup></div>
      </div>
    </div>
  </div>
  <div className="periodic-row">
    <div className="cell">
      <div className="element">
      <div className="masa">39.0983</div>
        <div className="at_num">19</div>
        <div className="ener">418.8</div>
        <div className="elec">0.82</div>
        <div className="estad"> 
          <li>+1</li>
          <li></li>
        </div>
        <div className="symbol">K</div>
        <div className="at_details">Potasio<br/>[Ar]4s<sup>1</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">40.078</div>
        <div className="at_num">20</div>
        <div className="ener">589.8</div>
        <div className="elec">1.00</div>
        <div className="estad"> 
          <li>+2</li>
          <li></li>
        </div>
        <div className="symbol">Ca</div>
        <div className="at_details">Calcio<br/>[Ar]4s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">44.95591</div>
        <div className="at_num">21</div>
        <div className="ener">633.1</div>
        <div className="elec">1.36</div>
        <div className="estad"> 
          <li>+3</li>
          <li>+2</li>
          <li>+1</li>
        </div>
        <div className="symbol">Sc</div>
        <div className="at_details">Escandio<br/>[Ar]3d<sup>1</sup>4s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">47.867</div>
        <div className="at_num">22</div>
        <div className="ener">658.8</div>
        <div className="elec">1.54</div>
        <div className="estad"> 
          <li>+4</li>
          <li>+3</li>
          <li>+2</li>
          <li>+1</li>
          <li>-1</li>
        </div>
        <div className="symbol">Ti</div>
        <div className="at_details">Titanio<br/>[Ar]3d<sup>2</sup>4s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">50.9415</div>
        <div className="at_num">23</div>
        <div className="ener">650.9</div>
        <div className="elec">1.63</div>
        <div className="estad"> 
          <li>+5</li>
          <li>+4</li>
          <li>+3</li>
          <li>+2</li>
          <li>+1</li>
          <li>-1</li>
        </div>
        <div className="symbol">V</div>
        <div className="at_details">Vanadio<br/>[Ar]3d<sup>3</sup>4s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">51.9962</div>
        <div className="at_num">24</div>
        <div className="ener">652.9</div>
        <div className="elec">1.66</div>
        <div className="estad"> 
          <li>+6</li>
          <li>+5</li>
          <li>+4</li>
          <li>+3</li>
          <li>+2</li>
          <li>+1</li>
          <li>-1</li>
          <li>-2</li>
        </div>
        <div className="symbol">Cr</div>
        <div className="at_details">Cromo<br/>[Ar]3d<sup>5</sup>4s<sup>1</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">54.93804</div>
        <div className="at_num">25</div>
        <div className="ener">717.3</div>
        <div className="elec">1.55</div>
        <div className="estad"> 
          <li>+7</li>
          <li>+6</li>
          <li>+5</li>
          <li>+4</li>
          <li>+3</li>
          <li>+2</li>
          <li>+1</li>
          <li>...</li>
          <li>-3</li>
        </div>
        <div className="symbol">Mn</div>
        <div className="at_details">Manganeso<br/>[Ar]3d<sup>5</sup>4s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">55.845</div>
        <div className="at_num">26</div>
        <div className="ener">762.5</div>
        <div className="elec">1.83</div>
        <div className="estad"> 
          <li>+6</li>
          <li>+5</li>
          <li>+4</li>
          <li>+3</li>
          <li>+2</li>
          <li>+1</li>
          <li>-1</li>
          <li>-2</li>
        </div>
        <div className="symbol">Fe</div>
        <div className="at_details">Hierro<br/>[Ar]3d<sup>6</sup>4s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">58.93319</div>
        <div className="at_num">27</div>
        <div className="ener">760.4</div>
        <div className="elec">1.91</div>
        <div className="estad"> 
          <li>+5</li>
          <li>+4</li>
          <li>+3</li>
          <li>+2</li>
          <li>+1</li>
          <li>-1</li>
          <li>-2</li>
        </div>
        <div className="symbol">Co</div>
        <div className="at_details">Cobalto<br/>[Ar]3d<sup>7</sup>4s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">58.6934</div>
        <div className="at_num">28</div>
        <div className="ener">737.4</div>
        <div className="elec">1.88</div>
        <div className="estad"> 
          <li>+4</li>
          <li>+3</li>
          <li>+2</li>
          <li>+1</li>
          <li>-1</li>
        </div>
        <div className="symbol">Ni</div>
        <div className="at_details">Níquel<br/>[Ar]3d<sup>8</sup>4s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">63.546</div>
        <div className="at_num">29</div>
        <div className="ener">745.5</div>
        <div className="elec">1.90</div>
        <div className="estad"> 
          <li>+4</li>
          <li>+3</li>
          <li>+2</li>
          <li>+1</li>
        </div>
        <div className="symbol">Cu</div>
        <div className="at_details">Cobre<br/>[Ar]3d<sup>10</sup>4s<sup>1</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">65.38</div>
        <div className="at_num">30</div>
        <div className="ener">906.4</div>
        <div className="elec">1.65</div>
        <div className="estad"> 
          <li>+2</li>
          <li></li>
        </div>
        <div className="symbol">Zn</div>
        <div className="at_details">Zinc<br/>[Ar]3d<sup>10</sup>4s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">69.723</div>
        <div className="at_num">31</div>
        <div className="ener">578.8</div>
        <div className="elec">1.81</div>
        <div className="estad"> 
          <li>+3</li>
          <li>+2</li>
          <li>+1</li>
        </div>
        <div className="symbol">Ga</div>
        <div className="at_details">Galio<br/>[Ar]3d<sup>10</sup>4s<sup>2</sup>4p<sup>1</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">72.64</div>
        <div className="at_num">32</div>
        <div className="ener">762.0</div>
        <div className="elec">2.01</div>
        <div className="estad"> 
          <li>+4</li>
          <li>+3</li>
          <li>+2</li>
          <li>+1</li>
          <li>-4</li>
        </div>
        <div className="symbol">Ge</div>
        <div className="at_details">Germanio<br/>[Ar]3d<sup>10</sup>4s<sup>2</sup>4p<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">74.92160</div>
        <div className="at_num">33</div>
        <div className="ener">947.0</div>
        <div className="elec">2.18</div>
        <div className="estad"> 
          <li>+5</li>
          <li>+3</li>
          <li>+2</li>
          <li>-3</li>
        </div>
        <div className="symbol">As</div>
        <div className="at_details">Arsénico<br/>[Ar]3d<sup>10</sup>4s<sup>2</sup>4p<sup>3</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">78.96</div>
        <div className="at_num">34</div>
        <div className="ener">941.0</div>
        <div className="elec">2.55</div>
        <div className="estad"> 
          <li>+6</li>
          <li>+4</li>
          <li>+2</li>
          <li>-2</li>
        </div>
        <div className="symbol">Se</div>
        <div className="at_details">Selenio<br/>[Ar]3d<sup>10</sup>4s<sup>2</sup>4p<sup>4</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">79.904</div>
        <div className="at_num">35</div>
        <div className="ener">1139.9</div>
        <div className="elec">2.96</div>
        <div className="estad"> 
          <li>+7</li>
          <li>+5</li>
          <li>+4</li>
          <li>+3</li>
          <li>+1</li>
          <li>-1</li>
        </div>
        <div className="symbol">Br</div>
        <div className="at_details">Bromo<br/>[Ar]3d<sup>10</sup>4s<sup>2</sup>4p<sup>5</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">83.798</div>
        <div className="at_num">36</div>
        <div className="ener">1350.8</div>
        <div className="elec">3.00</div>
        <div className="estad"> 
          <li>+2</li>
          <li></li>
        </div>
        <div className="symbol">Kr</div>
        <div className="at_details">Kriptón<br/>[Ar]3d<sup>10</sup>4s<sup>2</sup>4p<sup>6</sup></div>
      </div>
    </div>
  </div>
  <div className="periodic-row">
    <div className="cell">
      <div className="element">
      <div className="masa">85.4678</div>
        <div className="at_num">37</div>
        <div className="ener">403.0</div>
        <div className="elec">0.82</div>
        <div className="estad"> 
          <li>+1</li>
          <li></li>
        </div>
        <div className="symbol">Rb</div>
        <div className="at_details">Rubidio<br/>[kr]5s<sup>1</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">40.078</div>
        <div className="at_num">38</div>
        <div className="ener">549.5</div>
        <div className="elec">0.95</div>
        <div className="estad"> 
          <li>+2</li>
          <li></li>
        </div>
        <div className="symbol">Sr</div>
        <div className="at_details">Estroncio<br/>[kr]5s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">88.90585</div>
        <div className="at_num">39</div>
        <div className="ener">600.0</div>
        <div className="elec">1.22</div>
        <div className="estad"> 
          <li>+3</li>
          <li>+2</li>
          <li>+1</li>
        </div>
        <div className="symbol">Y</div>
        <div className="at_details">Itrio<br/>[kr]4d<sup>1</sup>5s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">91.224</div>
        <div className="at_num">40</div>
        <div className="ener">640.1</div>
        <div className="elec">1.33</div>
        <div className="estad"> 
          <li>+4</li>
          <li>+3</li>
          <li>+2</li>
          <li>+1</li>
        </div>
        <div className="symbol">Zr</div>
        <div className="at_details">Zirconio<br/>[kr]4d<sup>2</sup>5s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">92.90638</div>
        <div className="at_num">41</div>
        <div className="ener">652.1</div>
        <div className="elec">1.60</div>
        <div className="estad"> 
          <li>+5</li>
          <li>+4</li>
          <li>+3</li>
          <li>+2</li>
          <li>-1</li>
        </div>
        <div className="symbol">Nb</div>
        <div className="at_details">Niobio<br/>[kr]4d<sup>4</sup>5s<sup>1</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">95.96</div>
        <div className="at_num">42</div>
        <div className="ener">684.3</div>
        <div className="elec">2.16</div>
        <div className="estad"> 
          <li>+6</li>
          <li>+5</li>
          <li>+4</li>
          <li>+3</li>
          <li>+2</li>
          <li>+1</li>
          <li>-1</li>
          <li>-2</li>
        </div>
        <div className="symbol">Mo</div>
        <div className="at_details">Molibdeno<br/>[kr]4d<sup>5</sup>5s<sup>1</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">(98)</div>
        <div className="at_num">43</div>
        <div className="ener">702.0</div>
        <div className="elec">1.90</div>
        <div className="estad"> 
          <li>+7</li>
          <li>+6</li>
          <li>+5</li>
          <li>+4</li>
          <li>+3</li>
          <li>+2</li>
          <li>+1</li>
          <li>-1</li>
          <li>-3</li>
        </div>
        <div className="symbol">Tc</div>
        <div className="at_details">Tecnecio<br/>[kr]4d<sup>5</sup>5s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">101.07</div>
        <div className="at_num">44</div>
        <div className="ener">710.2</div>
        <div className="elec">2.20</div>
        <div className="estad"> 
          <li>+8</li>
          <li>+7</li>
          <li>+6</li>
          <li>+5</li>
          <li>+4</li>
          <li>+3</li>
          <li>+2</li>
          <li>+1</li>
          <li>-2</li>
        </div>
        <div className="symbol">Ru</div>
        <div className="at_details">Rutenio<br/>[kr]4d<sup>7</sup>5s<sup>1</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">102.9055</div>
        <div className="at_num">45</div>
        <div className="ener">719.7</div>
        <div className="elec">2.28</div>
        <div className="estad"> 
          <li>+6</li>
          <li>+5</li>
          <li>+4</li>
          <li>+3</li>
          <li>+2</li>
          <li>+1</li>
          <li>-1</li>
        </div>
        <div className="symbol">Rh</div>
        <div className="at_details">Rodio<br/>[kr]4d<sup>8</sup>5s<sup>1</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">106.42</div>
        <div className="at_num">46</div>
        <div className="ener">804.4</div>
        <div className="elec">2.20</div>
        <div className="estad"> 
          <li>+4</li>
          <li>+2</li>
        </div>
        <div className="symbol">Pd</div>
        <div className="at_details">Paladio<br/>[kr]4d<sup>10</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">107.8682</div>
        <div className="at_num">47</div>
        <div className="ener">731.0</div>
        <div className="elec">1.93</div>
        <div className="estad"> 
          <li>+3</li>
          <li>+2</li>
          <li>+1</li>
        </div>
        <div className="symbol">Ag</div>
        <div className="at_details">Plata<br/>[kr]4d<sup>10</sup>5s<sup>1</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">112.441</div>
        <div className="at_num">48</div>
        <div className="ener">867.8</div>
        <div className="elec">1.69</div>
        <div className="estad"> 
          <li>+2</li>
          <li></li>
        </div>
        <div className="symbol">Cd</div>
        <div className="at_details">Cadmio<br/>[kr]4d<sup>10</sup>5s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">114.818</div>
        <div className="at_num">49</div>
        <div className="ener">558.3</div>
        <div className="elec">1.78</div>
        <div className="estad"> 
          <li>+3</li>
          <li>+2</li>
          <li>+1</li>
        </div>
        <div className="symbol">In</div>
        <div className="at_details">Indio<br/>[kr]4d<sup>10</sup>5s<sup>2</sup>5p<sup>1</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">118.710</div>
        <div className="at_num">50</div>
        <div className="ener">708.6</div>
        <div className="elec">1.96</div>
        <div className="estad"> 
          <li>+4</li>
          <li>+2</li>
          <li>-4</li>
        </div>
        <div className="symbol">Sn</div>
        <div className="at_details">Estaño<br/>[kr]4d<sup>10</sup>5s<sup>2</sup>5p<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">121.760</div>
        <div className="at_num">51</div>
        <div className="ener">834.0</div>
        <div className="elec">2.05</div>
        <div className="estad"> 
          <li>+5</li>
          <li>+3</li>
          <li>-3</li>
        </div>
        <div className="symbol">Sb</div>
        <div className="at_details">Antimonio<br/>[kr]4d<sup>10</sup>5s<sup>2</sup>5p<sup>3</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">127.60</div>
        <div className="at_num">52</div>
        <div className="ener">869.3</div>
        <div className="elec">2.10</div>
        <div className="estad"> 
          <li>+6</li>
          <li>+5</li>
          <li>+4</li>
          <li>+2</li>
          <li>-2</li>
        </div>
        <div className="symbol">Te</div>
        <div className="at_details">Telurio<br/>[kr]4d<sup>10</sup>5s<sup>2</sup>5p<sup>4</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">126.9044</div>
        <div className="at_num">53</div>
        <div className="ener">1008.4</div>
        <div className="elec">2.66</div>
        <div className="estad"> 
          <li>+7</li>
          <li>+5</li>
          <li>+3</li>
          <li>+1</li>
          <li>-1</li>
        </div>
        <div className="symbol">I</div>
        <div className="at_details">Yodo<br/>[kr]4d<sup>10</sup>5s<sup>2</sup>5p<sup>5</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">131.293</div>
        <div className="at_num">54</div>
        <div className="ener">1170.4</div>
        <div className="elec">2.60</div>
        <div className="estad"> 
          <li>+8</li>
          <li>+6</li>
          <li>+4</li>
          <li>+2</li>
        </div>
        <div className="symbol">Xe</div>
        <div className="at_details">Xenón<br/>[kr]4d<sup>10</sup>5s<sup>2</sup>5p<sup>6</sup></div>
      </div>
    </div>
  </div>
  <div className="periodic-row">
    <div className="cell">
      <div className="element">
      <div className="masa">132.9054</div>
        <div className="at_num">55</div>
        <div className="ener">375.7</div>
        <div className="elec">0.79</div>
        <div className="estad"> 
          <li>+1</li>
          <li></li>
        </div>
        <div className="symbol">Cs</div>
        <div className="at_details">Cesio<br/>[Xe]6s<sup>1</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">137.327</div>
        <div className="at_num">56</div>
        <div className="ener">502.9</div>
        <div className="elec">0.89</div>
        <div className="estad"> 
          <li>+2</li>
          <li></li>
        </div>
        <div className="symbol">Ba</div>
        <div className="at_details">Bario<br/>[Xe]6s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">174.9668</div>
        <div className="at_num">71</div>
        <div className="ener">523.5</div>
        <div className="elec">1.27</div>
        <div className="estad"> 
          <li>+3</li>
          <li></li>
        </div>
        <div className="symbol">Lu</div>
        <div className="at_details">Lutecio<br/>[Xe]4f<sup>14</sup>5d<sup>1</sup>6s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">178.49</div>
        <div className="at_num">72</div>
        <div className="ener">658.5</div>
        <div className="elec">1.30</div>
        <div className="estad"> 
          <li>+4</li>
          <li>+3</li>
          <li>+2</li>
        </div>
        <div className="symbol">Hf</div>
        <div className="at_details">Hafnio<br/>[Xe]4f<sup>14</sup>5d<sup>2</sup>6s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">180.9478</div>
        <div className="at_num">73</div>
        <div className="ener">761.0</div>
        <div className="elec">1.50</div>
        <div className="estad"> 
          <li>+5</li>
          <li>+4</li>
          <li>+3</li>
          <li>+2</li>
          <li>-1</li>
        </div>
        <div className="symbol">Ta</div>
        <div className="at_details">Tantalio<br/>[Xe]4f<sup>14</sup>5d<sup>3</sup>6s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">183.84</div>
        <div className="at_num">74</div>
        <div className="ener">770.0</div>
        <div className="elec">2.36</div>
        <div className="estad"> 
          <li>+6</li>
          <li>+5</li>
          <li>+4</li>
          <li>+3</li>
          <li>+2</li>
          <li>+1</li>
          <li>-1</li>
          <li>-2</li>
        </div>
        <div className="symbol">W</div>
        <div className="at_details">Wolframio<br/>[Xe]4f<sup>14</sup>5d<sup>4</sup>6s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">186.207</div>
        <div className="at_num">75</div>
        <div className="ener">760.0</div>
        <div className="elec">1.90</div>
        <div className="estad"> 
          <li>+7</li>
          <li>+6</li>
          <li>+5</li>
          <li>+4</li>
          <li>+3</li>
          <li>+2</li>
          <li>+1</li>
          <li>-1</li>
          <li>-3</li>
        </div>
        <div className="symbol">Re</div>
        <div className="at_details">Renio<br/>[Xe]4f<sup>14</sup>5d<sup>5</sup>6s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">190.23</div>
        <div className="at_num">76</div>
        <div className="ener">840.0</div>
        <div className="elec">2.20</div>
        <div className="estad"> 
          <li>+8</li>
          <li>+7</li>
          <li>+6</li>
          <li>+5</li>
          <li>+4</li>
          <li>+3</li>
          <li>+2</li>
          <li>+1</li>
          <li>-2</li>
        </div>
        <div className="symbol">Os</div>
        <div className="at_details">Osmio<br/>[Xe]4f<sup>14</sup>5d<sup>6</sup>6s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">192.217</div>
        <div className="at_num">77</div>
        <div className="ener">880.0</div>
        <div className="elec">2.20</div>
        <div className="estad"> 
          <li>+6</li>
          <li>+5</li>
          <li>+4</li>
          <li>+3</li>
          <li>+2</li>
          <li>+1</li>
          <li>-1</li>
          <li>-3</li>
        </div>
        <div className="symbol">Ir</div>
        <div className="at_details">Iridio<br/>[Xe]4f<sup>14</sup>5d<sup>7</sup>6s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">195.084</div>
        <div className="at_num">78</div>
        <div className="ener">870</div>
        <div className="elec">2.28</div>
        <div className="estad"> 
          <li>+6</li>
          <li>+5</li>
          <li>+4</li>
          <li>+2</li>
        </div>
        <div className="symbol">Pt</div>
        <div className="at_details">Platino<br/>[Xe]4f<sup>14</sup>5d<sup>9</sup>6s<sup>1</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">196.9665</div>
        <div className="at_num">79</div>
        <div className="ener">890.1</div>
        <div className="elec">2.54</div>
        <div className="estad"> 
          <li>+5</li>
          <li>+3</li>
          <li>+2</li>
          <li>+1</li>
          <li>-1</li>
        </div>
        <div className="symbol">Au</div>
        <div className="at_details">Oro<br/>[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>1</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">200.59</div>
        <div className="at_num">80</div>
        <div className="ener">1007.1</div>
        <div className="elec">2.00</div>
        <div className="estad"> 
          <li>+4</li>
          <li>+2</li>
          <li>+1</li>
        </div>
        <div className="symbol">Hg</div>
        <div className="at_details">Mercurio<br/>[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">204.3833</div>
        <div className="at_num">81</div>
        <div className="ener">589.4</div>
        <div className="elec">1.62</div>
        <div className="estad"> 
          <li>+3</li>
          <li>+1</li>
        </div>
        <div className="symbol">Tl</div>
        <div className="at_details">Talio<br/>[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>1</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">207.2</div>
        <div className="at_num">82</div>
        <div className="ener">715.6</div>
        <div className="elec">2.33</div>
        <div className="estad"> 
          <li>+4</li>
          <li>+2</li>
          <li>-4</li>
        </div>
        <div className="symbol">Pb</div>
        <div className="at_details">Plomo<br/>[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">208.9804</div>
        <div className="at_num">83</div>
        <div className="ener">703.0</div>
        <div className="elec">2.02</div>
        <div className="estad"> 
          <li>+5</li>
          <li>+3</li>
          <li>-3</li>
        </div>
        <div className="symbol">Bi</div>
        <div className="at_details">Bismuto<br/>[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>3</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">(210)</div>
        <div className="at_num">84</div>
        <div className="ener">812.1</div>
        <div className="elec">2.00</div>
        <div className="estad"> 
          <li>+6</li>
          <li>+4</li>
          <li>+2</li>
          <li>-2</li>
        </div>
        <div className="symbol">Po</div>
        <div className="at_details">Polonio<br/>[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>4</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">(210)</div>
        <div className="at_num">85</div>
        <div className="ener">890.0</div>
        <div className="elec">2.20</div>
        <div className="estad"> 
          <li>+1</li>
          <li>-1</li>
        </div>
        <div className="symbol">At</div>
        <div className="at_details">Astato<br />[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>5</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">(220)</div>
        <div className="at_num">86</div>
        <div className="ener">1037.0</div>
        <div className="elec">2.20</div>
        <div className="estad"> 
          <li></li>
          <li></li>
        </div>
        <div className="symbol">Rn</div>
        <div className="at_details">Radón<br/>[Xe]4f<sup>14</sup>5d<sup>10</sup>6s<sup>2</sup>6p<sup>6</sup></div>
      </div>
    </div>
  </div>
  <div className="periodic-row">
    <div className="cell">
      <div className="element">
      <div className="masa">(223)</div>
        <div className="at_num">87</div>
        <div className="ener">380.0</div>
        <div className="elec">0.70</div>
        <div className="estad"> 
          <li>+1</li>
          <li></li>
        </div>
        <div className="symbol">Fr</div>
        <div className="at_details">Francio<br/>[Rn]7s<sup>1</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">(226)</div>
        <div className="at_num">88</div>
        <div className="ener">509.3</div>
        <div className="elec">0.90</div>
        <div className="estad"> 
          <li>+2</li>
          <li></li>
        </div>
        <div className="symbol">Ra</div>
        <div className="at_details">Radio<br/>[Rn]7s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
            <div className="element">
      <div className="masa">(262)</div>
        <div className="at_num">103</div>
        <div className="ener">470.0</div>
        <div className="elec"></div>
        <div className="estad"> 
          <li>+3</li>
          <li></li>
        </div>
        <div className="symbol">Rf</div>
        <div className="at_details">Laurencio<br/>[Rn]5f<sup>14</sup>7s<sup>2</sup>7p<sup>1</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">(261)</div>
        <div className="at_num">104</div>
        <div className="ener">580.0</div>
        <div className="elec"></div>
        <div className="estad"> 
          <li>+3</li>
          <li></li>
        </div>
        <div className="symbol">Rf</div>
        <div className="at_details">Rutherfordio<br/>[Rn]5f<sup>14</sup>6d<sup>2</sup>7s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">(262)</div>
        <div className="at_num">105</div>
        <div className="ener"></div>
        <div className="elec"></div>
        <div className="estad"> 
          <li>+5</li>
          <li></li>
        </div>
        <div className="symbol">Db</div>
        <div className="at_details">Dubnio<br/></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">(266)</div>
        <div className="at_num">106</div>
        <div className="ener"></div>
        <div className="elec"></div>
        <div className="estad"> 
          <li>+6</li>
          <li></li>
        </div>
        <div className="symbol">Sg</div>
        <div className="at_details">Seborgio<br/></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">(264)</div>
        <div className="at_num">107</div>
        <div className="ener"></div>
        <div className="elec"></div>
        <div className="estad"> 
          <li>+7</li>
          <li></li>
        </div>
        <div className="symbol">Bh</div>
        <div className="at_details">Bohrio<br/></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">(277)</div>
        <div className="at_num">108</div>
        <div className="ener"></div>
        <div className="elec"></div>
        <div className="estad"> 
          <li>+8</li>
          <li></li>
        </div>
        <div className="symbol">Hs</div>
        <div className="at_details">Hassio<br /></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">(268)</div>
        <div className="at_num">109</div>
        <div className="ener"></div>
        <div className="elec"></div>
        <div className="estad"> 
          <li></li>
          <li></li>
        </div>
        <div className="symbol">Mt</div>
        <div className="at_details">Meitnerio<br/></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">(271)</div>
        <div className="at_num">110</div>
        <div className="ener"></div>
        <div className="elec"></div>
        <div className="estad"> 
          <li></li>
          <li></li>
        </div>
        <div className="symbol">Ds</div>
        <div className="at_details">Darmstadio<br/></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">(272)</div>
        <div className="at_num">111</div>
        <div className="ener"></div>
        <div className="elec"></div>
        <div className="estad"> 
          <li></li>
          <li></li>
        </div>
        <div className="symbol">Rg</div>
        <div className="at_details">Roentgenio<br/></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">()</div>
        <div className="at_num">112</div>
        <div className="ener"></div>
        <div className="elec"></div>
        <div className="estad"> 
          <li></li>
          <li></li>
        </div>
        <div className="symbol">Cn</div>
        <div className="at_details">Copernicio<br/></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">(284)</div>
        <div className="at_num">113</div>
        <div className="ener"></div>
        <div className="elec"></div>
        <div className="estad"> 
          <li></li>
          <li></li>
        </div>
        <div className="symbol">Uut</div>
        <div className="at_details">Ununtrio<br /></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">(289)</div>
        <div className="at_num">114</div>
        <div className="ener"></div>
        <div className="elec"></div>
        <div className="estad"> 
          <li></li>
          <li></li>
        </div>
        <div className="symbol">Fl</div>
        <div className="at_details">Flerovio<br /></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">(288)</div>
        <div className="at_num">115</div>
        <div className="ener"></div>
        <div className="elec"></div>
        <div className="estad"> 
          <li></li>
          <li></li>
        </div>
        <div className="symbol">Uup</div>
        <div className="at_details">Unumpentio<br /></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">(292)</div>
        <div className="at_num">116</div>
        <div className="ener"></div>
        <div className="elec"></div>
        <div className="estad"> 
          <li></li>
          <li></li>
        </div>
        <div className="symbol">Lv</div>
        <div className="at_details">Livermorio<br /></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa"></div>
        <div className="at_num">117</div>
        <div className="ener"></div>
        <div className="elec"></div>
        <div className="estad"> 
          <li></li>
          <li></li>
        </div>
        <div className="symbol">Uus</div>
        <div className="at_details">Ununseptio<br /></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">(294)</div>
        <div className="at_num">118</div>
        <div className="ener"></div>
        <div className="elec"></div>
        <div className="estad"> 
          <li></li>
          <li></li>
        </div>
        <div className="symbol">Uuo</div>
        <div className="at_details">Ununoctio<br /></div>
      </div>
    </div>
  </div>
  <div className="periodic-row"></div>
  <div className="periodic-row">
    <div className="cell"></div>
    <div className="cell"></div>
    <div className="cell"></div>
    <div className="cell">
      <div className="element">
      <div className="masa">138.9054</div>
        <div className="at_num">57</div>
        <div className="ener">538.1</div>
        <div className="elec">1.10</div>
        <div className="estad"> 
          <li>+3</li>
          <li>+2</li>
        </div>
        <div className="symbol">La</div>
        <div className="at_details">Lantano<br/>[Xe]5d<sup>1</sup>6s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">140.116</div>
        <div className="at_num">58</div>
        <div className="ener">534.4</div>
        <div className="elec">1.12</div>
        <div className="estad"> 
          <li>+4</li>
          <li>+3</li>
          <li>+2</li>
        </div>
        <div className="symbol">Ce</div>
        <div className="at_details">Cerio<br/>[Xe]4f<sup>1</sup>5d<sup>1</sup>6s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">140.9076</div>
        <div className="at_num">59</div>
        <div className="ener">527.0</div>
        <div className="elec">1.13</div>
        <div className="estad"> 
          <li>+4</li>
          <li>+3</li>
          <li>+2</li>
        </div>
        <div className="symbol">Pr</div>
        <div className="at_details">Praseodimio<br/>[Xe]4f<sup>3</sup>6s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">144.242</div>
        <div className="at_num">60</div>
        <div className="ener">533.1</div>
        <div className="elec">1.14</div>
        <div className="estad"> 
          <li>+3</li>
          <li>+2</li>
        </div>
        <div className="symbol">Nd</div>
        <div className="at_details">Neodimio<br/>[Xe]4f<sup>4</sup>6s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">(145)</div>
        <div className="at_num">61</div>
        <div className="ener">540.0</div>
        <div className="elec"></div>
        <div className="estad"> 
          <li>+3</li>
          <li></li>
        </div>
        <div className="symbol">Pm</div>
        <div className="at_details">Prometio<br/>[Xe]4f<sup>5</sup>6s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">150.36</div>
        <div className="at_num">62</div>
        <div className="ener">544.5</div>
        <div className="elec">1.17</div>
        <div className="estad"> 
          <li>+3</li>
          <li>+2</li>
        </div>
        <div className="symbol">Sm</div>
        <div className="at_details">Samario<br/>[Xe]4f<sup>6</sup>6s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">151.964</div>
        <div className="at_num">63</div>
        <div className="ener">547.1</div>
        <div className="elec"></div>
        <div className="estad"> 
          <li>+3</li>
          <li>+2</li>
        </div>
        <div className="symbol">Eu</div>
        <div className="at_details">Europio<br/>[Xe]4f<sup>7</sup>6s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">157.25</div>
        <div className="at_num">64</div>
        <div className="ener">593.4</div>
        <div className="elec">1.20</div>
        <div className="estad"> 
          <li>+3</li>
          <li>+2</li>
          <li>+1</li>
        </div>
        <div className="symbol">Gd</div>
        <div className="at_details">Gadolinio<br/>[Xe]4f<sup>7</sup>5d<sup>1</sup>6s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">158.9253</div>
        <div className="at_num">65</div>
        <div className="ener">565.8</div>
        <div className="elec"></div>
        <div className="estad"> 
          <li>+4</li>
          <li>+3</li>
          <li>+1</li>
        </div>
        <div className="symbol">Tb</div>
        <div className="at_details">Terbio<br/>[Xe]4f<sup>9</sup>6s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">162.500</div>
        <div className="at_num">66</div>
        <div className="ener">573.0</div>
        <div className="elec">1.22</div>
        <div className="estad"> 
          <li>+3</li>
          <li>+2</li>
        </div>
        <div className="symbol">Dy</div>
        <div className="at_details">Disprosio<br/>[Xe]4f<sup>10</sup>6s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">164.9303</div>
        <div className="at_num">67</div>
        <div className="ener">581.0</div>
        <div className="elec">1.23</div>
        <div className="estad"> 
          <li>+3</li>
          <li></li>
        </div>
        <div className="symbol">Ho</div>
        <div className="at_details">Holmio<br/>[Xe]4f<sup>11</sup>6s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">167.259</div>
        <div className="at_num">68</div>
        <div className="ener">589.3</div>
        <div className="elec">1.24</div>
        <div className="estad"> 
          <li>+3</li>
          <li></li>
        </div>
        <div className="symbol">Er</div>
        <div className="at_details">Erbio<br/>[Xe]4f<sup>12</sup>6s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">168.9342</div>
        <div className="at_num">69</div>
        <div className="ener">596.7</div>
        <div className="elec">1.25</div>
        <div className="estad"> 
          <li>+3</li>
          <li>+2</li>
        </div>
        <div className="symbol">Tm</div>
        <div className="at_details">Tulio<br/>[Xe]4f<sup>13</sup>6s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">173.054</div>
        <div className="at_num">70</div>
        <div className="ener">603.4</div>
        <div className="elec"></div>
        <div className="estad"> 
          <li>+3</li>
          <li>+2</li>
        </div>
        <div className="symbol">Yb</div>
        <div className="at_details">Iterbio<br/>[Xe]4f<sup>14</sup>6s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell"></div>
  </div>
  <div className="periodic-row">
    <div className="cell"></div>
    <div className="cell"></div>
    <div className="cell"></div>
    <div className="cell">
      <div className="element">
      <div className="masa">()227</div>
        <div className="at_num">89</div>
        <div className="ener">499.0</div>
        <div className="elec">1.10</div>
        <div className="estad"> 
          <li>+3</li>
          <li></li>
        </div>
        <div className="symbol">Ac</div>
        <div className="at_details">Actinio<br/>[Rn]6d<sup>1</sup>7s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">232.0280</div>
        <div className="at_num">90</div>
        <div className="ener">578.0</div>
        <div className="elec">1.30</div>
        <div className="estad"> 
          <li>+4</li>
          <li>+3</li>
          <li>+2</li>
        </div>
        <div className="symbol">Th</div>
        <div className="at_details">Torio<br/>[Rn]6d<sup>2</sup>7s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">231.0358</div>
        <div className="at_num">91</div>
        <div className="ener">568.0</div>
        <div className="elec">1.50</div>
        <div className="estad"> 
          <li>+5</li>
          <li>+4</li>
          <li>+3</li>
        </div>
        <div className="symbol">Pa</div>
        <div className="at_details">Protactinio<br/>[Rn]5f<sup>2</sup>6d<sup>1</sup>7s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">238.0289</div>
        <div className="at_num">92</div>
        <div className="ener">597.6</div>
        <div className="elec">1.38</div>
        <div className="estad"> 
          <li>+6</li>
          <li>+5</li>
          <li>+4</li>
          <li>+3</li>
        </div>
        <div className="symbol">U</div>
        <div className="at_details">Uranio<br/>[Rn]5f<sup>3</sup>6d<sup>1</sup>7s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">(237)</div>
        <div className="at_num">93</div>
        <div className="ener">604.5</div>
        <div className="elec">1.36</div>
        <div className="estad"> 
          <li>+7</li>
          <li>+6</li>
          <li>+5</li>
          <li>+4</li>
          <li>+3</li>
        </div>
        <div className="symbol">Np</div>
        <div className="at_details">Neptunio<br/>[Rn]5f<sup>4</sup>6d<sup>1</sup>7s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">(244)</div>
        <div className="at_num">94</div>
        <div className="ener">584.7</div>
        <div className="elec">1.28</div>
        <div className="estad"> 
          <li>+7</li>
          <li>+6</li>
          <li>+5</li>
          <li>+4</li>
          <li>+3</li>
        </div>
        <div className="symbol">Pu</div>
        <div className="at_details">Plutonio<br/>[Rn]5f<sup>6</sup>7s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">(243)</div>
        <div className="at_num">95</div>
        <div className="ener">578.0</div>
        <div className="elec">1.30</div>
        <div className="estad"> 
          <li>+6</li>
          <li>+5</li>
          <li>+4</li>
          <li>+3</li>
          <li>+2</li>
        </div>
        <div className="symbol">Am</div>
        <div className="at_details">Americio<br/>[Rn]5f<sup>7</sup>7s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">(247)</div>
        <div className="at_num">96</div>
        <div className="ener">581.0</div>
        <div className="elec">1.30</div>
        <div className="estad"> 
          <li>+4</li>
          <li>+3</li>
        </div>
        <div className="symbol">Cm</div>
        <div className="at_details">Curio<br/>[Rn]5f<sup>7</sup>6d<sup>1</sup>7s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">(247)</div>
        <div className="at_num">97</div>
        <div className="ener">601.0</div>
        <div className="elec">1.30</div>
        <div className="estad"> 
          <li>+4</li>
          <li>+3</li>
        </div>
        <div className="symbol">Bk</div>
        <div className="at_details">Berkelio<br/>[Rn]5f<sup>9</sup>7s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">(251)</div>
        <div className="at_num">98</div>
        <div className="ener">608.0</div>
        <div className="elec">1.30</div>
        <div className="estad"> 
          <li>+4</li>
          <li>+3</li>
          <li>+1</li>
        </div>
        <div className="symbol">Cf</div>
        <div className="at_details">Californio<br/>[Rn]5f<sup>10</sup>7s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">(252)</div>
        <div className="at_num">99</div>
        <div className="ener">619.0</div>
        <div className="elec">1.30</div>
        <div className="estad"> 
          <li>+3</li>
          <li>+2</li>
        </div>
        <div className="symbol">Es</div>
        <div className="at_details">Einstenio<br/>[Rn]5f<sup>11</sup>7s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">(257)</div>
        <div className="at_num">100</div>
        <div className="ener">627.0</div>
        <div className="elec">1.30</div>
        <div className="estad"> 
          <li>+3</li>
          <li>+2</li>
        </div>
        <div className="symbol">Fm</div>
        <div className="at_details">Fermio<br/>[Rn]5f<sup>12</sup>7s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">(258)</div>
        <div className="at_num">101</div>
        <div className="ener">635.0</div>
        <div className="elec">1.30</div>
        <div className="estad"> 
          <li>+3</li>
          <li>+2</li>
        </div>
        <div className="symbol">Md</div>
        <div className="at_details">Mendelevio<br/>[Rn]5f<sup>13</sup>7s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell">
      <div className="element">
      <div className="masa">(259)</div>
        <div className="at_num">102</div>
        <div className="ener">642.0</div>
        <div className="elec">1.30</div>
        <div className="estad"> 
          <li>+3</li>
          <li>+2</li>
        </div>
        <div className="symbol">No</div>
        <div className="at_details">Nobelio<br/>[Rn]5f<sup>14</sup>7s<sup>2</sup></div>
      </div>
    </div>
    <div className="cell"></div>
  </div>
  <div className="legend">
  <ul className="list-2">
    <li className="type-1">metales alcalinos</li>
    <li className="type-2">alcalinotérreos</li>
    <li className="type-3">otros metales</li>
    <li className="type-4">metales de transición</li>
    <li className="type-5">lantánidos</li>
    <li className="type-6">actínidos</li>
  </ul>
  <ul className="list-3">
   <li className="type-7">metaloides</li>
    <li className="type-8">no metales</li>
    <li className="type-9">halógenos</li>
    <li className="type-10">gases nobles</li>
    <li className="type-11">elementos desconocidos</li>
    </ul>
</div>
<img src="" alt="" />
  {/*<div style="clear:both;"></div>*/}
</div>
        </>
        
    )
}