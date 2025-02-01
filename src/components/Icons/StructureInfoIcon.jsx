const colorPalette = window.data.store.get('colorPalettes')[window.data.store.get('selectedColorPalette')]

export default function StructureInfoIcon() {
  return (
    <svg className="fill-none w-full h-auto" viewBox="0 0 24 24">
      <path style={{stroke: colorPalette.textTitles}} d="M12 17V11" strokeWidth="1.5" strokeLinecap="round" />
      <circle style={{fill: colorPalette.textTitles}} cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" />
      <path style={{stroke: colorPalette.textTitles}} d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}