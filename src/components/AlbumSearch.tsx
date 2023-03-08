import { Button } from 'primereact/button'
import { useState } from "react";
import axios, { AxiosResponse } from 'axios';
import AlbumList from "./AlbumList";
import { InputText } from 'primereact/inputtext';
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';

function AlbumSearch({ token } : {token: string}) {
    const [albumsList, setAlbumsList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [first, setFirst] = useState<number>(0);
    const [rows, setRows] = useState<number>(10);
    const [totalPages, setTotalPages] = useState<number>(0);
    
    const onPageChange = (event: PaginatorPageChangeEvent) => {
        setFirst(event.first);
        setRows(event.rows);
        searchAlbum(event.first, event.rows)
    };

    /**
     * Recherche des albums
     */
    const searchAlbum = async (offset: number = first , limit: number = rows) => {
        const result: AxiosResponse = await axios({
        method: "GET",
        responseType: "json",
        params: {
            q: searchTerm,
            type: "album",
            offset,
            limit
        },
        url: "https://api.spotify.com/v1/search",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        });
        setTotalPages(result.data.albums.total)
        setAlbumsList(result.data.albums.items);
    }

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            searchAlbum(first, rows)
        }
    }
    const paginator = <Paginator first={first} rows={rows} totalRecords={totalPages} rowsPerPageOptions={[10, 20, 30]} onPageChange={onPageChange} />

    return (
        <div className="content">
          <div className="recherche">
              <h2>Chercher un album</h2>
              <span className="p-input-icon-left">
              <InputText placeholder="Rechercher" value={searchTerm}  onKeyDown={handleKeyDown} onChange={(e) => setSearchTerm(e.target.value)} />
              </span>
              <Button style={{marginLeft: '5px'}} label="Go !" className="p-button-success" aria-label="Search" onClick={() => searchAlbum(first, rows)}/>
          </div>
          <AlbumList albums={albumsList} />
          {albumsList.length ? paginator : null}
        </div>
    )
}

export default AlbumSearch