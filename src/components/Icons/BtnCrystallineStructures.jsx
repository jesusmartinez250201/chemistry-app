import { useColorPalette } from "../../hooks/useColorPalette"

export function IdealBtn() {
  const { colorPalette } = useColorPalette()
  return (
    <svg className="w-full h-auto mx-auto unselectable pointer-events-none" viewBox="0 0 222 222" style={{stroke: colorPalette.text, fill: colorPalette.text}}>
      <circle cx="40" cy="43" r="30" />
      <circle cx="40" cy="179" r="30" />
      <circle cx="182" cy="179" r="30" />
      <circle cx="182" cy="43" r="30" />
      <line x1="40.5001" y1="180.04" x2="39.5001" y2="43.0401" strokeWidth="3" />
      <line x1="184" y1="42.5" x2="45" y2="42.5" strokeWidth="3" />
      <line x1="39.9969" y1="179.017" x2="182" y2="178.983" strokeWidth="3" />
      <line x1="182.5" y1="42.9999" x2="182.502" y2="184.483" strokeWidth="3" />
    </svg>

  )
}

export function RealBtn() {
  const { colorPalette } = useColorPalette()
  
  return (
    <svg className="w-full h-auto mx-auto unselectable pointer-events-none" viewBox="0 0 222 222" style={{stroke: colorPalette.text, fill: colorPalette.text}}>
      <circle cx="61.5" cy="60.5" r="50.5"/>
      <circle cx="112.5" cy="111.5" r="20.5"/>
      <circle cx="61.5" cy="161.5" r="50.5"/>
      <circle cx="165.5" cy="161.5" r="50.5"/>
      <circle cx="162.5" cy="60.5" r="50.5"/>
    </svg>
  )
}