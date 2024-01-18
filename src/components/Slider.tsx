{/*  @ts-ignore */}
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { setting } from '../types/types';
import { FaPlay } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { TbRating14Plus, TbRating18Plus } from "react-icons/tb";
import { fetchData, Movie } from '../Apis/api.config';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
{/*  @ts-ignore */}

interface Props {

}


{/*  @ts-ignore */}
const SliderPage = (props: Props) => {
    const [Popularmovies, setPopularmovies] = useState<Movie[]>([]);
    const settings: setting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
    };
    const fetchpop = async () => {
        const res = await fetchData(`discover/movie?language=en-US&region=IN&with_original_language=hi&page=1`);
        if (res) {
{/*  @ts-ignore */}
            setPopularmovies(res)
        }
    }
    useEffect(() => {
        fetchpop()
    }, [])
    return (
        <Slider {...settings} >
            {Popularmovies?.map((movie) => {
                return (
                    <div className='slider mobile-slider'>
                        <div className="overlay"></div>
                        <div className="details">
                            <span>hotstar <strong>specials</strong></span>
                            <h1>{movie?.title}</h1>
                            <h3>{movie.release_date.slice(0, 4)} ~  {movie.original_language === "en" ? "English" : "Hindi"}
                                ~ <strong>U/A {movie.adult ? <TbRating18Plus size="1.5rem"  className="btn_mb"/> : <TbRating14Plus size="1.5rem" className="btn_mb" />}</strong></h3>
                            <p>{movie.overview}</p>
                            <br />
                            <h2><strong>Action   Thriller </strong> | <strong>People and Culture</strong> | <strong>Comedy</strong></h2>

                            <div className="btn">
                                <Link  to={`/movie/${movie.id}`}>
                                    <button><h1>Watch Now <FaPlay /></h1></button>
                                </Link>
                                <button className='btn2'><IoMdAdd /> </button>
                            </div>
                        </div>
                        <div className="image_bac">
                            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="" />
                        </div>
                    </div>
                )
            })}
        </Slider>
    )
}

export default SliderPage
