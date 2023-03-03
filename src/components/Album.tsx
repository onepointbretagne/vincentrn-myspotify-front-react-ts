import { Card } from 'primereact/card';
import { Image } from 'primereact/image';

function Album({ album }: any) {
    
    function getImage(album: any) {
        const image = album.images.filter( (i: { height: number; }) => i.height === 64)[0];
        return image.url;
    }

    return (
        <Card title={album.name} subTitle={album.release_date} style={{ width: '300px', margin: '5px', }}>
            <div>
                <Image src={getImage(album)} alt={album.name}></Image>
            </div>
        </Card>
    )
}


export default Album