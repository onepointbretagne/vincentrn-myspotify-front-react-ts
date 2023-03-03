import { useEffect, useState } from "react";
import Album from "./Album";
import './AlbumList.css';

function AlbumList({ albums }: any) {
    const rows = [];
    for (let i = 0; i < albums.length; i++) {
        rows.push(<Album key={i} album={albums[i]} />);
    }
    
    return (
        <div className="albums">
            {rows}
        </div>
    )
}

export default AlbumList