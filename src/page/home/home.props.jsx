import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Config from "../../../config";

export const useHomeProps = () => {
    const navigate= useNavigate();
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(Config);
    useEffect(() => {
        fetch(Config.apiUrl +'/trending?type=mu&hl=en&gl=US', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8c0cd59d75mshb7f7737ebaff76ap1e39d6jsn80e0e0525623',
                'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
            }
        })
            .then((res) => res.json())
            .then((data) =>{
                setVideos(data.contents)
                setLoading(false);
            })
    }, []);
    const onNavigate = (id) =>{
        navigate('/video/' +id)
    }
    return {videos , loading , onNavigate};
};