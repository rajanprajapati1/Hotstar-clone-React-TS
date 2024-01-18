// EpisodeCard.jsx
import { FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { EpisodeDetails } from '../types/types';

interface EpisodeCardProps {
    season: EpisodeDetails | null;
    image : string;
}

const EpisodeCard = ({ season, image } : EpisodeCardProps) => {
    const AirDate = (season?.air_date?.split("-")?.join("--"));
    // const episodeId = 4001530; // Replace with the actual episode ID
    // const fetchep = async (episodeId:number) => {
    //     // https://api.themoviedb.org/3/tv/${id}/external_ids
    //         const response = await fetchData(`tv/16413/external_ids`);
    //         console.log("IMDb ID:", response);
    // };

    // useEffect(() => {
    //     fetchep(4001530);
    // }, [])

    return (
        <div className='Showcard'>
            <div className="show_image">
                <div className="playbtn">
                    <Link to={`/tv-show/watch/${"title"}/${"link1"}`}>
                        <FaPlay />
                    </Link>
                </div>
                <img
                    src={`https://image.tmdb.org/t/p/w300/${image}`}
                    alt=""
                    className='epi_img'
                /> </div>
            <div className="show_details">
                <h3>Ep {season?.episode_number} - {season?.name?.slice(0, 26) + ".."}</h3>
                <strong>{AirDate}  Air Date  -  {season?.runtime} Min</strong>
                <p>{season?.overview?.slice(0, 234)}</p>
            </div>
        </div>
    )
};

export default EpisodeCard;
