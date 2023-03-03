import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateToken } from "./store/store";

function Callback() {
    const dispatch = useDispatch();

    const updateTokenSpotify = () => {
        const token = window.location.hash.substr(1).split("&")[0].split("=")[1];
        window.opener.spotifyCallback(token);
        return 'update token';
    };

    return (
        <div>
            {updateTokenSpotify()}
        </div>
    );
}

export default Callback