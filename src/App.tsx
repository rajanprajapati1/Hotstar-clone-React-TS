    //  @ts-ignore 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './Pages/HomePage'
import MoviePage from './Pages/MoviePage'
import TvShow from './Pages/TvShow'
import SearchPage from './Pages/SearchPage'
import WatchPage from './Pages/WatchPage'
import TvChannel from './Pages/TvChannel'
import WatchTv from './Pages/WatchTv'
import Topbar from './components/Topbar'

interface Props {
}
    //  @ts-ignore 
const App = (props: Props) => {
 
  return (
    <div className="app-container">
      <Topbar/>
      <BrowserRouter>
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tv-show" element={<TvShow/>} />
            <Route path="/search" element={<SearchPage/>} />
            <Route path="/movie/:id"element={<MoviePage/>} />
            <Route path="/tv-show/:id"element={<MoviePage/>} />
            <Route path="/movie/watch/:title/:id"element={<WatchPage/>} />
            <Route path='/tv/channel' element={<TvChannel/>}/>
            <Route path='/tv/channel/:channelId' element={<WatchTv/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
