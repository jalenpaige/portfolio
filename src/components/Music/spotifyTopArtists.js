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
                <>
                    <div className='artistsCard'>
                        <p>1.</p>
                        <div className='nameAndImg'>
                            <p>{result.items[0].name}</p>
                            <img src={result.items[0].images[0].url} className="artistImg" />
                        </div>
                    </div>
                    <div className='artistsCard'>
                        <p>2.</p>
                        <div className='nameAndImg'>
                            <p>{result.items[1].name}</p>
                            <img src={result.items[1].images[0].url} className="artistImg" />
                        </div>
                    </div>
                    <div className='artistsCard'>
                        <p>3.</p>
                        <div className='nameAndImg'>
                            <p>{result.items[2].name}</p>
                            <img src={result.items[2].images[0].url} className="artistImg" />
                        </div>
                    </div>
                    <div className='artistsCard'>
                        <p>4.</p>
                        <div className='nameAndImg'>
                            <p>{result.items[3].name}</p>
                            <img src={result.items[3].images[0].url} className="artistImg" />
                        </div>
                    </div>
                    <div className='artistsCard'>
                        <p>5.</p>
                        <div className='nameAndImg'>
                            <p>{result.items[4].name}</p>
                            <img src={result.items[4].images[0].url} className="artistImg" />
                        </div>
                    </div>
                </>
            )}
        </div>
    )
};