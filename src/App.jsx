import { Routes, Route} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Voting from './pages/Voting/Voting';
import Breeds from './pages/Breeds/Breeds';
import Gallery from './pages/Gallery/Gallery';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path={'/voting'} element={<Voting/>} />
        <Route path={'/breeds'} element={<Breeds/>} />
        <Route path={'/gallery'} element={<Gallery/>} />
      </Routes>
    </Layout>
  );
};

export default App;
