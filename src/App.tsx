{/***************
   * COMPONENTS *
   **************/}
import HomeMenu from './components/home/HomeMenu'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Test } from './components/home/Test'

function App() {

  return (
    <div className='overflow-hidden'>
      {/*****************
         * HASH ROUTES *
         ****************/}
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomeMenu />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
