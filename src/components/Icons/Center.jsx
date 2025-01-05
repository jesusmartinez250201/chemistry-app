import { useColorPalette } from "../../hooks/useColorPalette"

export default function Center() {
  const { colorPalette } = useColorPalette()
  return (
    <svg className='w-full h-auto mx-auto fill-none unselectable pointer-events-none' viewBox="0 0 170 149" xmlns="http://www.w3.org/2000/svg"
    style={{stroke: colorPalette.text}}>
      <circle cx="84.5" cy="77.5" r="58" strokeWidth="7" />
      <path d="M3 78.1096L164.996 77" strokeWidth="6" strokeLinecap="round" />
      <path d="M84 143L82.9687 10.004" strokeWidth="6" strokeLinecap="round" />
    </svg>
  )
}


