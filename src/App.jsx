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
const [statepod ,setStatepod] = useState(null);
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

    axios.get('https://youtube-search-and-download.p.rapidapi.com/playlist',{
      params: {
        id: 'PL2UMfhpwklNNI9ALzCFI-cObgnO4nQ2fu',
        next: '4qmFsgJhEiRWTFBMV3dBeXBBY0ZSZ0tBSUlGcUJyOW95LVpZWm5peGFfRmoaFENBRjZCbEJVT2tOSFZRJTNEJTNEmgIiUExXd0F5cEFjRlJnS0FJSUZxQnI5b3ktWllabml4YV9Gag%3D%3D'
      },
      headers: {
        'X-RapidAPI-Key': '8c0cd59d75mshb7f7737ebaff76ap1e39d6jsn80e0e0525623',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
      }
    }).then(res => {
      if(res){

        setStatepod(res);
      }
     
    })
  
  }, [])

console.log(state);
console.log(stateshort);
console.log(statepod );

  return (
   <Layout >
   <Routes >
    <Route path='/' element={<Home state={state} />} />
    <Route path='/short' element={<Short stateshort={stateshort} />} />
    <Route path='/podpiski' element={<Podpiski statepod={statepod} />} />

   </Routes>
   </Layout>
  // <div>
  //   {state?.data?.country}
  // </div>
  );
};
export default App;