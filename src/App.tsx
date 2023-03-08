import './App.css'
import { Button } from 'primereact/button'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectToken } from './store/store';
import { updateToken } from "./store/store";
import AlbumSearch from './components/AlbumSearch';

function App() {
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  /**
   * Login to spotify
   */
  const connect = () => {
    dispatch(updateToken(""));
    const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    var width = 800;
    var height = 600;
    var left = screen.width / 2 - width / 2;
    var top = screen.height / 2 - height / 2;
    const popup = window.open(
      `https://accounts.spotify.com/fr/authorize?client_id=${clientId}&response_type=token&redirect_uri=${location.origin}/callback&scope=user-read-private user-read-email&show_dialog=true`,
      "Login with Spotify",
      `width=${width},height=${height},top=${top},left=${left}`
    );
    const callback = async (token: string) => {
      //@ts-ignore 
      popup.close();
      dispatch(updateToken(token));
    };
    // @ts-ignore
    window.spotifyCallback = callback;
  };

  const disconnect = () => {
    dispatch(updateToken(''));
  }  
  
  const mostListenned = () => {
    navigate(`/mostListened`)
  }

  if (token == '') {
    return (
      <div className="content">
      <Button label="Se connecter à spotify" onClick={connect}/>
    </div>
    )
  }
  else {
    return (    
      <div className="content">
        <Button label="Se déconnecter" className="p-button-danger" onClick={disconnect}/>
        <Button label="Albums les plus écoutés" onClick={mostListenned}/>
        <AlbumSearch token={token} />
      </div>
    )
  }
}

export default App
