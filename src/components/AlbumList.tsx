import Album from "./Album";
import './AlbumList.css';

function AlbumList({ albums }: any) {
    
    return (
        <div className="albums">
            {albums.map(( album: any, idx: number ) => <Album key={idx} album={album} />)}
        </div>
    )
}

export default AlbumList