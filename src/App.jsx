import { Route, Routes } from 'react-router-dom';
import './App.css'
import { Layout } from './components/layout';
import { Home } from './page/home/home';
import { Podpiski } from './page/podpiski/podpiski';
import { Short } from './page/short/short';

const App = () => {
  return (
   <Layout >
   <Routes >
    <Route path='/' element={<Home />} />
    <Route path='/short' element={<Short />} />
    <Route path='/podpiski' element={<Podpiski />} />

   </Routes>
   </Layout>
  );
};
export default App;