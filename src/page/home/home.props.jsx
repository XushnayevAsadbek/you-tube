import { useEffect, useState } from "react";
import Config from "../../../config";

export const useHomeProps = () => {
    const [videos, setVideos] = useState([]);
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
            .then((data) =>setVideos(data.contents))
    }, []);
    return {videos};
};