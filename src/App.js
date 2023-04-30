import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Videos } from './pages/Videos';
import { LikedVideos } from './pages/LikedVideo';
import { WatchLater} from './pages/WatchLater';
import { Header } from './components/Header';
import { VideoDetails } from './pages/VideoDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/liked' element={<LikedVideos />} />
        <Route path='/watch-later' element={<WatchLater />} />
        <Route path='/watch/:videoID' element={<VideoDetails />} />
      </Routes>
    </div>
  );
}

export default App;
