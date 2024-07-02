import { Link } from 'react-router-dom';

/**
 * Represents an element of the periodic table
 * @param {Object} props - Properties of the element
 * @param {string} props.name - The name of the element
 * @param {number} props.atomicNumber - The atomic number of the element
 * @param {number} props.atomicMass - The atomic mass of the element
 * @param {string} props.type - The type of the element
 * @param {string} props.symbol - The symbol of the element
 * @param {JSX.Element} props.elecConf - The electronic configuration of the element
 * @returns JSX.Element
 */
export default function Element(props) {
  if (props.isLegend) {
    return (
      <span className='cell-legend element-legend'>
        <div className={
          props.type === 'nonMetal' ? 'element no-metal' :
            props.type === 'nobleGas' ? 'element noble-gas' :
              props.type === 'alkalineMetal' ? 'element alkaline-metal' :
                props.type === 'alkalineEarthMetal' ? 'element alkaline-earth-metal' :
                  props.type === 'transitionMetal' ? 'element transition-metal' :
                    props.type === 'postTransitionMetal' ? 'element post-transition-metal' :
                      props.type === 'metalloid' ? 'element metalloid' :
                        props.type === 'halogen' ? 'element halogen' :
                          props.type === 'lanthanide' ? 'element lanthanide' :
                            props.type === 'actinide' ? 'element actinide' :
                              props.type === 'unknown' ? 'element unknown' :
                                'element'
        } style={{ backgroundColor: '#ecff8b' }}>
          <div className='masa'><b>{'Masa atomica-->'}</b>{props.atomicMass}</div>
          <div className='at_num'>{props.atomicNumber}<b>{'<--N° atomico'}</b></div>
          <div className="symbol"><b>{'Simbolo-->'}</b>{props.symbol}</div>
          <div className='at_details' id='name'><b>{'Nombre-->'}</b>{props.name}</div>
          <div className='at_details' id='conf-elec'><b>{'Conf. electronica -->'}</b>{props.elecConf}</div>
        </div>
      </span>
    );
  } else {
    if (props.name === 'Lantánidos' || props.name === 'Actínidos') {
      return (
        <div className='cell'>
          <div className={
            props.type === 'lanthanide' ? 'element lanthanide' : 'element actinide'
          }>
            <div className='masa'>{props.atomicMass}</div>
            <div className='at_num'>{props.atomicNumber}</div>
            <div className={`${props.name} symbol`}>{props.symbol}</div>
            <div className="at_details">
              {props.name}
              <br />
              {props.elecConf}
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <Link className='cell' to={`/element/${props.name}`}>
          <div className={
            props.type === 'nonMetal' ? 'element no-metal' :
              props.type === 'nobleGas' ? 'element noble-gas' :
                props.type === 'alkalineMetal' ? 'element alkaline-metal' :
                  props.type === 'alkalineEarthMetal' ? 'element alkaline-earth-metal' :
                    props.type === 'transitionMetal' ? 'element transition-metal' :
                      props.type === 'postTransitionMetal' ? 'element post-transition-metal' :
                        props.type === 'metalloid' ? 'element metalloid' :
                          props.type === 'halogen' ? 'element halogen' :
                            props.type === 'lanthanide' ? 'element lanthanide' :
                              props.type === 'actinide' ? 'element actinide' :
                                props.type === 'unknown' ? 'element unknown' :
                                  'element'
          }>
            <div className='masa'>{props.atomicMass}</div>
            <div className='at_num'>{props.atomicNumber}</div>
            <div className={`${props.name} symbol`}>{props.symbol}</div>
            <div className="at_details">
              {props.name}
              <br />
              {props.elecConf}
            </div>
          </div>
        </Link>
      );
    }

  }
}