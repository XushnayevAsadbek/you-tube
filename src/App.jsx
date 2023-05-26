import axios, { Axios } from 'axios';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import { lazy, Suspense, useEffect, useState } from 'react';
import { Layout } from './components/layout';
import { Podpiski } from './page/podpiski/podpiski';
import { Short } from './page/short/short';
import { useAuth } from './hooks/useAuth';
import { Login } from './page/login';
import { Biblotika } from './page/biblotika';
import { History } from './page/history';
const Home = lazy(() =>
  import('./page/home/home').then((component) => ({
    default: component.Home,
  }))
);
  const Video  = lazy(() =>
  import('./page/video').then((component) => ({
    default: component.Video,
  }))
);
const App = () => {
  const [token] = useAuth();

  useEffect(() => {

    // axios.get('https://youtube-search-and-download.p.rapidapi.com/channel',{
    //   params: {
    //     id: 'UCiTGKA9W0G0TL8Hm7Uf_u9A',
    //     next: '4qmFsgKFARIYVUNpVEdLQTlXMEcwVEw4SG03VWZfdTlBGjpFZ1oyYVdSbGIzTVlBeUFBTUFFNEFlb0RGa05uUVZORFoycHdNazVFTkRWT2VVcHNhMmR2VFdjJTNEmgIsYnJvd3NlLWZlZWRVQ2lUR0tBOVcwRzBUTDhIbTdVZl91OUF2aWRlb3MxMDI%3D',
    //     sort: 'n'
    //   },
    //   headers: {
    //     'X-RapidAPI-Key': '8c0cd59d75mshb7f7737ebaff76ap1e39d6jsn80e0e0525623',
    //     'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    //   }

    // }).then(res => {
    //   if(res){
    //     setStateshort(res);
    //   }
    // } )

    // axios.get('https://youtube-search-and-download.p.rapidapi.com/playlist',{
    //   params: {
    //     id: 'PL2UMfhpwklNNI9ALzCFI-cObgnO4nQ2fu',
    //     next: '4qmFsgJhEiRWTFBMV3dBeXBBY0ZSZ0tBSUlGcUJyOW95LVpZWm5peGFfRmoaFENBRjZCbEJVT2tOSFZRJTNEJTNEmgIiUExXd0F5cEFjRlJnS0FJSUZxQnI5b3ktWllabml4YV9Gag%3D%3D'
    //   },
    //   headers: {
    //     'X-RapidAPI-Key': '8c0cd59d75mshb7f7737ebaff76ap1e39d6jsn80e0e0525623',
    //     'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    //   }
    // }).then(res => {
    //   if(res){

    //     setStatepod(res);
    //   }

    // })

  }, [])


  if (token) {
    return (
      <Layout >
        <Suspense >
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/short' element={<Short />} />
          <Route path='/podpiski' element={<Podpiski />} />
          <Route path='/video/:id' element={<Video />} />
          <Route path='/biblotika' element={<Biblotika />} />
          <Route path='/history' element={<History />} />


        </Routes>
        </Suspense>
      </Layout>
    );
  }
  return <Login />;

};
export default App;