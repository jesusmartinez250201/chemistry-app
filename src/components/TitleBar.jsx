import TitlebarIcon from "./Icons/TitlebarIcon"
import CloseIcon from "./Icons/CloseIcon"
import MaximizeIcon from "./Icons/MaximizeIcon"
import MinimizeIcon from "./Icons/MinimizeIcon"
import RestoreIcon from "./Icons/RestoreIcon"
import { useRef, useState, useEffect } from "react"

// const TEST = true,
//   performanceData = { data: [] }

//   //console.log(window.ipcRenderer.invoke('app-metrics'))
//   window.ipcRenderer.invoke('app-metrics').then(data => {
//     //console.log(parseFloat(data.private/1024).toFixed(2))
//     console.log(data)
//   })

// if (TEST) {
//   window.ipcRenderer.invoke('get-app-path').then(userDataPath => {
//     const filePath = `${userDataPath}/test.json`;
//     window.ipcRenderer.invoke('write-file', filePath, JSON.stringify({ test: 'test' })).then(success => {
//       if (!success) {
//         console.error('Error writing file');
//       }
//     });
//   });
// }





export default function TitleBar() {
  const titleBarRef = useRef(),
    closeRef = useRef(),
    minimizeRef = useRef(),
    maximizeRef = useRef(),
    restoreRef = useRef(),
    [hover, setHover] = useState({ close: false, minimize: false, maximize: false, restore: false }),
    isMaximized = window.ipcRenderer.isMaximized(),
    colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')],
    handleHover = (e) => {
      const { value } = e.target
      setHover(prev => ({ ...prev, [value]: !prev[value] }))
    }


  // useEffect(() => {
  //   let seconds = 0;
  //   const interval = setInterval(() => {
  //     console.clear()
  //     window.ipcRenderer.invoke('app-metrics').then(data => {
  //       let cpuSum = 0
  //       let memorySum = 0
  //       data.map((item) => {
  //         console.log(`Process type: ${item.type}`)
  //         console.log(`CPU Usage: ${item.cpu.percentCPUUsage.toFixed(2)}%`)
  //         console.log(`Memory Usage: ${item.memory.privateBytes/1024}`)
  //         cpuSum += item.cpu.percentCPUUsage
  //         memorySum += item.memory.privateBytes
  //       })
  //       console.log(`Memory Usage: ${(memorySum/1024).toFixed(2)} MB`)
  //       console.log(`CPU Usage: ${cpuSum.toFixed(2)}%`)
  //     })
  //     // window.ipcRenderer.invoke('app-metrics').then(data => {
  //     //   //console.log(parseFloat(data.private/1024).toFixed(2))
  //     //   console.log(data)
  //     // })
  //     // const cpuUsage = parseFloat(window.ipcRenderer.getAppMetrics().cpu.percentCPUUsage.toFixed(2))
  //     // const memoryUsage = (window.ipcRenderer.getAppMetrics().memory.swapFree / 1024).toFixed(2);
  //     // console.log(`CPU Usage: ${cpuUsage}%`)
  //     // console.log(`Memory Usage: ${memoryUsage}`)
  //     // performanceData.data.push({ seconds, cpuUsage, memoryUsage })
  //     // console.log(`Time: ${seconds} seconds, CPU Usage: ${cpuUsage}%`)
  //     // seconds += 1
  //   }, 1000)
  //   return () => clearInterval(interval)
  // }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.ipcRenderer.isMaximized()) {
        maximizeRef.current.style.display = 'none'
        restoreRef.current.style.display = 'flex'
      } else {
        maximizeRef.current.style.display = 'flex'
        restoreRef.current.style.display = 'none'
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMaximized])


  return (
    <div id="titleBar" ref={titleBarRef} className="font-mono flex items-center justify-between w-full unselectable"
      style={{ backgroundColor: colorPalette.navbarBackground, color: colorPalette.navbarFillIcons, stroke: colorPalette.navbarFillIcons }}>
      <span className="flex items-center" onClick={() => window.ipcRenderer.quit()}>
        <TitlebarIcon className={'w-6 h-auto ml-1 p-1'} />
        chemistry-app
      </span>
      <div className="flex items-center">
        <button type="button" value={'minimize'} ref={minimizeRef}
          className="flex items-center justify-center title-button transition-all"
          onClick={() => window.ipcRenderer.minimize()}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          style={{ backgroundColor: hover.minimize ? colorPalette.buttonsNavbarHover : 'transparent' }}>
          <MinimizeIcon className={'w-9 h-auto p-2 pointer-events-none'} style={{ fill: colorPalette.navbarFillIcons }} />
        </button>
        <button type="button" value={'maximize'} ref={maximizeRef}
          className="flex items-center justify-center title-button transition-all"
          onClick={() => window.ipcRenderer.maximize()}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          style={{ backgroundColor: hover.maximize ? colorPalette.buttonsNavbarHover : 'transparent', display: isMaximized ? 'none' : 'flex' }}>
          <MaximizeIcon className={'w-9 h-auto m-auto p-2 pointer-events-none'} style={{ fill: colorPalette.navbarFillIcons }} />
        </button>
        <button type="button" value={'restore'} ref={restoreRef}
          className="flex items-center justify-center title-button transition-all"
          onClick={() => window.ipcRenderer.restore()}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          style={{ backgroundColor: hover.restore ? colorPalette.buttonsNavbarHover : 'transparent', display: isMaximized ? 'flex' : 'none' }}>
          <RestoreIcon className={'w-9 h-auto p-2 pointer-events-none'} style={{ fill: colorPalette.navbarFillIcons }} />
        </button>
        <button type="button" value={'close'} ref={closeRef}
          className="flex items-center justify-center title-button transition-all"
          onClick={() => window.ipcRenderer.quit()}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          style={{ backgroundColor: hover.close ? '#ff3030' : 'transparent' }}>
          <CloseIcon className={'w-9 h-auto p-2 pointer-events-none'} style={{ fill: colorPalette.navbarFillIcons }} />
        </button>
      </div>
    </div>
  )
}