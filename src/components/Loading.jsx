import loadingAtom from '../assets/img/icons/loading-atom.svg';

export default function Loading({visible}) {
  return (
    <div id='loading-screen'
      className={visible ? 'hidden w-100 h-screen bg-slate-200 bg-opacity-50'
        : 'flex w-100 h-screen bg-slate-200 bg-opacity-50'}>
      <img className='m-auto w-20 animate-spin' src={loadingAtom} alt="loading atom" />
    </div>
  )
}