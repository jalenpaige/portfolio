import { useEffect, useState } from "react";
import { getTopArtists } from "./spotifyAPI";
import './spotifyTopArtists.css';

export const SpotifyTopArtists = (props) => {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState({});

    const fetchTopArists = async () => {
        try {
            const results = await getTopArtists(
                props?.client_id,
                props?.client_secret,
                props?.refresh_token
            );
            setResult(results);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching now playing:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTopArists();
    }, []);

    return (
        <div className="topArtists">
            <h2 className="header">My Top Artists Right Now (via Spotify's API): </h2>
            {loading && <p>Loading...</p>}
            {!loading && result.items && (
                <div>
                    <div className='artistsCard'>
                        <h2>1.</h2>
                        <div className='nameAndImg'>
                            <h2>{result.items[0].name}</h2>
                            <img src={result.items[0].images[0].url} className="artistImg" />
                        </div>
                    </div>
                    <div className='artistsCard'>
                        <h2>2.</h2>
                        <div className='nameAndImg'>
                            <h2>{result.items[1].name}</h2>
                            <img src={result.items[1].images[0].url} className="artistImg" />
                        </div>
                    </div>
                    <div className='artistsCard'>
                        <h2>3.</h2>
                        <div className='nameAndImg'>
                            <h2>{result.items[2].name}</h2>
                            <img src={result.items[2].images[0].url} className="artistImg" />
                        </div>
                    </div>
                    <div className='artistsCard'>
                        <h2>4.</h2>
                        <div className='nameAndImg'>
                            <h2>{result.items[3].name}</h2>
                            <img src={result.items[3].images[0].url} className="artistImg" />
                        </div>
                    </div>
                    <div className='artistsCard'>
                        <h2>5.</h2>
                        <div className='nameAndImg'>
                            <h2>{result.items[4].name}</h2>
                            <img src={result.items[4].images[0].url} className="artistImg" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
};