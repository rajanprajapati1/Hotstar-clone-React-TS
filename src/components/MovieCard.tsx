import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface MovieCardProps {
    moviedata: {
        title: string;
        Link1: string;
        backdropPath: string;
        runtime: string;
        overview: string;
    };
    image: string
}

const MovieCard: React.FC<MovieCardProps> = ({ moviedata, image }) => {
    const { title, Link1, backdropPath, runtime, overview } = moviedata;
    console.log(moviedata)

    return (
        <div className='Showcard'>
            <div className="show_image">
                <div className="playbtn">
                    <Link to={`/movie/watch/${title}/${Link1}`}>
                        <FaPlay />
                    </Link>
                </div>
                <img src={`https://image.tmdb.org/t/p/w300/${backdropPath || image}`} alt={title} />
            </div>
            <div className="show_details">
                <h3>{title}</h3>
                <strong>{runtime} Min</strong>
                <p>{overview.slice(0, 234)}</p>
            </div>
        </div>
    );
};

export default MovieCard;
