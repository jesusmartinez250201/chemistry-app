import TitlebarIcon from "./Icons/TitlebarIcon"
const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]

export default function About() {
  const appVersion = window.ipcRenderer.getAppVersion(),
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
      <div className="mt-1 mx-9" style={{ color: colorPalette.text }}>
        {/* <span className="block">
        Esta aplicación fue desarrollada con el propósito de facilitar el aprendizaje de la química a estudiantes de una manera interactiva y visual.
        </span> */}
        <span className="my-2 block">
          Hecha con ❤️ por <strong>Jesús Armando Martínez Vargas</strong> en la <strong><a draggable="false" href="http://www.upvictoria.edu.mx/" onClick={handleLinkClick}>Universidad Politécnica de Victoria</a></strong>.
        </span>
        <span className="my-2 block">
          <strong className="">Contacto: </strong>
          <span>
            <div>
              <a draggable="false" href="mailto:jesusmtzzdev@gmail.com" onClick={handleLinkClick}>
                jesusmtzzdev@gmail.com
              </a>
            </div>
            <div>
              <a draggable="false" href="mailto:1930337@upv.edu.mx" onClick={handleLinkClick}>
                1930337@upv.edu.mx
              </a>
            </div>
          </span>
        </span>
        <p className='mt-2 text-lg text-justify'>
          <strong>Version:</strong> {appVersion} (Febrero 2025)
        </p>
        {/* <p>Copyright&copy;  algo. 2025. Todos los derechos reservados.</p> */}
      </div>
    </div>
  )
}