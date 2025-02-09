import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import CountryNews from './components/CountryNews'
import News from './components/News'
import TopHeadlines from './components/TopHeadLines'


export function App() {
  const [count, setCount] = useState(0)

  // PARSING OUR URL ROUTER WE CAN PARSE THIS ON DJANGO
  return (
    <>
    <div className='w-full'>
      <BrowserRouter>
       <Header />
       <Routes>
        <Route path='/' element={News}></Route>
        <Route path='/top-headlines/:category' element={TopHeadlines}></Route>
        <Route path='/country/:iso' element={CountryNews}></Route>
        

       </Routes>

      </BrowserRouter>

    </div>
      <h1>Amebo news naija getting started</h1>
    </>
  )
}

export default App
