import { useEffect, useState } from "react";
import getNowPlayingItem from "./spotifyAPI";
import './spotifyNowPlaying.css';

export const SpotifyNowPlaying = (props) => {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState({});

    const fetchNowPlaying = async () => {
        try {
            const results = await getNowPlayingItem(
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
        fetchNowPlaying();

        const intervalId = setInterval(fetchNowPlaying, 50000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="currentSong">
                        <span className="desc">
                            This section shows the song I am currently playing on Spotify! I am an avid music listener, and I love to check out new artists and genres always (althought I do find myself listening to some artists all the time) I used Spotify's developer APIs to create this tool! Click on the song title to redirect to the song's spotify page.
                        </span>
            {loading && <p>Loading...</p>}
            {!loading && !result.isPlaying && (
                <div>
                    <span>Not Currently Listening. Check back later!</span>
                </div>
            )}
            {!loading && result.isPlaying && (
                <div>
                        <div className="imageAndTitle">
                            <span className="label">Now playing:</span>
                            <img src={result.albumImageUrl} alt={`${result.title} album art`} className="nowPlayingImg"/>
                            <a href={result.songUrl} target="_blank" className="link">{result.title}</a>
                            <p className="artistName"> by {result.artist}</p>
                        </div>
                </div>
            )}
        </div>
    )
};