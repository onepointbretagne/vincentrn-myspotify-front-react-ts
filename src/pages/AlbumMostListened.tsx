import '../App.css'
import axios, { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';
import AlbumList from "../components/AlbumList";

export default function AlbumMostListened() {
  const [albumsList, setAlbumsList] = useState([]);
  
  useEffect(() => {
    loadData();
  }, []);
  /**
   * Get details of the album
   */
  const loadData = async () => {
    console.log('ddddd')
    const result: AxiosResponse = await axios({
    method: "GET",
    responseType: "json",
    url: `http://localhost:8080/api/albums/last-listened/top10`,
    headers: {
        "Content-Type": "application/json",
    },
    });
    setAlbumsList(result.data)
  }
  

  return (
    <AlbumList albums={albumsList} />
  )

}
