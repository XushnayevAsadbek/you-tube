import axios, { Axios } from 'axios';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import { useEffect, useState } from 'react';
import { Layout } from './components/layout';
import { Home } from './page/home/home';
import { Podpiski } from './page/podpiski/podpiski';
import { Short } from './page/short/short';

const App = () => {
const [state, setState] = useState(null);
const [stateshort , setStateshort] = useState(null);
  useEffect(() => {
    axios.get('https://youtube-search-and-download.p.rapidapi.com/channel/about',{
      params: {
        id: 'UCE_M8A5yxnLfW0KghEeajjw'
      },
      headers: {
        'X-RapidAPI-Key': '8c0cd59d75mshb7f7737ebaff76ap1e39d6jsn80e0e0525623',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
      }
    }).then(res => {
      if(res){

        setState(res);
      }
     
    })

    axios.get('https://youtube-search-and-download.p.rapidapi.com/channel',{
      params: {
        id: 'UCiTGKA9W0G0TL8Hm7Uf_u9A',
        next: '4qmFsgKFARIYVUNpVEdLQTlXMEcwVEw4SG03VWZfdTlBGjpFZ1oyYVdSbGIzTVlBeUFBTUFFNEFlb0RGa05uUVZORFoycHdNazVFTkRWT2VVcHNhMmR2VFdjJTNEmgIsYnJvd3NlLWZlZWRVQ2lUR0tBOVcwRzBUTDhIbTdVZl91OUF2aWRlb3MxMDI%3D',
        sort: 'n'
      },
      headers: {
        'X-RapidAPI-Key': '8c0cd59d75mshb7f7737ebaff76ap1e39d6jsn80e0e0525623',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
      }
    
    }).then(res => {
      if(res){
        setStateshort(res);
      }
    } )
  
  }, [])

console.log(state);
console.log(stateshort);

  return (
   <Layout >
   <Routes >
    <Route path='/' element={<Home state={state} />} />
    <Route path='/short' element={<Short stateshort={stateshort} />} />
    <Route path='/podpiski' element={<Podpiski />} />

   </Routes>
   </Layout>
  // <div>
  //   {state?.data?.country}
  // </div>
  );
};
export default App;