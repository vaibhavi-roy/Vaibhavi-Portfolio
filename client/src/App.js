import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { useEffect } from 'react';
import axios from 'axios';
import Loader from './components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { SetPortfolioData, ShowLoading, HideLoading, ReloadData } from './redux/rootSlice';
import Admin from './pages/Admin';
import Login from './pages/Admin/Login';

function App() {
  const { loading, portfolioData, reloadData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get("/api/portfolio/get-portfolio-data");
      dispatch(SetPortfolioData(response.data));
      dispatch(ReloadData(false));
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());

    }
  };

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
  }, [portfolioData]);

  useEffect(() => {
    if (reloadData) {
      getPortfolioData();
    }
  }, [reloadData]);


  return (
    <BrowserRouter>
      {loading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
