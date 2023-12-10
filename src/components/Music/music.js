import React, { useEffect } from 'react';
import "./music.css";
import { SpotifyNowPlaying } from './spotifyNowPlaying';
import { SpotifyTopArtists } from './spotifyTopArtists';

const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

const Music = () => {
    return (
        <div className='music'>
            <h2 className='title'>My Music</h2>
            <SpotifyNowPlaying
                client_id={client_id}
                client_secret={client_secret}
                refresh_token={refresh_token}
            />
            <SpotifyTopArtists
                client_id={client_id}
                client_secret={client_secret}
                refresh_token={refresh_token}
            />
        </div>
    )
}

export default Music