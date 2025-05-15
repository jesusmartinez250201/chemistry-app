import TitlebarIcon from "./Icons/TitlebarIcon"
const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]

/**
 * About component. Contains information about the app, the developer and collaborators.
 * @returns {JSX.Element}
 */
export default function About() {
  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ],
    date = new Date(),
    month = monthNames[date.getMonth()],
    appVersion = window.ipcRenderer.getAppVersion(),
    handleLinkClick = (e) => {
      e.preventDefault();
      window.ipcRenderer.openExternal(e.target.href);
    };

  return (
    <div className='max-w-[700px] mt-10
        md:mx-auto
        lg:mx-auto lg:max-w-[800px] unselectable'
      style={{ backgroundColor: colorPalette.background }}>
      <span style={{ color: colorPalette.textTitles }}>
        <div className="flex justify-between mx-8 text-4xl font-bold text-end border-b"
          style={{ borderColor: colorPalette.text }}>
          <h1 className="self-end">
            Acerca de
          </h1>
          <span className="flex items-center" style={{ stroke: colorPalette.textTitles }}>
            <TitlebarIcon className={'w-20 h-auto ml-1 p-1'} />
            <span className="font-mono">chemistry-app</span>
          </span>
        </div>
      </span>
      <div className="mt-1 mx-8" style={{ color: colorPalette.text }}>
        <span className="block">
          Esta aplicación fue desarrollada con el propósito de facilitar el aprendizaje de la química a estudiantes de una manera interactiva y visual.
        </span>
        <span className="my-2 block">
          Hecha con ❤️ por <b className="">Jesús Armando Martínez Vargas</b> en la <span className="hover:transition-all hover:font-bold"><a draggable="false" href="http://www.upvictoria.edu.mx/" onClick={handleLinkClick}>Universidad Politécnica de Victoria</a></span>.
        </span>
        <span className="my-2 block">
          <strong className="">Contacto: </strong>
          <span className="block ml-2">
            <div>
              <a className="hover:transition-all hover:font-bold" draggable="false" href="mailto:jesusmtzzdev@gmail.com" onClick={handleLinkClick}>
                jesusmtzzdev@gmail.com
              </a>
            </div>
            <div>
              <a className="hover:transition-all hover:font-bold" draggable="false" href="mailto:1930337@upv.edu.mx" onClick={handleLinkClick}>
                1930337@upv.edu.mx
              </a>
            </div>
          </span>
        </span>
        <p className="text-xl font-bold">Colaboradores</p>
        <ul className="ml-2">
          <li>
            Juan López Hernández. <b>Contacto: </b><a className="hover:transition-all hover:font-bold" draggable="false" href="mailto:jlopezh@upv.edu.mx" onClick={handleLinkClick}>
              jlopezh@upv.edu.mx
            </a>
          </li>
          <li>
            María Raquel Ortiz Álvarez <b>Contacto: </b><a className="hover:transition-all hover:font-bold" draggable="false" href="mailto:mortiza@upv.edu.mx" onClick={handleLinkClick}>
              mortiza@upv.edu.mx
            </a>
          </li>
          <li>
            Enrique Rocha Rangel <b>Contacto: </b><a className="hover:transition-all hover:font-bold" draggable="false" href="mailto:erochar@upv.edu.mx" onClick={handleLinkClick}>
              erochar@upv.edu.mx
            </a>
          </li>
        </ul>
        <p className='mt-2 text-lg text-justify'>
          <strong>Version:</strong> {appVersion} ({month} 2025)
        </p>
        {/* <p>Copyright&copy;  algo. 2025. Todos los derechos reservados.</p> */}
      </div>
    </div>
  )
}