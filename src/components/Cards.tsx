import { FaPlay } from 'react-icons/fa6';
import { Movie } from '../Apis/api.config';
import { Link } from 'react-router-dom';

interface Props {
    value: Movie,
}

const Cards = (props: Props) => {
    return (<>
        <div className='cards'>
            <div className="free_card">
                <span>Free</span>
            </div>
            <img className='card_img' src={`https://image.tmdb.org/t/p/w300/${props.value?.poster_path || props.value?.backdrop_path}`} alt="" />
            <div className="card_hover">
                <img className='over_img' src={`https://image.tmdb.org/t/p/w300//${props.value?.backdrop_path || props.value?.poster_path}`} alt="" />
                <h2>
                    {props?.value?.title?.slice(0, 25) || props?.value?.name?.slice(0, 25) || "Title Not Available"}
                </h2>
                <p>
                    {props?.value?.overview?.slice(0, 100) || "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                </p>
                <Link to={props.value.mediaType === "tvShow" ? `/tv-show/${props.value.id}` : `/movie/${props.value.id}`}>
                {/* <Link to={ isMovie ? `/movie/${id}` : `/tv-show/${id}`}> */}
                    <button>
                        Watch Now<FaPlay /></button>
                </Link>
            </div>
        </div>
    </>
    )
}

export default Cards
