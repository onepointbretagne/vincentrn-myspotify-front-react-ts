import '../App.css'
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectToken } from '../store/store';
import axios, { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Image } from 'primereact/image';


interface Track {
  id: string;
  name: string;
  previewUrl: string;
  track_number: number;
  duration: number;
}
interface BasicInfo {
  id: string;
  name: string;
  release_date: string;
  imageUrl: string;
}

export default function AlbumDetail() {
  const token = useSelector(selectToken);
  let { id } = useParams<"id">();
  
  const [basicInfo, setBasicInfo] = useState<BasicInfo | any>({});
  const [tracks, setTracks] = useState<Track[]>([]);
  
  useEffect(() => {
    loadData();
  }, []);
  /**
   * Get details of the album
   */
  const loadData = async () => {
    const result: AxiosResponse = await axios({
    method: "GET",
    responseType: "json",
    url: `https://api.spotify.com/v1/albums/${id}`,
    headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
    },
    });
    
    setBasicInfo({
      id: result.data.id,
      name: result.data.name,
      release_date: result.data.release_date,
      imageUrl: result.data?.images[0]?.url,
    })
    setTracks(result.data.tracks.items.map((el: any) => ({
      id: el.id,
      name: el.name,
      previewUrl: el.preview_url,
      track_number: el.track_number,
      duration: `${Math.floor(el.duration_ms/1000)}s`
    })))
  }

  const nameBodyTemplate = (track: Track) => {
    return <a href={track.previewUrl} target="_blank" rel="noopener">{track.name}</a>;
  }

  return (
    <div className="card">
    <h1>{basicInfo.name}</h1>
    <h2>{basicInfo.release_date}</h2>
    <Image src={basicInfo.imageUrl} alt={basicInfo.name}/>
    <DataTable value={tracks} tableStyle={{ minWidth: '50rem' }}>
        <Column field="name" header="Name" body={nameBodyTemplate}></Column>
        <Column field="track_number" header="Track Number"></Column>
        <Column field="duration" header="Duration"></Column>
        <Column field="previewUrl" header="Preview"></Column>
    </DataTable>
</div>
  )

}
