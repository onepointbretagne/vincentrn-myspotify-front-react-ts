import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { useNavigate } from 'react-router-dom';

function Album({ album }: any) {

    const navigate = useNavigate();
    const goToAlbumDetail = () => {
        navigate(`/album/${album.id}`)
    }

    function getImage(album: any) {
        const image = album?.images?.find( (i: { height: number; }) => i.height === 64);
        return image && image.url;
    }

    const url = getImage(album)

    return (
        <Card title={album.name} subTitle={album.release_date} onClick={goToAlbumDetail} style={{ width: '300px', margin: '5px', cursor: "pointer" }}>
            { url ?
                <div>
                    <Image src={url} alt={album.name}></Image>
                </div> : null
            }
        </Card>
    )
}


export default Album