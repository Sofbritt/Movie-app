import Navbar from './components/navbar/Navbar';
import './App.css';
import Goodies from './pages/detailsProps/mainPage/Goodies';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './pages/detailsProps/movies/Detail';
import Footer from './components/footer/Footer';
import ResetPass from './pages/resetPass/ResetPass';
import SignUp from './pages/signUp/SignUp';
import Login from './pages/login/Login';
import TvShows from './components/tvshows/TvShows';
import Movies from './pages/detailsProps/movies/Movies';





function App(props) {
  const {movie}=props;
  return (


    <div className="App">

      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Goodies />} />
          <Route path={'/detail/:id'} element={<Detail />} />
          <Route path='/movieContainer' element={<Movies />} />
          <Route path='/sign' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/resetPass' element={<ResetPass />} />
          <Route path='/shows' element={<TvShows />} />
        </Routes>
      </BrowserRouter>
      <Footer />

    </div>


  );
}

export default App;
